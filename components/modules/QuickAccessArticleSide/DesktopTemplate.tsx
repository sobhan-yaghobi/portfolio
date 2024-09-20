"use client"

import React from "react"
import { DesktopTemplateProps } from "@/types/Article"

import { SquareArrowOutUpRight } from "lucide-react"

import CopyToClipboard from "../CopyToClipboard"

const DesktopTemplate: React.FC<DesktopTemplateProps> = ({ headlineList, headlineReadLength }) => {
  return (
    <>
      <div className="bg-base-200 rounded-xl">
        <CopyToClipboard value="article url" className="btn w-full outline-active">
          <SquareArrowOutUpRight className="icon" />
          اشتراک گذاری
        </CopyToClipboard>
      </div>
      <div className="bg-base-200 rounded-xl">
        <h3>سر تیترها</h3>
        <ul className="steps steps-vertical">
          {headlineList?.map((headline, index) => (
            <li className={`step ${index < headlineReadLength && "step-primary"}`}>
              <span className="truncate">{headline.textContent}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default DesktopTemplate
