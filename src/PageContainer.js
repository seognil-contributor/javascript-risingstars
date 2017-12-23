import React from 'react'
import set from 'lodash.set'
import { IntlProvider, addLocaleData } from 'react-intl'
import __intlEN from 'react-intl/locale-data/en'
import __intlZH from 'react-intl/locale-data/zh'
import __intlJA from 'react-intl/locale-data/ja'

import App from './App'
import getMessages from './utils/getMessages'
import appData from '../data'
import packageJson from '../package.json'
import processProjectData from './utils/processProjectData'

const url = packageJson.homepage

addLocaleData(__intlEN)
addLocaleData(__intlZH)
addLocaleData(__intlJA)

class PageContainer extends React.Component {
  render() {
    const { data, pathContext } = this.props
    const { language, year } = pathContext
    console.log('Render the page', language, year)
    const messages = getMessages({ language, year })
    const translations = getAllTranslations({ edges: data.allFile.edges })[
      `year${year}`
    ]
    const { projects, categories } = appData[`year${year}`]
    const { entities, projectsByTag } = processProjectData(projects, categories)
    return (
      <IntlProvider locale={language} messages={messages}>
        <App
          projects={projectsByTag}
          entities={entities}
          url={url}
          translations={translations}
          year={year}
          categories={categories}
        />
      </IntlProvider>
    )
  }
}
export default PageContainer

function getAllTranslations({ edges }) {
  const translations = {}
  const isTranslation = edge => edge.node.ext === '.md'
  edges.filter(isTranslation).forEach(element => {
    const { node } = element
    const { fields } = node
    const { key, language, markdown, year } = fields
    const path = `year${year}.${language}.${key}`
    set(translations, path, markdown)
  })
  return translations
}

export const query = graphql`
  query markdownTranslations {
    allFile(filter: { ext: { eq: ".md" } }) {
      totalCount
      edges {
        node {
          relativePath
          size
          base
          ext
          internal {
            contentDigest
          }
          fields {
            key
            language
            markdown
            year
          }
        }
      }
    }
  }
`