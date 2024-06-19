import Article from "@/components/modules/Article"
import QuickAccessArticleSide from "@/components/modules/QuickAccessArticleSide"
import React from "react"

const page = () => {
  return (
    <>
      <div className="min-h-screen grid grid-cols-4 gap-6">
        <article className="bg-base-200 p-6 col-span-3 rounded-xl [&>*]:mt-6 first:[&>*]:mt-0">
          <Article />
        </article>
        <section className="h-fit col-span-1 sticky top-6 [&>*]:p-6 [&>*]:mt-6 first:[&>*]:mt-0">
          <QuickAccessArticleSide />
        </section>
      </div>
      <div className="mb-40" />
    </>
  )
}

export default page
