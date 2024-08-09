import React from "react"
import t from "@/messages/fa.json"
import { isEven } from "@/lib/utils"
import { getTechnicalGrowthList } from "@/lib/fetcher/technicalGrowth"

import { TypeTechnicalGrowthItemProps } from "@/lib/types/technicalGrowth.type"

import { Check } from "lucide-react"

import Title from "../modules/Title"

const TechnicalGrowth: React.FC = async () => {
  const technicalGrowthList = await getTechnicalGrowthList()

  return technicalGrowthList.length ? (
    <section id="technical-growth">
      <Title size="lg" className="text-center">
        <h2 className="technical-growth-list-title-child">{t.home.technicalGrowth.title}</h2>
        <h4 className="technical-growth-list-title-child w-10/12 text-sm inline-block mt-3 md:w-8/12 lg:w-4/12">
          {t.home.technicalGrowth.desc}
        </h4>
      </Title>
      <ul className="timeline timeline-snap-icon timeline-vertical max-md:timeline-compact my-12 overflow-hidden">
        {technicalGrowthList.map((technicalGrowth, index) => (
          <TechnicalGrowthItem
            key={technicalGrowth.id}
            {...technicalGrowth}
            index={index}
            technicalGrowthListLength={technicalGrowthList.length}
          />
        ))}
      </ul>
    </section>
  ) : null
}

export const TechnicalGrowthItem: React.FC<TypeTechnicalGrowthItemProps> = ({
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

export default TechnicalGrowth
