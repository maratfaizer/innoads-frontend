import Footer from '@/components/Footer';
import Header from '@/components/Header/Header';
import AppProvider from '@/context/AppContext';
import AuthProvider from '@/context/AuthContext';
import ModalProvider from '@/context/ModalContext';
import QueryProvider from '@/context/QueryContext';
import ToastProvider from '@/context/ToastContext';
import { seo } from '@/utils/constants';
import dayjs from 'dayjs';
import { Provider as FavouritesProvider } from 'jotai';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import React, { Suspense } from 'react';
import './globals.css';

require('dayjs/locale/ru');
dayjs.locale('ru');
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: seo.default.title,
  description: seo.default.description,
  authors: [{ name: process.env.NEXT_PUBLIC_APP_NAME }],
  publisher: process.env.NEXT_PUBLIC_APP_NAME,
  keywords: process.env.NEXT_PUBLIC_KEY_WORDS,
  manifest: '/manifest.json',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL),
  openGraph: {
    type: 'website',
    url: process.env.NEXT_PUBLIC_APP_URL,
    images: ['/images/og-image.png'],
    title: seo.default.title,
    description: seo.default.description,
    locale: 'ru',
  },
};

const yandexScriptUrl = `/scripts/ym_${process.env.NEXT_PUBLIC_YANDEX_COUNTER}.js`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Suspense>
          <QueryProvider>
            {/*<TelegramProvider>*/}
            <AuthProvider>
              <AppProvider>
                <ModalProvider>
                  <ToastProvider>
                    <FavouritesProvider>
                      <Header />
                      <main>{children}</main>
                      <Footer />
                    </FavouritesProvider>
                  </ToastProvider>
                </ModalProvider>
              </AppProvider>
            </AuthProvider>
            {/*</TelegramProvider>*/}
          </QueryProvider>
        </Suspense>
        <Script src={yandexScriptUrl} strategy="afterInteractive" />
        <Script src="https://telegram.org/js/telegram-web-app.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
