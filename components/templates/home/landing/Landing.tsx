"use client"

import "@/app/globals.css"

import React, { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { landingAnimate } from "@/lib/animation/HomeLanding"

import PackageList from "./PackageList"
import ContentLanding from "./Content"
import ButtonList from "./ButtonList"

const Landing: React.FC = () => {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => landingAnimate(), { scope: container })

  return (
    <section ref={container} className="center flex-col">
      <div id="landing-bulb" className="size-10 rounded-full absolute z-0 -top-0" />
      <PackageList />
      <ContentLanding />
      <ButtonList />
    </section>
  )
}

export default Landing
