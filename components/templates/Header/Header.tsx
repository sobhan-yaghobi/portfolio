import React from "react"
import faMessages from "@/messages/fa.json"

import ReusableAnimate from "@/components/modules/Animate/ReusableAnimate"
import DesktopNavbar from "./DesktopNavbar"
import MobileNavbar from "./MobileNavbar"
import ShareButton from "@/components/modules/ShareButton"

const Header: React.FC = () => {
  const { header } = faMessages
  const menu = [
    { href: "/", title: header.item.home, isSoon: false },
    { href: "/#project-list", title: header.item.projects, isSoon: false },
    { href: "/about", title: header.item.about, isSoon: false },
    { href: "/about#skills", title: header.item.skills, isSoon: false },
    { href: "/", title: header.item.experience, isSoon: true },
    { href: "/", title: header.item.contact, isSoon: true },
  ]

  return (
    <header className="h-20 w-full z-40 relative">
      <ReusableAnimate className="h-full container" selectedAnimationName="fadeInUp" duration={1.5}>
        <DesktopNavbar menuList={menu} />
        <MobileNavbar menuList={menu} ShareButtonComponent={<ShareButton />} />
      </ReusableAnimate>
    </header>
  )
}

export default Header
