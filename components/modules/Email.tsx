import React from "react"
import Link from "next/link"

import { Mail } from "lucide-react"
import { cn } from "@/lib/utils"

type EmailProps = {
  className?: string
}

const Email: React.FC<EmailProps> = ({ className }) => {
  return (
    <Link href={"mailto:sobhan.yaghobi.work@gmail.com"}>
      <button className={cn("flex items-center gap-2", className)}>
        <Mail className="icon" />
        sobhan.yaghobi.work@gmail.com
      </button>
    </Link>
  )
}

export default Email
