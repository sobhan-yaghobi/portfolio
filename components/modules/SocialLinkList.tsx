import React from "react"

import { getProfile } from "@/lib/fetcher/profile"
import { getSocialMediaList } from "@/lib/fetcher/socialMedia"

import Link from "next/link"
import Email from "./Email"
import ContactMeButton from "../templates/ContactMeButton"

const SocialLinkList: React.FC = async () => {
  const socialMediaList = await getSocialMediaList()
  const profile = await getProfile()

  return (
    <>
      {socialMediaList.map((socialMedia) => (
        <li key={socialMedia.id}>
          <Link href={socialMedia.link}>{socialMedia.title}</Link>
        </li>
      ))}
      <div className="divider h-1 my-2"></div>
      {profile.phone && (
        <li dir="ltr">
          <ContactMeButton phoneNumber={profile.phone} />
        </li>
      )}
      <li dir="ltr">
        <Email email={profile.email} />
      </li>
    </>
  )
}

export default SocialLinkList
