import TechnicalGrowth from "@/components/templates/TechnicalGrowth"
import ExperienceAndArticle from "@/components/templates/ExperienceAndArticle"
import HomeLanding from "@/components/templates/HomeLanding"
import Projects from "@/components/templates/Projects"

export default function Home() {
  return (
    <>
      <HomeLanding />
      <Projects />
      <TechnicalGrowth />
      <ExperienceAndArticle />
    </>
  )
}
