import Landing from "@/components/templates/home/landing/Landing"
import ProjectList from "@/components/templates/ProjectList"
import TechnicalGrowth from "@/components/templates/TechnicalGrowthList"
import ArticleList from "@/components/templates/ArticleList"
import AnimateElement from "@/components/modules/AnimateElement"

export default function Home() {
  return (
    <>
      <AnimateElement selectedAnimationName="animateHomeLanding">
        <Landing />
      </AnimateElement>
      <div className="mb-40" />

      <AnimateElement selectedAnimationName="animateProjectList">
        <ProjectList />
      </AnimateElement>
      <div className="mb-40" />

      <AnimateElement selectedAnimationName="animateTechnicalGrowthList">
        <TechnicalGrowth />
      </AnimateElement>
      <div className="mb-40" />

      <AnimateElement selectedAnimationName="animateArticleList">
        <ArticleList />
      </AnimateElement>
      <div className="mb-36" />
    </>
  )
}
