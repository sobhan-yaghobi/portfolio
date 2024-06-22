"use client"

import React, { useLayoutEffect, useState } from "react"
import gsap from "gsap"
import { ArticleStoreType } from "@/hooks/store/useArticle"

import Title from "../Title"

type MobileTemplateProps = {
  activeTitle: ArticleStoreType["activeTitle"]
  headlines: ArticleStoreType["headlines"]
  length: number
}

const MobileTemplate: React.FC<MobileTemplateProps> = ({ activeTitle, headlines, length }) => {
  const fromToAnimation: { from: gsap.TweenVars; to: gsap.TweenVars } = {
    from: {
      height: 0,
      opacity: 0,
      duration: 0.24,
      ease: "power1",
    },
    to: {
      height: "3.5rem",
      opacity: 1,
      duration: 0.24,
      ease: "power1",
    },
  }
  const [isShowCurrentTitle, setIsShowCurrentTitle] = useState(true)
  useLayoutEffect(() => {
    gsap.to("#article", {
      scrollTrigger: {
        trigger: "#article",
        start: 0,
        end: "+=40%",
        onLeave: () => {
          gsap.to("#quick-show", fromToAnimation.to)
        },
        onEnterBack: () => {
          gsap.to("#quick-show", fromToAnimation.from)
        },
      },
    })
  }, [])
  return (
    <>
      <div
        id="quick-show"
        className="bg-base-100/20 backdrop-blur-md h-0 text-base-100-content px-5 flex items-center opacity-0 rounded-b-xl sticky top-0 xl:hidden"
      >
        <Title size="lg" className="cursor-pointer">
          <h3 onClick={() => setIsShowCurrentTitle((prev) => !prev)}>
            {isShowCurrentTitle
              ? `${activeTitle?.textContent}`
              : `headline ${length + 1} / ${headlines?.length}`}
          </h3>
        </Title>
      </div>
    </>
  )
}

export default MobileTemplate
