import React from "react"
import Title from "../modules/Title"
import ProjectCard from "../modules/Project.card"
import { useTranslations } from "next-intl"
import { getTranslations } from "next-intl/server"

const Projects: React.FC = async () => {
  const t = await getTranslations()
  return (
    <section>
      <Title size="lg" className="text-center">
        <h2>{t("header.item.projects")}</h2>
        <h3 className="w-10/12 text-sm mt-3 inline-block md:w-8/12 lg:w-4/12">
          {t("home.projects.desc")}
        </h3>
      </Title>
      <div className="my-12 flex gap-10 max-lg:overflow-x-auto lg:grid lg:grid-cols-3 xl:grid-cols-4">
        {Array(4)
          .fill("")
          .map((_, index) => (
            <ProjectCard key={index} />
          ))}
      </div>
    </section>
  )
}

export default Projects
