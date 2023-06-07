import Image from 'next/image'
import { Inter } from 'next/font/google'
import {Navbar} from './components/navbar'
import {AsideBar} from './components/asidebar'
import {MainYT} from './components/main'
import { Helmet } from 'react-helmet';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Navbar/>
      <main className='scroll-smooth flex'>
        <AsideBar/>
        <MainYT/>
      </main>
      <Helmet>
        <title>WenDEUS - YouTube</title>
      </Helmet>
    </>
  )
}
