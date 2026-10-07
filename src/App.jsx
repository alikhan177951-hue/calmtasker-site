import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Process from './components/Process.jsx'
import Showcase from './components/Showcase.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a className="skip" href="#top">
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
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
