import React from "react"
import { isEven } from "@/lib/utils"

import { TypeTechnicalGrowthItemProps } from "@/types/TechnicalGrowth"

import { Check } from "lucide-react"

import Title from "./Title"

const TechnicalGrowthItem: React.FC<TypeTechnicalGrowthItemProps> = ({
  title,
  subtitle,
  description,
  index,
  technicalGrowthListLength,
}) => {
  return (
    <li className="technical-growth-item-wrapper" data-direction={isEven(index) ? "start" : "end"}>
      <Check className="technical-growth-item-child timeline-middle bg-primary rounded-full" />
      <div
        className={`technical-growth-item mx-3 mb-10 max-lg:pb-20 ${
          isEven(index) ? "timeline-start md:text-end" : "timeline-end"
        }`}
      >
        <time className="technical-growth-item-child technical-growth-item-subtitle italic">
          {subtitle}
        </time>
        <Title className="technical-growth-item-child technical-growth-item-title my-2">
          <h3>{title}</h3>
        </Title>
        <p className="technical-growth-item-child technical-growth-item-description">
          {description}
        </p>
      </div>
      {index + 1 !== technicalGrowthListLength && (
        <hr className="technical-growth-item-hr bg-primary" />
      )}
    </li>
  )
}

export default TechnicalGrowthItem
