"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Simulated testimonials data (would come from Strapi in production)
const testimonials = [
  {
    quote: "The Trust Organization's clean water initiative has transformed our village. We now have reliable access to safe drinking water, which has significantly improved our health and quality of life.",
    author: "Elena Sharma",
    role: "Village Community Leader",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    quote: "As an educator, I've seen firsthand how the educational programs have empowered our students. The resources and teacher training provided have made a profound difference in our school's performance.",
    author: "Marcus Johnson",
    role: "School Principal",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    quote: "The agricultural training I received helped me increase my crop yield by 40%. I can now better provide for my family and even sell surplus at the local market. This program has truly changed our lives.",
    author: "Aisha Mbeki",
    role: "Farmer",
    image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    quote: "The women's entrepreneurship program gave me the skills and confidence to start my own business. I'm now financially independent and able to support other women in my community.",
    author: "Maria Gonzalez",
    role: "Small Business Owner",
    image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export function TestimonialsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="section-full-width bg-background">
      <div className="section-content">
        <h2 className="section-heading">Voices of Impact</h2>
        <p className="section-description">
          Hear from those whose lives have been transformed through our programs and initiatives
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-5xl mx-auto"
        >
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="border-none shadow-md">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="relative w-24 h-24 rounded-full overflow-hidden shrink-0">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="text-center md:text-left">
                          <QuoteIcon className="h-8 w-8 text-primary/40 mb-4 mx-auto md:mx-0" />
                          <p className="text-lg mb-4 italic">{testimonial.quote}</p>
                          <div>
                            <p className="font-semibold">{testimonial.author}</p>
                            <p className="text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6 gap-2">
              <CarouselPrevious className="static" />
              <CarouselNext className="static" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}