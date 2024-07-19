import React from "react"
import t from "@/messages/fa.json"

import Title from "../modules/Title"
import ExperienceAndArticleCard from "../modules/ExperienceAndArticle.card"

const ExperienceAndArticle = async () => {
  const { article } = t.home
  return (
    <section>
      <Title size="lg" className="text-center">
        <h2>{article.title}</h2>
        <h4 className="w-10/12 text-sm mt-3 inline-block md:w-8/12 lg:w-4/12">{article.desc}</h4>
      </Title>
      <div className="my-12 flex gap-10 max-lg:overflow-x-auto lg:grid lg:grid-cols-3 xl:grid-cols-4">
        {Array(4)
          .fill("")
          .map((_, index) => (
            <ExperienceAndArticleCard key={index} />
          ))}
      </div>
    </section>
  )
}

export default ExperienceAndArticle
