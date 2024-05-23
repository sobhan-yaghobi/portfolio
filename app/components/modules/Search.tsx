"use client"

import React, { useEffect, useState } from "react"
import { useLocale, useTranslations } from "next-intl"
import { getLangDir } from "rtl-detect"

import { SearchIcon } from "lucide-react"

const Search: React.FC = () => {
  const locale = useLocale()
  const direction = getLangDir(locale)
  const t = useTranslations("header.search")
  const hashtags = [t("hashtag.exper"), t("hashtag.project"), t("hashtag.skills")]

  const [isPlaceholder, setIsPlaceholder] = useState(true)
  const [mainHashtag, setMainHashtag] = useState({
    message: "",
    show: false,
  })

  const changeInputAction = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setIsPlaceholder(false)
      return
    }
    setIsPlaceholder(true)
  }

  const changeHashtagAction = () => {
    setMainHashtag({
      message: hashtags.at(Math.floor(Math.random() * hashtags.length)) as string,
      show: true,
    })
    setTimeout(() => {
      setMainHashtag((prev) => ({ ...prev, show: false }))
    }, 5000)
  }

  useEffect(() => {
    const interval = setInterval(changeHashtagAction, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <label
      className={`input input-bordered input-sm bg-transparent flex items-center relative ${
        direction === "rtl" ? "pr-11" : "pl-11"
      }`}
    >
      <SearchIcon className={`icon absolute ${direction === "rtl" ? "right-3" : "left-3"}`} />
      <input type="text" className="grow" onChange={changeInputAction} />
      {isPlaceholder ? (
        <div className="h-full text-xs opacity-50 -z-10 flex items-center gap-1 absolute overflow-hidden">
          <span>{t("placeholder")}</span>
          <span
            className={`overflow-visible ${
              mainHashtag.show ? "animate-flip-out" : "animate-flip-show"
            }`}
          >
            {mainHashtag.message}
          </span>
        </div>
      ) : null}
    </label>
  )
}

export default Search
