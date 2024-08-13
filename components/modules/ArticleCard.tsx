import React from "react"

import { TypeArticleCardProps } from "@/lib/types/article"

import { Heart, MessageSquareText, Send } from "lucide-react"

import Image from "next/image"

const ArticleCard: React.FC<TypeArticleCardProps> = ({ article }) => {
  return (
    <div className="card bg-base-200 min-w-72 max-w-full h-[470px] flex-1 shadow-xl">
      <figure className="h-3/6 p-2 center relative overflow-visible">
        <Image
          width={300}
          height={300}
          src="/image/article.jpg"
          className="w-full h-full min-size-60 object-cover rounded-xl"
          alt="project-image"
        />
        <div className="w-full flex justify-evenly absolute -bottom-4">
          <p className={`glass h-12 px-4 center gap-2 rounded-lg cursor-default`}>
            <Heart className="icon" />
            32.2K
          </p>
          <p className={`glass h-12 px-4 center gap-2 rounded-lg cursor-default`}>
            <MessageSquareText className="icon" />
            1.4K
          </p>
        </div>
      </figure>
      <div className="card-body px-3 pb-3 pt-8">
        <h3 className="card-title text-2xl">Hello World</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dicta molestias ipsum
          incidunt provident!
        </p>
        <div className="flex items-center justify-between gap-3">
          <input
            type="text"
            placeholder="leave a comment ..."
            className="input input-md input-bordered bg-transparent flex-1"
          />
          <button className="btn">
            <Send className="icon" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard
