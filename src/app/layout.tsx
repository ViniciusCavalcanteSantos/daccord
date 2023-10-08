import './globals.css'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
import styled from "./page.module.css";
import UserProfile from '@/components/UserProfile';
import StyledComponentsRegistry from './lib/registry';
import SearchHeader from '@/components/SearchHeader';

const lato = Lato({ weight: ["300", "400", "700"], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vinzi',
  description: 'Generated by create next app',
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
              <Sidebar />

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
