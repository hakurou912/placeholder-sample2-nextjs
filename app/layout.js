import "./globals.css";
import './bootstrap.css';

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div style={{minHeight:'100dvh'}}>
          {children}
        </div>
      </body>
    </html>
  );
}
