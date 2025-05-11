"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TeamCard } from "./team-card";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  featured?: boolean;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    email?: string;
    phone?: string;
    blog?: string;
  };
}

interface TeamCarouselProps {
  members: TeamMember[];
  autoPlayInterval?: number;
  className?: string;
  showNavigation?: boolean;
  showIndicators?: boolean;
  itemsToShow?: number;
  layout?: "grid" | "featured";
}

export function TeamCarousel({
  members,
  autoPlayInterval = 5000,
  className,
  showNavigation = true,
  showIndicators = true,
  itemsToShow = 1,
  layout = "grid",
}: TeamCarouselProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // If there's only one member, render it directly without carousel
  if (members.length === 1) {
    return (
      <div className={cn("px-4 py-8", className)}>
        <TeamCard
          {...members[0]}
          layout="landscape"
          className="max-w-4xl mx-auto"
          featured={true}
        />
      </div>
    );
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const totalSlides = members.length;

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides, autoPlayInterval]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const handleIndicatorClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  // Pre-load the next image
  const nextIndex = (currentIndex + 1) % totalSlides;
  const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;

  return (
    <div 
      className={cn(
        "relative px-4 sm:px-8 py-8",
        className
      )}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="flex"
          >
            <div className="w-full px-4">
              <TeamCard
                {...members[currentIndex]}
                layout="landscape"
                className="max-w-4xl mx-auto"
                featured={true}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Preload next and previous images */}
      {isClient && (
        <div className="hidden">
          <Image
            src={members[nextIndex].image}
            alt="Preload next"
            width={1}
            height={1}
          />
          <Image
            src={members[prevIndex].image}
            alt="Preload previous"
            width={1}
            height={1}
          />
        </div>
      )}

      {showNavigation && members.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90 z-10 hidden sm:flex"
            onClick={handlePrevious}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90 z-10 hidden sm:flex"
            onClick={handleNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </>
      )}

      {showIndicators && members.length > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {members.map((_, index) => (
            <button
              key={index}
              onClick={() => handleIndicatorClick(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                currentIndex === index
                  ? "bg-primary w-8"
                  : "bg-primary/20 hover:bg-primary/40"
              )}
            >
              <span className="sr-only">Go to slide {index + 1}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 