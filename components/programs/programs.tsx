"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ProgramCard } from "@/components/programs/program-card";

// Simulated programs data (would come from Strapi in production)
const programs = [
  {
    id: 1,
    title: "Youth Education Initiative",
    description: "Empowering young minds through quality education and skill development programs, focusing on digital literacy and STEM education.",
    image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg",
    category: "Education",
    stats: {
      beneficiaries: "5000+",
      locations: "25",
      volunteers: "200+"
    },
    status: "Active",
    slug: "youth-education-initiative"
  },
  {
    id: 2,
    title: "Community Health Program",
    description: "Providing accessible healthcare services and promoting wellness through preventive care and health education in underserved communities.",
    image: "https://images.pexels.com/photos/6646989/pexels-photo-6646989.jpeg",
    category: "Healthcare",
    stats: {
      beneficiaries: "10000+",
      locations: "15",
      volunteers: "150+"
    },
    status: "Active",
    slug: "community-health-program"
  },
  {
    id: 3,
    title: "Sustainable Agriculture Project",
    description: "Supporting local farmers with modern farming techniques and sustainable practices to enhance food security and economic stability.",
    image: "https://images.pexels.com/photos/2132171/pexels-photo-2132171.jpeg",
    category: "Agriculture",
    stats: {
      beneficiaries: "3000+",
      locations: "10",
      volunteers: "100+"
    },
    status: "Active",
    slug: "sustainable-agriculture"
  },
  {
    id: 4,
    title: "Women Empowerment Initiative",
    description: "Enabling women through skill development, entrepreneurship training, and support networks to achieve economic independence.",
    image: "https://images.pexels.com/photos/6457579/pexels-photo-6457579.jpeg",
    category: "Social Empowerment",
    stats: {
      beneficiaries: "2500+",
      locations: "12",
      volunteers: "75+"
    },
    status: "Active",
    slug: "women-empowerment"
  }
];

export function Programs() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      <section className="section-full-width bg-gradient-to-b from-background to-muted/30 pt-24 pb-12">
        <div className="section-content text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Programs</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive range of programs designed to create lasting positive impact
            in communities through education, healthcare, and sustainable development.
          </p>
        </div>
      </section>

      <section className="section-full-width bg-muted/30 py-12">
        <div className="section-content">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {programs.map((program) => (
              <motion.div key={program.id} variants={itemVariants}>
                <ProgramCard {...program} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
} 