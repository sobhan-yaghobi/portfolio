"use client"

import React, { useRef } from "react"

import { useGSAP } from "@gsap/react"
import { useTranslations } from "next-intl"

import Magnetic from "@components/modules/Magnetic"
import Image from "next/image"
import { animateLanding } from "@/utils/utils.animation"
import Title from "../modules/Title"

const HeroSection: React.FC = () => {
  const t = useTranslations("heroSection")
  const container = useRef<HTMLDivElement>(null)

  //! ---------- Animation Action
  useGSAP(() => animateLanding(), { scope: container })
  return (
    <div ref={container} className="center flex-col">
      {/*//! ---------- Icon Packages Container  */}
      <div className="w-fit max-w-full center flex-col relative *:select-none z-10 max-md:hidden">
        {/*//! ---------- Row 1  */}
        <div className="row-icon-package flex flex-row-reverse">
          <Magnetic>
            <Image
              className="icon-package mx-3"
              priority
              width={50}
              height={50}
              draggable={false}
              src={"/packages/js.svg"}
              alt="js"
            />
          </Magnetic>
          <Magnetic>
            <Image
              className="icon-package mx-3"
              priority
              width={50}
              height={50}
              draggable={false}
              src={"/packages/react.svg"}
              alt="react"
            />
          </Magnetic>
          <Magnetic>
            <Image
              className="icon-package mx-3"
              priority
              width={50}
              height={50}
              draggable={false}
              src={"/packages/safari.svg"}
              alt="safari"
            />
          </Magnetic>
          <Magnetic>
            <Image
              className="icon-package mx-3"
              priority
              width={50}
              height={50}
              draggable={false}
              src={"/packages/postman.svg"}
              alt="postman"
            />
          </Magnetic>
          <Magnetic>
            <Image
              className="icon-package mx-3"
              priority
              width={50}
              height={50}
              draggable={false}
              src={"/packages/zod.svg"}
              alt="zod"
            />
          </Magnetic>
          <Magnetic>
            <Image
              className="icon-package mx-3"
              priority
              width={50}
              height={50}
              draggable={false}
              src={"/packages/vue.svg"}
              alt="vue"
            />
          </Magnetic>
          <Magnetic>
            <Image
              className="icon-package mx-3"
              priority
              width={50}
              height={50}
              draggable={false}
              src={"/packages/bootstrap.svg"}
              alt="bootstrap"
            />
          </Magnetic>
          <Magnetic>
            <Image
              className="icon-package mx-3"
              priority
              width={50}
              height={50}
              draggable={false}
              src={"/packages/ts.svg"}
              alt="ts"
            />
          </Magnetic>
        </div>

        {/*//! ---------- Row 2  */}
        <div className="row-icon-package flex flex-row my-6">
          <Magnetic>
            <Image
              className="icon-package mx-3"
              priority
              width={50}
              height={50}
              draggable={false}
              src={"/packages/github.svg"}
              alt="github"
            />
          </Magnetic>
          <Magnetic>
            <Image
              className="icon-package mx-3"
              priority
              width={50}
              height={50}
              draggable={false}
              src={"/packages/redux.svg"}
              alt="redux"
            />
          </Magnetic>

          <Magnetic>
            <Image
              className="icon-package mx-3"
              priority
              width={50}
              height={50}
              draggable={false}
              src={"/packages/materialUi.svg"}
              alt="materialUi"
            />
          </Magnetic>
          <Magnetic>
            <Image
              className="icon-package mx-3"
              priority
              width={50}
              height={50}
              draggable={false}
              src={"/packages/vite.svg"}
              alt="vite"
            />
          </Magnetic>
          <Magnetic>
            <Image
              className="icon-package mx-3"
              priority
              width={50}
              height={50}
              draggable={false}
              src={"/packages/git.svg"}
              alt="git"
            />
          </Magnetic>
          <Magnetic>
            <Image
              className="icon-package mx-3"
              priority
              width={50}
              height={50}
              draggable={false}
              src={"/packages/nextJs.svg"}
              alt="nextJs"
            />
          </Magnetic>
        </div>

        {/*//! ---------- Row 3  */}
        <div className="row-icon-package flex flex-row-reverse">
          <Magnetic>
            <Image
              className="icon-package mx-3"
              priority
              width={50}
              height={50}
              draggable={false}
              src={"/packages/stackoverFlow.svg"}
              alt="stackoverFlow"
            />
          </Magnetic>
          <Magnetic>
            <Image
              className="icon-package mx-3"
              priority
              width={50}
              height={50}
              draggable={false}
              src={"/packages/firefox.svg"}
              alt="firefox"
            />
          </Magnetic>
          <Magnetic>
            <Image
              className="icon-package mx-3"
              priority
              width={50}
              height={50}
              draggable={false}
              src={"/packages/vscode.svg"}
              alt="vscode"
            />
          </Magnetic>
          <Magnetic>
            <Image
              className="icon-package mx-3"
              priority
              width={50}
              height={50}
              draggable={false}
              src={"/packages/google.svg"}
              alt="google"
            />
          </Magnetic>
        </div>

        {/*//! ---------- Row 4  */}
        <div className="row-icon-package flex flex-row mt-6">
          <Magnetic>
            <Image
              className="icon-package mx-3"
              priority
              width={50}
              height={50}
              draggable={false}
              src={"/packages/gitlab.svg"}
              alt="gitlab"
            />
          </Magnetic>
          <Magnetic>
            <Image
              className="icon-package mx-3"
              priority
              width={50}
              height={50}
              draggable={false}
              src={"/packages/tailwind.svg"}
              alt="tailwind"
            />
          </Magnetic>
        </div>
      </div>

      {/*//! ---------- Bulb ----------  */}
      <div id="circle" className="size-10 absolute z-0 -top-0 rounded-full" />

      {/*//! ---------- Title ----------  */}
      <div id="title" className="center flex-col mt-4">
        <div className="bg-neutral size-40 mb-4 rounded-full" />
        <Title size="lg" className="text-center lg:whitespace-pre">
          <h1>
            {t.rich("title", {
              important: (chunks) => <span className="oswald-bold text-primary">{chunks}</span>,
            })}
          </h1>
        </Title>
        <p id="desc" className="px-10 text-center opacity-50 mt-4 md:px-24 lg:px-56 xl:px-80">
          {t("desc")}
        </p>
      </div>
      <div className="h-screen"></div>
    </div>
  )
}

export default HeroSection
