import Image from "next/image"
import React from "react"
import Title from "./Title"

const Article: React.FC = () => {
  return (
    <>
      <figure className="bg-base-100 max-h-[500px] center rounded-lg overflow-hidden">
        <Image
          width={1000}
          height={500}
          src={"/image/blog.jpg"}
          alt="blog-image"
          className="object-cover"
        />
      </figure>
      <Title size="lg">
        <h1>Lorem ipsum dolor sit amet.</h1>
      </Title>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias fugit totam ut
        dignissimos cumque vitae repellat eius facilis nihil debitis quaerat sunt, quo accusamus,
        soluta omnis consequatur iusto! Omnis dolor cum enim ea ratione, laborum accusantium sequi
        sunt! Nostrum beatae assumenda tempore repellat numquam soluta itaque, rerum, adipisci ut
      </p>
      <p>
        <Title>
          <b>Lorem ipsum dolor sit ?</b>
        </Title>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias fugit totam ut
        dignissimos cumque vitae repellat eius facilis nihil debitis quaerat sunt, quo accusamus,
        soluta omnis consequatur iusto! Omnis dolor cum enim ea ratione, laborum accusantium sequi
        sunt! Nostrum beatae assumenda tempore repellat numquam soluta itaque, rerum, adipisci ut
        asperiores aperiam sunt voluptas laboriosam consequatur minus fugiat deleniti blanditiis
        aliquam quam impedit quia aspernatur reprehenderit consectetur ab? Reprehenderit unde
        quibusdam ea, molestias aperiam laudantium ullam ipsa deserunt placeat tenetur laborum
        tempora fugit nam distinctio iure culpa, incidunt numquam consectetur possimus quia
        delectus. Expedita accusantium dignissimos est dolore reiciendis, commodi blanditiis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa distinctio repellendus
        asperiores tenetur, facere velit libero ex veniam quia fugit officia optio facilis
        laudantium in excepturi saepe voluptatem harum eaque fugiat quisquam, magni vero minus
        quibusdam? Est deserunt numquam tempora ab quidem reiciendis at. Perspiciatis placeat
        facilis tempore eos ea!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium velit tenetur,
        doloremque quia sequi est magni incidunt cupiditate harum architecto sint soluta. Similique
        maxime dignissimos, odit expedita quidem quos laudantium corporis nobis sint, blanditiis
        saepe sequi! Laudantium eveniet eius, dignissimos harum tempore rem quasi eum atque
        necessitatibus assumenda labore praesentium laboriosam ipsam dolor? Aspernatur, ipsa
        aliquam? Molestiae dolorum explicabo rem quidem rerum dolores expedita, impedit eligendi
        officiis exercitationem! Quae, vitae.
      </p>

      <p>
        <Title>
          <b>Lorem ipsum dolor sit amet consectetur?</b>
        </Title>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ducimus deleniti expedita
          eaque aperiam aut repudiandae, explicabo nam consequuntur modi! Blanditiis perferendis rem
          labore esse temporibus autem aperiam dignissimos sit aut ipsum, culpa reprehenderit
          voluptatem et illum magnam odit soluta quo suscipit nam officia quas tenetur error odio
          laborum! Ullam soluta nihil sequi eligendi ipsam illum, natus beatae ducimus, aspernatur
          atque aliquam unde dolor odit numquam officia vero eius impedit explicabo perspiciatis
          quisquam doloremque. Iure adipisci, labore veritatis quasi sapiente repudiandae culpa rem
          aliquid dolorum accusantium similique esse vero perspiciatis illo voluptates sed, possimus
          consequatur laudantium nisi in harum hic nobis. Minima, incidunt inventore ipsa magni
          pariatur amet asperiores, porro perferendis ratione error dolorem, quaerat provident omnis
          tempora nesciunt iste possimus. Ea modi unde qui labore. Et eos cumque est at ipsam optio
          reprehenderit, veniam, maiores odio nesciunt nam dolorem dolore mollitia expedita
          repellendus ipsa vero. Alias magnam, odit impedit perspiciatis enim sint, recusandae autem
          provident neque iste molestias minima laborum, dolorum assumenda. Amet quibusdam magnam
          ducimus inventore non et recusandae eum, cum, dolorem quas quia repellat unde, harum
          eveniet ipsum. Numquam omnis tenetur nobis dolorum aliquam dicta accusantium porro modi
          cum autem est provident consectetur, aspernatur consequuntur, repellendus adipisci.
        </p>
      </p>
    </>
  )
}

export default Article
