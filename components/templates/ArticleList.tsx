import React from "react"
import faMessages from "@/messages/fa.json"

import Title from "../modules/Title"
import ArticleCard from "../modules/ArticleCard"
import { TypeArticle } from "@/types/Article"

const articleList: TypeArticle[] = [
  {
    id: "1",
    title: "سفر به دنیای کد: از علاقه تا تخصص",
    description:
      "هر برنامه‌نویس فرانت‌اند از جایی شروع می‌کند؛ برخی با علاقه به طراحی وب، برخی دیگر با عشق به کدنویسی. این مسیر از یادگیری مفاهیم پایه شروع شده و با تلاش، تمرین و تجربه به تخصص تبدیل می‌شود.",
    image: "/image/article-vs-code.jpg",
  },
  {
    id: "2",
    title: "مواجهه با چالش‌ها: رفع مشکلات و یادگیری از اشتباهات",
    description:
      "چالش‌ها و باگ‌ها بخش جدایی‌ناپذیر از مسیر هر برنامه‌نویس هستند. حل این مشکلات و یادگیری از اشتباهات، یکی از عوامل مهم در پیشرفت یک برنامه‌نویس فرانت‌اند است.",
    image: "/image/article-error.jpg",
  },
  {
    id: "3",
    title: "تسلط بر ابزارها و فناوری‌ها: از HTML و CSS تا فریم‌ورک‌های مدرن",
    description:
      "یکی از نقاط قوت یک متخصص فرانت‌اند، آشنایی و تسلط بر ابزارها و فناوری‌های متعددی مانند HTML، CSS، JavaScript و فریم‌ورک‌های مدرنی چون React و Next.js است.",
    image: "/image/article-tools.jpg",
  },
  {
    id: "4",
    title: "همکاری تیمی: نقش برنامه‌نویس فرانت‌اند در پروژه‌های بزرگ",
    description:
      "یک برنامه‌نویس فرانت‌اند در پروژه‌های بزرگ نیاز به همکاری و هماهنگی با اعضای دیگر تیم دارد. ارتباط موثر، مدیریت زمان، و تقسیم وظایف از مهارت‌های کلیدی در این نقش است.",
    image: "/image/article-team.jpg",
  },
]

const ArticleList: React.FC = async () => {
  const { article } = faMessages.home
  return (
    <section id="article-list">
      <Title id="article-list-title-wrapper" size="lg" className="text-center">
        <h2 className="article-list-title-child">{article.title}</h2>
        <h4 className="article-list-title-child w-10/12 text-sm mt-3 inline-block md:w-8/12 lg:w-4/12">
          {article.desc}
        </h4>
      </Title>
      <div className="my-12 flex gap-3 md:gap-10 overflow-hidden max-lg:overflow-x-auto lg:grid lg:grid-cols-3 xl:grid-cols-4">
        {articleList.map((article) => (
          <div className="article-card" key={article.id}>
            <ArticleCard article={article} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ArticleList
