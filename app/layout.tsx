import './globals.css'
import Link from 'next/link'
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <h2><Link href="/">Logo</Link></h2>
          <h2><Link href="/about">About</Link></h2>
        </div>

        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
