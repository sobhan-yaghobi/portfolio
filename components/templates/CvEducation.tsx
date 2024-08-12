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
            <b className="text-lg">شبکه و نرم افزار</b>
            <p>دیپلم - هنرستان شریعتی - نیشابور</p>
          </div>
          <div className="flex flex-col items-end">
            <p>مهر 1400 تا خرداد 1403</p>
            <p className="bg-white/30 w-fit p-1 rounded-md">
              معدل <b>18.77</b>
            </p>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default CvEducation
