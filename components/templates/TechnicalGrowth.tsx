import React from "react"
import t from "@/messages/fa.json"
import { isEven } from "@/lib/utils"
import { getTechnicalGrowthList } from "@/lib/fetcher/technicalGrowth"

import { Check } from "lucide-react"

import Title from "../modules/Title"

const TechnicalGrowth: React.FC = async () => {
  const technicalGrowthList = await getTechnicalGrowthList()

  return technicalGrowthList.length ? (
    <section>
      <Title size="lg" className="text-center">
        <h2>{t.home.technicalGrowth.title}</h2>
        <h4 className="w-10/12 text-sm inline-block mt-3 md:w-8/12 lg:w-4/12">
          {t.home.technicalGrowth.desc}
        </h4>
      </Title>
      <ul className="timeline timeline-snap-icon timeline-vertical max-md:timeline-compact my-12">
        {technicalGrowthList.map((technicalGrowth, index) => (
          <li key={technicalGrowth.id}>
            <Check className="timeline-middle bg-primary rounded-full" />
            <div
              className={`${
                isEven(index) ? "timeline-start md:text-end" : "timeline-end"
              } mx-3 mb-10`}
            >
              <time className="italic">{technicalGrowth.subtitle}</time>
              <Title className="my-2">
                <h3>{technicalGrowth.title}</h3>
              </Title>
              <p>{technicalGrowth.description}</p>
            </div>
            {index + 1 !== technicalGrowthList.length && <hr className="bg-primary" />}
          </li>
        ))}
      </ul>
    </section>
  ) : null
}

export default TechnicalGrowth
