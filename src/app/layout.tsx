import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";

const fira = Fira_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Laxman's Portfolio",
  description: "full-stack-developer@tcs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* extra attributes frrom style, class error | https://github.com/shadcn-ui/ui/issues/1906 */}
      <body className={fira.className}>
        {/* below item generates warning in browser console */}
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableColorScheme
          disableTransitionOnChange
        >
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
