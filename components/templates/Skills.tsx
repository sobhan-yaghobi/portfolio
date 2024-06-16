"use client"

import React, { useState } from "react"
import Title from "../modules/Title"
import Image from "next/image"

import { v4 as uuid } from "uuid"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const skills = [
  {
    id: uuid(),
    name: "HTML",
    src: "/packages/html.svg",
    content: (
      <>
        <p id="HTML">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis necessitatibus eum
          delectus sequi consequuntur dicta, itaque placeat maxime temporibus accusamus provident
          corporis quisquam dolore repudiandae enim omnis laboriosam voluptatem corrupti.
        </p>
        <div className="my-3">
          <h3 className="text-xl font-medium">Usage in this project's</h3>
          <ul className="mt-2 flex flex-wrap gap-2">
            <li className="btn btn-link">project 1</li>
            <li className="btn btn-link">project 2</li>
            <li className="btn btn-link">project 3</li>
            <li className="btn btn-link">project 4</li>
            <li className="btn btn-link">project 5</li>
            <li className="btn btn-link">project 6</li>
            <li className="btn btn-link">project 7</li>
            <li className="btn btn-link">project 8</li>
            <li className="btn btn-link">project 9</li>
          </ul>
        </div>
        <Link href={"/"} className="btn">
          Read More
          <ArrowUpRight className="icon" />
        </Link>
      </>
    ),
  },
  {
    id: uuid(),
    name: "CSS",
    src: "/packages/css.svg",
    content: <></>,
  },
  {
    id: uuid(),
    name: "SASS",
    src: "/packages/sass.svg",
    content: <></>,
  },
  {
    id: uuid(),
    name: "BootStrap",
    src: "/packages/bootstrap.svg",
    content: <></>,
  },
  {
    id: uuid(),
    name: "JavaScript",
    src: "/packages/js.svg",
    content: <></>,
  },
  {
    id: uuid(),
    name: "JavaScript",
    src: "/packages/ts.svg",
    content: <></>,
  },
  {
    id: uuid(),
    name: "React Js",
    src: "/packages/react.svg",
    content: <></>,
  },
  {
    id: uuid(),
    name: "Next Js",
    src: "/packages/next-js.svg",
    content: <></>,
  },
  {
    id: uuid(),
    name: "Prisma",
    src: "/packages/prisma.svg",
    content: <></>,
  },
  {
    id: uuid(),
    name: "SupaBase",
    src: "/packages/supabase.svg",
    content: <></>,
  },
  {
    id: uuid(),
    name: "Zod",
    src: "/packages/zod.svg",
    content: <></>,
  },
  {
    id: uuid(),
    name: "React Hook Form",
    src: "/packages/react-hook-form.svg",
    content: <></>,
  },
  {
    id: uuid(),
    name: "Lodash",
    src: "/packages/lodash.svg",
    content: <></>,
  },
  {
    id: uuid(),
    name: "Material UI",
    src: "/packages/material-ui.svg",
    content: <></>,
  },
  {
    id: uuid(),
    name: "Ant Design",
    src: "/packages/ant-design.svg",
    content: <></>,
  },
  {
    id: uuid(),
    name: "NPM",
    src: "/packages/npm.svg",
    content: <></>,
  },
  {
    id: uuid(),
    name: "Postman",
    src: "/packages/postman.svg",
    content: <></>,
  },
  {
    id: uuid(),
    name: "Tailwind CSS",
    src: "/packages/tailwind.svg",
    content: <></>,
  },
  {
    id: uuid(),
    name: "Vite",
    src: "/packages/vite.svg",
    content: <></>,
  },
  {
    id: uuid(),
    name: "Figma",
    src: "/packages/figma.svg",
    content: <></>,
  },
]

const Skills = () => {
  const [mainSkill, setMainSkill] = useState(skills.at(0))
  return (
    <>
      <div className="mt-40" />
      <Title size="lg" className="text-center">
        <h2>Skills</h2>
      </Title>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 my-12">
        <ul className="flex flex-wrap gap-3">
          {skills.map((item) => (
            <li key={item.id}>
              <Link href={`#${item.name}`}>
                <button
                  className={`btn ${
                    item.id === mainSkill?.id
                      ? "outline-active hover:outline-active"
                      : "hover:outline-active"
                  }`}
                  onClick={() => setMainSkill(item)}
                >
                  <Image className="icon" width={30} height={30} src={item.src} alt={item.name} />
                  {item.name}
                </button>
              </Link>
            </li>
          ))}
        </ul>
        <nav>{mainSkill?.content}</nav>
      </div>
    </>
  )
}

export default Skills
