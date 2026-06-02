import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { AuthorityBar } from './components/AuthorityBar'
import { Institutional } from './components/Institutional'
import { Services } from './components/Services'
import { HowItWorks } from './components/HowItWorks'
import { Differentials } from './components/Differentials'
import { Sectors } from './components/Sectors'
import { Testimonials } from './components/Testimonials'
import { FAQ } from './components/FAQ'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AuthorityBar />
        <Institutional />
        <Services />
        <HowItWorks />
        <Differentials />
        <Sectors />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
