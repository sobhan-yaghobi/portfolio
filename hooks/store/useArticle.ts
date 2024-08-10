import { create } from "zustand"

export type ArticleStoreType = {
  headlineList: Array<HTMLHeadingElement> | null
  setHeadLineList: (headlineList: ArticleStoreType["headlineList"]) => void

  activeHeadline: HTMLHeadElement | null
  setActiveHeadline: (title: ArticleStoreType["activeHeadline"]) => void
}

const useArticle = create<ArticleStoreType>((set) => ({
  headlineList: null,
  setHeadLineList: (headlineList) => set((prevState) => ({ ...prevState, headlineList })),

  activeHeadline: null,
  setActiveHeadline: (activeHeadline) => set((prevState) => ({ ...prevState, activeHeadline })),
}))

export default useArticle
