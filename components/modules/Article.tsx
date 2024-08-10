"use client"

import React, { useEffect } from "react"
import useArticle from "@/hooks/store/useArticle"

import Title from "./Title"
import Image from "next/image"

const Article: React.FC = () => {
  const { headlineList, setHeadLineList, setActiveHeadline, activeHeadline } = useArticle()

  useEffect(() => {
    const headlineElementList = document.querySelectorAll("h2")
    setHeadLineList(Array.from(headlineElementList))
    setActiveHeadline(activeHeadline)
  }, [])

  useEffect(() => {
    observeHandler()
  }, [headlineList])

  const observeHandler = () => {
    if (typeof headlineList === null && typeof headlineList === "undefined") return undefined

    const observer = new IntersectionObserver((entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveHeadline(entry.target as HTMLHeadElement)
      })
    )

    const elementsToObserve = document.querySelectorAll("article h2")

    elementsToObserve.forEach((element) => observer.observe(element))
  }

  return (
    <>
      <figure className="bg-base-100 max-h-[500px] center rounded-lg overflow-hidden">
        <Image
          width={1000}
          height={500}
          src={"/image/article.jpg"}
          alt="article-image"
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
      <div>
        <Title>
          <h2>Lorem, ipsum. Title 1</h2>
        </Title>
        <p>
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
      </div>
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

      <div>
        <Title>
          <h2>Lorem, ipsum. Title 2</h2>
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
      </div>
      <div>
        <Title>
          <h2>Lorem, ipsum. Title 3</h2>
        </Title>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboolestias minima laborum,
          dolorum assumenda. Amet quibusdam magnam ducimus inventore non et recusandae eum, cum,
          dolorem quas quia repellat unde, harum eveniet ipsum. Numquam omnis tenetur nobis dolorum
          aliquam dicta accusantium porro modi cum autem est provident consectetur, aspernatur
          consequuntur, repellendus adipisci.
        </p>
      </div>
      <div>
        <Title>
          <h2>Lorem, ipsum. Title 4</h2>
        </Title>
        <p>
          Lorem ipsum dolor sre adipisci, labore veritatis quasi sapiente repudiandae culpa rem
          aliquid dolorum apossimus. Ea modi unde qui labore. Et eos cumque est at ipsam optio
          reprehenderit, veniam, maiores odio nesciunt nam dolorem dolore mollitia expedita
          repellendus ipsa vero. Alias magnam, odit impedit perspiciatis enim sint, recusandae autem
          provident neque iste molestias minima laborum, dolorum assumenda. Amet quibusdam magnam
          ducimus inventore non et recusandae eum, cum, dolorem quas quia repellat unde, harum
          eveniet ipsum. Numquam omnis tenetur nobis dolorum aliquam dicta accusantium porro modi
          cum autem est provident consectetur, aspernatur consequuntur, repellendus adipisci.
        </p>
      </div>
      <div>
        <Title>
          <h2>Lorem, ipsum. Title 5</h2>
        </Title>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ducimus deleniti expedita
          eaque aperiam aut repudiandae, explicabo nam consequuntur modi! Blanditiis perferendis rem
          labore esse temporibus autem aperiam dignissimos sit aut ipsum, culpa reprehenderit
          voluptatem et illum magnam odit soluta quo suscipit nam officia quas tenetur error odio
          laborum! UlNumquam omnis tenetur nobis dolorum aliquam dicta accusantium porro modi cum
          autem est provident consectetur, aspernatur consequuntur, repellendus adipisci.
        </p>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas asperiores dicta maxime
        explicabo iusto, ipsam voluptatum rem. Facilis laudantium quos, quod harum nemo, sed illum
        nihil ipsa a quaerat laborum exercitationem minus, officia voluptas incidunt non sint quam.
        Reprehenderit, vel qui. Harum est sapiente odit similique hic praesentium consequuntur,
        accusamus corporis, eveniet laborum nostrum cupiditate! Ab, quis nihil? Quos delectus nemo
        aliquam perspiciatis, magnam quidem soluta exercitationem quas fuga natus nam consequatur ab
        quasi. Voluptatem debitis laudantium minima! Animi iure eum asperiores voluptatum est odio
        sit doloremque consequuntur eaque accusamus ab, deserunt consectetur reiciendis, quod esse
        minus accusantium maiores officiis mollitia. Quo id quaerat, in iusto assumenda hic cumque,
        alias eveniet aliquam eius ipsam velit eligendi laboriosam explicabo! Laudantium
        consequuntur, numquam laboriosam delectus aspernatur quos minus quis adipisci voluptates
        assumenda, in quo saepe explicabo amet, aliquid nulla veritatis quisquam quidem! Quo a
        itaque minima facilis, nam pariatur! Voluptas, corrupti. Nihil atque eos libero sunt animi
        est eligendi rerum placeat molestias neque temporibus, saepe iste, veritatis, corporis
        blanditiis omnis ullam nostrum et veniam vero? Possimus tenetur quos hic obcaecati!
        Perferendis consequuntur veniam saepe fuga distinctio beatae delectus, itaque
        necessitatibus, et laudantium neque dolorem at eum id ipsum deserunt similique recusandae
        harum!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi delectus similique,
        rerum explicabo necessitatibus fuga, itaque neque eius tempora ut eaque placeat iste
        possimus nesciunt nihil, accusamus quidem eligendi! Iusto dolor, repudiandae dolorum quia
        aut omnis minus accusamus maiores, assumenda hic inventore numquam repellat ipsam
        necessitatibus nemo fuga amet consequuntur et! Nihil ea qui, odit laudantium magnam, illo
        veniam ut nemo ducimus cum, quia fuga cupiditate. Non tempora quas consectetur ipsam.
        Numquam, rem deleniti! Quidem perspiciatis accusantium molestias voluptates autem itaque.
        Amet corrupti cumque odit et consectetur asperiores eveniet eum, similique veniam possimus
        aliquid praesentium? Alias architecto libero vitae, eos atque dignissimos beatae numquam
        aliquid magnam illo optio veritatis quaerat, consequatur, maiores amet asperiores deserunt
        explicabo quidem adipisci tempore quae impedit tenetur. Ipsam ea cum voluptatum ad harum
        ipsa? Delectus a quis consectetur quaerat iure facilis, harum dignissimos fugiat similique
        quia quisquam aperiam deserunt laudantium odit suscipit, animi temporibus consequuntur illo
        culpa neque fugit ad cupiditate quas iste. Recusandae totam voluptatum, assumenda, impedit
        officia incidunt odio, nisi sequi necessitatibus earum perferendis exercitationem error.
        Vero labore quos quisquam deserunt veritatis numquam nisi debitis officia nesciunt delectus!
        Repellendus, accusamus, voluptatem, ipsa amet nesciunt quam repellat consequuntur laborum
        totam rerum alias? Quo voluptatem minima rem cum dolor obcaecati. Rem necessitatibus
        laboriosam voluptas. Velit iusto enim animi ipsam modi illum consectetur mollitia cumque
        inventore, soluta perferendis explicabo laborum asperiores harum voluptatum nisi porro dicta
        dolor amet nesciunt. Error ad minima dolor vitae voluptas eos deserunt ratione fuga quasi
        incidunt nisi laborum eum, facere, odio quibusdam dolore minus laboriosam nesciunt
        repudiandae eligendi doloribus! Odio quisquam commodi aspernatur dolor tempora impedit rem
        eos, fuga minus nihil libero magnam. Aliquid iure exercitationem beatae odio optio neque
        cupiditate esse praesentium, eveniet laboriosam eius, quidem et sed ipsam sint delectus!
        Nobis at quis incidunt libero ad debitis ipsum dicta maxime, ullam qui rem vitae animi
        molestias, quasi repudiandae error necessitatibus corrupti exercitationem adipisci cum
        commodi quas nihil. Aliquam repellendus blanditiis tenetur ullam suscipit sint recusandae ab
        excepturi dolore mollitia molestias voluptates ipsam ipsum obcaecati earum illum atque,
        distinctio, rerum pariatur praesentium perferendis a at. Qui numquam, aspernatur id ea,
        cupiditate esse commodi eum libero suscipit culpa deserunt, recusandae atque. Molestias
        soluta laborum cum numquam ipsam mollitia obcaecati est atque, sapiente sunt alias assumenda
        culpa repudiandae impedit quo esse iusto cupiditate totam dolor. Reiciendis nobis corporis,
        exercitationem vitae perferendis atque consequuntur at culpa consequatur ad quidem
        reprehenderit quis similique, soluta, temporibus dolores dolore? Nesciunt et pariatur
        aspernatur quia recusandae temporibus voluptatem asperiores! Omnis, placeat minus
        consequatur reprehenderit sunt optio magni ad. Quaerat ex eaque repudiandae quos dolorum
        quam sit magni atque accusamus ducimus molestiae doloremque, error illum sapiente voluptatum
        earum distinctio laborum voluptate aliquam corrupti. Nesciunt praesentium id vel quidem
        nobis alias! Ex aut nemo impedit esse explicabo vero dicta velit tempore sint consequatur,
        eos totam, minus sit qui voluptates corrupti minima distinctio, et aliquid voluptate quaerat
        mollitia a voluptatem ipsum. Quia voluptas iusto perspiciatis praesentium suscipit est
        facilis sint quae autem excepturi, nam aut ratione placeat rem. Distinctio, eos!
      </p>

      <div>
        <Title>
          <h2>Lorem, ipsum. Title 6</h2>
        </Title>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae delectus assumenda
          voluptatem? Cumque aperiam qui ab corporis maiores, tenetur sint eius iste voluptas
          eligendi animi eaque perferendis inventore temporibus quis quos mollitia ad reiciendis
          perspiciatis optio rerum asperiores commodi. Dolorem?
        </p>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, id cupiditate ratione
        reiciendis minus, autem voluptatum animi nisi nostrum accusantium ad adipisci. Consectetur
        molestiae voluptas adipisci unde quaerat excepturi reiciendis eveniet fugit, molestias
        facere maxime cumque temporibus hic architecto eius.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laboriosam consequatur
        ratione rerum totam sit, natus, nisi voluptate vel quae quos minus! Aperiam hic aspernatur
        id at a accusantium enim.
      </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ut?</p>
    </>
  )
}

export default Article
