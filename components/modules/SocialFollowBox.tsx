import React, { ReactNode } from "react"
import { cn } from "@/lib/utils"

import { ArrowUpRight } from "lucide-react"

import Image from "next/image"
import CopyToClipboard from "./CopyToClipboard"

export type SocialFollowBoxProps = {
  id: string
  backImgSrc: string
  backImgClassNames?: string[]
  logoSrc: string
  title: string
  subtitle: string
  desc: string
  badgeWrapper: ReactNode
  className?: string
}

const defaultBackImgClassNames = [
  "size-12 -top-5 -right-2",
  "size-8 top-5 right-5",
  "size-6 -top-3 right-12",
  "size-10 top-5 right-16",
  "size-5 -top-1 right-20",
  "size-4 top-1 right-28",
  "size-3 top-6 right-28",
]

const SocialFollowBox: React.FC<SocialFollowBoxProps> = ({
  backImgSrc,
  backImgClassNames,
  logoSrc,
  title,
  subtitle,
  desc,
  badgeWrapper,
  className,
}) => {
  const mainBackImgClassNames = backImgClassNames || defaultBackImgClassNames
  return (
    <div className="w-96 max-w-full min-h-48 pt-10 shadow-xl rounded-3xl overflow-hidden relative">
      <div className="glass w-full h-16 absolute top-0 left-0 !backdrop-blur-0">
        {mainBackImgClassNames.map((className, index) => (
          <Image
            key={index}
            className={cn("absolute opacity-50", className)}
            width={30}
            height={30}
            src={backImgSrc}
            alt="image"
          />
        ))}
      </div>
      <div className="bg-color *:bg-color-content w-full h-full px-3 pb-2 pt-7 rounded-t-3xl relative z-10">
        <Image
          className="rounded-full absolute -top-6 left-3"
          width={48}
          height={48}
          src={logoSrc}
          alt="telegram"
        />
        <div id="header" className="h-full flex flex-col gap-2 justify-between">
          <div>
            <h5 className="text-xl font-title">{title}</h5>
            <h6 className="font-bold stat-title">{subtitle}</h6>
          </div>
          <p className="text-sm flex-1">{desc}</p>
          <div className="flex *:gap-1 justify-between">
            <div className={cn("flex flex-1 justify-between", className)}>{badgeWrapper}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SocialFollowBox
