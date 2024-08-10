"use client"

import React, { useLayoutEffect, useState } from "react"
import { articlePageAnimate } from "@/lib/animation/articlePage"

import { MobileTemplateProps } from "@/lib/types/article"

import Title from "../Title"

const MobileTemplate: React.FC<MobileTemplateProps> = ({
  activeHeadline,
  headlineList,
  headlineReadLength,
}) => {
  const [isShowCurrentTitle, setIsShowCurrentTitle] = useState(true)

  useLayoutEffect(() => articlePageAnimate(), [])

  return (
    <div
      id="quick-show"
      className="bg-base-100/20 backdrop-blur-md h-0 text-base-100-content px-5 flex items-center opacity-0 rounded-b-xl sticky top-0 xl:hidden"
    >
      <Title size="lg" className="cursor-pointer">
        <h3 onClick={() => setIsShowCurrentTitle((prev) => !prev)}>
          {isShowCurrentTitle
            ? activeHeadline?.textContent
            : `سرتیتر ${headlineReadLength + 1} / ${headlineList?.length}`}
        </h3>
      </Title>
    </div>
  )
}

export default MobileTemplate
