"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ImagePlaceholderProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  aspectRatio?: 'square' | 'video' | 'wide' | 'tall';
  isLoading?: boolean;
}

const aspectRatioClasses = {
  square: 'aspect-square',
  video: 'aspect-video',
  wide: 'aspect-[2/1]',
  tall: 'aspect-[3/4]',
};

export function ImagePlaceholder({
  title = 'Image',
  description = 'Loading image...',
  icon,
  aspectRatio = 'square',
  isLoading = false,
  className,
  ...props
}: ImagePlaceholderProps) {
  // Animation variants for the background pattern
  const patternVariants = {
    animate: {
      backgroundPosition: ['0% 0%', '100% 100%'],
      transition: {
        duration: 8,
        ease: 'linear',
        repeat: Infinity,
      },
    },
  };

  // Animation variants for the icon
  const iconVariants = {
    initial: { scale: 0.8, opacity: 0.5 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  };

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-lg bg-muted',
        aspectRatioClasses[aspectRatio],
        className
      )}
      {...props}
    >
      {/* Animated background pattern */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
          backgroundSize: '20px 20px',
        }}
        variants={patternVariants}
        animate="animate"
      />

      {/* Content container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
        <motion.div
          variants={{
            initial: { scale: 0.8, opacity: 0.5 },
            animate: {
              scale: 1,
              opacity: 1,
              transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse" as const
              }
            }
          }}
          initial="initial"
          animate="animate" 
          className="mb-4 text-muted-foreground"
        >
          {icon || <ImageIcon className="h-12 w-12" />}
        </motion.div>
        {title && (
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
        )}
        {description && (
          <p className="mt-1 text-xs text-muted-foreground/80">{description}</p>
        )}
        {isLoading && (
          <motion.div
            className="mt-4 h-1 w-24 rounded-full bg-muted-foreground/20 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="h-full bg-muted-foreground/40"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
} 