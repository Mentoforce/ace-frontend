import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body className="min-h-screen antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
