"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { TeamCarousel } from "@/components/team/team-carousel";

// Key team members data (founders and executives)
const keyTeamMembers = [
  {
    name: "Sarah Johnson",
    role: "Executive Director & Founder",
    image: "https://picsum.photos/seed/sarah/1200/800",
    bio: "Sarah brings over 15 years of experience in nonprofit leadership and a passion for community development. As our founder, she has been instrumental in shaping our organization's vision and impact. Her dedication to community service and innovative approach to solving social challenges has helped us create lasting positive change.",
    featured: true,
    socialLinks: {
      twitter: "https://twitter.com/sarahjohnson",
      linkedin: "https://linkedin.com/in/sarahjohnson",
      email: "sarah@trustorg.com",
      phone: "+1 (555) 123-4567",
      blog: "/blog/team/sarah-johnson"
    }
  },
  {
    name: "Michael Chen",
    role: "Program Director & Co-founder",
    image: "https://picsum.photos/seed/michael/400",
    bio: "Michael specializes in developing and implementing innovative community programs. His strategic vision has helped us reach and impact thousands of lives.",
    socialLinks: {
      linkedin: "https://linkedin.com/in/michaelchen",
      email: "michael@trustorg.com",
      phone: "+1 (555) 234-5678"
    }
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Community Relations",
    image: "https://picsum.photos/seed/emily/400",
    bio: "Emily is dedicated to building strong relationships with community partners and volunteers. Her work has been crucial in expanding our network.",
    socialLinks: {
      twitter: "https://twitter.com/emilyrodriguez",
      email: "emily@trustorg.com"
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