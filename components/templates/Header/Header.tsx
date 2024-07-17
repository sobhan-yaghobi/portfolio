import React from "react"
import { useTranslations } from "next-intl"
import Animation from "@/components/modules/Animation"
import DesktopNavbar from "./DesktopNavbar"
import MobileNavbar from "./MobileNavbar"

const Header: React.FC = () => {
  const t = useTranslations("header")
  const menu = [
    { href: "/", title: t("item.home"), isSoon: false },
    { href: "/#projects", title: t("item.projects"), isSoon: false },
    { href: "/about", title: t("item.about"), isSoon: false },
    { href: "/about#skills", title: t("item.skills"), isSoon: false },
    { href: "/", title: t("item.experience"), isSoon: true },
    { href: "/", title: t("item.contact"), isSoon: true },
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
