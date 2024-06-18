import React from "react"
import Title from "../modules/Title"
import Image from "next/image"

const AboutSection = () => {
  return (
    <div className="flex mt-40 max-xl:flex-col max-xl:text-center max-xl:items-center">
      <div className="flex flex-col gap-6 flex-1 px-6 [&>p]:text-justify max-xl:[&>p]:text-center">
        <Title size="lg">
          <h4>Lorem ipsum dolor sit amet consectetur.</h4>
        </Title>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, minima nisi! Sit tempora
          quidem dolorem optio itaque. Suscipit dicta magni similique id? Exercitationem veniam
          reiciendis porro, tempora quae iusto laborum. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Tempore, minima nisi! Sit tempora quidem dolorem optio itaque. Suscipit
          dicta magni similique id? Exercitationem veniam reiciendis porro, tempora quae iusto
          laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore enim corporis at eos
          reprehenderit sequi non velit, nemo, beatae exercitationem facere? Tenetur optio eius aut
          nisi? Quibusdam pariatur quos delectus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore enim corporis at eos
          reprehenderit sequi non velit, nemo, beatae exercitationem facere? Tenetur optio eius aut
          nisi? Quibusdam pariatur quos delectus.
        </p>
      </div>
      <Image
        width={600}
        height={600}
        src={"/image/aboutme.png"}
        alt="about me"
        className="px-12 max-xl:mt-12 max-md:hidden"
      />
      {/* <div className="w-fit mt-12 grid grid-cols-1 place-items-center gap-12 overflow-hidden sm:grid-cols-2 md:hidden"> */}
      <div className="w-fit mt-12 flex gap-10 max-lg:overflow-x-auto md:hidden">
        <Image width={200} height={300} src={"/image/A-mobile.png"} alt="about-me-image" />
        <Image width={200} height={300} src={"/image/B-mobile.png"} alt="about-me-image" />
        <Image width={200} height={300} src={"/image/C-mobile.png"} alt="about-me-image" />
        <Image width={200} height={300} src={"/image/D-mobile.png"} alt="about-me-image" />
      </div>
    </div>
  )
}

export default AboutSection
