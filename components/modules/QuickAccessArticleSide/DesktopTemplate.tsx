"use client"

import { ArticleStoreType } from "@/hooks/store/useArticle"
import React from "react"
import CopyToClipboard from "../CopyToClipboard"
import { SquareArrowOutUpRight } from "lucide-react"

type DesktopTemplateProps = {
  headlines: ArticleStoreType["headlines"]
  length: number
}

const DesktopTemplate: React.FC<DesktopTemplateProps> = ({ headlines, length }) => {
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
            <li className={`step ${index <= length && "step-primary"}`}>
              <span className="truncate">{headline.textContent}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default DesktopTemplate
