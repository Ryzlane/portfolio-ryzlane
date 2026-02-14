// Composant principal
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import PersonalitySection from './components/PersonalitySection'
import DesignSkills from './components/DesignSkills'
import DevSkills from './components/DevSkills'
import WritingSection from './components/WritingSection'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navigation />
        <Hero />
        <PersonalitySection />
        <DesignSkills />
        <DevSkills />
        <WritingSection />
        <Footer />
        <ScrollToTop />
      </div>
    </PageTransition>
  )
}

export default App
