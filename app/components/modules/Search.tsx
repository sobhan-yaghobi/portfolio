"use client"

import React from "react"
import { useLocale, useTranslations } from "next-intl"
import { getLangDir } from "rtl-detect"

import { SearchIcon } from "lucide-react"
import { random } from "@/utils/utils.function"

const Search: React.FC = () => {
  const locale = useLocale()
  const direction = getLangDir(locale)
  const t = useTranslations("header.search")
  const hashtags = [t("hashtag.exper"), t("hashtag.project"), t("hashtag.skills")]
  const getRandomHashtag = hashtags.at(random(0, hashtags.length))

  return (
    <label
      className={`input input-bordered input-sm bg-transparent flex items-center relative ${
        direction === "rtl" ? "pr-11" : "pl-11"
      }`}
    >
      <SearchIcon className={`icon absolute ${direction === "rtl" ? "right-3" : "left-3"}`} />
      <input
        type="text"
        className="grow placeholder:opacity-50"
        placeholder={t("placeholder") + " " + getRandomHashtag}
      />
    </label>
  )
}

export default Search
