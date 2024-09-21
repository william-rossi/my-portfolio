import type { Metadata } from "next";
import { Noto_Sans } from 'next/font/google'
import "./styles/globals.scss";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Footer from "@/components/footer/footer";

const noto = Noto_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Portfolio - William Ruiz",
  description: "A modern portfolio built with Next.js, React, and TypeScript, showcasing front-end development skills with optimized performance, internationalization, and custom styling using SASS.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={messages}>
        <body className={noto.className}>
          <main>
            {children}
          </main>
          <Footer />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
