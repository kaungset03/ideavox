import Link from "next/link";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ThemeToggle from "@/components/ThemeToggle";
import GithubLogin from "@/components/GithubLogin";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IdeaVox",
  description: "A place to share your ideas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <header className="border-b">
              <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Idea Vox</h1>
                <div className="flex items-center space-x-4">
                  <ThemeToggle />
                  <GithubLogin />
                </div>
              </div>
            </header>
            <main className="w-full max-w-3xl mx-auto px-4 py-8">
              {children}
            </main>
            <footer className="border-t">
              <div className="container mx-auto px-4 py-4">
                <nav>
                  <ul className="flex justify-center space-x-4">
                    <li>
                      <Link href="/" className="text-blue-500 hover:underline">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/app-ideas"
                        className="text-blue-500 hover:underline"
                      >
                        App Ideas
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/built-apps"
                        className="text-blue-500 hover:underline"
                      >
                        Built Apps
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
