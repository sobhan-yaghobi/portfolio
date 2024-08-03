import { cn } from "@/lib/utils"
import React from "react"

type TitleProps = {
  className?: string
  size?: "sm" | "md" | "lg" | "xl" | "xxl"
  isIcon?: boolean
}

const Title: React.FC<React.PropsWithChildren<TitleProps>> = ({
  children,
  className,
  size,
  isIcon,
}) => {
  return (
    <div
      className={cn(
        size === "xxl"
          ? "title-xxl"
          : size === "xl"
          ? "title-xl"
          : size === "lg"
          ? "title-lg"
          : size === "md"
          ? "title-md"
          : "title-sm",
        "w-full",
        isIcon && "flex flex-row-reverse items-center justify-end",
        className
      )}
    >
      {children}
    </div>
  )
}

export default Title
