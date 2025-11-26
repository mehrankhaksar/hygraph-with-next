import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "GameZone",
  description: "The Ultimate Gaming Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main className="flex-1 py-8">
          <div className="container">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
