import Footer from "@/components/modules/Footer"
import Header from "@/components/modules/Header/Header"
import React from "react"

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
