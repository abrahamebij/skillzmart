import type { Metadata } from "next";
import { Toaster } from "sonner";
import NextTopLoader from "nextjs-toploader";
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
        {/* The toast notification */}
        <Toaster position="top-right" richColors />
        {/* The loading bar */}
        <NextTopLoader easing="ease" color="#E85C0D" height={4} />
        {/* Navigation */}
        <Navbar />
        {/* Content */}
        {children}
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
