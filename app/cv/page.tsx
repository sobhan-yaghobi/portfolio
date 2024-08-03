import React from "react"
import { random } from "@/lib/utils"

import { MapPin } from "lucide-react"

import Image from "next/image"
import Email from "@/components/modules/Email"
import Title from "@/components/modules/Title"
import ContactMeButton from "@/components/templates/ContactMe.button"
import { ProjectCvCard } from "@/components/modules/Project.card"

const page: React.FC = () => {
  return (
    <div className="w-full relative lg:px-52 lg:py-12">
      <div className="bg-black/50 w-full rounded-xl relative overflow-hidden lg:p-12 max-lg:container">
        <div className="w-full h-52 flex absolute -top-10 -translate-x-1/2 left-1/2 -z-10">
          <div className="bg-primary w-full h-96 blur-3xl rounded-full"></div>
          <div className="bg-primary w-full h-52 blur-3xl absolute" />
          <div className="bg-primary w-full h-96 blur-3xl rounded-full"></div>
        </div>
        <div className="flex items-center justify-between flex-col gap-6">
          <div className="" />
          <Image
            width={300}
            height={300}
            className="size-60 bg-neutral rounded-full object-cover"
            src={"/image/prof.jpg"}
            alt="profile"
          />
          <Title size="lg" className="text-center">
            <h1>Sobhan Yaghobi</h1>
          </Title>
          <p className="btn btn-primary">Front End Developer</p>
          <ul className="w-full mt-3 flex justify-between items-center max-lg:flex-col max-lg:gap-6">
            <li className="flex items-center gap-2">
              <Email className="*:stroke-primary" />
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="icon stroke-primary" />
              <span>Iran , Khorasan Razavi, Mashhad</span>
            </li>
            <li className="flex items-center gap-2">
              <ContactMeButton className="flex-row-reverse *:stroke-primary" value="_PHONE" />
            </li>
          </ul>
        </div>
        <div className="divider" />
        <div className="flex max-lg:flex-col">
          <div className="w-1/2 *:text-sm [&>*]:mt-12 max-lg:w-full">
            <section className="[&>*]:ml-3 [&>*]:mt-3 first:[&>*]:ml-0">
              <Title size="md">
                <h3>About Me</h3>
              </Title>
              <p>
                Hello, I am Sobhan Yaghobi, a Front-End programmer with a love for the world of
                coding, design and the web. I love new things and creating interesting projects.
                When it comes to coding and technical projects. I always find time to enjoy life and
                follow my hobbies such as exercising and studying (I need to increase my study
                time). Combining personal life with a profession that I am interested in is the best
                way to achieve success and job satisfaction. I always tried to balance between the
                two and enjoy both.
              </p>
            </section>

            <section>
              <Title size="md">
                <h3>Education</h3>
              </Title>
              <ul>
                <li className="flex items-center justify-between [&>div]:p-3">
                  <div className="flex-1">
                    <b>Network and software</b>
                    <p>diploma - Dr. Ali Shariati Conservatory - neyshabour</p>
                  </div>
                  <div>
                    <p>2021 - 2024</p>
                    <p className="bg-white/30 p-1 rounded-md">
                      Average <b>18.77</b>
                    </p>
                  </div>
                </li>
              </ul>
            </section>

            <section className="[&>*]:ml-3 [&>*]:mt-3 first:[&>*]:ml-0">
              <Title size="md">
                <h3>Soft Skills</h3>
              </Title>
              <ul className="[&>*]:mt-3 first:[&>*]:mt-0">
                {[
                  "flexibility",
                  "good listener",
                  "team work",
                  "Perseverance",
                  "Training",
                  "sense of humor",
                ].map((item, index) => (
                  <li key={index} className="flex">
                    <span className="text-base">{item}</span>
                    <div className="rating flex flex-1 gap-1 justify-end">
                      {Array(6)
                        .fill("")
                        .map((_, index) => (
                          <input
                            key={index}
                            type="radio"
                            name={`${item}-rating-1`}
                            className="mask mask-circle"
                            defaultChecked={random(1, 6, true) === index ? true : false}
                            disabled
                          />
                        ))}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="divider divider-horizontal max-lg:hidden" />

          <div className="w-1/2 *:text-sm [&>*]:mt-12 max-lg:w-full">
            <section className="[&>*]:ml-3 [&>*]:mt-6 first:[&>*]:ml-0">
              <Title size="md">
                <h3>Technical skills</h3>
              </Title>

              {Array(20, 40, 50, 80, 100, 100, 90, 50).map((item, index) => (
                <div key={index}>
                  <h5 className="text-base font-bold mr-3">Title {index + 1}</h5>
                  <div className="flex-1 relative">
                    <span>between 2 & 1 year</span>
                    <progress
                      className="progress progress-primary h-5 mt-1"
                      value={item}
                      max="100"
                      aria-label={`${item}`}
                    />
                  </div>
                </div>
              ))}

              <ul className="flex flex-wrap gap-2">
                {[
                  "Javascript",
                  "Typescript",
                  "React Js",
                  "Next Js",
                  "Zod",
                  "React Hook Form",
                  "Material Ui",
                  "CSS",
                  "SASS",
                  "NPM",
                  "SupaBase",
                  "Vite",
                  "Lodash",
                  "Prisma",
                  "BootStrap",
                ].map((item, index) => (
                  <li key={index} className="badge badge-lg">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="[&>*]:mt-6">
              <Title size="md">
                <h3>Projects</h3>
              </Title>
              <ul>
                <li>
                  <ProjectCvCard />
                </li>

                <li>
                  <ProjectCvCard />
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
