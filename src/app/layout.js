
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

import { LanguageProvider } from "@/context/LanguageContext";

export const metadata = {
  title: "JOSUNICO | Bâtir, Accompagner et Innover",
  description:
    "JOSUNICO - Jospie Universal Investments in Congo SARL",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="font-sans antialiased bg-gray-50 text-gray-900 flex flex-col min-h-screen">
        <LanguageProvider>
          <Header />

          <div className="flex-grow">
            {children}
          </div>

          <Footer />

          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
