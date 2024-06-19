import { Share, SquareArrowOutUpRight } from "lucide-react"
import React from "react"
import CopyToClipboard from "./CopyToClipboard"
import Title from "./Title"

const QuickAccessArticleSide = () => {
  return (
    <>
      <div className="bg-base-200 rounded-xl">
        <CopyToClipboard type="text" value="blog url" className="btn w-full btn-outline">
          <SquareArrowOutUpRight className="icon" />
          Quick Share
        </CopyToClipboard>
      </div>
      <div className="bg-base-200 rounded-xl">
        <ul className="steps steps-vertical">
          <li className="step step-primary">Head</li>
          <li className="step">Headline 1</li>
          <li className="step">Headline 2</li>
          <li className="step">Headline 3</li>
        </ul>
      </div>
      <div className="bg-base-200 rounded-xl">
        <Title size="sm">
          <h2>Tags</h2>
        </Title>
        <ul className="mt-3">
          {["tag 1", "tag 2", "tag 3", "tag 4", "tag 5"].map((item) => (
            <li key={item} className="badge badge-lg">
              # {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default QuickAccessArticleSide
