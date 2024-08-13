import React from "react"

import { Share2 } from "lucide-react"
import SocialLinkItem from "./SocialLinkItem"

const ShareButton: React.FC = () => {
  return (
    <div className="dropdown dropdown-hover dropdown-end">
      <button tabIndex={0} className="btn btn-ghost btn-sm">
        <Share2 className="icon" />
      </button>
      <div className="dropdown-content menu px-0 z-[1]">
        <ul tabIndex={0} className="p-2 shadow bg-base-200 rounded-box min-w-52">
          <SocialLinkItem />
        </ul>
      </div>
    </div>
  )
}

export default ShareButton
