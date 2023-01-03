import Nav from './Nav';
import Footer from './Footer';
import { Vollkorn, Quicksand } from '@next/font/google';
import './globals.css';

const vollkorn = Vollkorn({ subsets: ['latin'] });
const quicksand = Quicksand({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={`bg-zinc-900 text-zinc-50 text-lg py-20 px-6 w-full min-h-screen flex flex-col items-center ${quicksand.className}`}>
        <header className='space-y-5 mb-10 text-left w-full max-w-lg'>
          <h1 className={`text-4xl sm:text-5xl font-bold ${vollkorn.className}`}>Dan Black</h1>
          <Nav />
        </header>
        <main className='w-full max-w-lg grow'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
