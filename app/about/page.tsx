import React from "react"
import Title from "../components/modules/Title"

const page: React.FC = () => {
  return (
    <div className="h-screen flex justify-center">
      <div id="liner" className="size-96 text-nowrap center rounded-full relative mt-12">
        <Title className="pt-12 *:!text-8xl tracking-[2rem]">
          <h1>ABOUT ME</h1>
        </Title>
        <div className="bg-gradient-to-tr from-primary to-secondary w-72 h-52 rounded-full absolute -z-10 -top-1 blur-3xl" />
      </div>
    </div>
  )
}

export default page
