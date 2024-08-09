import React from "react"
import t from "@/messages/fa.json"

import Title from "../modules/Title"
import ArticleCard from "../modules/ArticleCard"

const ArticleList = async () => {
  const { article } = t.home
  return (
    <section id="article-list">
      <Title id="article-list-title-wrapper" size="lg" className="text-center">
        <h2 className="article-list-title-child">{article.title}</h2>
        <h4 className="article-list-title-child w-10/12 text-sm mt-3 inline-block md:w-8/12 lg:w-4/12">
          {article.desc}
        </h4>
      </Title>
      <div className="my-12 flex gap-10 overflow-hidden max-lg:overflow-x-auto lg:grid lg:grid-cols-3 xl:grid-cols-4">
        {Array(4)
          .fill("")
          .map((_, index) => (
            <div className="article-card" key={index}>
              <ArticleCard key={index} />
            </div>
          ))}
      </div>
    </section>
  )
}

export default ArticleList
