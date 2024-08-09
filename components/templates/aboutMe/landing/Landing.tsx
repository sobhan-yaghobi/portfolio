import React from "react"

import ButtonList from "./ButtonList"
import Content from "./Content"

const Landing: React.FC = () => {
  return (
    <section id="about-me-landing" className="flex flex-col items-center">
      <Content />
      <ButtonList />
    </section>
  )
}

export default Landing
