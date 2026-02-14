import { Navbar } from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Team from './components/Team'
import PatientPortal from './components/PatientPortal'
import { Testimonials } from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Team />
        <PatientPortal />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
