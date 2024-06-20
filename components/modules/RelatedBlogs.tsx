import React from "react"

import { Book, Calendar, LibraryBig } from "lucide-react"

import Link from "next/link"
import Title from "./Title"
import Image from "next/image"

const RelatedBlogs: React.FC = () => {
  return (
    <div>
      <Title size="md" isIcon className="mb-3">
        <h3>Related Blogs</h3>
        <LibraryBig className="icon-md mr-1 stroke-primary" />
      </Title>
      <div className="grid grid-cols-4 gap-3">
        {Array(8)
          .fill("")
          .map((_, index) => (
            <Link key={index} href={"/"}>
              <div className="card card-side bg-base-100 max-w-80 gap-3 p-3 shadow-xl">
                <figure className="w-6/12 overflow-hidden">
                  <Image
                    width={150}
                    height={100}
                    src={"/image/blog.jpg"}
                    alt="blog-box"
                    className="rounded-lg"
                  />
                </figure>
                <div className="card-body justify-between p-0">
                  <div className="flex items-center gap-2">
                    <Calendar className="icon-sm" />
                    <span className="text-xs">1402/12/02</span>
                  </div>
                  <h3 className="font-title text-lg">New movie is he g ddad dadj !</h3>
                  <span></span>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}

export default RelatedBlogs
