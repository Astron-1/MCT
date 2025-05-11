"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface InitiativeCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  icon: React.ElementType;
}

export function InitiativeCard({
  title,
  description,
  image,
  link,
  icon: Icon,
}: InitiativeCardProps) {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  return (
    <Card className="group overflow-hidden h-full border-none shadow-md hover:shadow-lg transition-all duration-300">
      <Link href={link} className="block">
        <div className="relative w-full aspect-video bg-muted overflow-hidden">
          {/* Placeholder/Loading State */}
          {imageLoading && !imageError && (
            <div className="absolute inset-0 flex items-center justify-center bg-muted">
              <div className="w-full h-full bg-gradient-to-r from-transparent via-muted-foreground/10 to-transparent animate-shimmer" />
              <Icon className="absolute h-10 w-10 text-muted-foreground/40" />
            </div>
          )}
          
          {/* Error State */}
          {imageError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted">
              <Icon className="h-10 w-10 text-muted-foreground/60 mb-2" />
              <p className="text-sm text-muted-foreground">{title}</p>
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
                setImageError(true);
                setImageLoading(false);
              }}
              priority
            />
          )}

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>

      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Icon className="h-5 w-5 text-primary" />
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Link href={link} className="inline-block">
          <Button 
            variant="ghost" 
            className="p-0 h-auto font-medium group/btn" 
            size="sm"
          >
            Learn More
            <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
} 