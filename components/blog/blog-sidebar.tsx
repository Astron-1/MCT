"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";

const categories = [
  { name: "Projects", slug: "projects", count: 12 },
  { name: "Education", slug: "education", count: 8 },
  { name: "Events", slug: "events", count: 6 },
  { name: "Agriculture", slug: "agriculture", count: 5 },
  { name: "Empowerment", slug: "empowerment", count: 7 },
  { name: "Volunteers", slug: "volunteers", count: 4 },
];

const recentPosts = [
  {
    id: 1,
    title: "New Clean Water Project Launches in Rural Communities",
    slug: "clean-water-project-launch",
    publishedAt: "2023-09-15T09:00:00Z",
    image: "https://picsum.photos/seed/water/800/600",
  },
  {
    id: 2,
    title: "Education Program Reaches Milestone with 50 New Schools",
    slug: "education-program-milestone",
    publishedAt: "2023-08-28T09:00:00Z",
    image: "https://picsum.photos/seed/education/800/600",
  },
  {
    id: 3,
    title: "Annual Charity Gala Raises Record Funds for Community Projects",
    slug: "annual-charity-gala",
    publishedAt: "2023-07-10T09:00:00Z",
    image: "https://picsum.photos/seed/gala/800/600",
  },
];

interface BlogSidebarProps {
  selectedCategory?: string | null;
  onCategorySelect?: (category: string) => void;
}

export function BlogSidebar({ selectedCategory, onCategorySelect }: BlogSidebarProps) {
  const [imageError, setImageError] = React.useState<Record<number, boolean>>({});
  const fallbackImage = "https://picsum.photos/800/600";

  return (
    <div className="space-y-8">
      {/* Categories */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-4">Categories</h3>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category.slug}>
                <button
                  onClick={() => onCategorySelect?.(category.slug)}
                  className={cn(
                    "w-full flex justify-between items-center py-2 px-3 rounded-lg transition-colors",
                    selectedCategory === category.slug
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {category.name}
                  <span className={cn(
                    "text-sm px-2 py-1 rounded-full",
                    selectedCategory === category.slug
                      ? "bg-primary/20"
                      : "bg-muted"
                  )}>
                    {category.count}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Recent Posts */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
          <div className="space-y-4">
            {recentPosts.map((post, index) => (
              <React.Fragment key={post.id}>
                <div className="flex gap-3 group">
                  <div className="relative w-20 h-20 rounded-md overflow-hidden shrink-0">
                    <Image
                      src={imageError[post.id] ? fallbackImage : post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={() => setImageError(prev => ({ ...prev, [post.id]: true }))}
                      sizes="80px"
                    />
                  </div>
                  <div>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      <h4 className="font-semibold line-clamp-2">{post.title}</h4>
                    </Link>
                    <p className="text-sm text-muted-foreground mt-1">
                      {formatDate(post.publishedAt)}
                    </p>
                  </div>
                </div>
                {index < recentPosts.length - 1 && <Separator />}
              </React.Fragment>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Newsletter */}
      <Card className="bg-primary/5 border-none">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-2">Subscribe to our Newsletter</h3>
          <p className="text-muted-foreground mb-4">
            Stay updated with our latest news, projects, and events
          </p>
          <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <Button type="submit" className="w-full">
              Subscribe
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Donation CTA */}
      <Card className="bg-gradient-to-br from-blue-600/20 to-emerald-600/20 dark:from-blue-900/30 dark:to-emerald-900/30 border-none">
        <CardContent className="p-6 text-center">
          <h3 className="text-xl font-bold mb-2">Support Our Cause</h3>
          <p className="text-muted-foreground mb-4">
            Your donation helps us continue our vital work in communities worldwide
          </p>
          <Button asChild>
            <Link href="/donate">Donate Now</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}