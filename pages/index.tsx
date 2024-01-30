import Button from '@/components/Button'

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 `}>
      <Button color='green' size='sm' disabled>
        Green
      </Button>
    </main>
  )
}
