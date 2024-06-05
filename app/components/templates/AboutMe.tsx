import React from "react"
import Title from "../modules/Title"

const AboutMe: React.FC = () => {
  return (
    <>
      <div className="mt-40" />
      <Title size="lg" className="text-center">
        <h2>About Me</h2>
        <h4 className="w-4/12 text-sm inline-block mt-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias quis dicta saepe
          porro, dolores ea nostrum reprehenderit ipsum laboriosam quidem.
        </h4>
      </Title>
      <ul className="timeline timeline-vertical my-12">
        <li>
          <div className="timeline-start timeline-box mx-3">
            First
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, impedit laboriosam minima
              quo dolor dolores natus cupiditate explicabo delectus ratione quaerat sed iure
              accusamus obcaecati voluptatibus veniam eos sequi neque?
            </p>
          </div>
          <hr className="bg-primary" />
        </li>
        <li>
          <hr className="bg-primary" />
          <div className="timeline-end timeline-box mx-3">
            Two
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe aspernatur assumenda
              nemo voluptatibus, vero illum ipsum rerum. Illum delectus praesentium illo, expedita
              in voluptates fugiat quas quis, ullam, quasi exercitationem veniam deleniti accusamus
              cumque? Facere vel quibusdam consequuntur necessitatibus! Cum consequatur perferendis
              ipsa harum recusandae quaerat esse? Impedit molestias fugiat quia nulla facilis
              corporis ea culpa minima libero, eum, saepe obcaecati blanditiis architecto eaque.
            </p>
          </div>
          <hr className="bg-primary" />
        </li>
        <li>
          <hr className="bg-primary" />
          <div className="timeline-start timeline-box mx-3">
            Three
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit facilis id dolorem
              omnis. Culpa illo sequi maiores repellat nisi facilis dolorum molestias nobis id
              reprehenderit sint nesciunt tempora explicabo officia minima quisquam numquam aperiam
              tempore, eveniet distinctio ex obcaecati laudantium. Placeat omnis dolore repudiandae
              suscipit fuga quia ut iusto officiis dolor, facilis soluta dolorum aperiam beatae
              quibusdam porro voluptatem, autem ipsa sed minus maiores quidem cum. Quo, eos
              voluptatum. Inventore.
            </p>
          </div>
          <hr className="bg-primary" />
        </li>
        <li>
          <hr className="bg-primary" />
          <div className="timeline-end timeline-box mx-3">
            Two
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas suscipit reiciendis,
              consequatur deleniti quam ex repudiandae cumque dolore dolores nobis, perspiciatis,
              eveniet alias. Eveniet iure commodi dignissimos, minima, quidem numquam, ipsum
              consectetur a ipsa nobis ratione vero assumenda debitis odit.
            </p>
          </div>
        </li>
      </ul>
    </>
  )
}

export default AboutMe
