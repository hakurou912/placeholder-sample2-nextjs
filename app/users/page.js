import NextLink  from 'next/link';
const Page = async () => {

    // 初期表示時、ロード画面を少し長く表示させたいため1秒待機
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await fetch('https://jsonplaceholder.typicode.com/users', { revalidate: 10, cache: 'no-store' });
    /* 
    　cacheについて 
    　　force-cache：キャッシュを利用して値を返す（デフォルト）
    　　no-store：キャッシュを利用しない（常に最新の情報が欲しい場合に設定）

      revalidateについて
      　キャッシュの保存時間を指定する。上記実装の場合、10秒おきに最新のデータを取得可能とする。
    */
    const users = await response.json(); 
    return (
        <>
        <div>
            <h4 className="text-lg font-bold">ユーザ一覧</h4>
            <ul className="list-group list-group-flush">
            {users.map((user, index) => (
                <NextLink key={index} href={`/users/${user.id}`}>
                    <li className="list-group-item">{user.name}</li>
                </NextLink>
                ))}
            </ul>
        </div>
        </>
    );
}
export default Page

/*
 命名規約として、「Page」を入れることで、そのレンダリング結果が画面に表示される。
*/