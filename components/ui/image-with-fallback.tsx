"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ImagePlaceholder } from './image-placeholder';
import { cn } from '@/lib/utils';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  aspectRatio?: 'square' | 'video' | 'wide' | 'tall';
  fallbackTitle?: string;
  fallbackDescription?: string;
  priority?: boolean;
  quality?: number;
}

const aspectRatioClasses = {
  square: 'aspect-square',
  video: 'aspect-video',
  wide: 'aspect-[2/1]',
  tall: 'aspect-[3/4]',
};

export function ImageWithFallback({
  src,
  alt,
  width,
  height,
  fill = false,
  className = '',
  aspectRatio = 'square',
  fallbackTitle,
  fallbackDescription,
  priority = false,
  quality = 85,
  ...props
}: ImageWithFallbackProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const containerClass = cn(
    'relative',
    !fill && aspectRatioClasses[aspectRatio],
    className
  );

  if (error || !src) {
    return (
      <div className={containerClass}>
        <ImagePlaceholder
          aspectRatio={aspectRatio}
          title={fallbackTitle || 'Image not available'}
          description={fallbackDescription || 'The image could not be loaded'}
          className="h-full"
        />
      </div>
    );
  }

  return (
    <div className={containerClass}>
      {isLoading && (
        <div className="absolute inset-0">
          <ImagePlaceholder
            aspectRatio={aspectRatio}
            isLoading={true}
            title={fallbackTitle || "Loading"}
            description={fallbackDescription || "Please wait..."}
            className="h-full"
          />
        </div>
      )}
      <div className={cn(
        'relative',
        fill ? 'h-full w-full' : aspectRatioClasses[aspectRatio]
      )}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          fill={fill}
          priority={priority}
          quality={quality}
          className={cn(
            'object-cover',
            isLoading ? 'opacity-0' : 'opacity-100',
            'transition-opacity duration-300'
          )}
          onLoadingComplete={() => setIsLoading(false)}
          onError={() => {
            console.error('Image failed to load:', src);
            setError(true);
            setIsLoading(false);
          }}
          {...props}
        />
      </div>
    </div>
  );
} 