import Footer from './Footer';
import './globals.css';
import Nav from './Nav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className='bg-zinc-900 text-zinc-50 text-lg py-20 px-4 w-full min-h-screen flex flex-col items-center'>
        <header className='space-y-5 mb-10 text-left w-full max-w-lg'>
          <h1 className='text-3xl sm:text-4xl font-bold'>Dan Black</h1>
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
