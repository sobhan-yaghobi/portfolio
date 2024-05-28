import React from "react"
import { useTranslations } from "next-intl"

import Link from "next/link"
import ShareButton from "@components/modules/Share.button"
import ChangeThemeButton from "@components/modules/ChangeTheme.button"
import Search from "@components/modules/Search"
import ChangeLangButton from "@components/modules/ChangeLang.button"
import Magnetic from "@components/modules/Magnetic"
import Animation from "@components/modules/Animation"

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
    <header className="h-20 w-full container z-40 relative">
      <Animation target={".wrapper"} animation="fadeInUp" duration={1.5}>
        <div className="wrapper h-full flex items-center justify-between">
          <ul className="flex gap-6">
            {menu.map((item, index) => (
              <Magnetic magnetSize={0.1} key={index}>
                <li>
                  <Link className="relative group" href="#">
                    {item}
                    <span className="bg-transparent w-2 h-2 rounded-full top-[150%] left-1/2 -translate-x-1/2 -translate-y-1/2 absolute transition invisible group-hover:bg-primary group-hover:visible"></span>
                  </Link>
                </li>
              </Magnetic>
            ))}
          </ul>
          <div className="flex items-center gap-1">
            <Search />
            <ShareButton />
            <ChangeLangButton />
            <ChangeThemeButton />
          </div>
        </div>
      </Animation>
    </header>
  )
}

export default Header
