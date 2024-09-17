import React from "react"
import faMessages from "@/messages/fa.json"
import { getProfile } from "@/lib/fetcher/profile"

import { CircleUser } from "lucide-react"

import ContactMeButton from "../../ContactMeButton"
import Link from "next/link"

const ButtonList: React.FC = async () => {
  const profile = await getProfile()
  const { seeMyCv, contact } = faMessages.utils
  return (
    <div id="landing-button-list" className="h-fit my-6 flex items-center overflow-hidden">
      <div className="access-button">
        {profile.phone && (
          <ContactMeButton phoneNumber={profile.phone} text={contact} className="btn btn-primary" />
        )}
      </div>

      <div id="split" className="divider divider-horizontal w-1 max-md:mx-1.5" />

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
