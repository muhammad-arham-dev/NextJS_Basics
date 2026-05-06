import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Next.js Data Fetching Lab",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="p-6">
        <nav className="flex gap-4 mb-6 text-blue-400">
          <Link href="/">Home</Link>
          <Link href="/static-page">SSG</Link>
          <Link href="/ssr-page">SSR</Link>
          <Link href="/isr-page">ISR</Link>
          <Link href="/server-fetch">Server Fetch</Link>
        </nav>

        {children}
      </body>
    </html>
  );
}