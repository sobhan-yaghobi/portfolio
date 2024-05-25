import React from "react"
import { useTranslations } from "next-intl"

import Link from "next/link"
import ShareButton from "./Share.button"
import ChangeThemeButton from "./ChangeTheme.button"
import Search from "./Search"
import ChangeLangButton from "./ChangeLang.button"
import Magnetic from "./Magnetic"

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
    <header className="h-20 w-full container">
      <div className="h-full flex items-center justify-between">
        <ul className="flex gap-6">
          {menu.map((item, index) => (
            <Magnetic key={index}>
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
    </header>
  )
}

export default Header
