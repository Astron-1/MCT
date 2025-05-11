"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Newspaper } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatDate } from "@/lib/utils";

interface NewsCardProps {
  title: string;
  excerpt: string;
  slug: string;
  publishedAt: string;
  image: string;
  category: {
    name: string;
    slug: string;
  };
}

export function NewsCard({
  title,
  excerpt,
  slug,
  publishedAt,
  image,
  category,
}: NewsCardProps) {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  return (
    <Card className="h-full flex flex-col overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300 group">
      <Link href={`/blog/${slug}`} className="block">
        <div className="relative aspect-video bg-muted overflow-hidden">
          {/* Loading State */}
          {imageLoading && !imageError && (
            <div className="absolute inset-0 flex items-center justify-center bg-muted">
              <div className="w-full h-full bg-gradient-to-r from-transparent via-muted-foreground/10 to-transparent animate-shimmer" />
              <Newspaper className="absolute h-10 w-10 text-muted-foreground/40" />
            </div>
          )}

          {/* Error State */}
          {imageError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted">
              <Newspaper className="h-10 w-10 text-muted-foreground/60 mb-2" />
              <p className="text-sm text-muted-foreground text-center px-4">{category.name}</p>
            </div>
          )}

          {/* Actual Image */}
          {!imageError && (
            <Image
              src={image}
              alt={title}
              fill
              className={cn(
                "object-cover transition-all duration-300 group-hover:scale-105",
                imageLoading ? "opacity-0" : "opacity-100"
              )}
              onLoadingComplete={() => setImageLoading(false)}
              onError={() => {
                console.error('Image failed to load:', image);
                setImageError(true);
                setImageLoading(false);
              }}
              priority
            />
          )}

          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
            {category.name}
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>

      <CardContent className="p-6 flex-grow">
        <div className="flex items-center text-muted-foreground text-sm mb-3">
          <Calendar className="mr-2 h-4 w-4" />
          {formatDate(publishedAt)}
        </div>
        <Link href={`/blog/${slug}`} className="group/title">
          <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover/title:text-primary transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-muted-foreground line-clamp-3">{excerpt}</p>
      </CardContent>

      <CardFooter className="px-6 pb-6 pt-0">
        <Link href={`/blog/${slug}`} className="w-full">
          <Button 
            variant="secondary" 
            className="w-full group/btn" 
            size="sm"
          >
            Read More
            <span className="inline-block transition-transform duration-200 group-hover/btn:translate-x-1">→</span>
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}