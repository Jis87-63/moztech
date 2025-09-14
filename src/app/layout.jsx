import './globals.css';
import { Inter, Poppins } from 'next/font/google';
import Script from 'next/script';
import CookieConsent from '@/components/CookieConsent';
import { loadAdSense } from '@/lib/adSense';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

export const metadata = {
  title: 'MozTechTips — Ganhe Dinheiro com o Celular em Moçambique',
  description: 'Dicas reais para ganhar dinheiro com celular em Moçambique — sem cartão, sem banco, sem internet rápida.',
  keywords: 'ganhar dinheiro moçambique, mpesa, internet barata, paypal sem cartao, whatsapp business, freelancing moçambique',
  authors: [{ name: 'MozTechTips' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://moztechtips.vercel.app',
    title: 'MozTechTips — Ganhe Dinheiro com o Celular em Moçambique',
    description: 'Dicas reais para ganhar dinheiro com celular em Moçambique — sem cartão, sem banco, sem internet rápida.',
    images: [
      {
        url: 'https://moztechtips.vercel.app/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'MozTechTips - Ganhe Dinheiro com o Celular em Moçambique'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@moztechtips',
    creator: '@moztechtips'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-MZ" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="lrfXnDIgUTuzmP2fNC4M6sUOpiewQPZbv2JIgM1xLlk" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#2563EB" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={poppins.className}>
        {children}
        <Script strategy="afterInteractive">
          {`
            // Bloqueia zoom em todos os dispositivos
            document.addEventListener('touchmove', function(e) {
              if (e.scale !== 1) { e.preventDefault(); }
            }, { passive: false });
          `}
        </Script>
        <CookieConsent />
      </body>
    </html>
  );
}
