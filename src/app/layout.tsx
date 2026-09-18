import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CareerConnect | Modern Job Search & Tracking",
  description: "Centralize your job search activities, track applications, and manage your career.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-background antialiased flex flex-col`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
