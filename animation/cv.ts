import { createTimeline } from "./utils"

export const cvAnimate = () => {
  const timeline = createTimeline("#cv")

  timeline.fromTo(
    "#cv .cv-shape",
    { opacity: 0, y: -300 },
    { opacity: 1, y: 0, delay: 1, duration: 1 }
  )
}
