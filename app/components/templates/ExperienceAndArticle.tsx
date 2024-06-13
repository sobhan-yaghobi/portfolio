import React from "react"
import Title from "../modules/Title"
import ExperienceAndArticleCard from "../modules/ExperienceAndArticle.card"

const ExperienceAndArticle = () => {
  return (
    <>
      <div className="mt-40" />
      <Title size="lg" className="text-center">
        <h2>Experience & Article</h2>
        <h4 className="w-10/12 text-sm inline-block mt-3 md:w-8/12 lg:w-4/12">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus soluta beatae in ducimus
          omnis facilis asperiores!
        </h4>
      </Title>
      <div className="flex gap-10 my-12 lg:grid lg:grid-cols-3 xl:grid-cols-4 max-lg:overflow-x-auto">
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
