import Title from "@/components/modules/Title"
import Image from "next/image"

import faMessages from "@/messages/fa.json"

const ContentLanding: React.FC = () => {
  const { title, desc } = faMessages.heroSection

  const titleText = title.replace(
    /[Nn][Ee][Xx][Tt] [Jj][Ss]/g,
    `<span class="highlight-title">Next Js</span>`
  )
  return (
    <>
      <div id="landing-content-wrapper" className="center flex-col mt-12">
        <Image
          width={200}
          height={200}
          className="bg-neutral size-40 mb-4 rounded-full object-cover"
          draggable={false}
          src={"/image/prof.jpg"}
          alt="profile"
        />

        <Title size="lg" className="text-center lg:whitespace-pre">
          <h1 dangerouslySetInnerHTML={{ __html: titleText }}></h1>
        </Title>

        <p
          id="landing-description"
          className="w-full text-center px-5 mt-4 opacity-50 md:px-24 lg:px-56 xl:px-80"
        >
          {desc}
        </p>
      </div>
    </>
  )
}

export default ContentLanding
