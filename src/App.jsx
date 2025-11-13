import { Hero } from "./components/Hero"
import Navbar from "./components/Navbar"
import TrustedSection from "./components/TrustedSection";
import  AboutUsContainer from "./components/AboutUsContainer";
import ResultContainer from "./components/ResultContainer";
import ServicesContainer from "./components/ServicesContainer";
import AwardsSection from "./components/AwardsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import TeamSection from "./components/TeamSection";
import { Footer } from "./components/Footer";
import CTASection from "./components/CTASection";
function App() {
  
  return (
    <>
      <Navbar/>
      <Hero/>
      <TrustedSection />
      <AboutUsContainer/>
      <ResultContainer/>
      <ServicesContainer/>
      <AwardsSection/>
      <TestimonialsSection/>
      <CTASection/>
      <TeamSection/>
      <Footer/>
    </>
  )
}

export default App
