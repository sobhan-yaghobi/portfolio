import gsap from "gsap"

export const projectAnimate = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#project-list",
      start: "-50%",
      markers: true,
    },
  })
  tl.fromTo(
    "#project-list-title-wrapper .project-list-title-child",
    {
      opacity: 0,
      y: 50,
      scale: 0.5,
    },
    { opacity: 1, y: 0, scale: 1, stagger: 0.2 }
  ).fromTo(
    "#project-list .project-card",
    {
      opacity: 0,
      y: 100,
    },
    { opacity: 1, y: 0, stagger: 0.2 },
    "-=.05"
  )
}
