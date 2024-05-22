import React from "react"

import { Share2 } from "lucide-react"

const ShareButton = () => {
  return (
    <div className="dropdown dropdown-hover">
      <button tabIndex={0} className="btn btn-ghost btn-sm">
        <Share2 className="icon" />
      </button>
      <div className="dropdown-content w-full pt-5">
        <ul tabIndex={0} className="bg-neutral"></ul>
      </div>
    </div>
  )
}

export default ShareButton
