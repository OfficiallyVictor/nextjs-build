import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import { Inter } from 'next/font/google'
import { Container } from '@/components/bootstrap';
import NavBar from './NavBar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Next Js 13.4 Image Gallery",
  description: "Side project by Victor",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <NavBar/>
          <main>
            <Container className= "py-4">
              {children}
            </Container>
          </main>
      </body>
    </html> 
  )
}
