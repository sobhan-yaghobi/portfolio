import { type ClassValue, clsx } from "clsx"
import gsap from "gsap"
import { twMerge } from "tailwind-merge"

export const random = (min: number, max: number) => gsap.utils.random(min, max)

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))
