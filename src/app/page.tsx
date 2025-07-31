import Link from 'next/link'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[url('/bg.jpg')] bg-cover bg-center">
      <div className='absolute inset-0 bg-black/40 backdrop-blur-sm' />

      <div className='relative z-10 flex min-h-screen items-center justify-center px-4'>
        <div className='space-y-6 rounded-xl bg-white/80 p-8 text-center shadow-lg backdrop-blur-md'>
          <h1 className='text-3xl font-bold text-[hsl(var(--foreground))]'>Todolist Project</h1>

          <div className='space-y-2'>
            <Link
              href='https://github.com/ZaXaR/todolist-frontend'
              target='_blank'
              className='block text-indigo-600 hover:underline'
            >
              Frontend GitHub
            </Link>
            <Link
              href='https://github.com/ZaXaR/todolist-backend'
              target='_blank'
              className='block text-indigo-600 hover:underline'
            >
              Backend GitHub
            </Link>
          </div>

          <Link
            href='/auth'
            className='inline-block rounded-md bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700 transition'
          >
            Authorization
          </Link>
        </div>
      </div>
    </div>
  )
}
