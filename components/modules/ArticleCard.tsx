import React from "react"
import { getWords } from "@/lib/utils"

import { TypeArticleCardProps } from "@/types/Article"

import { Heart, MessageSquareText, Send } from "lucide-react"

import Image from "next/image"
import Indicator from "./Indicator"

const ArticleCard: React.FC<TypeArticleCardProps> = ({ article }) => {
  const isTitleSummary = article.title !== getWords(article.title, 6)
  const isDescriptionSummary = article.description !== getWords(article.description, 20)
  return (
    <div className="card bg-base-200 min-w-72 max-w-full h-[470px] flex-1 shadow-xl relative">
      <figure className="h-52 p-2 relative overflow-visible">
        <Indicator className="bg-secondary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          پیش نویس
        </Indicator>
        <div className="bg-base-300 size-full flex items-center justify-center rounded-xl overflow-hidden blur-sm relative">
          <Image
            width={300}
            height={300}
            src={article.image}
            className="w-full h-full object-cover"
            alt="article-image"
          />
        </div>
        <div className="w-full flex justify-evenly absolute -bottom-4">
          <p className={`glass h-12 px-4 center gap-2 rounded-lg cursor-default`}>
            <Heart className="icon" />0
          </p>
          <p className={`glass h-12 px-4 center gap-2 rounded-lg cursor-default`}>
            <MessageSquareText className="icon" />0
          </p>
        </div>
      </figure>
      <div className="card-body px-3 pb-3 pt-8 justify-between">
        <h3
          style={{ lineHeight: "1.5em", maxHeight: "3em" }}
          className="text-xl font-dana overflow-hidden"
        >
          {getWords(article.title, 6)}
          {isTitleSummary && <>...</>}
        </h3>
        <p className="max-h-24 text-sm overflow-hidden">
          {getWords(article.description, 20)}
          {isDescriptionSummary && <>...</>}
        </p>
        <div className="flex items-center justify-between gap-3">
          <input
            disabled
            type="text"
            placeholder="leave a comment ..."
            className="input input-md input-bordered bg-transparent flex-1"
          />
          <button disabled className="btn">
            <Send className="icon" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard
