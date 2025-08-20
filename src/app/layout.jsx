// app/layout.jsx
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";

export const metadata = {
  title: "My Next.js App",
  description: "Converted from React Router",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="gradient_bg">
        <div>
          <Header />
        </div>
        <main className="pt-20">{children}</main>
        <div className="">
          <Footer />
        </div>
      </body>
    </html>
  );
}
