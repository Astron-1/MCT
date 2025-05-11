"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, School, Home, Heart } from "lucide-react";

const stats = [
  {
    value: "50,000+",
    label: "Lives Impacted",
    description: "Through our community programs",
    icon: Users,
  },
  {
    value: "120",
    label: "Communities Served",
    description: "Across 15 countries worldwide",
    icon: Home,
  },
  {
    value: "30+",
    label: "Ongoing Projects",
    description: "Focused on sustainable development",
    icon: School,
  },
  {
    value: "85%",
    label: "Funds to Programs",
    description: "Directly supporting our initiatives",
    icon: Heart,
  },
];

export function ImpactStats() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="section-full-width bg-muted/30">
      <div className="section-content">
        <h2 className="section-heading">Our Impact</h2>
        <p className="section-description">
          Through dedication and collaborative efforts, we've made a meaningful difference in communities worldwide
        </p>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="stats-grid"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="stat-item border-none shadow-md h-full">
                  <CardContent className="p-6 text-center flex flex-col items-center justify-center space-y-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold">{stat.value}</h3>
                      <p className="font-medium text-lg">{stat.label}</p>
                      <p className="text-sm text-muted-foreground mt-1">{stat.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}