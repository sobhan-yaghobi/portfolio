import gsap from "gsap"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

//! ---------- Custom Animations ----------

export const animatePageIn = () => {
  const banner = document.querySelector("#banner")

  if (banner) {
    const tl = gsap.timeline()

    tl.set([banner], {
      yPercent: 0,
    }).to([banner], {
      yPercent: 100,
      stagger: 0.2,
    })
  }
}

export const animatePageOut = (href: string, router: AppRouterInstance) => {
  const banner = document.querySelector("#banner")

  if (banner) {
    const tl = gsap.timeline()
    tl.set([banner], {
      yPercent: -100,
    }).to([banner], {
      y: 0,
      onComplete: () => {
        router.push(href)
      },
    })
  }
}

export const animateLanding = () => {
  const sectionOne = () => {
    const tl = gsap.timeline({ delay: 0.2 })
    const mm = gsap.matchMedia()

    tl.fromTo("#title", { opacity: 0, y: 200 }, { duration: 1.5, opacity: 1, y: 0 })
    mm.add("(min-width: 768px)", () =>
      tl.fromTo(
        ".icon-package",
        { scale: 0 },
        { duration: 0.25, ease: "power1", scale: 1, stagger: 0.07 },
        "+=.6"
      )
    )
    tl.fromTo(
      "#circle",
      { background: "#fda699", y: "-1000%", filter: "blur(10px)", borderRadius: "50%" },
      { y: -100 }
    ).to("#circle", {
      duration: 1,
      ease: "circ",
      boxShadow: "0 0 60px 30px #ff9888, 0 0 200px 100px #d98a7e, 0 0 400px 350px #b216b275",
      filter: "blur(35px)",
    })

    return tl
  }
  const sectionTwo = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#desc",
        start: 0,
        end: "+=50%",
      },
    })

    tl.fromTo(
      "#desc",
      { opacity: 0, y: 10 },
      {
        duration: 1,
        opacity: 1,
        y: 0,
      }
    )

    tl.fromTo(
      "#quick-access-button .access-button",
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
      "#quick-access-button #split",
      { opacity: 0 },
      {
        duration: 1,
        opacity: 1,
      },
      "-=.3"
    )

    return tl
  }

  sectionOne()
  sectionTwo()
}
