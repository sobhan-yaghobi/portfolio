import AboutMe from "../components/templates/AboutMe"
import ExperienceAndArticle from "../components/templates/ExperienceAndArticle"
import HeroSection from "../components/templates/HeroSection"
import Projects from "../components/templates/Projects"

export default function Home() {
  return (
    <>
      <HeroSection />
      <Projects />
      <AboutMe />
      <ExperienceAndArticle />
    </>
  )
}
