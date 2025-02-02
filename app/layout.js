import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Exclusive Gadget",
  description: "Purchase new gadgets",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        <div className="min-h-[calc(100vh-285px)]">{children}</div>
        <Footer></Footer>
      </body>
    </html>
  );
}
