import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

import { format } from 'date-fns/format';
import { ptBR } from 'date-fns/locale/pt-BR';
import Menu from "./components/Menu/Menu";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sistema BL",
  description: "sistema bl",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR,
  });

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-200`}
      >
        <header className="bg-slate-500 h-24 flex items-center px-8 py-16 border-b-2 border-slate-900 justify-between">
            <Link href="/" className="no-underline text-white">
                <div className="flex justify-center items-center py-2 px-6">
                    <Image src="/desktop.svg" alt="Sistema Bl" width={100} height={70}/>
                    <span>SistemaBl</span>
                </div>
            </Link>
            <div className="flex flex-col items-center justify-center space-y-2">
                <div className="flex flex-col items-center justify-center space-y-2">
                    <div className="border-black border-2 rounded-full w-10 h-10">
                        <Image src="/user.svg" height={50} width={50} alt="user"/>
                    </div>
                    <span className="mr-2 text-slate-300">Amanda Evangelista</span>
                </div>
                <span className="text-slate-300">{currentDate}</span>
            </div>
        </header>
        <div className="relative">
            <Menu/>
          </div>
        <main className="container bg-slate-200 m-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
