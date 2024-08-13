import { ArticleStoreType } from "@/hooks/store/useArticle"

export type TypeArticle = {
  id: string
  image: string
  title: string
  description: string
}

export type TypeQuickAccessArticleSideProps = {
  isMobile?: boolean
}

export type MobileTemplateProps = {
  activeHeadline: ArticleStoreType["activeHeadline"]
  headlineList: ArticleStoreType["headlineList"]
  headlineReadLength: number
}

export type DesktopTemplateProps = {
  headlineList: ArticleStoreType["headlineList"]
  headlineReadLength: number
}

export type TypeArticleCardProps = {
  article: TypeArticle
}
