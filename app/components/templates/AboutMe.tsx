import React from "react"
import Title from "../modules/Title"
import { Check } from "lucide-react"

const AboutMe: React.FC = () => {
  return (
    <>
      <div className="mt-40" />
      <Title size="lg" className="text-center">
        <h2>About Me</h2>
        <h4 className="w-10/12 text-sm inline-block mt-3 md:w-8/12 lg:w-4/12">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias quis dicta saepe
          porro, dolores ea nostrum reprehenderit ipsum laboriosam quidem.
        </h4>
      </Title>
      <ul className="timeline timeline-snap-icon timeline-vertical max-md:timeline-compact my-12">
        <li>
          <Check className="timeline-middle bg-primary rounded-full" />
          <div className="timeline-start md:text-end mx-3 mb-10">
            <time className="italic">the beginning</time>
            <Title className="my-2">
              <h3>First</h3>
            </Title>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, impedit laboriosam minima
              quo dolor dolores natus cupiditate explicabo delectus ratione quaerat sed iure
              accusamus obcaecati voluptatibus veniam eos sequi neque?
            </p>
          </div>
          <hr className="bg-primary" />
        </li>

        <li>
          <Check className="timeline-middle bg-primary rounded-full" />
          <div className="timeline-end mx-3 mb-10">
            <time className="italic">the beginning</time>
            <Title className="my-2">
              <h3>First</h3>
            </Title>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, impedit laboriosam minima
              quo dolor dolores natus cupiditate explicabo delectus ratione quaerat sed iure
              accusamus obcaecati voluptatibus veniam eos sequi neque?
            </p>
          </div>
          <hr className="bg-primary" />
        </li>

        <li>
          <Check className="timeline-middle bg-primary rounded-full" />
          <div className="timeline-start md:text-end mx-3 mb-10">
            <time className="italic">the beginning</time>
            <Title className="my-2">
              <h3>First</h3>
            </Title>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, impedit laboriosam minima
              quo dolor dolores natus cupiditate explicabo delectus ratione quaerat sed iure
              accusamus obcaecati voluptatibus veniam eos sequi neque?
            </p>
          </div>
          <hr className="bg-primary" />
        </li>

        <li>
          <Check className="timeline-middle bg-primary rounded-full" />
          <div className="timeline-end mx-3 mb-10">
            <time className="italic">the beginning</time>
            <Title className="my-2">
              <h3>First</h3>
            </Title>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, impedit laboriosam minima
              quo dolor dolores natus cupiditate explicabo delectus ratione quaerat sed iure
              accusamus obcaecati voluptatibus veniam eos sequi neque?
            </p>
          </div>
          <hr className="bg-primary" />
        </li>

        <li>
          <Check className="timeline-middle bg-primary rounded-full" />
          <div className="timeline-start md:text-end mx-3 mb-10">
            <time className="italic">the beginning</time>
            <Title className="my-2">
              <h3>First</h3>
            </Title>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, impedit laboriosam minima
              quo dolor dolores natus cupiditate explicabo delectus ratione quaerat sed iure
              accusamus obcaecati voluptatibus veniam eos sequi neque?
            </p>
          </div>
        </li>
      </ul>
    </>
  )
}

export default AboutMe
