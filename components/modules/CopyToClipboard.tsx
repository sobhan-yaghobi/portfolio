"use client"

import React, { ReactNode, useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"
import copy from "clipboard-copy"

import { ClipboardCheck } from "lucide-react"

type CopyToClipboardProps = {
  value: string
  successMessage?: string
  className?: string
} & ({ type: "toast"; message?: string } | { type: "text"; element?: ReactNode })

const CopyToClipboard: React.FC<React.PropsWithChildren<CopyToClipboardProps>> = ({ ...props }) => {
  const successText = props.successMessage || "saved to clipboard !"
  const { toast } = useToast()
  const [isClipboard, setIsClipboard] = useState(false)
  const MainElement = props.type === "text" ? "button" : "div"

  //! ---------- Show Message Actions
  const showTextAction = () => {
    setIsClipboard(true)
    setTimeout(() => {
      setIsClipboard(false)
    }, 2000)
  }
  const showToastAction = () => toast({ title: successText })

  //! ---------- Save To Clipboard Action
  const copyToClipboardAction = async () => {
    await copy(props.value)
      .then(() =>
        props.type === "text" ? showTextAction() : props.type === "toast" ? showToastAction() : null
      )
      .catch(() => {})
  }
  return (
    <MainElement
      disabled={props.type === "text" && isClipboard}
      className={cn("cursor-pointer", props.className)}
      title="click to copy"
      onClick={copyToClipboardAction}
    >
      {isClipboard ? (
        props.type === "text" && typeof props.element !== "undefined" ? (
          props.element
        ) : (
          <Text message={successText} />
        )
      ) : (
        props.children
      )}
    </MainElement>
  )
}

const Text: React.FC<{ message: string }> = ({ message }) => (
  <>
    <ClipboardCheck className="icon" />
    {message}
  </>
)

export default CopyToClipboard
