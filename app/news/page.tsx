import { Metadata } from "next";
import { NewsCard } from "@/components/news/news-card";

export const metadata: Metadata = {
  title: "News & Publications | Maa Charitable Trust",
  description: "Stay updated with our latest news, press coverage, and publications.",
};

// This would typically come from your CMS or API
const newsItems = [
  {
    title: "Trust Organization Launches New Community Initiative",
    description: "Leading nonprofit organization introduces groundbreaking program to support local communities through sustainable development practices.",
    date: "2024-03-15",
    source: "Community Times",
    sourceUrl: "https://example.com/news/1",
    image: "https://picsum.photos/seed/news1/800/400",
    category: "press",
    slug: "new-community-initiative"
  },
  {
    title: "Impact of Community-Led Development Programs",
    description: "Research paper analyzing the effectiveness of grassroots community development initiatives in urban areas.",
    date: "2024-03-10",
    source: "Journal of Community Development",
    sourceUrl: "https://example.com/publication/1",
    image: "https://picsum.photos/seed/news2/800/400",
    category: "publication",
    slug: "community-development-impact"
  },
  {
    title: "Trust Organization's Model Featured in Development Study",
    description: "Our innovative approach to community engagement cited as a best practice example in recent academic research.",
    date: "2024-03-05",
    source: "Development Research Quarterly",
    sourceUrl: "https://example.com/citation/1",
    image: "https://picsum.photos/seed/news3/800/400",
    category: "citation",
    slug: "development-study-feature"
  },
  {
    title: "Sustainable Community Building: A New Approach",
    description: "Comprehensive study on sustainable community development practices, featuring insights from our programs.",
    date: "2024-02-28",
    source: "Urban Development Journal",
    sourceUrl: "https://example.com/publication/2",
    image: "https://picsum.photos/seed/news4/800/400",
    category: "publication",
    slug: "sustainable-community-building"
  }
] as const;

export default function NewsPage() {
  return (
    <section className="container mx-auto py-16 md:py-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          News & Publications
        </h1>
        <p className="text-xl text-muted-foreground">
          Stay updated with our latest news, press coverage, and academic citations.
        </p>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-4">
        {newsItems.map((item) => (
          <NewsCard
            key={item.slug}
            title={item.title}
            description={item.description}
            date={item.date}
            source={item.source}
            sourceUrl={item.sourceUrl}
            image={item.image}
            category={item.category}
            slug={item.slug}
          />
        ))}
      </div>
    </section>
  );
} 