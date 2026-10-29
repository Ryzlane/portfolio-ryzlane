// Composant principal
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import PersonalitySection from './components/PersonalitySection'
import EntrepreneuriatSection from './components/EntrepreneuriatSection'
import ExperienceSection from './components/ExperienceSection'
import DesignSkills from './components/DesignSkills'
import DevSkills from './components/DevSkills'
import WritingSection from './components/WritingSection'
import PageTransition from './components/PageTransition'
import FloatingContact from './components/ScrollToTop'
import { PRODUCT_SECTION, COMMUNITY_SECTION } from './utils/constants'

// Ordre des sections : du plus récent / différenciant au plus secondaire.
// Garder NAV_LINKS (constants.js) dans le même ordre.
function App() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-[130px]" />
        <Hero />
        <PersonalitySection />
        <EntrepreneuriatSection />
        <ExperienceSection data={PRODUCT_SECTION} />
        <ExperienceSection data={COMMUNITY_SECTION} />
        <DesignSkills />
        <DevSkills />
        <WritingSection />
        <FloatingContact />
      </div>
    </PageTransition>
  )
}

export default App
