import { cn } from "@/utils/utils.function"
import React from "react"

type TitleProps = {
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
}

const Title: React.FC<React.PropsWithChildren<TitleProps>> = ({ children, className, size }) => {
  return (
    <div
      className={cn(
        size === "xl"
          ? "title-xl"
          : size === "lg"
          ? "title-lg"
          : size === "md"
          ? "title-md"
          : "title-sm",
        className
      )}
    >
      {children}
    </div>
  )
}

export default Title
