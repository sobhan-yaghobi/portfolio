import React from "react"
import faMessages from "@/messages/fa.json"

import StarAnimation from "../Star.animation"

import { FileText, FolderDown } from "lucide-react"

import Link from "next/link"
import Title from "../../modules/Title"

const Landing: React.FC = () => {
  const { about } = faMessages

  return (
    <section className="flex flex-col items-center">
      <div className="bg-black size-full absolute top-0 left-0 -z-50"></div>
      <StarAnimation />

      <div id="liner" className="size-96 mt-12 center relative rounded-full text-nowrap">
        <Title size="xxl" className="w-auto pt-12">
          <h1>{about.title}</h1>
        </Title>
        <div className="bg-gradient-to-tr from-primary to-secondary w-72 h-52 rounded-full absolute -z-10 -top-1 blur-3xl" />
      </div>

      <p id="desc" className="w-full text-center px-5 mt-4 opacity-50 md:px-24 lg:px-56 xl:px-80">
        {about.desc}
      </p>

      <div id="quick-access-button" className="h-fit my-12 flex items-center overflow-hidden">
        <Link href={"/cv"}>
          <button className="btn btn-primary">
            {about.buttons.readOnline}
            <FileText className="icon" />
          </button>
        </Link>

        <div id="split" className="divider divider-horizontal mx-1.5" />

        <Link href={"/cv"}>
          <button className="access-button btn btn-ghost">
            <FolderDown className="icon" />
            {about.buttons.download}
          </button>
        </Link>
      </div>
    </section>
  )
}

export default Landing
