import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Adeptus",
  description: "A Technical Club to spread awareness about Latest and Niche Technologies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-p-20 scroll-smooth">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css" 
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};
