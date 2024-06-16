import React from "react"
import Title from "../modules/Title"
import Image from "next/image"

const AboutSection = () => {
  return (
    <div className="flex mt-40">
      <div className="flex flex-col gap-6 flex-1 px-6">
        <Title size="lg">
          <h4>Lorem ipsum dolor sit amet consectetur.</h4>
        </Title>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, minima nisi! Sit tempora
          quidem dolorem optio itaque. Suscipit dicta magni similique id? Exercitationem veniam
          reiciendis porro, tempora quae iusto laborum. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Tempore, minima nisi! Sit tempora quidem dolorem optio itaque. Suscipit
          dicta magni similique id? Exercitationem veniam reiciendis porro, tempora quae iusto
          laborum.
        </p>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore enim corporis at eos
          reprehenderit sequi non velit, nemo, beatae exercitationem facere? Tenetur optio eius aut
          nisi? Quibusdam pariatur quos delectus.
        </p>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore enim corporis at eos
          reprehenderit sequi non velit, nemo, beatae exercitationem facere? Tenetur optio eius aut
          nisi? Quibusdam pariatur quos delectus.
        </p>
      </div>
      <Image width={600} height={600} src={"/image/aboutme.png"} alt="about me" className="px-12" />
      {/* #958888 */}
    </div>
  )
}

export default AboutSection
