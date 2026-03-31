// Composant principal
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import PersonalitySection from './components/PersonalitySection'
import DesignSkills from './components/DesignSkills'
import DevSkills from './components/DevSkills'
import WritingSection from './components/WritingSection'
import EntrepreneuriatSection from './components/EntrepreneuriatSection'
import PageTransition from './components/PageTransition'
import FloatingContact from './components/ScrollToTop'

function App() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-[130px]" />
        <Hero />
        <PersonalitySection />
        <DesignSkills />
        <DevSkills />
        <WritingSection />
        <EntrepreneuriatSection />
        <FloatingContact />
      </div>
    </PageTransition>
  )
}

export default App
