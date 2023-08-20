import './globals.css'




export const metadata= {
  title: 'Interface Teste',
  description: 'Interface Teste',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-900">{children}</body>
    </html>
  )
}
