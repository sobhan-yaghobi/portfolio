"use client"

import React, { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { useTranslations } from "next-intl"

import { animateLanding } from "@/utils/utils.animation"

import { CircleUser } from "lucide-react"

import Magnetic from "@/components/modules/Magnetic"
import Image from "next/image"
import Title from "../modules/Title"
import ContactMeButton from "./ContactMe.button"
import StarAnimation from "./Star.animation"
import Link from "next/link"

const HomeLanding: React.FC = () => {
  const t = useTranslations("heroSection")
  const container = useRef<HTMLDivElement>(null)

  //! ---------- Animation Action
  useGSAP(() => animateLanding(), { scope: container })

  return (
    <section ref={container} className="center flex-col">
      {/*//! ---------- Icon Packages Container  */}
      <div className="w-fit max-w-full center flex-col relative z-10 *:select-none max-md:hidden">
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
        <div className="row-icon-package my-6 flex flex-row">
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
              src={"/packages/material-ui.svg"}
              alt="material-ui"
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
              src={"/packages/next-js.svg"}
              alt="next-js"
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
        <div className="row-icon-package mt-6 flex flex-row">
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
      <div id="circle" className="size-10 rounded-full absolute z-0 -top-0" />
      {/*//! ---------- Title & Desc ----------  */}
      <div id="title" className="center flex-col mt-4">
        <div className="bg-neutral size-40 mb-4 rounded-full" />
        <Title size="lg" className="text-center lg:whitespace-pre">
          <h1>
            {t.rich("title", {
              important: (chunks) => (
                <span className="font-oswald font-bold text-primary">{chunks}</span>
              ),
            })}
          </h1>
        </Title>
        <p id="desc" className="w-full text-center px-5 mt-4 opacity-50 md:px-24 lg:px-56 xl:px-80">
          {t("desc")}
        </p>
      </div>
      {/*//! ---------- Quick Access Buttons ----------  */}
      <div id="quick-access-button" className="h-fit flex items-center my-12 overflow-hidden">
        <div className="access-button">
          <ContactMeButton className="btn btn-primary" />
        </div>
        <div id="split" className="divider divider-horizontal mx-1.5" />
        <Link href={"/about"}>
          <button className="access-button btn btn-ghost">
            <CircleUser className="icon" />
            {t("quickAccessButton.cv")}
          </button>
        </Link>
      </div>
      <StarAnimation delay={4} />
    </section>
  )
}

export default HomeLanding
