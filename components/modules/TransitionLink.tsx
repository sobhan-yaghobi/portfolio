"use client"

import React from "react"
import { pageOutAnimate } from "@/animation/pageTransition"

import { useRouter } from "next/navigation"

type TypeTransitionLinkProps = { href: string }

const TransitionLink: React.FC<React.PropsWithChildren<TypeTransitionLinkProps>> = ({
  href,
  children,
}) => {
  const router = useRouter()

  const clickHandler = () => {
    pageOutAnimate(href, router)
  }

  return <button onClick={clickHandler}>{children}</button>
}

export default TransitionLink
