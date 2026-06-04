import { Helmet } from 'react-helmet-async'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { AuthorityBar } from './components/AuthorityBar'
import { Institutional } from './components/Institutional'
import { ClientesAtendidos } from './sections/ClientesAtendidos'
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
      <Helmet>
        <title>F1000 Transportes — Transporte industrial para cargas críticas</title>
        <meta name="description" content="Transportadora B2B com 13 anos de operação. Frete fracionado pesado, dedicado e cargas industriais com cobertura nacional. Cotação em 15 minutos." />
        <link rel="canonical" href="https://f1000transportes.com/" />
        <meta property="og:url" content="https://f1000transportes.com/" />
        <meta property="og:title" content="F1000 Transportes — Transporte industrial para cargas críticas" />
        <meta property="og:description" content="Transportadora B2B com 13 anos de operação. Cobertura nacional. Cotação em 15 minutos." />
      </Helmet>

      {/* Skip-link — acessibilidade por teclado */}
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-black focus:shadow-lg"
        style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 600 }}
      >
        Pular para o conteúdo
      </a>

      <Header />

      <main id="conteudo">
        <Hero />
        <AuthorityBar />
        <Institutional />
        <ClientesAtendidos />
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
