export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <h1>My App</h1>
        {children}
      </body>
    </html>
  );
}