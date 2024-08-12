import React from "react"
import Title from "../modules/Title"
import { socialFollowItems } from "./Footer"
import Image from "next/image"
import Link from "next/link"

const CvSocialMediaList: React.FC = () => {
  return (
    <section className="[&>*]:ml-3 [&>*]:mt-3 first:[&>*]:ml-0">
      <Title size="md">
        <h3>شبکه‌های اجتماعی</h3>
      </Title>
      <ul className="flex items-center gap-3">
        {socialFollowItems.map((social) => (
          <li key={social.id}>
            <Link href={""}>
              <Image
                height={30}
                width={30}
                className="h-7 w-auto"
                alt="social-image"
                src={social.logoSrc}
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default CvSocialMediaList
