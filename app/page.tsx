import HeroSection from "./components/templates/HeroSection"
import Projects from "./components/templates/Projects"
import AboutMe from "./components/templates/AboutMe"
import Skills from "./components/templates/Skills"

export default function Home() {
  return (
    <>
      <HeroSection />
      <Projects />
      <Skills />
      <AboutMe />
    </>
  )
}
