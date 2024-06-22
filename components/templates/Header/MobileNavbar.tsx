"use client"

import React, { useState } from "react"

import { MenuIcon, X } from "lucide-react"

import ShareButton from "../../modules/Share.button"
import ChangeLangButton from "../../modules/ChangeLang.button"
import ChangeThemeButton from "../../modules/ChangeTheme.button"
import Link from "next/link"
import Search from "../../modules/Search"

type MobileNavbarProps = {
  menuList: string[]
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ menuList }) => {
  const [isMenu, setIsMenu] = useState(false)
  return (
    <div dir="ltr" className="mobile w-full h-full center justify-between lg:hidden">
      <div className="flex">
        <ShareButton />
        <ChangeLangButton />
      </div>
      <div>
        <aside dir="rtl" className={`drawer`}>
          <input
            id="navbar-drawer"
            type="checkbox"
            className="drawer-toggle"
            checked={isMenu}
            onChange={(e) => setIsMenu(e.target.checked)}
          />
          <div className="drawer-content">
            <label htmlFor="navbar-drawer" className="btn btn-ghost btn-sm">
              <MenuIcon className="icon" />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="navbar-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 max-w-full w-80 min-h-full text-base-content p-4">
              <div className="flex items-center justify-end">
                <ChangeThemeButton className="btn-outline ml-3" />
                <label
                  htmlFor="navbar-drawer"
                  aria-label="close sidebar"
                  className="btn btn-outline btn-sm"
                >
                  <X className="icon" />
                </label>
              </div>
              <div className="my-3">
                <Search />
              </div>
              {menuList.map((item, index) => (
                <li key={index} className="">
                  <Link className="relative group" href="#">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default MobileNavbar
