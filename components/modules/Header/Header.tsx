import React from "react"
import { useTranslations } from "next-intl"
import Animation from "@/components/modules/Animation"
import DesktopNavbar from "./DesktopNavbar"
import MobileNavbar from "./MobileNavbar"

const Header: React.FC = () => {
  const t = useTranslations("header")
  const menu = [
    t("item.home"),
    t("item.projects"),
    t("item.about"),
    t("item.skills"),
    t("item.experience"),
    t("item.contact"),
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
