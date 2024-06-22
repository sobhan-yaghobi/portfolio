import React from "react"
import Magnetic from "../../modules/Magnetic"
import Link from "next/link"
import Search from "../../modules/Search"
import ShareButton from "../../modules/Share.button"
import ChangeLangButton from "../../modules/ChangeLang.button"
import ChangeThemeButton from "../../modules/ChangeTheme.button"

type DesktopNavbarProps = {
  menuList: string[]
}

const DesktopNavbar: React.FC<DesktopNavbarProps> = ({ menuList }) => {
  return (
    <nav className="h-full hidden !justify-between lg:center">
      <ul className="flex gap-6">
        {menuList.map((item, index) => (
          <Magnetic magnetSize={0.1} key={index}>
            <li>
              <Link className="relative group" href="#">
                {item}
                <span className="bg-transparent size-2 rounded-full top-[150%] left-1/2 -translate-x-1/2 -translate-y-1/2 absolute transition invisible group-hover:bg-primary group-hover:visible"></span>
              </Link>
            </li>
          </Magnetic>
        ))}
      </ul>
      <div className="flex items-center gap-1">
        <Search />
        <ShareButton rtl />
        <ChangeLangButton />
        <ChangeThemeButton />
      </div>
    </nav>
  )
}

export default DesktopNavbar
