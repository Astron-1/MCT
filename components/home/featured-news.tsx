"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { NewsCard } from "@/components/news/news-card";

const featuredNews = [
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
  }
];

export function FeaturedNews() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Latest News
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Stay updated with our recent activities, press coverage, and publications
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {featuredNews.map((item) => (
            <NewsCard
              key={item.slug}
              title={item.title}
              description={item.description}
              date={item.date}
              source={item.source}
              sourceUrl={item.sourceUrl}
              image={item.image}
              category={item.category as "press" | "publication" | "citation"}
              slug={item.slug}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <Button asChild size="lg">
            <Link href="/news" className="inline-flex items-center gap-2">
              View All News
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
} 