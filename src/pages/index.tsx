import Image from 'next/image'
import { Inter } from 'next/font/google'
import {Navbar} from './components/navbar'
import {AsideBar} from './components/asidebar'
import {MainYT} from './components/main'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Navbar/>
      <main className='scroll-smooth flex'>
        <AsideBar/>
        <MainYT/>
      </main>
    </>
  )
}
