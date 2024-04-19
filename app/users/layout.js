export const metadata = {
    title: "Users",
    description: "ユーザー情報を表示",
  };
  
  export default function RootLayout({ children }) {
    return (
        <>
        <nav className="navbar bg-body-tertiary">
            <div className="container">
                <span className="navbar-brand mb-0 h1">Navbar</span>
            </div>
        </nav>
        <div className="container p-4">
            {children}
        </div>
        </>
    );
}
/*
 命名規約として、「layout」を入れることで共通UIになる。
 その階層のpage.jsと その子の階層にも適用される。
*/
