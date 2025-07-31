import { Metadata } from 'next'
import { Profile } from './Profile'
import { Todolist } from './Todolist'
import { CreateTask } from './CreateTask'

const NO_INDEX_PAGE = {
  robots: 'noindex, nofollow',
}

export const metadata: Metadata = {
  title: 'Dashboard',
  ...NO_INDEX_PAGE,
}

export default function DashboardPage() {
  return (
    <div className='relative min-h-screen bg-slate-100 px-4 py-12'>
      <div className='relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-screen-xl mx-auto'>
        <div className='space-y-6 rounded-xl bg-white/80 p-6 shadow-lg backdrop-blur-md'>
          <Profile />
        </div>

        <div className='space-y-6 rounded-xl bg-white/80 p-6 shadow-lg backdrop-blur-md'>
          <Todolist />
        </div>

        <div className='space-y-6 rounded-xl bg-white/80 p-6 shadow-lg backdrop-blur-md'>
          <CreateTask />
        </div>
      </div>
    </div>
  )
}
