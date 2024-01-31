import Link from 'next/link'

export default function HomePage() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 `}>
      <h1>Home</h1>
      <Link href='/about'>About</Link>
    </main>
  )
}
