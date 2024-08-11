"use client"

import React, { useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import copy from "clipboard-copy"

import { TypeCopyToClipboardProps } from "@/lib/types/utils"

const CopyToClipboard: React.FC<React.PropsWithChildren<TypeCopyToClipboardProps>> = ({
  children,
  value,
  className,
}) => {
  const { toast } = useToast()
  const [isCopied, setIsCopied] = useState(false)
  const copyToClipboard = async () => {
    await copy(value)
      .then(async () => await successCopyAction())
      .catch(() =>
        toast({ title: "ذخیره کردن در clipboard با مشکل مواجه شد", variant: "destructive" })
      )
  }

  const successCopyAction = async () => {
    toast({ title: "با موفقیت در clipboard ذخیره شد" })
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 3000)
  }
  return (
    <button disabled={isCopied} className={className} onClick={copyToClipboard}>
      {children}
    </button>
  )
}

export default CopyToClipboard
