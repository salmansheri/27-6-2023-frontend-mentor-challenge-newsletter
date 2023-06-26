import './globals.css'


export const metadata = {
  title: 'News letter',
  description: 'Frontend mentor challenge',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-charcoal-grey">
        <main >
        {children}
        </main>
        </body>
    </html>
  )
}
