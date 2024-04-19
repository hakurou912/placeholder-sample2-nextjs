## About this

独学でNext.jsを学んでいます。  
成果物として、APIで取得したデータを動的に表示させる画面を作成しました。  
nextConfigにリダイレクトの設定を入れ、users配下の画面が表示されるようにしています。

使用したもの
- [{JSON} Placeholder](https://jsonplaceholder.typicode.com/) - a free online REST API
- [Bootstrap@5.3.0](https://getbootstrap.jp/)  - スタイル適用
- Next.js 14.2.2


理解したこと
- ファイルの命名規約（layout,page,loading）
- 各ファイルの実装すべき内容
- fetch（options.cache, options.revalidate）を使用した動的データフェッチ、パラメータ取得
- Redirecting(functionやhookを使う方法も有りますが、今回はnextConfigを修正しました)
- Next.js独自のfunction（useRouter,useParams）
- Next.js独自のコンポーネント（next/link）
- npm run devでは動いても、npm run buildでエラーになることが有る（デプロイできない）
- 廃止された機能がいくつか有るので混合しないように気を付ける。（例：_app.js、getStaticPaths、getStaticProps…）


次回以降に学びたいこと
- ファイルの命名規約（route,default,error,not-found）
- Parallel Routes, Intercepting Routes
- API作成（作成、参照、更新、削除）
- Next.js独自のfunction（NextResponse,NextRequest）
- Next.js独自のコンポーネント（next/image,next/server）

参考書  
- [React.js&Next.js超入門 第2版 （単行本）](https://www.shuwasystem.co.jp/book/9784798063980.html)
- [実践Next.js ——App Routerで進化するWebアプリ開発](https://gihyo.jp/book/2024/978-4-297-14061-8)

