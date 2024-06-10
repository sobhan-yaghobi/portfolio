import React from "react"

import { AtSign } from "lucide-react"

import SocialFollowBox, { SocialFollowBoxProps } from "./SocialFollowBox"
import CopyToClipboard from "./CopyToClipboard"

const socialFollowItems: SocialFollowBoxProps[] = [
  {
    id: "1",
    title: "Telegram",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, dicta.",
    logoSrc: "/image/telegram.png",
    backImgSrc: "/image/telegram-background.png",
    badgeWrapper: (
      <CopyToClipboard value="@sobhan_yaghobii">
        <p className="badge badge-sm py-3 gap-1">
          <AtSign className="icon-sm" />
          sobhan_yaghobii
        </p>
      </CopyToClipboard>
    ),
  },
  {
    id: "2",
    title: "Instagram",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis repellendus commodi debitis reiciendis, architecto non sequi obcaecati assumenda labore ducimus?",
    logoSrc: "/image/instagram.png",
    backImgSrc: "/image/instagram-background.png",
    badgeWrapper: (
      <CopyToClipboard value="sobhan__ya">
        <p className="badge badge-sm py-3 gap-1">
          <AtSign className="icon-sm" />
          sobhan__ya
        </p>
      </CopyToClipboard>
    ),
  },
  {
    id: "3",
    title: "Github",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, dicta.",
    logoSrc: "/packages/github.svg",
    backImgSrc: "/image/github-background.png",
    badgeWrapper: (
      <CopyToClipboard value="sobhan-yaghobi">
        <p className="badge badge-sm py-3 gap-1">
          <AtSign className="icon-sm" />
          sobhan-yaghobi
        </p>
      </CopyToClipboard>
    ),
  },
  {
    id: "4",
    title: "Linkedin",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, dicta.",
    logoSrc: "/image/linkedin.png",
    backImgSrc: "/image/linkedin-background.png",
    badgeWrapper: (
      <CopyToClipboard value="sobhan yaghobi">
        <p className="badge badge-sm py-3 gap-1">
          <AtSign className="icon-sm" />
          sobhan yaghobi
        </p>
      </CopyToClipboard>
    ),
  },
]

const Footer: React.FC = () => {
  return (
    <footer className="mt-40">
      <div className="grid grid-cols-4 gap-3 p-3">
        {socialFollowItems.map((item) => (
          <SocialFollowBox key={item.id} {...item} />
        ))}
      </div>
      <div className="footer items-center p-4 bg-neutral text-neutral-content">
        <aside className="items-center grid-flow-col">
          <p>Copyright © 2024 - All right reserved</p>
        </aside>
      </div>
    </footer>
  )
}

export default Footer