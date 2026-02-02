import "./globals.css";
import { bricolage, didot, lora, merriweather } from "./fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body
        className={`
          ${bricolage.variable}
          ${didot.variable}
          ${lora.variable}
          ${merriweather.variable}
        min-h-screen antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
