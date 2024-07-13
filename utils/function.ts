import { type ClassValue, clsx } from "clsx"
import gsap from "gsap"
import { twMerge } from "tailwind-merge"

export const random = (min: number, max: number, isFloor?: boolean) => {
  const number = gsap.utils.random(min, max)
  return isFloor ? Math.floor(number) : number
}

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export const isUserUseMobile = (userAgent: string) =>
  /iphone|ipad|ipod|android|blackberry|windows phone|(ipad|tablet|playbook|silk)|(android(?!.*mobile))/g.test(
    userAgent.toLowerCase()
  )
    ? true
    : false
