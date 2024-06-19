import HomeLanding from "@/components/templates/HomeLanding"
import Projects from "@/components/templates/Projects"
import TechnicalGrowth from "@/components/templates/TechnicalGrowth"
import ExperienceAndArticle from "@/components/templates/ExperienceAndArticle"

export default function Home() {
  return (
    <>
      <HomeLanding />
      <div className="mb-40" />

      <Projects />
      <div className="mb-40" />

      <TechnicalGrowth />
      <div className="mb-40" />

      <ExperienceAndArticle />
      <div className="mb-36" />
    </>
  )
}
