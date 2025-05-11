"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, MapPin, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProgramStats {
  beneficiaries: string;
  locations: string;
  volunteers: string;
}

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  stats: ProgramStats;
  status: string;
  slug: string;
}

export function ProgramCard({
  title,
  description,
  image,
  category,
  stats,
  status,
  slug,
}: ProgramCardProps) {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group relative p-[1px] rounded-lg bg-gradient-to-r from-transparent via-transparent to-transparent hover:from-primary/20 hover:via-primary/10 hover:to-primary/20 transition-all duration-300">
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
      <Card className="relative overflow-hidden border-none bg-gradient-to-br from-background to-muted shadow-lg group-hover:shadow-xl transition-all duration-300 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          {/* Image Section - Now spans full height */}
          <div className="relative md:col-span-5 aspect-[4/3] md:aspect-auto min-h-full">
            {/* Loading State */}
            {imageLoading && !imageError && (
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <div className="w-full h-full bg-gradient-to-r from-transparent via-muted-foreground/10 to-transparent animate-shimmer" />
              </div>
            )}

            {/* Error State */}
            {imageError && (
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <p className="text-muted-foreground text-center px-4">{category}</p>
              </div>
            )}

            {/* Actual Image */}
            {!imageError && (
              <Image
                src={image}
                alt={title}
                fill
                className={cn(
                  "object-cover transition-all duration-500 group-hover:scale-110",
                  imageLoading ? "opacity-0" : "opacity-100"
                )}
                onLoadingComplete={() => setImageLoading(false)}
                onError={() => {
                  setImageError(true);
                  setImageLoading(false);
                }}
              />
            )}

            {/* Category Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-primary/90 backdrop-blur-sm text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium shadow-lg">
                {category}
              </span>
            </div>

            {/* Status Badge */}
            <div className="absolute top-4 right-4 z-10">
              <span className="bg-background/80 backdrop-blur-sm text-foreground px-4 py-1.5 rounded-full text-sm font-medium shadow-sm">
                {status}
              </span>
            </div>

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Content Section - Adjusted for better spacing */}
          <CardContent className="md:col-span-7 p-8 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                {title}
              </h3>
              <p className="text-muted-foreground/90 leading-relaxed line-clamp-3">
                {description}
              </p>
            </div>

            {/* Stats Section - Improved layout */}
            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-3">
                <div className="flex flex-col items-center p-3 bg-muted/50 rounded-xl hover:bg-muted/80 transition-colors duration-300">
                  <Heart className="h-5 w-5 text-primary mb-2" />
                  <span className="font-bold text-base">{stats.beneficiaries}</span>
                  <span className="text-xs text-muted-foreground text-center">Beneficiaries</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-muted/50 rounded-xl hover:bg-muted/80 transition-colors duration-300">
                  <MapPin className="h-5 w-5 text-primary mb-2" />
                  <span className="font-bold text-base">{stats.locations}</span>
                  <span className="text-xs text-muted-foreground text-center">Locations</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-muted/50 rounded-xl hover:bg-muted/80 transition-colors duration-300">
                  <Users className="h-5 w-5 text-primary mb-2" />
                  <span className="font-bold text-base">{stats.volunteers}</span>
                  <span className="text-xs text-muted-foreground text-center">Volunteers</span>
                </div>
              </div>

              <Button 
                asChild 
                className="w-full bg-primary/90 hover:bg-primary shadow-md group/btn"
                size="lg"
              >
                <Link href={`/blog/programs/${slug}`}>
                  Learn More
                  <motion.span
                    className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300"
                  >
                    →
                  </motion.span>
                </Link>
              </Button>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
} 