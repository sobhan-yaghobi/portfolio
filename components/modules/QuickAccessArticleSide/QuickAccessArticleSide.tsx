"use client"

import React, { useEffect, useState } from "react"
import useArticle from "@/hooks/store/useArticle"

import { TypeQuickAccessArticleSideProps } from "@/types/Article"

import MobileTemplate from "./MobileTemplate"
import DesktopTemplate from "./DesktopTemplate"

const QuickAccessArticleSide: React.FC<TypeQuickAccessArticleSideProps> = ({ isMobile }) => {
  const [headlineReadLength, setHeadlineReadLength] = useState(0)
  const { headlineList, activeHeadline } = useArticle()

  const updateHeadlineReadLength = () => {
    if (headlineList) {
      const currentHeadlineIndex =
        headlineList.findIndex(
          (headline) =>
            headline.textContent?.toLocaleLowerCase() ===
            activeHeadline?.textContent?.toLocaleLowerCase()
        ) + 1

      setHeadlineReadLength(currentHeadlineIndex)
    }
  }

  useEffect(() => updateHeadlineReadLength(), [activeHeadline])

  if (isMobile)
    return (
      <MobileTemplate
        activeHeadline={activeHeadline}
        headlineList={headlineList}
        headlineReadLength={headlineReadLength}
      />
    )

  return <DesktopTemplate headlineList={headlineList} headlineReadLength={headlineReadLength} />
}

export default QuickAccessArticleSide
