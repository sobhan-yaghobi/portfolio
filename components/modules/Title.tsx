import { TypeTitleProps } from "@/types/Utils"
import { cn } from "@/lib/utils"
import React from "react"

const Title: React.FC<React.PropsWithChildren<TypeTitleProps>> = ({
  id,
  children,
  className,
  size,
  isIcon,
}) => {
  return (
    <div
      id={id}
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
