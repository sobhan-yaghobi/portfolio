import gsap from "gsap"
import { createTimeline } from "./utils"

export const technicalSkillListAnimate = () => {
  const timeLine = createTimeline("#skill-list", "-80%")
  timeLine.fromTo(
    "#skill-list .skill-list-title-child",
    {
      opacity: 0,
      y: 50,
      scale: 0.5,
    },
    { opacity: 1, y: 0, scale: 1, stagger: 0.2 }
  )

  timeLine.fromTo(
    "#skill-list .skill-item",
    {
      opacity: 0,
      y: 10,
    },
    { opacity: 1, y: 0, stagger: 0.06 },
    "-=.05"
  )

  const mainSkillContentChildElements = document.querySelectorAll("#main-skill-content > *")
  timeLine.fromTo(
    mainSkillContentChildElements,
    {
      opacity: 0,
      y: 10,
    },
    { opacity: 1, y: 0, stagger: 0.2 },
    "-=.05"
  )
}
