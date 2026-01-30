import { rtlLocales } from "@/lib/i18n/config";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
