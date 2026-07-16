import './globals.css';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ThemeProvider } from '../context/ThemeContext';
import ScrollToTop from '../components/ScrollToTop';
import ScrollObserver from '../components/ScrollObserver';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' });

export const metadata = {
  metadataBase: new URL('https://himanshumudigonda-portfolio.vercel.app'),
  title: "Himanshu Mudigonda | Software Developer Portfolio",
  description: 'Portfolio of Himanshu Mudigonda — Software Developer specializing in Full-Stack Development, Machine Learning, and Automation. Built with Next.js.',
  keywords: ['Himanshu Mudigonda', 'Software Developer', 'Full-Stack', 'Portfolio', 'React', 'Next.js'],
  authors: [{ name: 'Himanshu Mudigonda' }],
  openGraph: {
    title: "Himanshu Mudigonda | Software Developer Portfolio",
    description: 'Software Developer specializing in Full-Stack Development, Machine Learning, and Automation.',
    type: 'website',
    images: ['/projects/himanshu_mudigonda.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Himanshu Mudigonda | Software Developer Portfolio",
    description: 'Software Developer specializing in Full-Stack Development, Machine Learning, and Automation.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var t = localStorage.getItem('theme');
                if (!t) t = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                document.documentElement.classList.toggle('dark', t === 'dark');
              } catch (e) {}
            `,
          }}
        />
        <link rel="icon" href="/favicon-v2.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} ${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen transition-colors duration-300 dark:text-white">
            <Navbar />
            <ScrollObserver>
              <main className="grow container mx-auto px-4 py-8">
                {children}
              </main>
            </ScrollObserver>
            <Footer />
            <ScrollToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
