import { create } from "zustand"

export type ArticleStoreType = {
  headlines: Array<HTMLHeadingElement> | null
  setHeadLines: (headlines: ArticleStoreType["headlines"]) => void

  activeTitle: HTMLHeadElement | null
  setActiveTitle: (title: ArticleStoreType["activeTitle"]) => void
}

const useArticle = create<ArticleStoreType>((set) => ({
  headlines: null,
  setHeadLines: (headlines) => set((prevState) => ({ ...prevState, headlines })),

  activeTitle: null,
  setActiveTitle: (activeTitle) => set((prevState) => ({ ...prevState, activeTitle })),
}))

export default useArticle
