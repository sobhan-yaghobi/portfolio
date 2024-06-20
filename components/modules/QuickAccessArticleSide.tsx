"use client"

import { SquareArrowOutUpRight } from "lucide-react"
import React, { useEffect, useState } from "react"
import CopyToClipboard from "./CopyToClipboard"
import Title from "./Title"
import useArticle from "@/hooks/store/useArticle"

const QuickAccessArticleSide = () => {
  const [length, setLenght] = useState(0)
  const { headlines, activeTitle } = useArticle()
  useEffect(() => {
    if (headlines) {
      const currentElement = headlines.findIndex(
        (headline) =>
          headline.textContent?.toLocaleLowerCase() ===
          activeTitle?.textContent?.toLocaleLowerCase()
      )
      setLenght(currentElement)
    }
  }, [activeTitle])
  return (
    <>
      <div className="bg-base-200 rounded-xl">
        <CopyToClipboard type="text" value="blog url" className="btn w-full outline-active">
          <SquareArrowOutUpRight className="icon" />
          Quick Share
        </CopyToClipboard>
      </div>
      <div className="bg-base-200 rounded-xl">
        <h3>HeadLines</h3>
        <ul className="steps steps-vertical">
          {headlines?.map((headline, index) => (
            <li className={`step ${index <= length && "step-primary"}`}>{headline.textContent}</li>
          ))}
        </ul>
      </div>
      <div className="bg-base-200 rounded-xl">
        <Title size="sm">
          <h3>Tags</h3>
        </Title>
        <ul className="mt-3">
          {["tag 1", "tag 2", "tag 3", "tag 4", "tag 5"].map((item) => (
            <li key={item} className="badge badge-lg">
              # {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default QuickAccessArticleSide
