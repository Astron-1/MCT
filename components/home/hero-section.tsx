"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { HeroCarousel } from "./hero-carousel";

// Sample media data - you can customize this as needed
const heroMedia = [
  {
    type: "image" as const,
    src: "https://images.pexels.com/photos/6646914/pexels-photo-6646914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "People working together in a community project"
  },
  {
    type: "image" as const,
    src: "https://images.pexels.com/photos/6994992/pexels-photo-6994992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Community engagement and support"
  },
  {
    type: "image" as const,
    src: "https://images.pexels.com/photos/6646967/pexels-photo-6646967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Sustainable community development"
  }
];

export function HeroSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative pt-24 pb-16 overflow-hidden w-full">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/80 to-emerald-100/80 dark:from-blue-950/30 dark:to-emerald-950/30" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5 bg-[radial-gradient(#3e8ddd_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center min-h-[80vh] md:min-h-[75vh]">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="flex flex-col justify-center space-y-6"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter"
            >
              Empowering Communities for a{" "}
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 dark:from-blue-400 dark:to-emerald-400 text-transparent bg-clip-text">
                Better Tomorrow
              </span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-muted-foreground max-w-[600px]"
            >
              We are dedicated to creating sustainable solutions and empowering individuals to build stronger, more resilient communities worldwide.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="px-8">
                Our Programs
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                Learn More
              </Button>
            </motion.div>
          </motion.div>
          
          <div className="relative flex justify-center items-center">
            <div className="relative h-[300px] sm:h-[400px] md:h-[450px] w-full">
              <HeroCarousel 
                media={heroMedia}
                autoPlayInterval={6000}
                className="shadow-xl rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}