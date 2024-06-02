import { cn } from "@/utils/utils.function"
import React from "react"

type TitleProps = {
  className?: string
  size: "md" | "lg"
}

const Title: React.FC<React.PropsWithChildren<TitleProps>> = ({ children, className, size }) => {
  return <div className={cn(size === "lg" ? "title-lg" : "title-md", className)}>{children}</div>
}

export default Title
