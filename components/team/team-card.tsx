"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Twitter, Linkedin, Mail, Phone, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialLinks {
  twitter?: string;
  linkedin?: string;
  email?: string;
  phone?: string;
  blog?: string;
}

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  featured?: boolean;
  layout?: "landscape" | "portrait";
  socialLinks?: SocialLinks;
  className?: string;
}

const ImageSkeleton = ({ layout }: { layout: "landscape" | "portrait" }) => (
  <div 
    className={cn(
      "relative w-full bg-muted animate-pulse rounded-lg overflow-hidden",
      layout === "portrait" ? "aspect-square" : "aspect-[3/4] md:aspect-[3/4]"
    )}
  >
    <div className="absolute inset-0 flex items-center justify-center">
      <User className="w-12 h-12 text-muted-foreground/20" />
    </div>
  </div>
);

export function TeamCard({
  name,
  role,
  image,
  bio,
  featured,
  layout = "portrait",
  socialLinks,
  className,
}: TeamMemberProps) {
  const [imageLoading, setImageLoading] = React.useState(true);
  const [imageError, setImageError] = React.useState(false);
  const [isComponentMounted, setIsComponentMounted] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    setIsComponentMounted(true);
  }, []);

  const handleSocialClick = (
    e: React.MouseEvent,
    action: () => void
  ) => {
    e.stopPropagation();
    action();
  };

  const handleCardClick = () => {
    if (socialLinks?.blog) {
      router.push(socialLinks.blog);
    }
  };

  const SocialButton = ({ 
    href, 
    icon, 
    label 
  }: { 
    href: string; 
    icon: React.ReactNode; 
    label: string;
  }) => (
    <Button 
      variant="ghost" 
      size="icon"
      onClick={(e) => handleSocialClick(e, () => window.open(href, '_blank'))}
      className="hover:text-primary transition-colors duration-300"
    >
      {icon}
      <span className="sr-only">{label}</span>
    </Button>
  );

  const cardContent = (
    <Card className={cn(
      "relative overflow-hidden border-none bg-gradient-to-br from-background to-muted shadow-lg transition-all duration-300 rounded-xl h-full",
      "hover:shadow-xl group/card",
      className
    )}>
      <CardContent className={cn(
        "p-6 flex flex-col transition-all duration-300 ease-in-out",
        layout === "landscape" && "md:flex-row md:gap-12 md:items-start"
      )}>
        {/* Image Section */}
        <div className={cn(
          "relative mb-6 flex-shrink-0",
          layout === "portrait" ? "w-full" : "w-full md:w-2/5 md:mb-0"
        )}>
          {(!isComponentMounted || imageLoading) && !imageError && (
            <ImageSkeleton layout={layout} />
          )}
          {isComponentMounted && !imageError && (
            <div className={cn(
              "relative rounded-lg overflow-hidden",
              layout === "portrait" ? "aspect-square" : "aspect-[3/4] md:aspect-[3/4]",
              imageLoading ? "hidden" : "block"
            )}>
              <Image
                src={image}
                alt={name}
                fill
                sizes={layout === "portrait" ? 
                  "(max-width: 768px) 100vw, 400px" : 
                  "(max-width: 768px) 100vw, 800px"}
                className={cn(
                  "object-cover transition-all duration-500 object-top",
                  "hover:scale-105"
                )}
                priority={featured}
                onLoad={() => setImageLoading(false)}
                onError={() => {
                  setImageError(true);
                  setImageLoading(false);
                }}
              />
            </div>
          )}
          {imageError && (
            <div className={cn(
              "relative rounded-lg overflow-hidden bg-muted flex items-center justify-center",
              layout === "portrait" ? "aspect-square" : "aspect-video md:aspect-[16/9]"
            )}>
              <span className="text-4xl font-bold text-muted-foreground/20">
                {name.charAt(0)}
              </span>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className={cn(
          "flex flex-col transition-all duration-300 ease-in-out",
          layout === "portrait" ? "text-center" : "text-left md:w-3/5",
          layout === "landscape" && "md:justify-between"
        )}>
          <div className="space-y-3">
            <h3 className={cn(
              "font-bold group-hover/card:text-primary transition-colors duration-300",
              layout === "landscape" ? "text-2xl md:text-3xl" : "text-xl"
            )}>
              {name}
            </h3>
            <p className="text-sm text-muted-foreground">{role}</p>
            <div className="relative">
              <div className={cn(
                "text-muted-foreground/90 transition-all duration-300 space-y-4",
                layout === "landscape" ? "text-base" : "text-sm",
                "group-hover/card:line-clamp-none",
                !layout || layout === "portrait" ? "line-clamp-3" : "line-clamp-4"
              )}>
                {bio.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4">
            {/* Contact Information */}
            {socialLinks?.phone && (
              <div className="mb-4">
                <Button 
                  variant="ghost"
                  className="inline-flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  onClick={(e) => handleSocialClick(e, () => window.location.href = `tel:${socialLinks.phone}`)}
                >
                  <Phone className="h-4 w-4" />
                  {socialLinks.phone}
                </Button>
              </div>
            )}

            {/* Social Links */}
            {socialLinks && (socialLinks.twitter || socialLinks.linkedin || socialLinks.email) && (
              <div className={cn(
                "flex gap-2 pt-2 border-t border-border",
                layout === "portrait" ? "justify-center" : "justify-start"
              )}>
                {socialLinks.email && (
                  <SocialButton
                    href={`mailto:${socialLinks.email}`}
                    icon={<Mail className="h-4 w-4" />}
                    label="Email"
                  />
                )}
                {socialLinks.twitter && (
                  <SocialButton
                    href={socialLinks.twitter}
                    icon={<Twitter className="h-4 w-4" />}
                    label="Twitter"
                  />
                )}
                {socialLinks.linkedin && (
                  <SocialButton
                    href={socialLinks.linkedin}
                    icon={<Linkedin className="h-4 w-4" />}
                    label="LinkedIn"
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "group cursor-pointer",
        socialLinks?.blog && "cursor-pointer"
      )}
      onClick={handleCardClick}
    >
      {cardContent}
    </motion.div>
  );
} 