import gsap from "gsap"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

export type target = string | React.MutableRefObject<unknown>
export type duration = number
export type delay = number

export type animation = keyof typeof gsapAnimation

export const gsapAnimation = {
  fadeInUp: (target: target, duration?: duration, delay?: delay) => {
    gsap.fromTo(
      target,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, ...(duration && { duration }), ...(delay && { delay }) }
    )
  },

  animatePageIn: () => {
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
  },

  animatonPageOut: (href: string, router: AppRouterInstance) => {
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
  },
}
