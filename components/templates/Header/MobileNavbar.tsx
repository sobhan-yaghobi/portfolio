"use client"

import React, { ReactNode, useState } from "react"
import faMessages from "@/messages/fa.json"

import { MenuIcon, X } from "lucide-react"

import ChangeThemeButton from "../../modules/ChangeThemeButton"
import Link from "next/link"
import Search from "../../modules/Search"
import Indicator from "@/components/modules/Indicator"

type MobileNavbarProps = {
  menuList: { href: string; title: string; isSoon: boolean }[]
  ShareButtonComponent: ReactNode
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ menuList, ShareButtonComponent }) => {
  const [isMenu, setIsMenu] = useState(false)
  const { utils } = faMessages

  return (
    <div className="mobile w-full h-full center flex-row-reverse justify-between lg:hidden">
      <div>{ShareButtonComponent}</div>
      <div>
        <aside dir="rtl" className="drawer">
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
            <ul className="menu bg-base-200 text-base-content max-w-full w-80 min-h-full p-4">
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
                <li onClick={() => setIsMenu(false)} key={index} className="relative w-full mb-2">
                  {item.isSoon && <Indicator className="-top-1">{utils.soon}</Indicator>}
                  <Link className="relative group w-full" href={item.href}>
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
