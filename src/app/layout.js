import "./globals.css"

export const metadata = {
  title: "Users App",
  description:
    "Next.js API Routes Project"
}

export default function RootLayout({
  children
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}