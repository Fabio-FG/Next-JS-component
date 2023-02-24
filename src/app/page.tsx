import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Link from 'next/link'


export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar/>
      <h1>Hello World NextJS</h1>
      <Footer/>
      <Link href="/heroes">See list</Link>
    </main>
  )
}
