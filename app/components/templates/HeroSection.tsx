"use client"

import React, { useRef } from "react"

import { useGSAP } from "@gsap/react"
import { useTranslations } from "next-intl"

import Magnetic from "@components/modules/Magnetic"
import Image from "next/image"
import { animateLanding } from "@/utils/utils.animation"

const HeroSection: React.FC = () => {
  const t = useTranslations("heroSection")
  const container = useRef<HTMLDivElement>(null)

  //! ---------- Animation Action
  useGSAP(() => animateLanding(), { scope: container })
  return (
    <div ref={container} className="center flex-col max-lg:hidden">
      {/*//! ---------- Icon Packages Container  */}
      <div className="w-fit center flex-col relative *:select-none">
        {/*//! ---------- Row 1  */}
        <div className="row-icon-package flex flex-row-reverse relative z-10">
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
      <div className="circle w-10 h-10 absolute z-0 -top-0 rounded-full" />

      {/*//! ---------- Title ----------  */}
      <div className="title center flex-col mt-4">
        <div className="bg-neutral w-40 h-40 mb-4 rounded-full" />
        <h1 className="font-title text-gradient text-gradient-from text-4xl text-center whitespace-pre">
          {t.rich("title", {
            important: (chunks) => <span className="oswald-bold text-primary">{chunks}</span>,
          })}
        </h1>
        <p className="desc text-neutral-50/35 w-5/12 text-center mt-4">{t("desc")}</p>
      </div>
      <div className="h-screen"></div>
    </div>
  )
}

export default HeroSection
