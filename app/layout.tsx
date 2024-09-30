import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from '@/app/context/LanguageContext';
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import { ThemeProvider } from "./context/ThemeContext";


export const metadata: Metadata = {
  title: 'Noureddine Azinag',
  description: 'Your Portfolio Description',
  keywords: ['portfolio', 'web development', 'your name'],
  authors: [{ name: 'Noureddine Azinag' }],
  openGraph: {
    title: 'Your Portfolio Title',
    description: 'Your Portfolio Description',
    type: 'website',
    url: 'https://your-portfolio-url.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Portfolio Title',
    description: 'Your Portfolio Description',
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    lang: string;
  };
};

const RootLayout = ({ children, params }: RootLayoutProps) => {
  const { lang = 'en' } = params;

  return (
    <html lang={lang}>
      <body>
        <LanguageProvider>
          <ThemeProvider>
            <Navigation />
            <main>{children}</main>
            <Footer  />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
};

export default RootLayout;