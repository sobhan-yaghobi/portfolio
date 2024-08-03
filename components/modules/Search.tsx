"use client"

import React from "react"
import { random } from "@/lib/utils"
import t from "@/messages/fa.json"

import { SearchIcon } from "lucide-react"

const Search: React.FC = () => {
  const { hashtag, placeholder } = t.header.search

  const hashtags = [hashtag.experience, hashtag.project, hashtag.skills]
  const getRandomHashtag = hashtags.at(random(0, hashtags.length))

  return (
    <label
      className={`input input-bordered input-sm bg-transparent flex items-center relative pr-11`}
    >
      <SearchIcon className={`icon absolute right-3`} />
      <input
        type="text"
        className="grow placeholder:opacity-80"
        placeholder={placeholder + " " + getRandomHashtag}
      />
    </label>
  )
}

export default Search
