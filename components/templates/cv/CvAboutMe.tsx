import React from "react"

import { TypeCvAboutMeProps } from "@/types/Cv"

import Title from "../../modules/Title"

const CvAboutMe: React.FC<TypeCvAboutMeProps> = ({ bio }) => {
  return (
    <section className="[&>*]:ml-3 [&>*]:mt-3 first:[&>*]:ml-0">
      <Title size="md">
        <h3>در باره من</h3>
      </Title>
      <p>{bio}</p>
    </section>
  )
}

export default CvAboutMe
