'use client'
import { Geist, Geist_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

import { PageContextProvider } from './context/PageContext'
import reducer, { initialState } from './context/Reducer'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <PageContextProvider initialState={initialState} reducer={reducer}>
          {children}
        </PageContextProvider>
      </body>
    </html>
  );
}
