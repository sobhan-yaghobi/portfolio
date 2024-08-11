"use client"

import React, { useState } from "react"
import faMessages from "@/messages/fa.json"

import { SearchIcon } from "lucide-react"
import Indicator from "./Indicator"

const Search: React.FC = () => {
  const { utils, header } = faMessages
  const hashtagList = [
    header.search.hashtag.experience,
    header.search.hashtag.project,
    header.search.hashtag.skills,
  ]

  const [mainHashtag, setMainHashtag] = useState(hashtagList.at(0))

  return (
    <div className="relative">
      <Indicator className="-right-3 -top-6">{utils.soon}</Indicator>
      <label
        className={`input input-bordered input-sm bg-transparent flex items-center relative pr-11`}
      >
        <button className="absolute right-3">
          <SearchIcon className="icon" />
        </button>
        <input
          type="text"
          className="grow placeholder:opacity-80"
          placeholder={`${header.search.placeholder} ${mainHashtag}`}
        />
      </label>
    </div>
  )
}

export default Search
