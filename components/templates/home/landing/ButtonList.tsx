import faMessages from "@/messages/fa.json"

import { CircleUser } from "lucide-react"

import ContactMeButton from "../../ContactMe.button"
import Link from "next/link"

const ButtonList: React.FC = () => {
  const { seeMyCv } = faMessages.utils
  return (
    <div id="landing-button-list" className="h-fit my-12 flex items-center overflow-hidden">
      <div className="access-button">
        <ContactMeButton className="btn btn-primary" />
      </div>

      <div id="split" className="divider divider-horizontal mx-1.5" />

      <Link href={"/about"}>
        <button className="access-button btn btn-ghost">
          <CircleUser className="icon" />
          {seeMyCv}
        </button>
      </Link>
    </div>
  )
}

export default ButtonList
