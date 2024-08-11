import React from "react"
import faMessages from "@/messages/fa.json"
import { getTechnicalGrowthList } from "@/lib/fetcher/technicalGrowth"

import Title from "../modules/Title"
import TechnicalGrowthItem from "../modules/TechnicalGrowthItem"

const TechnicalGrowth: React.FC = async () => {
  const { title, desc } = faMessages.home.technicalGrowth
  const technicalGrowthList = await getTechnicalGrowthList()

  return technicalGrowthList.length ? (
    <section id="technical-growth">
      <Title size="lg" className="text-center">
        <h2 className="technical-growth-list-title-child">{title}</h2>
        <h4 className="technical-growth-list-title-child w-10/12 text-sm inline-block mt-3 md:w-8/12 lg:w-4/12">
          {desc}
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

export default TechnicalGrowth
