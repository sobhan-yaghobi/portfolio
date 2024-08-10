import React from "react"

import Link from "next/link"

const SocialLinkList: React.FC = () => {
  return (
    <>
      {["Github", "Instagram", "Telegram", "Linkedin"].map((item) => (
        <li key={item}>
          <Link href={item}>{item}</Link>
        </li>
      ))}
      <div className="divider h-1 my-2"></div>
      <li dir="ltr">
        <button>+98 939 600 7232</button>
      </li>
      <li dir="ltr">
        <button>sobhan.yaghobi.work@gmail.com</button>
      </li>
    </>
  )
}

export default SocialLinkList
