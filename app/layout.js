import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import NextProviders from "./Providers/NextProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Exclusive Gadget",
  description: "Purchase new gadgets",
  icons: "./favicon.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextProviders>
          <Navbar></Navbar>
          <div className="min-h-[calc(100vh-285px)]">{children}</div>
          <Footer></Footer>
          <Toaster position="top-center" reverseOrder={false} />
        </NextProviders>
      </body>
    </html>
  );
}
