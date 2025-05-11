"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Leaf, BookOpen, Droplets, Users } from "lucide-react";
import { InitiativeCard } from "@/components/ui/initiative-card";

const initiatives = [
  {
    title: "Sustainable Agriculture",
    description: "Empowering farmers with sustainable farming techniques to improve crop yields while preserving natural resources.",
    image: "https://images.pexels.com/photos/2132086/pexels-photo-2132086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/programs/sustainable-agriculture",
    icon: Leaf,
  },
  {
    title: "Education for All",
    description: "Providing quality education and resources to underserved communities, focusing on both children and adult literacy.",
    image: "https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/programs/education",
    icon: BookOpen,
  },
  {
    title: "Clean Water Initiative",
    description: "Developing sustainable water solutions and infrastructure in regions facing water scarcity and contamination issues.",
    image: "https://images.pexels.com/photos/1327506/pexels-photo-1327506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/programs/clean-water",
    icon: Droplets,
  },
  {
    title: "Women Empowerment",
    description: "Supporting women with skills training, microfinance, and entrepreneurship opportunities to achieve economic independence.",
    image: "https://images.pexels.com/photos/6994985/pexels-photo-6994985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/programs/women-empowerment",
    icon: Users,
  },
];

export function KeyInitiatives() {
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
    <section className="section-full-width bg-background">
      <div className="section-content">
        <h2 className="section-heading">Our Key Initiatives</h2>
        <p className="section-description">
          Transformative programs designed to address critical challenges and create sustainable impact
        </p>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
        >
          {initiatives.map((initiative, index) => (
            <motion.div key={index} variants={itemVariants}>
              <InitiativeCard {...initiative} />
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="px-8">
            <Link href="/programs">View All Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}