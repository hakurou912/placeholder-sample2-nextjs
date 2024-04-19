export default function Loading() {
    return (
        <p>Loading...</p>
    )
}

/*
 命名規約として、「loading」を入れることでローディングUIになる。
 Suspenseは自動挿入されるイメージ
 ただしSSGで構築した場合、npm run dev実行時だと表示されるが、npm start実行時（もしくはサーバーにデプロイ後）は表示されない。
 今回はSSRで構築している。
*/