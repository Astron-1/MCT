"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink, LinkIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NewsCardProps {
  title: string;
  description: string;
  date: string;
  source: string;
  sourceUrl: string;
  image: string;
  category: "press" | "publication" | "citation";
  slug?: string;
}

export function NewsCard({
  title,
  description,
  date,
  source,
  sourceUrl,
  image,
  category,
  slug,
}: NewsCardProps) {
  const [imageLoading, setImageLoading] = React.useState(true);
  const [imageError, setImageError] = React.useState(false);

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const CategoryBadge = () => {
    const categories = {
      press: { label: "Press Coverage", className: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
      publication: { label: "Publication", className: "bg-green-500/10 text-green-500 border-green-500/20" },
      citation: { label: "Citation", className: "bg-purple-500/10 text-purple-500 border-purple-500/20" },
    };

    const { label, className } = categories[category];

    return (
      <Badge variant="outline" className={cn("capitalize backdrop-blur-sm", className)}>
        {label}
      </Badge>
    );
  };

  const CardWrapper = ({ children }: { children: React.ReactNode }) => {
    if (slug) {
      return (
        <Link href={`/news/${slug}`} className="block group">
          {children}
        </Link>
      );
    }
    return <>{children}</>;
  };

  return (
    <CardWrapper>
      <div className="group relative p-[1px] rounded-lg bg-gradient-to-r from-transparent via-transparent to-transparent hover:from-primary/20 hover:via-primary/10 hover:to-primary/20 transition-all duration-300">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <Card className="relative overflow-hidden border-none bg-gradient-to-br from-background to-muted shadow-lg group-hover:shadow-xl transition-all duration-300 rounded-lg">
            <CardContent className="p-0">
              {/* Image Section with Category Badge */}
              <div className="relative">
                <div className="relative w-full aspect-video">
                  {imageLoading && !imageError && (
                    <div className="absolute inset-0 flex items-center justify-center bg-muted">
                      <div className="w-full h-full bg-gradient-to-r from-transparent via-muted-foreground/10 to-transparent animate-shimmer" />
                    </div>
                  )}
                  {!imageError ? (
                    <Image
                      src={image}
                      alt={title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={cn(
                        "object-cover transition-all duration-500 group-hover:scale-[1.02]",
                        imageLoading ? "opacity-0" : "opacity-100"
                      )}
                      onLoad={() => setImageLoading(false)}
                      onError={() => {
                        setImageError(true);
                        setImageLoading(false);
                      }}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-muted">
                      <LinkIcon className="h-10 w-10 text-muted-foreground/50" />
                    </div>
                  )}
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <CategoryBadge />
                </div>
                {/* Publisher Badge */}
                <div className="absolute bottom-4 right-4 z-10">
                  {!slug && (
                    <a
                      href={sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-background/95 backdrop-blur-sm rounded-lg text-sm font-medium hover:bg-background/80 transition-colors duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>{source}</span>
                      <ExternalLink className="h-3.5 w-3.5 opacity-75" />
                    </a>
                  )}
                </div>
                {/* Subtle Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content Section */}
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {formattedDate}
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {title}
                  </h3>
                  
                  <p className="text-muted-foreground/90 leading-relaxed line-clamp-2">
                    {description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </CardWrapper>
  );
} 