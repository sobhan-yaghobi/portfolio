import React from "react"
import Title from "../modules/Title"
import ExperienceAndArticleCard from "../modules/ExperienceAndArticle.card"

const ExperienceAndArticle = () => {
  return (
    <>
      <div className="mt-40" />
      <Title size="lg" className="text-center">
        <h2>Experience & Article</h2>
      </Title>
      <div className="flex overflow-x-auto gap-10 my-12 lg:grid lg:grid-cols-3 xl:grid-cols-4">
        {Array(4)
          .fill("")
          .map((_, index) => (
            <ExperienceAndArticleCard key={index} />
          ))}
      </div>
    </>
  )
}

export default ExperienceAndArticle
