"use client"

import React, { useState } from "react"
import t from "@/messages/fa.json"

import { MenuIcon, X } from "lucide-react"

import ShareButton from "../../modules/Share.button"
import ChangeThemeButton from "../../modules/ChangeTheme.button"
import Link from "next/link"
import Search from "../../modules/Search"

type MobileNavbarProps = {
  menuList: { href: string; title: string; isSoon: boolean }[]
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ menuList }) => {
  const [isMenu, setIsMenu] = useState(false)
  const { utils } = t
  return (
    <div dir="ltr" className="mobile w-full h-full center justify-between lg:hidden">
      <div className="flex">
        <ShareButton />
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
                <li key={index} className="indicator">
                  {item.isSoon && (
                    <span className="indicator-item badge badge-primary badge-sm -top-1">
                      {utils.soon}
                    </span>
                  )}
                  <Link className="relative group" href={item.href}>
                    {item.title}
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
