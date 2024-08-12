import React from "react"
import Title from "../modules/Title"

const CvEducation: React.FC = () => {
  return (
    <section>
      <Title size="md">
        <h3>مدارک تحصیلی</h3>
      </Title>
      <ul>
        <li className="flex items-center justify-between [&>div]:p-3">
          <div className="flex-1">
            <b>Network and software</b>
            <p>diploma - Dr. Ali Shariati Conservatory - neyshabour</p>
          </div>
          <div>
            <p>2021 - 2024</p>
            <p className="bg-white/30 p-1 rounded-md">
              Average <b>18.77</b>
            </p>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default CvEducation
