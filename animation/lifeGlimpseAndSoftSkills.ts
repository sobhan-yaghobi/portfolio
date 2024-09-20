import gsap from "gsap"
import { createTimeline } from "./utils"
import { TypeTimeLine } from "../types/Utils"

export const lifeGlimpseAndSoftSkillsAnimate = () => {
  const mm = gsap.matchMedia()
  const timeLine = createTimeline("#life-glimpse-and-soft-skills", "-90%")

  mm.add("(min-width: 768px)", () => {
    animateLifeGlimpseAndSoftSkillsShowUpForDesktop(timeLine)
  })

  mm.add("(max-width: 799px)", () => {
    animateLifeGlimpseAndSoftSkillsShowUpForMobile(timeLine)
    imageSliderAnimate()
  })
}

const animateLifeGlimpseAndSoftSkillsShowUpForDesktop = (timeLine: TypeTimeLine) => {
  animateLifeGlimpseAndSoftSkillsTitle(timeLine)
}

const animateLifeGlimpseAndSoftSkillsShowUpForMobile = (timeLine: TypeTimeLine) => {
  animateLifeGlimpseAndSoftSkillsTitle(timeLine)
  timeLine.fromTo(
    "#horizontal .content",
    {
      opacity: 0,
      y: 100,
    },
    { opacity: 1, y: 0, stagger: 0.2 },
    "-=.05"
  )
}

const animateLifeGlimpseAndSoftSkillsTitle = (timeLine: TypeTimeLine) => {
  const contentChildElements = document.querySelectorAll(
    ".life-glimpse-and-soft-skills-content-child"
  )

  timeLine
    .fromTo(contentChildElements, { opacity: 0, y: 100 }, { opacity: 1, y: 0, stagger: 0.6 })
    .fromTo(
      "#image-soft-skills-desktop",
      { opacity: 0, scale: 0.8, y: 50 },
      { opacity: 1, scale: 1, y: 0 },
      "-=.5"
    )
}

const imageSliderAnimate = () => {
  let imageElementList = gsap.utils.toArray("#horizontal .content")

  gsap.to(imageElementList, {
    xPercent: -100 * (imageElementList.length - 1),
    scrollTrigger: {
      trigger: "#horizontal",
      pin: true,
      scrub: 1,
    },
  })
}
