import React from "react"
import faMessages from "@/messages/fa.json"

import { FileText, FolderDown } from "lucide-react"

import Link from "next/link"

const ButtonList: React.FC = () => {
  const { readOnline, download } = faMessages.about.buttons
  return (
    <div
      id="about-me-landing-button-list"
      className="h-fit my-12 flex items-center overflow-hidden"
    >
      <Link href={"/cv"}>
        <button className="access-button btn btn-primary">
          {readOnline}
          <FileText className="icon" />
        </button>
      </Link>

      <div id="about-me-landing-button-list-split" className="divider divider-horizontal mx-1.5" />

      <Link
        href={
          "https://bhnldizjuhewbimjejof.supabase.co/storage/v1/object/public/portfolio/sobhan-yaghobi-cv.pdf"
        }
        target="_blank"
      >
        <button className="access-button btn btn-ghost">
          <FolderDown className="icon" />
          {download}
        </button>
      </Link>
    </div>
  )
}

export default ButtonList
