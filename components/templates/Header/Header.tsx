import React from "react"
import t from "@/messages/fa.json"

import AnimateElement from "@/components/modules/AnimateElement"
import DesktopNavbar from "./DesktopNavbar"
import MobileNavbar from "./MobileNavbar"

const Header: React.FC = () => {
  const { header } = t
  const menu = [
    { href: "/", title: header.item.home, isSoon: false },
    { href: "/#projectList", title: header.item.projects, isSoon: false },
    { href: "/about", title: header.item.about, isSoon: false },
    { href: "/about#skills", title: header.item.skills, isSoon: false },
    { href: "/", title: header.item.experience, isSoon: true },
    { href: "/", title: header.item.contact, isSoon: true },
  ]

  return (
    <header className="h-20 w-full z-40 relative">
      <AnimateElement className="h-full container" selectedAnimationName="fadeInUp" duration={1.5}>
        <DesktopNavbar menuList={menu} />
        <MobileNavbar menuList={menu} />
      </AnimateElement>
    </header>
  )
}

export default Header
