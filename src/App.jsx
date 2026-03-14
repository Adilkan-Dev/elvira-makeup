import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import ForWhom from './components/ForWhom'
import Program from './components/Program'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import FloatingCTA from './components/FloatingCTA'

export default function App() {
  return (
    <div className="min-h-screen bg-nude-50">
      <Navbar />
      <Hero />
      <Stats />
      <ForWhom />
      <Program />
      <Testimonials />
      <Pricing />
      <FinalCTA />
      <Footer />
      <FloatingCTA />
    </div>
  )
}
