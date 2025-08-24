import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Next App",
  description: "Next.js + Tailwind + Shadcn UI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-background text-foreground"}>
        <div className="min-h-screen flex flex-col">
          <header className="border-b p-4 font-bold">🚀 My Next App</header>
          <main className="flex-1 container mx-auto p-6">{children}</main>
          <footer className="border-t p-4 text-center text-sm">
            © 2025 My App
          </footer>
        </div>
      </body>
    </html>
  );
}
