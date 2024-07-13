import React from "react"
import Title from "../modules/Title"
import { Check } from "lucide-react"
import { getTranslations } from "next-intl/server"

const TechnicalGrowth: React.FC = async () => {
  const t = await getTranslations()
  return (
    <section>
      <Title size="lg" className="text-center">
        <h2>{t("home.technicalGrowth.title")}</h2>
        <h4 className="w-10/12 text-sm inline-block mt-3 md:w-8/12 lg:w-4/12">
          {t("home.technicalGrowth.desc")}
        </h4>
      </Title>
      <ul className="timeline timeline-snap-icon timeline-vertical max-md:timeline-compact my-12">
        <li>
          <Check className="timeline-middle bg-primary rounded-full" />
          <div className="timeline-start md:text-end mx-3 mb-10">
            <time className="italic">{t("home.technicalGrowth.timeline.one.subtitle")}</time>
            <Title className="my-2">
              <h3>{t("home.technicalGrowth.timeline.one.title")}</h3>
            </Title>
            <p>{t("home.technicalGrowth.timeline.one.desc")}</p>
          </div>
          <hr className="bg-primary" />
        </li>

        <li>
          <Check className="timeline-middle bg-primary rounded-full" />
          <div className="timeline-end mx-3 mb-10">
            <time className="italic">{t("home.technicalGrowth.timeline.two.subtitle")}</time>
            <Title className="my-2">
              <h3>{t("home.technicalGrowth.timeline.two.title")}</h3>
            </Title>
            <p>{t("home.technicalGrowth.timeline.two.desc")}</p>
          </div>
          <hr className="bg-primary" />
        </li>

        <li>
          <Check className="timeline-middle bg-primary rounded-full" />
          <div className="timeline-start md:text-end mx-3 mb-10">
            <time className="italic">{t("home.technicalGrowth.timeline.three.subtitle")}</time>
            <Title className="my-2">
              <h3>{t("home.technicalGrowth.timeline.three.title")}</h3>
            </Title>
            <p>{t("home.technicalGrowth.timeline.three.desc")}</p>
          </div>
          <hr className="bg-primary" />
        </li>

        <li>
          <Check className="timeline-middle bg-primary rounded-full" />
          <div className="timeline-end mx-3 mb-10">
            <time className="italic">{t("home.technicalGrowth.timeline.four.subtitle")}</time>
            <Title className="my-2">
              <h3>{t("home.technicalGrowth.timeline.four.title")}</h3>
            </Title>
            <p>{t("home.technicalGrowth.timeline.four.desc")}</p>
          </div>
          <hr className="bg-primary" />
        </li>

        <li>
          <Check className="timeline-middle bg-primary rounded-full" />
          <div className="timeline-start md:text-end mx-3 mb-10">
            <time className="italic">{t("home.technicalGrowth.timeline.five.subtitle")}</time>
            <Title className="my-2">
              <h3>{t("home.technicalGrowth.timeline.five.title")}</h3>
            </Title>
            <p>{t("home.technicalGrowth.timeline.five.desc")}</p>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default TechnicalGrowth
