import type { Metadata } from "next";
import { Toaster } from "sonner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "SkillzMart",
  description:
    "A platform that connects vendors with customers in OOU Ibogun Campus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-gray-200 text-gray-700`}>
        <Toaster position="top-right" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
