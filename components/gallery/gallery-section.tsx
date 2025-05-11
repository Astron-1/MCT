"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type AspectRatio = "portrait" | "landscape" | "square";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  aspectRatio?: AspectRatio;
  priority?: boolean;
}

interface GalleryProps {
  images: GalleryImage[];
  categories?: string[];
  layout?: "masonry" | "grid";
  columns?: {
    sm: number;
    md: number;
    lg: number;
  };
  className?: string;
}

const getAspectRatioClass = (ratio?: AspectRatio) => {
  switch (ratio) {
    case "portrait":
      return "aspect-[2/3]"; // Slightly adjusted for better proportions
    case "landscape":
      return "aspect-[3/2]";
    case "square":
      return "aspect-square";
    default:
      return "aspect-[2/3]";
  }
};

const ImageCard = ({ image, loading, columnCount }: { image: GalleryImage; loading: boolean; columnCount: number }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const aspectRatioClass = getAspectRatioClass(image.aspectRatio);

  const handleRetry = () => {
    if (retryCount < 3) {
      setError(false);
      setIsLoading(true);
      setRetryCount(prev => prev + 1);
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "relative overflow-hidden rounded-xl bg-muted group",
        aspectRatioClass,
        "transform transition-transform duration-300 hover:z-10 hover:shadow-2xl"
      )}
    >
      {(isLoading || loading) && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted">
          <Skeleton className="w-full h-full" />
        </div>
      )}
      
      {error ? (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/50 backdrop-blur-sm">
          <div className="text-center p-4">
            <p className="text-muted-foreground text-sm mb-2">Failed to load image</p>
            {retryCount < 3 && (
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleRetry}
                className="text-xs"
              >
                Retry Loading
              </Button>
            )}
          </div>
        </div>
      ) : (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={
            columnCount === 2
              ? "(max-width: 768px) 100vw, 50vw"
              : columnCount === 3
              ? "(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
              : "(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 20vw"
          }
          quality={90}
          priority={image.priority}
          loading={image.priority ? "eager" : "lazy"}
          className={cn(
            "object-cover transition-all duration-500",
            "group-hover:scale-105",
            isLoading ? "opacity-0" : "opacity-100"
          )}
          onLoadingComplete={() => setIsLoading(false)}
          onError={() => {
            setError(true);
            setIsLoading(false);
          }}
        />
      )}

      {/* Hover Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <p className="text-sm font-medium line-clamp-2">{image.alt}</p>
          <div className="flex items-center gap-2 mt-2 text-xs text-white/80">
            <span className="capitalize">{image.category}</span>
            <span>•</span>
            <span className="capitalize">{image.aspectRatio || 'portrait'}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export function GallerySection({
  images,
  categories = [],
  layout = "masonry",
  columns = { sm: 2, md: 3, lg: 4 },
  className,
}: GalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredImages, setFilteredImages] = useState(images);
  const [isLoading, setIsLoading] = useState(true);
  const [columnCount, setColumnCount] = useState(columns.sm);
  const [isMobile, setIsMobile] = useState(false);

  // Get unique categories from images if not provided
  const allCategories = categories.length
    ? categories
    : ["all", ...Array.from(new Set(images.map((img) => img.category)))];

  useEffect(() => {
    setIsLoading(true);
    setFilteredImages(
      selectedCategory === "all"
        ? images
        : images.filter((img) => img.category === selectedCategory)
    );
    setTimeout(() => setIsLoading(false), 300);
  }, [selectedCategory, images]);

  // Handle responsive columns and mobile detection
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        const width = window.innerWidth;
        setIsMobile(width < 768);
        if (width < 768) {
          setColumnCount(columns.sm);
        } else if (width < 1200) {
          setColumnCount(columns.md);
        } else {
          setColumnCount(columns.lg);
        }
      }
    };

    handleResize();
    
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [columns]);

  // Create column arrays for masonry layout
  const createColumnArrays = () => {
    const columnArrays = Array.from({ length: columnCount }, () => [] as GalleryImage[]);
    
    // Sort images by aspect ratio to create better masonry layout
    const sortedImages = [...filteredImages].sort((a, b) => {
      const aRatio = a.aspectRatio === 'landscape' ? 2 : a.aspectRatio === 'square' ? 1 : 0;
      const bRatio = b.aspectRatio === 'landscape' ? 2 : b.aspectRatio === 'square' ? 1 : 0;
      return aRatio - bRatio;
    });

    // Distribute images across columns while trying to maintain similar heights
    sortedImages.forEach((image, index) => {
      const shortestColumn = columnArrays
        .map((col, i) => ({ 
          index: i, 
          height: col.reduce((sum, img) => {
            const ratio = img.aspectRatio === 'landscape' ? 1.5 : 
                         img.aspectRatio === 'square' ? 1 : 0.67;
            return sum + ratio;
          }, 0)
        }))
        .sort((a, b) => a.height - b.height)[0].index;
      
      columnArrays[shortestColumn].push(image);
    });

    return columnArrays;
  };

  const CategoryFilter = () => {
    if (isMobile) {
      return (
        <div className="w-full max-w-xs mx-auto px-4 mb-8">
          <Select
            value={selectedCategory}
            onValueChange={setSelectedCategory}
          >
            <SelectTrigger className="w-full bg-background/60 backdrop-blur-sm">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {allCategories.map((category) => (
                <SelectItem 
                  key={category} 
                  value={category}
                  className="capitalize"
                >
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      );
    }

    return (
      <div className="hidden md:flex items-center justify-center flex-wrap gap-3 px-4 mb-12">
        {allCategories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="lg"
            className={cn(
              "rounded-full capitalize px-6 text-base",
              selectedCategory === category && "shadow-lg"
            )}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
    );
  };

  return (
    <div className={cn("space-y-4 md:space-y-8", className)}>
      {/* Category Filter - Responsive */}
      <CategoryFilter />

      {/* Gallery Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="pt-4"
        >
          {layout === "masonry" ? (
            // Masonry Layout
            <div className={cn(
              "grid gap-4 md:gap-6 px-4",
              {
                'grid-cols-2': columnCount === 2,
                'grid-cols-3': columnCount === 3,
                'grid-cols-4': columnCount === 4,
              }
            )}>
              {createColumnArrays().map((column, colIndex) => (
                <div key={colIndex} className="grid gap-4 md:gap-6">
                  {column.map((image) => (
                    <ImageCard 
                      key={image.id} 
                      image={image} 
                      loading={isLoading}
                      columnCount={columnCount}
                    />
                  ))}
                </div>
              ))}
            </div>
          ) : (
            // Regular Grid Layout
            <div className={cn(
              "grid gap-4 md:gap-6 px-4",
              {
                'grid-cols-2': columnCount === 2,
                'grid-cols-3': columnCount === 3,
                'grid-cols-4': columnCount === 4,
              }
            )}>
              {filteredImages.map((image) => (
                <ImageCard 
                  key={image.id} 
                  image={image} 
                  loading={isLoading}
                  columnCount={columnCount}
                />
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
} 