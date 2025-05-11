import { HeroSection } from "@/components/home/hero-section";
import { MissionStatement } from "@/components/home/mission-statement";
import { ImpactStats } from "@/components/home/impact-stats";
import { KeyInitiatives } from "@/components/home/key-initiatives";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { CtaSection } from "@/components/home/cta-section";
import { LeadershipSection } from "@/components/home/leadership-section";
import { FeaturedGallery } from "@/components/home/featured-gallery";
import { FeaturedNews } from "@/components/home/featured-news";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trust Organization - Empowering Communities",
  description: "A non-profit organization dedicated to creating positive change in communities through sustainable initiatives and empowerment programs.",
};

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <LeadershipSection />
      <MissionStatement />
      <ImpactStats />
      <KeyInitiatives />
      <FeaturedGallery />
      <FeaturedNews />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
}