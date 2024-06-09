"use client"

import React from "react"
import { useToast } from "@/components/ui/use-toast"
import copy from "clipboard-copy"

type CopyToClipboardProps = {
  value: string
}

const CopyToClipboard: React.FC<React.PropsWithChildren<CopyToClipboardProps>> = ({
  value,
  children,
}) => {
  const { toast } = useToast()
  const copyToClipboardAction = async () => {
    await copy(value)
      .then(() => toast({ title: "text successfully saved !!" }))
      .catch(() => toast({ title: "something wrong in saving text", variant: "destructive" }))
  }
  return (
    <div className="cursor-pointer" title="click to copy" onClick={copyToClipboardAction}>
      {children}
    </div>
  )
}

export default CopyToClipboard
