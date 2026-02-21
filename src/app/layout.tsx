import "./globals.css";

import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { GeistPixelSquare, GeistPixelGrid, GeistPixelCircle, GeistPixelTriangle, GeistPixelLine } from 'geist/font/pixel';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${GeistSans.className} ${GeistMono.className} ${GeistPixelSquare.className} ${GeistPixelGrid.className} ${GeistPixelCircle.className} ${GeistPixelTriangle.className} ${GeistPixelLine.className}`}>
      <body>{children}</body>
    </html>
  );
}