import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Process from './components/Process.jsx'
import Services from './components/Services.jsx'
import Showcase from './components/Showcase.jsx'
import Testimonials from './components/Testimonials.jsx'

export default function App() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-forest focus:px-4 focus:py-2">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Marquee />
        <Services />
        <Process />
        <Showcase />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
