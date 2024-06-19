import Link from "next/link"
import React from "react"

type SocialLinkListProps = {
  type?: "icon" | "text"
  className?: string
}

const SocialLinkList: React.FC<SocialLinkListProps> = ({ type, className }) => {
  return (
    <>
      {["Gmail", "Github", "Instagram", "Telegram", "Linkedin"].map((item) => (
        <li key={item} className={className}>
          <Link href={item}>{item}</Link>
        </li>
      ))}
    </>
  )
}

export default SocialLinkList
