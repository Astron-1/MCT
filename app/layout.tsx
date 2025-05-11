import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  title: 'Trust Organization - Empowering Communities',
  description: 'A non-profit organization dedicated to creating positive change in communities through sustainable initiatives and empowerment programs.',
  keywords: 'trust, non-profit, charity, community, empowerment, sustainable development',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Trust Organization - Empowering Communities',
    description: 'A non-profit organization dedicated to creating positive change in communities through sustainable initiatives and empowerment programs.',
    siteName: 'Trust Organization'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trust Organization - Empowering Communities',
    description: 'A non-profit organization dedicated to creating positive change in communities through sustainable initiatives and empowerment programs.'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 w-full">
              <div className="content-wrapper">
                {children}
              </div>
            </main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}