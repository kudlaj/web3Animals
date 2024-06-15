
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import styles from "./page.module.css";
import Menu from "./components/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cute Animals Fight!",
  description: "---",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-bs-theme="dark">
      <body className={inter.className}>
          <main className={styles.main}>
          <Menu/>
            <div className="text-white min-vh-100 d-flex flex-column pt-4">
             
              {children}
            </div>
          </main>
        </body>
    </html>
  );
}
