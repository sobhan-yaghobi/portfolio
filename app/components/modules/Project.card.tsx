import Image from "next/image"
import React from "react"

const ProjectCard = () => {
  return (
    <div className="card max-w-full h-96 bg-base-100 shadow-xl sm:w-64 lg:w-full">
      <figure className="p-2">
        <Image
          width={300}
          height={300}
          src="/image/b46d5511f8b5c3b9711087d76cee70b1.jpg"
          className="w-full h-full min-size-60 object-cover rounded-xl"
          alt="project-image"
        />
      </figure>
      <div className="card-body px-3 py-2">
        <h3 className="card-title text-2xl">Hello World</h3>
        <div className="flex justify-between">
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem.</p>
        </div>
        <div className="flex gap-3">
          <button className="btn btn-sm btn-primary flex-1">view source</button>
          <button className="btn btn-sm flex-1">see project</button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
