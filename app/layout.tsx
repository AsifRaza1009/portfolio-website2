import Footer from './componenets/Footer'
import './globals.css'

export const metadata = {
  title: 'Portfolio website Asif Raza',
  description: 'Portfolio Website ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}
      
      </body>
    </html>
  )
}
