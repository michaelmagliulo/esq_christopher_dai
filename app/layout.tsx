import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Law Office of Christopher Dai, Esq.',
  description: 'Personal injury and real estate attorney serving Staten Island and the New York metropolitan area.',
  openGraph: { title: 'Christopher Dai | Personal Injury & Real Estate Attorney', description: 'Personal attention. Proven results. Serving Staten Island and the New York metropolitan area.', images: ['/og.png'] },
  twitter: { card: 'summary_large_image', title: 'Christopher Dai | Attorney at Law', description: 'Personal injury and real estate counsel in Staten Island, New York.', images: ['/og.png'] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
