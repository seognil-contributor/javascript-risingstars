2016 年に[予言](/2016/en#test-framework)したように（予言が的中したはこれが初めてですが・・・）、2017 年は{jest}がテスティングフレームワークの覇者となりました。

当初、React コンポーネントをテストするフレームワークとして Facebook が開発したのが、その後数ヶ月で進化を加速させ（すでにメジャーバージョンがリリースは 22 回！）、現在は、フロントエンド、バックエンドともに利用できるようになりました。

Jest の素晴らしさをまとめると、

* コンフィグレーションが不要。デフォルト設定で大概のことがカバー可能。
* 優れた開発者エクスペリエンス（Smart watch モード、的を得たエラーリポーティングなど）。
* {mocha} に似たシンタックス。`it` や `describe` など開発者にとって馴染みがあり学習コストが低い。
* アサーションを書くのに特別な外部ライブラリを必要とせず、いわば「バッテリー内蔵」仕様である。
* UI の変更を自動で記録、検知してくれる「スナップショット」モード。

昨年首位だった {ava} は、2017 年は２位でした。でも、依然として支持されているフレームワークのひとつです。

{ava} のクリエータ [Sindre Sorhus](https://github.com/sindresorhus) は、自らのプロジェクトのすべてを {ava} でテストしています。彼のプロジェクトに優れたものが多いのはそのせいかもしれませんね。

テストを並列で高速に実行できるのも {ava} の魅力です。くわえて軽量で、ソフトウェアテスト規格におおむね準じており、シンタックスは {tape} に似ています。