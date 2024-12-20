import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ThemeToggle from "@/components/ThemeToggle";
import GithubLogin from "@/components/GithubLogin";
import Sidebar from "@/components/Sidebar";
import { SnowEffect } from "@/components/SnowEffect";
import { Toaster } from "sonner";

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
          <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
              <header className="bg-gray-50 dark:bg-gray-900 shadow-sm">
                <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Idea Vox
                  </h1>
                  <div className="flex items-center space-x-4">
                    <ThemeToggle />
                    <GithubLogin />
                  </div>
                </div>
              </header>
              <main className="flex-1 overflow-auto bg-gray-50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                  {children}
                </div>
              </main>
            </div>
          </div>
          <Toaster position="top-right" richColors /> 
         <SnowEffect />
        </ThemeProvider>
      </body>
    </html>
  );
}
