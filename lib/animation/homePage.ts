import gsap from "gsap"

export const landingAnimate = () => {
  landingAnimatePartOne()
  landingAnimatePartTwo()
}

const landingAnimatePartOne = () => {
  const tl = gsap.timeline({ delay: 0.1 })
  const mm = gsap.matchMedia()

  tl.fromTo("#landing-content-wrapper", { opacity: 0, y: 200 }, { duration: 1, opacity: 1, y: 0 })

  mm.add("(min-width: 768px)", () =>
    tl.fromTo(
      ".icon-package",
      { scale: 0 },
      { duration: 0.15, ease: "power1.in", scale: 1, stagger: 0.05 },
      "+=.6"
    )
  )

  tl.fromTo(
    "#landing-bulb",
    { background: "#fda699", y: "-1000%", filter: "blur(10px)", borderRadius: "50%" },
    { y: -100 }
  ).to("#landing-bulb", {
    duration: 0.5,
    ease: "circ",
    boxShadow: "0 0 60px 30px #ff9888, 0 0 200px 100px #d98a7e, 0 0 400px 350px #b216b275",
    filter: "blur(35px)",
  })

  return tl
}

const landingAnimatePartTwo = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#landing-description",
      start: 0,
      end: "+=50%",
    },
  })

  tl.fromTo(
    "#landing-description",
    { opacity: 0, y: 10 },
    {
      duration: 1,
      opacity: 1,
      y: 0,
    }
  )

  tl.fromTo(
    "#landing-button-list .access-button",
    { y: 100 },
    {
      duration: 1,
      ease: "bounce.in",
      y: 0,
      stagger: 0.05,
    },
    "-=1.2"
  )

  tl.fromTo(
    "#landing-button-list #split",
    { opacity: 0 },
    {
      duration: 1,
      opacity: 1,
    },
    "-=.3"
  )

  return tl
}
