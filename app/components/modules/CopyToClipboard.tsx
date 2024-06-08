"use client"

import React from "react"
import { useToast } from "@/components/ui/use-toast"

type CopyToClipboardProps = {
  value: string
}

const CopyToClipboard: React.FC<React.PropsWithChildren<CopyToClipboardProps>> = ({
  value,
  children,
}) => {
  const { toast } = useToast()
  const copyToClipboardAction = async () => {
    await navigator.clipboard.writeText(value)
    toast({ title: "text successfully saved !!" })
  }
  return (
    <div className="cursor-pointer" title="click to copy" onClick={copyToClipboardAction}>
      {children}
    </div>
  )
}

export default CopyToClipboard
