import React from "react"
import Title from "../modules/Title"
import ExperienceAndArticleCard from "../modules/ExperienceAndArticle.card"

const ExperienceAndArticle = () => {
  return (
    <section>
      <Title size="lg" className="text-center">
        <h2>Experience & Article</h2>
        <h4 className="w-10/12 text-sm mt-3 inline-block md:w-8/12 lg:w-4/12">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus soluta beatae in ducimus
          omnis facilis asperiores!
        </h4>
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
