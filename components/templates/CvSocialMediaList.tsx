import React from "react"

import { TypeSocialMedia } from "@/lib/types/socialMedia"

import Title from "../modules/Title"
import Image from "next/image"
import Link from "next/link"

export type CvSocialMediaList = {
  socialMediaList: TypeSocialMedia[]
}

const CvSocialMediaList: React.FC<CvSocialMediaList> = ({ socialMediaList }) => {
  return (
    <section className="[&>*]:ml-3 [&>*]:mt-3 first:[&>*]:ml-0">
      <Title size="md">
        <h3>شبکه‌های اجتماعی</h3>
      </Title>
      <ul className="flex items-center gap-3">
        {socialMediaList.map((socialMedia) => (
          <li key={socialMedia.id}>
            <Link target="_blank" href={socialMedia.link}>
              <Image
                height={30}
                width={30}
                className="h-7 w-auto"
                alt="social-media-image"
                src={socialMedia.logo}
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default CvSocialMediaList
