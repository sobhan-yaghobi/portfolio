"use client"

import React, { useEffect, useState } from "react"
import useArticle from "@/hooks/store/useArticle"

import MobileTemplate from "./MobileTemplate"
import DesktopTemplate from "./DesktopTemplate"

type QuickAccessArticleSideProps = {
  mobile?: boolean
}

const QuickAccessArticleSide: React.FC<QuickAccessArticleSideProps> = ({ mobile }) => {
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

  if (mobile)
    return <MobileTemplate activeTitle={activeTitle} headlines={headlines} length={length} />

  return <DesktopTemplate headlines={headlines} length={length} />
}

export default QuickAccessArticleSide
