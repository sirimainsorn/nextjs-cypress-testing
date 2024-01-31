import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 `}>
      <h1>About</h1>
      <Link href='/'>Home</Link>
    </main>
  )
}
