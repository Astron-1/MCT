"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  aspectRatio: "portrait" | "landscape" | "square";
}

const featuredImages: GalleryImage[] = [
  {
    id: "1",
    src: "https://picsum.photos/seed/landscape1/1200/800",
    alt: "Community Impact",
    aspectRatio: "landscape"
  },
  {
    id: "2",
    src: "https://picsum.photos/seed/portrait1/800/1200",
    alt: "Volunteer Work",
    aspectRatio: "portrait"
  },
  {
    id: "3",
    src: "https://picsum.photos/seed/square1/1000/1000",
    alt: "Local Initiatives",
    aspectRatio: "square"
  },
  {
    id: "4",
    src: "https://picsum.photos/seed/landscape2/1200/800",
    alt: "Community Events",
    aspectRatio: "landscape"
  },
  {
    id: "5",
    src: "https://picsum.photos/seed/portrait2/800/1200",
    alt: "Education Programs",
    aspectRatio: "portrait"
  }
];

export function FeaturedGallery() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our Gallery
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Explore moments of impact and community transformation through our visual journey
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8"
        >
          {featuredImages.map((image, index) => (
            <div
              key={image.id}
              className={`relative overflow-hidden rounded-lg ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <div className="aspect-square w-full h-full relative group">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <Button asChild size="lg">
            <Link href="/gallery" className="inline-flex items-center gap-2">
              View Full Gallery
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}