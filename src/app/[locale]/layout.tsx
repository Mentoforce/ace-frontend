import { rtlLocales } from "@/lib/i18n/config";
//import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Navbar1 from "@/components/layout/Navbar1";
import { Toaster } from "react-hot-toast";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isRTL = rtlLocales.includes(locale);

  return (
    <div
      lang={locale}
      dir={isRTL ? "rtl" : "ltr"}
      className="flex min-h-screen flex-col"
    >
      <Navbar1 />
      <main className="flex-1">{children}</main>
      <Footer />
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#0C2448",
            color: "#ffffff",
            border: "1px solid #C28A2A",
            padding: "16px",
            fontFamily: "Montserrat, sans-serif",
          },
          success: {
            iconTheme: {
              primary: "#C28A2A",
              secondary: "#0C2448",
            },
          },
          error: {
            iconTheme: {
              primary: "#ff4d4f",
              secondary: "#0C2448",
            },
          },
        }}
      />
    </div>
  );
}
