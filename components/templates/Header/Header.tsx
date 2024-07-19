import React from "react"
import t from "@/messages/fa.json"

import Animation from "@/components/modules/Animation"
import DesktopNavbar from "./DesktopNavbar"
import MobileNavbar from "./MobileNavbar"

const Header: React.FC = () => {
  const { header } = t
  const menu = [
    { href: "/", title: header.item.home, isSoon: false },
    { href: "/#projects", title: header.item.projects, isSoon: false },
    { href: "/about", title: header.item.about, isSoon: false },
    { href: "/about#skills", title: header.item.skills, isSoon: false },
    { href: "/", title: header.item.experience, isSoon: true },
    { href: "/", title: header.item.contact, isSoon: true },
  ]

  return (
    <header className="h-20 w-full z-40 relative">
      <Animation target={".wrapper"} animation="fadeInUp" duration={1.5}>
        <div className="wrapper h-full container">
          <DesktopNavbar menuList={menu} />
          <MobileNavbar menuList={menu} />
        </div>
      </Animation>
    </header>
  )
}

export default Header
