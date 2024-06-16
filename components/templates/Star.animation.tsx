"use client"

import React, { useState } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { random } from "@/utils/utils.function"

type StarAnimationProps = {
  delay?: gsap.TweenValue
}

const StarAnimation: React.FC<StarAnimationProps> = ({ delay }) => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  useGSAP(() => {
    const { innerHeight, innerWidth } = window
    setWindowSize({ width: innerWidth, height: innerHeight })

    const elements = document.querySelectorAll(".star") as NodeListOf<HTMLDivElement>
    elements.forEach((elem) =>
      gsap.fromTo(
        elem,
        { opacity: 0, scale: elem.style.scale },
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
  }, [])

  const recArray = [
    {
      count: 50,
      direction: "T",
      left: { min: 0, max: windowSize.width },
      top: { min: 0, max: windowSize.height / 2 },
    },

    {
      count: 50,
      direction: "B",
      left: { min: 0, max: windowSize.width },
      top: { min: windowSize.height / 2, max: windowSize.height },
    },
  ]
  return (
    <div className="absolute w-full h-screen overflow-hidden top-0 left-0">
      {recArray.map((item) =>
        Array(item.count)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              data-duration={random(5, 10)}
              className={`star -z-10 blur-sm ${item.direction}`}
              style={{
                left: random(item.left.min, item.left.max),
                top: random(item.top.min, item.top.max),
                scale: random(0.3, 0.5),
              }}
            />
          ))
      )}
    </div>
  )
}

export default StarAnimation
