"use client"

import React from "react"
import Title from "../modules/Title"
import Image from "next/image"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const AboutSection = () => {
  useGSAP(() => {
    let images = gsap.utils.toArray("#horizontal .content")

    gsap.to(images, {
      xPercent: -100 * (images.length - 1),
      scrollTrigger: {
        trigger: "#horizontal",
        pin: true,
        scrub: 1,
      },
    })
  }, [])
  return (
    <section>
      <div className="flex max-lg:flex-col max-xl:text-center max-xl:items-center overflow-x-hidden">
        <div className="flex flex-col gap-6 flex-1 [&>p]:text-justify max-xl:[&>p]:text-center xl:px-6">
          <Title size="lg">
            <h4>Lorem ipsum dolor sit amet consectetur.</h4>
          </Title>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, minima nisi! Sit
            tempora quidem dolorem optio itaque. Suscipit dicta magni similique id? Exercitationem
            veniam reiciendis porro, tempora quae iusto laborum. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Tempore, minima nisi! Sit tempora quidem dolorem optio
            itaque. Suscipit dicta magni similique id? Exercitationem veniam reiciendis porro,
            tempora quae iusto laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore enim corporis at eos
            reprehenderit sequi non velit, nemo, beatae exercitationem facere? Tenetur optio eius
            aut nisi? Quibusdam pariatur quos delectus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore enim corporis at eos
            reprehenderit sequi non velit, nemo, beatae exercitationem facere? Tenetur optio eius
            aut nisi? Quibusdam pariatur quos delectus.
          </p>
        </div>

        <Image
          width={600}
          height={600}
          src={"/image/aboutme.png"}
          alt="about me"
          className="px-12 max-xl:mt-12 max-md:hidden"
        />
      </div>
      <div
        id="horizontal"
        className="mt-12 w-full overflow-x-hidden flex gap-10 md:hidden [&>section]:h-96 [&>section]:w-fit [&>section]:shrink-0"
      >
        <section className="content">
          <Image
            className="about-me-image h-96 w-fit"
            width={200}
            height={300}
            src={"/image/A-mobile.png"}
            alt="about-me-image"
          />
        </section>
        <section className="content">
          <Image
            className="about-me-image h-96 w-fit"
            width={200}
            height={300}
            src={"/image/B-mobile.png"}
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
      </div>
    </section>
  )
}

export default AboutSection
