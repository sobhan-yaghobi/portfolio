"use client"

import React from "react"
import { cn } from "@/lib/utils"

import { TypeIndicatorProps } from "@/types/Utils"
import useTheme from "@/hooks/store/useTheme"

const Indicator: React.FC<React.PropsWithChildren<TypeIndicatorProps>> = ({
  className,
  children,
}) => {
  const { theme } = useTheme()
  return (
    <span
      className={cn(
        "bg-primary w-fit py-0.5 px-1 text-xs text-nowrap absolute left-3 -top-5 z-10 rounded-lg hover:bg-primary",
        theme === "dark" ? "text-black" : "text-white",
        className
      )}
    >
      {children}
    </span>
  )
}

export default Indicator
