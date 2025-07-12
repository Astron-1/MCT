/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { TeamCarousel } from "@/components/team/team-carousel";

// Key team members data (founders and executives)
const keyTeamMembers = [
  {
    name: "Mr. Mayank Mohan Mishra",
    role: "Managing Director & Chairman, MAA Charitable Trust",
    image: "/images/team/mayank.jpg",
    bio: `Mr. Mayank Mohan Mishra is a dynamic and visionary leader with over 15 years of diverse professional experience across industries. A postgraduate in Business Administration (MBA), he has consistently demonstrated a strong commitment to excellence, ethical leadership, and community development. Throughout his career, he has held key leadership roles where he successfully combined strategic thinking with a people-first approach, building high-impact teams and driving sustainable growth.

As the Managing Director and Chairman of MAA Charitable Trust, Mr. Mishra plays a pivotal role in shaping the organization's vision, strategy, and social outreach programs. Under his stewardship, the Trust has grown into a respected institution dedicated to empowering underserved communities through initiatives in healthcare, education, skill development, and social welfare.

His leadership style is marked by empathy, accountability, and innovation. He believes in creating long-term value by aligning organizational goals with the greater good of society. With a deep understanding of grassroots challenges and a strong belief in inclusive development, Mr. Mishra continues to inspire positive change through impactful projects and compassionate leadership.

Driven by purpose and guided by principles, Mr. Mayank Mohan Mishra remains committed to building a better future for all, one initiative at a time.`,
    featured: true,
    socialLinks: {
      email: "maa.edu16@gmail.com",
      phone: "+91 7068869272"
    }
  }
];

export function LeadershipSection() {
  return (
    <section className="relative py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
            Our Leadership
          </h2>
          <p className="text-lg text-muted-foreground">
            Meet the dedicated individuals who guide our organization's vision and mission
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <TeamCarousel
            members={keyTeamMembers}
            layout="featured"
            itemsToShow={1}
            className="w-full"
            autoPlayInterval={6000}
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" className="bg-primary/90 hover:bg-primary">
            <Link href="/team" className="inline-flex items-center gap-2">
              Meet Our Full Team
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
} 