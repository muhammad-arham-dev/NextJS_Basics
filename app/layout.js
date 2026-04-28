import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {/* NAVBAR */}
        <nav style={{ padding: "10px", background: "#ddd" }}>
          <Link href="/">Home</Link> |{" "}
          <Link href="/about">About</Link> |{" "}
          <Link href="/contact">Contact</Link> |{" "}
          <Link href="/services">Services</Link>
        </nav>

        {/* PAGE CONTENT */}
        <main style={{ padding: "20px" }}>
          {children}
        </main>
      </body>
    </html>
  );
}