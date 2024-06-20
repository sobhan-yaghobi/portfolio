import React from "react"
import Title from "./Title"
import { MessageCircle, MessageSquareDiffIcon } from "lucide-react"
import Image from "next/image"

const CommentBlog: React.FC = () => {
  return (
    <div>
      <div className="flex items-center">
        <Title size="md" className="mb-3 flex items-center">
          <MessageCircle className="icon-md mr-1 stroke-primary" />
          <h3>Comments</h3>
        </Title>
        <button className="btn btn-primary">
          <MessageSquareDiffIcon className="icons" />
          New Comment
        </button>
      </div>
      <div className="bg-base-100 min-h-52 mt-3 rounded-lg center">
        <div className="center flex-col">
          <Image
            width={200}
            height={100}
            className="w-20"
            src={"/image/blocked.png"}
            alt="blocked"
          />
          <span className="text-sm opacity-50">No Comment's Yet !</span>
        </div>
      </div>
    </div>
  )
}

export default CommentBlog
