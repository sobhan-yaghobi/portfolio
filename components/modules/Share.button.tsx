import React from "react"

import { Share2 } from "lucide-react"
import SocialLinkList from "./SocialLinkItems"

const ShareButton = () => {
  return (
    <div className="dropdown dropdown-hover dropdown-end">
      <button tabIndex={0} className="btn btn-ghost btn-sm">
        <Share2 className="icon" />
      </button>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <SocialLinkList />
      </ul>
    </div>
  )
}

export default ShareButton
