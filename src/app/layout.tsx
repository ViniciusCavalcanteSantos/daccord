import './globals.css'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import Categories from '@/components/Categories'
import styled from "./page.module.css";
import UserProfile from '@/components/UserProfile';
import StyledComponentsRegistry from './lib/registry';
import SearchHeader from '@/components/SearchHeader';
import Sidebar from '@/components/Sidebar';
import SoundControl from '@/components/SoundControl';

const lato = Lato({ weight: ["300", "400", "700"], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Daccord',
  description: 'Find Your Community on Daccord',
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  },
  manifest: '/site.webmanifest'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={lato.className}>
        <StyledComponentsRegistry>
          <main className={styled.main}>
            <div className={styled.container}>
              <div className={styled.subContainer}>
                <Sidebar />

                <Categories />

                <SoundControl />
              </div>

              <section className={styled.content}>
                <SearchHeader />

                {children}
              </section>

              <UserProfile />
            </div>
          </main>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
