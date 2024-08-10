import React from "react"

import { TypeProjectCardButtonListProps } from "@/lib/types/project.type"

import { ArrowUpRight } from "lucide-react"

import Link from "next/link"

export const ProjectCardButtonList: React.FC<TypeProjectCardButtonListProps> = ({
  link,
  source,
}) => {
  return (
    <>
      {source && (
        <Link href={source}>
          <button className="size-full btn btn-sm btn-primary">
            سورس کد
            <ArrowUpRight />
          </button>
        </Link>
      )}

      {link && (
        <Link href={link}>
          <button className="size-full btn btn-sm">
            پروژه
            <ArrowUpRight />
          </button>
        </Link>
      )}
    </>
  )
}

export default ProjectCardButtonList