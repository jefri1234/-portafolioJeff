import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navegacion  from '@/components/navbar'
import {Providers} from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jeff",
  description: "portfolio Jeff development projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navegacion/>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
