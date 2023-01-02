import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className='bg-zinc-900 text-zinc-50 py-20 px-6'>
        <h1 className='text-4xl font-bold mb-10'>
          Dan Black
        </h1>
        {children}
      </body>
    </html>
  );
}
