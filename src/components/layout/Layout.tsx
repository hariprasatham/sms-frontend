
import { Outlet } from 'react-router-dom'
import Sidebar from '@/components/Sidebar'

const Layout = () => {
  return (
    <div className='relative h-full overflow-hidden bg-background'>
        <Sidebar />
        <main className='ps-80'>
            <Outlet />
        </main>
    </div>
  )
}

export default Layout