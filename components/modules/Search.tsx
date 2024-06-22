"use client"

import React from "react"
import { random } from "@/utils/function"

import { useTranslations } from "next-intl"

import { SearchIcon } from "lucide-react"

const Search: React.FC = () => {
  const t = useTranslations("header.search")
  const hashtags = [t("hashtag.exper"), t("hashtag.project"), t("hashtag.skills")]
  const getRandomHashtag = hashtags.at(random(0, hashtags.length))

  return (
    <label
      className={`input input-bordered input-sm bg-transparent flex items-center relative rtl:pr-11 ltr:pl-11`}
    >
      <SearchIcon className={`icon absolute rtl:right-3 ltr:left-3`} />
      <input
        type="text"
        className="grow placeholder:opacity-80"
        placeholder={t("placeholder") + " " + getRandomHashtag}
      />
    </label>
  )
}

export default Search
