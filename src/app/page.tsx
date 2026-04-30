import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Brand from '@/components/Brand'
import Courses from '@/components/Courses'
import Rules from '@/components/Rules'
import Join from '@/components/Join'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Brand />
        <Courses />
        <Rules />
        <Join />
      </main>
      <Footer />
    </>
  )
}
