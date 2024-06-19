import React from "react"

import StarAnimation from "./Star.animation"

import { FileText, FolderDown } from "lucide-react"
import Link from "next/link"
import Title from "../modules/Title"

const AboutMeLanding = () => {
  return (
    <section className="flex flex-col items-center">
      <StarAnimation />

      <div id="liner" className="size-96 mt-12 center relative rounded-full text-nowrap">
        <Title size="xl" className="pt-12">
          <h1 className="tracking-[.5em]">
            ABOUT M<span className="tracking-normal">E</span>
          </h1>
        </Title>
        <div className="bg-gradient-to-tr from-primary to-secondary w-72 h-52 rounded-full absolute -z-10 -top-1 blur-3xl" />
      </div>

      <p id="desc" className="w-full text-center px-5 mt-4 opacity-50 md:px-24 lg:px-56 xl:px-80">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur enim sequi, repellendus
        dolorum accusamus accusantium soluta perspiciatis distinctio tenetur maiores, quia unde
        fugiat perferendis animi repudiandae quam ratione ad. Architecto?
      </p>

      <div id="quick-access-button" className="h-fit my-12 flex items-center overflow-hidden">
        <Link href={"/cv"}>
          <button className="btn btn-primary">
            read online
            <FileText className="icon" />
          </button>
        </Link>

        <div id="split" className="divider divider-horizontal mx-1.5" />

        <Link href={"/cv"}>
          <button className="access-button btn btn-ghost">
            <FolderDown className="icon" />
            download
          </button>
        </Link>
      </div>
    </section>
  )
}

export default AboutMeLanding
