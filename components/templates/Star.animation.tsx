"use client"

import React, { useState } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { random } from "@/lib/utils"

type StarAnimationProps = {
  delay?: gsap.TweenValue
}

const StarAnimation: React.FC<StarAnimationProps> = ({ delay }) => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  useGSAP(() => {
    animationAction()
  })

  const animationAction = () => {
    const { innerHeight, innerWidth } = window
    setWindowSize({ width: innerWidth, height: innerHeight })

    const elements = document.querySelectorAll(".star") as NodeListOf<HTMLDivElement>
    elements.forEach((elem) =>
      gsap.fromTo(
        elem,
        { opacity: 0 },
        {
          delay: delay,
          opacity: 1,
          repeat: -1,
          duration: elem.dataset.duration,
          transform: elem.classList.contains("T")
            ? "translate(100px , 100px)"
            : "translate(-100px , -100px)",
        }
      )
    )
  }

  const recArray = [
    {
      count: 30,
      direction: "T",
      left: { min: 0, max: 100 },
      top: { min: 0, max: 50 },
    },

    {
      count: 30,
      direction: "B",
      left: { min: 0, max: 100 },
      top: { min: 50, max: 100 },
    },
  ]
  return (
    <div className="absolute w-full h-screen overflow-hidden top-0 left-0 -z-10">
      {recArray.map((item) =>
        Array(item.count)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              data-duration={random(5, 10)}
              className={`star ${item.direction}`}
              style={{
                left: `${random(item.left.min, item.left.max)}%`,
                top: `${random(item.top.min, item.top.max)}%`,
              }}
            />
          ))
      )}
    </div>
  )
}

export default StarAnimation
