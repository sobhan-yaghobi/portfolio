import React from "react"
import Header from "@/components/modules/Header/Header"
import Footer from "@/components/modules/Footer"

const layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container">{children}</div>
      <Footer />
    </>
  )
}

export default layout
