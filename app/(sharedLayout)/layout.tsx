import React from "react"
import Header from "@/components/templates/header/Header"
import Footer from "@/components/templates/Footer"

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
