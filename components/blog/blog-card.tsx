"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/lib/hooks/use-blog-posts";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const [imageError, setImageError] = useState(false);
  const fallbackImage = "https://picsum.photos/800/600"; // Fallback to random picsum image

  return (
    <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="md:col-span-2 relative aspect-video md:aspect-square">
          <Image
            src={imageError ? fallbackImage : post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            onError={() => setImageError(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
          <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
            {post.category.name}
          </div>
        </div>
        <div className="md:col-span-3 p-6 pt-0 md:pt-6 flex flex-col">
          <div className="flex items-center text-muted-foreground text-sm mb-3">
            <Calendar className="mr-2 h-4 w-4" />
            {formatDate(post.publishedAt)}
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {post.title}
          </h2>
          <p className="text-muted-foreground mb-6 line-clamp-2 flex-grow">
            {post.excerpt}
          </p>
          <Button asChild className="w-full md:w-auto">
            <Link href={`/blog/${post.slug}`}>Read More</Link>
          </Button>
        </div>
      </div>
    </Card>
  );
} 