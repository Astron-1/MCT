"use client";

/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
import { TeamCarousel } from "@/components/team/team-carousel";
import { ArrowRight, Award, Heart, Users, Target, Clock, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Key team members data (founders and executives)
const keyTeamMembers = [
  {
    name: "Mr. Mayank Mohan Mishra",
    role: "Managing Director & Chairman",
    image: "/images/team/mayank.jpg", // This will need to be added
    bio: "Mr. Mayank Mohan Mishra is a dynamic and visionary leader with over 15 years of diverse professional experience across industries. A postgraduate in Business Administration (MBA), he has consistently demonstrated a strong commitment to excellence, ethical leadership, and community development. As the Managing Director and Chairman of MAA Charitable Trust, he plays a pivotal role in shaping the organization's vision, strategy, and social outreach programs. His leadership style is marked by empathy, accountability, and innovation, creating long-term value by aligning organizational goals with the greater good of society.",
    featured: true,
    socialLinks: {
      email: "maa.edu16@gmail.com",
      phone: "+91 7068869272"
    }
  },
  // {
  //   name: "Sarah Johnson",
  //   role: "Executive Director & Founder",
  //   image: "https://picsum.photos/seed/sarah/1200/800",
  //   bio: "Sarah brings over 15 years of experience in nonprofit leadership and a passion for community development. As our founder, she has been instrumental in shaping our organization's vision and impact. Her dedication to community service and innovative approach to solving social challenges has helped us create lasting positive change.",
  //   featured: true,
  //   socialLinks: {
  //     twitter: "https://twitter.com/sarahjohnson",
  //     linkedin: "https://linkedin.com/in/sarahjohnson",
  //     email: "sarah@trustorg.com",
  //     phone: "+1 (555) 123-4567",
  //     blog: "/blog/team/sarah-johnson"
  //   }
  // },
  // {
  //   name: "Michael Chen",
  //   role: "Program Director & Co-founder",
  //   image: "https://picsum.photos/seed/michael/400",
  //   bio: "Michael specializes in developing and implementing innovative community programs. His strategic vision has helped us reach and impact thousands of lives.",
  //   socialLinks: {
  //     linkedin: "https://linkedin.com/in/michaelchen",
  //     email: "michael@trustorg.com",
  //     phone: "+1 (555) 234-5678"
  //   }
  // },
  // {
  //   name: "Emily Rodriguez",
  //   role: "Head of Community Relations",
  //   image: "https://picsum.photos/seed/emily/400",
  //   bio: "Emily is dedicated to building strong relationships with community partners and volunteers. Her work has been crucial in expanding our network.",
  //   socialLinks: {
  //     twitter: "https://twitter.com/emilyrodriguez",
  //     email: "emily@trustorg.com"
  //   }
  // }
];

const impactStats = [
  { number: "50K+", label: "Lives Impacted", icon: Heart },
  { number: "100+", label: "Community Partners", icon: Users },
  { number: "25+", label: "Years of Service", icon: Clock },
  { number: "95%", label: "Success Rate", icon: Target },
];

const milestones = [
  {
    year: "1998",
    title: "Foundation Established",
    description: "Our journey began with a simple mission to serve the community.",
    image: "https://picsum.photos/seed/milestone1/800/600"
  },
  {
    year: "2005",
    title: "Major Expansion",
    description: "Expanded our programs to reach more communities and demographics.",
    image: "https://picsum.photos/seed/milestone2/800/600"
  },
  {
    year: "2012",
    title: "International Recognition",
    description: "Received multiple awards for our community development programs.",
    image: "https://picsum.photos/seed/milestone3/800/600"
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description: "Adapted our services to reach communities digitally during global challenges.",
    image: "https://picsum.photos/seed/milestone4/800/600"
  }
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="about-hero min-h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 w-full">
          <Image
            src="https://picsum.photos/seed/about/1920/1080"
            alt="About Us Hero"
            fill
            className="object-cover w-full"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
        </div>
        <div className="relative h-full w-full z-10">
          <div className="absolute inset-0 flex items-start pt-32 md:pt-40">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="container mx-auto"
            >
              <div className="max-w-3xl mx-auto px-6 lg:px-8">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  Building a Better<br className="hidden sm:block" /> Future Together
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                  For over two decades, we've been dedicated to transforming communities and empowering lives through innovative solutions and sustainable development.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="text-lg">
                    <Link href="#mission">Learn More</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="text-lg bg-white/10 hover:bg-white/20 text-white border-white/20">
                    <Link href="/contact">Get Involved</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="mission" className="py-16 md:py-24 bg-muted/50 scroll-mt-24 mt-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div mt-24
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
                  Our Mission & Vision
                </h2>
                <p className="text-lg text-muted-foreground">
                  We envision a world where every community has the resources and support they need to thrive. Our mission is to empower communities through sustainable development, education, and innovative solutions.
                </p>
              </div>

              <div className="grid gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Strategic Impact</h3>
                      <p className="text-muted-foreground">Implementing data-driven solutions for maximum community benefit through careful planning and execution.</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Community First</h3>
                      <p className="text-muted-foreground">Prioritizing local needs and sustainable development with a focus on long-term community growth.</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Excellence in Service</h3>
                      <p className="text-muted-foreground">Maintaining the highest standards of service delivery and community engagement.</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/mission/800/800"
                  alt="Our Mission"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-multiply" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary/5 rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Team Members Section */}
      <section className="relative py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-6 lg:px-8">
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

      {/* Milestones Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Journey</h2>
          <div className="max-w-5xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative mb-16 last:mb-0"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className={cn(
                    "order-2 md:order-none",
                    index % 2 === 0 ? "md:order-none" : "md:order-2"
                  )}>
                    <div className="relative aspect-video rounded-xl overflow-hidden">
                      <Image
                        src={milestone.image}
                        alt={milestone.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className={cn(
                    "order-1 md:order-none",
                    index % 2 === 0 ? "md:pl-8" : "md:pr-8"
                  )}>
                    <span className="inline-block text-2xl font-bold text-primary mb-2">
                      {milestone.year}
                    </span>
                    <h3 className="text-2xl font-bold mb-4">{milestone.title}</h3>
                    <p className="text-muted-foreground text-lg">{milestone.description}</p>
                  </div>
                </div>
                {index < milestones.length - 1 && (
                  <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-px h-16 bg-border" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're looking to volunteer, partner, or support our cause, there are many ways to get involved and make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/volunteer">
                Volunteer With Us
                <Users className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 