"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function MissionStatement() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="section-full-width bg-background">
      <div className="section-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="section-heading">Our Mission</h2>
          <p className="section-description">
            To empower communities through sustainable development, education, and advocacy, creating lasting positive change that enables people to thrive in harmony with their environment.
          </p>
        </motion.div>
      </div>
    </section>
  );
}