"use client";

import React from "react";
import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  description?: string;
  centered?: boolean;
}

export function PageHeader({ title, description, centered = true }: PageHeaderProps) {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-muted/30 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5 bg-[radial-gradient(#3e8ddd_1px,transparent_1px)] [background-size:20px_20px]" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`max-w-4xl ${centered ? 'mx-auto text-center' : ''}`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
            {title}
          </h1>
          {description && (
            <p className="text-xl text-muted-foreground">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}