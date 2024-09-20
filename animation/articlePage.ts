import gsap from "gsap"

export const articlePageAnimate = () => {
  articleHeadlineAnimate()
}

const articleHeadlineAnimate = () => {
  gsap.to("#article", {
    scrollTrigger: {
      trigger: "#article",
      start: 0,
      end: "+=40%",
      onLeave: () => {
        gsap.to("#quick-show", {
          height: "3.5rem",
          opacity: 1,
          duration: 0.24,
          ease: "power1",
        })
      },
      onEnterBack: () => {
        gsap.to("#quick-show", {
          height: 0,
          opacity: 0,
          duration: 0.24,
          ease: "power1",
        })
      },
    },
  })
}
