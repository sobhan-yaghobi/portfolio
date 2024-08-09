import React from "react"
import t from "@/messages/fa.json"

import Title from "../../modules/Title"
import Image from "next/image"

const LifeGlimpseAndSoftSkills = () => {
  const { title, description } = t.about.me

  return (
    <section id="life-glimpse-and-soft-skills">
      <div className="py-3 flex overflow-hidden max-lg:flex-col max-xl:text-center max-xl:items-center overflow-x-hidden">
        <div
          id="life-glimpse-and-soft-skills-content"
          className="flex flex-col gap-6 flex-1 [&>p]:text-justify max-xl:[&>p]:text-center xl:px-6"
        >
          <Title className="life-glimpse-and-soft-skills-content-child" size="lg">
            <h4>{title}</h4>
          </Title>
          <p
            className="life-glimpse-and-soft-skills-content-child"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>

        <Image
          id="image-soft-skills-desktop"
          width={600}
          height={600}
          src={"/image/aboutMe.png"}
          alt="about me"
          className="px-12 max-xl:mt-12 max-md:hidden"
        />
      </div>
      <div
        id="horizontal"
        dir="ltr"
        className="mt-12 pt-12 w-full overflow-x-hidden flex gap-10 md:hidden [&>section]:h-96 [&>section]:w-fit [&>section]:shrink-0"
      >
        <section className="content">
          <Image
            className="about-me-image h-96 w-fit"
            width={200}
            height={300}
            src={"/image/T-mobile.png"}
            alt="about-me-image"
          />
        </section>
        <section className="content">
          <Image
            className="about-me-image h-96 w-fit"
            width={200}
            height={300}
            src={"/image/C-mobile.png"}
            alt="about-me-image"
          />
        </section>
        <section className="content">
          <Image
            className="about-me-image h-96 w-fit"
            width={200}
            height={300}
            src={"/image/D-mobile.png"}
            alt="about-me-image"
          />
        </section>
        <section className="content">
          <Image
            className="about-me-image h-96 w-fit"
            width={200}
            height={300}
            src={"/image/R-mobile.png"}
            alt="about-me-image"
          />
        </section>
      </div>
    </section>
  )
}

export default LifeGlimpseAndSoftSkills
