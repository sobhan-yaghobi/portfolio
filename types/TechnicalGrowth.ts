import { TypeTimeLine } from "./Utils"

export type TypeTechnicalGrowth = {
  id: string
  title: string
  subtitle: string
  description: string
  order: number
}

export type TypeTechnicalGrowthItemProps = {
  index: number
  technicalGrowthListLength: number
} & TypeTechnicalGrowth

export type TypeAnimateTechnicalGrowthElementsParams = {
  animateElement: (tl: TypeTimeLine, technicalGrowthItemElement: HTMLLIElement) => void
}
