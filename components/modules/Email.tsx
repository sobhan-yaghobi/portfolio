import React from "react"
import { cn } from "@/lib/utils"

import { TypeEmailProps } from "@/lib/types/utils"

import { Mail } from "lucide-react"

import Link from "next/link"

const Email: React.FC<TypeEmailProps> = ({ email, className }) => {
  return (
    <Link href={`mailto:${email}`}>
      <button className={cn("flex items-center gap-2", className)}>
        <Mail className="icon" />
        {email}
      </button>
    </Link>
  )
}

export default Email
