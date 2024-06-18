import React from "react"

import { ArrowUp, AtSign } from "lucide-react"

import SocialFollowBox, { SocialFollowBoxProps } from "./SocialFollowBox"
import CopyToClipboard from "./CopyToClipboard"
import ContactMeButton from "../templates/ContactMe.button"
import ScrollTo from "./ScrollTo"
import Email from "./Email"

const socialFollowItems: SocialFollowBoxProps[] = [
  {
    id: "1",
    title: "Telegram",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, dicta.",
    logoSrc: "/image/telegram.png",
    backImgSrc: "/image/telegram-background.png",
    badgeWrapper: (
      <CopyToClipboard type="toast" value="@sobhan_yaghobii">
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
      <CopyToClipboard type="toast" value="sobhan__ya">
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
      <CopyToClipboard type="toast" value="sobhan-yaghobi">
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
      <CopyToClipboard type="toast" value="sobhan yaghobi">
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
    <footer>
      <div className="center mb-3 mt-36">
        <ScrollTo scrollTo={"header"} duration={0.5}>
          <button className="btn">
            <ArrowUp />
          </button>
        </ScrollTo>
      </div>
      <div className="grid grid-cols-4 gap-3 pb-3 container">
        {socialFollowItems.map((item) => (
          <SocialFollowBox key={item.id} {...item} />
        ))}
      </div>
      <div className="footer items-center p-4 bg-color text-neutral-content">
        <aside className="items-center grid-flow-col">
          <p>Copyright © 2024 - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <Email className="btn btn-ghost font-normal" />
          <ContactMeButton className="btn btn-ghost font-normal" value="_PHONE" />
        </nav>
      </div>
    </footer>
  )
}

export default Footer
