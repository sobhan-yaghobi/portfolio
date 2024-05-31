"use client"

import React, { useState } from "react"

import { MenuIcon, X } from "lucide-react"

import ShareButton from "../Share.button"
import ChangeLangButton from "../ChangeLang.button"
import ChangeThemeButton from "../ChangeTheme.button"
import Link from "next/link"

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
        <div dir="rtl" className={`drawer`}>
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
            <ul className="menu p-4 max-w-full w-80 min-h-full bg-base-200 text-base-content">
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
              {menuList.map((item, index) => (
                <li key={index} className="">
                  <Link className="relative group" href="#">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileNavbar
