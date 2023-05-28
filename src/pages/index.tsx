import Image from 'next/image'
import { Inter } from 'next/font/google'
import {Navbar} from './components/navbar'
import {AsideBar} from './components/asidebar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar/>
      <main>
        <AsideBar/>
      </main>
    </>
  )
}
