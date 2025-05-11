"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { NewsCard } from "@/components/ui/news-card";

// Simulated blog posts (would come from Strapi in production)
const blogPosts = [
  {
    id: 1,
    title: "New Clean Water Project Launches in Rural Communities",
    excerpt: "Our latest clean water initiative aims to provide sustainable access to safe drinking water for 10,000 people in underserved regions.",
    slug: "clean-water-project-launch",
    publishedAt: "2023-09-15T09:00:00Z",
    image: "https://images.pexels.com/photos/1327506/pexels-photo-1327506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: {
      name: "Projects",
      slug: "projects"
    }
  },
  {
    id: 2,
    title: "Education Program Reaches Milestone with 50 New Schools",
    excerpt: "Our education initiative has successfully established partnerships with 50 new schools, extending quality education to over 5,000 children.",
    slug: "education-program-milestone",
    publishedAt: "2023-08-28T09:00:00Z",
    image: "https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: {
      name: "Education",
      slug: "education"
    }
  },
  {
    id: 3,
    title: "Annual Charity Gala Raises Record Funds for Community Projects",
    excerpt: "This year's charity gala exceeded all expectations, raising $1.2 million to support our ongoing community development programs.",
    slug: "annual-charity-gala",
    publishedAt: "2023-07-10T09:00:00Z",
    image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: {
      name: "Events",
      slug: "events"
    }
  }
];

export function LatestNews() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="section-full-width bg-muted/30">
      <div className="section-content">
        <div className="text-center mb-12">
          <h2 className="section-heading mb-4">Latest News</h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay updated with our most recent activities, events, and impact stories
            </p>
            <Button asChild variant="outline" className="shrink-0">
              <Link href="/blog">View All Posts</Link>
            </Button>
          </div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
        >
          {blogPosts.map((post) => (
            <motion.div key={post.id} variants={itemVariants}>
              <NewsCard {...post} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}