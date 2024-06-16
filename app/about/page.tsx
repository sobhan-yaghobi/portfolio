import React from "react"
import Title from "../components/modules/Title"
import { FileText, FolderDown } from "lucide-react"
import Skills from "../components/templates/Skills"
import StarAnimation from "../components/templates/Star.animation"
import Image from "next/image"

const page: React.FC = () => {
  return (
    <>
      <div className="h-screen flex flex-col items-center">
        <StarAnimation />
        <div id="liner" className="size-96 text-nowrap center rounded-full relative mt-12">
          <Title className="pt-12 *:!text-8xl tracking-[2rem]">
            <h1>Skills</h1>
          </Title>
          {/* <Title className="pt-20 *:!text-9xl tracking-wide">
            <h1>مهارت ها</h1>
          </Title> */}
          <div className="bg-gradient-to-tr from-primary to-secondary w-72 h-52 rounded-full absolute -z-10 -top-1 blur-3xl" />
        </div>
        <p id="desc" className="px-5 w-full text-center opacity-50 mt-4 md:px-24 lg:px-56 xl:px-80">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur enim sequi, repellendus
          dolorum accusamus accusantium soluta perspiciatis distinctio tenetur maiores, quia unde
          fugiat perferendis animi repudiandae quam ratione ad. Architecto?
        </p>
        <div id="quick-access-button" className="h-fit flex items-center my-12 overflow-hidden">
          <button className="btn btn-primary">
            read online
            <FileText className="icon" />
          </button>
          <div id="split" className="divider divider-horizontal mx-1.5" />
          <button className="access-button btn btn-ghost">
            <FolderDown className="icon" />
            download
          </button>
        </div>
      </div>
      <div className="mt-40">{/* #958888 */}</div>
      <div className="mt-40">
        <Skills />
      </div>
    </>
  )
}

export default page
