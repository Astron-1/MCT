"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export function CtaSection() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="section-full-width relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 dark:from-blue-900/30 dark:to-emerald-900/30" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5 bg-[radial-gradient(#3e8ddd_1px,transparent_1px)] [background-size:20px_20px]" />
      
      <div className="section-content relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <Heart className="h-12 w-12 text-primary mx-auto" />
          <h2 className="section-heading">Make a Difference Today</h2>
          <p className="section-description">
            Your support enables us to continue our vital work in communities around the world. Join us in creating lasting positive change.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button asChild size="lg" className="px-8">
              <Link href="/donate">Donate Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8">
              <Link href="/volunteer">Volunteer</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}