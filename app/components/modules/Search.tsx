"use client"

import React, { useEffect, useState } from "react"
import { useLocale, useTranslations } from "next-intl"
import { getLangDir } from "rtl-detect"

import { SearchIcon } from "lucide-react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { random } from "@/utils/utils.function"

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
    setMainHashtag((prev) => {
      const getRandomMessage = () => hashtags.at(random(0, hashtags.length)) as string
      const randomMessage = getRandomMessage()
      const message = randomMessage.includes(prev.message) ? getRandomMessage() : randomMessage
      return { message, show: true }
    })
    setTimeout(() => {
      setMainHashtag((prev) => ({ ...prev, show: false }))
    }, 5000)
  }

  useGSAP(() => {
    mainHashtag.show
      ? gsap.fromTo(".main-hashtag", { y: -100 }, { y: 0 })
      : gsap.fromTo(".main-hashtag", { y: 0 }, { y: 100 })
  }, [mainHashtag.show])

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
        <div className="h-full text-xs text-neutral-500 -z-10 flex items-center gap-1 absolute overflow-hidden">
          <span>{t("placeholder")}</span>
          <span className={`main-hashtag overflow-visible`}>{mainHashtag.message}</span>
        </div>
      ) : null}
    </label>
  )
}

export default Search
