import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Calendar, User } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import Image from "next/image";
import data from "@/app/data.json";

type Article = (typeof data.articles)[number];

export default function ArticleSection() {
  const articles: Article[] = data.articles;

  return (
    <section>
      <div className="py-14 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-semibold md:text-4xl">
              Artikel Terbaru
            </h2>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              Baca artikel menarik dan informatif seputar berbagai topik
              terkini. Dapatkan wawasan baru dan pengetahuan yang bermanfaat.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard
                key={article.id}
                title={article.title}
                description={article.description}
                author={article.author}
                publishDate={article.publishDate}
                category={article.category}
                link={`/artikel/${article.slug}`}
              >
                <Image
                  src={article.thumbnail}
                  alt={`Thumbnail ${article.title}`}
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              </ArticleCard>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" className="gap-2">
              <Link href="/artikel">
                Lihat Semua Artikel
                <ChevronRight className="!size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

const ArticleCard = ({
  title,
  description,
  author,
  publishDate,
  category,
  children,
  link,
}: {
  title: string;
  description: string;
  author: string;
  publishDate: string;
  category: string;
  children: ReactNode;
  link: string;
}) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="relative">
        <div className="overflow-hidden">{children}</div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
            {category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border/50 text-xs text-muted-foreground justify-between">
          <div className="flex items-center gap-1">
            <User className="size-3" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="size-3" />
            <span>{publishDate}</span>
          </div>
        </div>

        <div className="mt-4">
          <Button
            asChild
            size="sm"
            variant="ghost"
            className="gap-1 p-0 h-auto font-medium text-primary hover:text-primary/80"
          >
            <Link href={link}>
              Baca Selengkapnya
              <ChevronRight className="!size-3.5" />
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};
