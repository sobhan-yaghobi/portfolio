import React from "react"
import Title from "../modules/Title"
import Image from "next/image"

const Skills = () => {
  return (
    <>
      <div className="mt-40" />
      <Title size="lg" className="text-center">
        <h2>Skills</h2>
      </Title>
      <div className="grid grid-cols-2">
        <ul className="flex flex-wrap gap-3">
          <li className="badge badge-lg gap-1 py-5">
            <Image className="icon" width={30} height={30} src="/packages/html.svg" alt="package" />
            HTML
          </li>
          <li className="badge badge-lg gap-1 py-5">
            <Image className="icon" width={30} height={30} src="/packages/css.svg" alt="package" />
            CSS
          </li>
          <li className="badge badge-lg gap-1 py-5">
            <Image className="icon" width={30} height={30} src="/packages/sass.svg" alt="package" />
            SASS
          </li>
          <li className="badge badge-lg gap-1 py-5">
            <Image
              className="icon"
              width={30}
              height={30}
              src="/packages/bootstrap.svg"
              alt="package"
            />
            BootStrap
          </li>
          <li className="badge badge-lg gap-1 py-5">
            <Image className="icon" width={30} height={30} src="/packages/js.svg" alt="package" />
            JavaScript
          </li>
          <li className="badge badge-lg gap-1 py-5">
            <Image className="icon" width={30} height={30} src="/packages/ts.svg" alt="package" />
            TypeScript
          </li>
          <li className="badge badge-lg gap-1 py-5">
            <Image
              className="icon"
              width={30}
              height={30}
              src="/packages/react.svg"
              alt="package"
            />
            React Js
          </li>
          <li className="badge badge-lg gap-1 py-5">
            <Image
              className="icon"
              width={30}
              height={30}
              src="/packages/next-js.svg"
              alt="package"
            />
            Next Js
          </li>
          <li className="badge badge-lg gap-1 py-5">
            <Image
              className="icon"
              width={30}
              height={30}
              src="/packages/prisma.svg"
              alt="package"
            />
            Prisma
          </li>
          <li className="badge badge-lg gap-1 py-5">
            <Image
              className="icon"
              width={30}
              height={30}
              src="/packages/supabase.svg"
              alt="package"
            />
            SupaBase
          </li>
          <li className="badge badge-lg gap-1 py-5">
            <Image className="icon" width={30} height={30} src="/packages/zod.svg" alt="package" />
            Zod
          </li>
          <li className="badge badge-lg gap-1 py-5">
            <Image
              className="icon"
              width={30}
              height={30}
              src="/packages/react-hook-form.svg"
              alt="package"
            />
            React Hook Form
          </li>
          <li className="badge badge-lg gap-1 py-5">
            <Image
              className="icon"
              width={30}
              height={30}
              src="/packages/lodash.svg"
              alt="package"
            />
            Lodash
          </li>
          <li className="badge badge-lg gap-1 py-5">
            <Image
              className="icon"
              width={30}
              height={30}
              src="/packages/material-ui.svg"
              alt="package"
            />
            Material UI
          </li>
          <li className="badge badge-lg gap-1 py-5">
            <Image
              className="icon"
              width={30}
              height={30}
              src="/packages/ant-design.svg"
              alt="package"
            />
            Ant Design
          </li>
          <li className="badge badge-lg gap-1 py-5">
            <Image className="icon" width={30} height={30} src="/packages/npm.svg" alt="package" />
            NPM
          </li>
          <li className="badge badge-lg gap-1 py-5">
            <Image
              className="icon"
              width={30}
              height={30}
              src="/packages/postman.svg"
              alt="package"
            />
            Postman
          </li>
          <li className="badge badge-lg gap-1 py-5">
            <Image
              className="icon"
              width={30}
              height={30}
              src="/packages/tailwind.svg"
              alt="package"
            />
            Tailwind CSS
          </li>
          <li className="badge badge-lg gap-1 py-5">
            <Image className="icon" width={30} height={30} src="/packages/vite.svg" alt="package" />
            Vite
          </li>
          <li className="badge badge-lg gap-1 py-5">
            <Image
              className="icon"
              width={30}
              height={30}
              src="/packages/figma.svg"
              alt="package"
            />
            Figma
          </li>
        </ul>
        <nav className="">nav</nav>
      </div>
    </>
  )
}

export default Skills
