
'use client'
/*
  appフォルダ内は基本Server Componentになるが、ボタン押下などのクライアント操作を入れる場合、一番最初に'use client'を入れる。
  それによりClient Componentになる。
  バックエンドでデータを取得する場合や機密情報を扱う場合はServer Component、
  Web Apiやブラウザ専用のHooksを使う場合はClient Componentが適している。
*/
import { useRouter, useParams } from "next/navigation";

async function getUserData(userId){
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, { revalidate: 10, cache: 'no-store' });
    return response.json();
}
async function getPostsData(userId){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/?userId=${userId}`, { revalidate: 10, cache: 'no-store' });
    return response.json();
}

const Test = async() => {
    //ルート情報を取得
    const router = useRouter();

    // 動的ルーティングのパラメータを取得
    const params = useParams();
    const userId = params.id;

    //以下だと直列の取得になり画面レスポンスが遅くなる可能性がある
    //const user = await getUserData(userId)
    //const posts = await getPostsData(userId)

    //Promise.allを使用することで並列でデータ取得可能。
    const [ user,posts ] = await Promise.all([getUserData(userId),getPostsData(userId),])


    return (
        <>
        <div style={{height:'35px'}}><a href="#" className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" onClick={() => router.back()}>← 前のページに戻る</a></div>
        <div>id:{user.id}</div>
        <div>{user.name}</div>
        <div>{user.username}</div>
        <hr></hr>
        <div class="row g-2">
        {posts.map((post, index) => (
            <div class="col-12 col-sm-4" key={index}>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text">{post.body}</p>
                    </div>
                </div>
            </div>
        ))}
        </div>
        </>
    );
}

export default Test;

/*
 [param] のようにしてページ名に角括弧を使うことで動的なルーティングができる。
 マッチしたパスのパラメータはクエリパラメータとしてページに送られる。
 SSGの場合、generateStaticParamsを使って あらかじめパラメータを取得して事前にレンダリングしておくことが可能。

 ↓実装例
 export async function generateStaticParams() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, { revalidate: 10, cache: 'no-store' });
    return response.map((data) => ({
        id: data.id
    }))
 }

 export default async function Page({ params }) {
    const { id } = params
    return(
        <div>
            <DisplayList id={id} />
        </div>
    )
 }

*/