"use client";

import { Card, CardContent } from "@/components/ui/card";

export function ProgramCardSkeleton() {
  return (
    <Card className="overflow-hidden border-none shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Image Section */}
        <div className="relative aspect-[4/3] bg-muted animate-pulse">
          {/* Category Badge Skeleton */}
          <div className="absolute top-4 left-4 h-6 w-24 bg-muted-foreground/10 rounded-full" />
          {/* Status Badge Skeleton */}
          <div className="absolute top-4 right-4 h-6 w-16 bg-muted-foreground/10 rounded-full" />
        </div>

        {/* Content Section */}
        <CardContent className="p-6 flex flex-col justify-between">
          <div className="space-y-4">
            {/* Title Skeleton */}
            <div className="h-8 w-3/4 bg-muted-foreground/10 rounded-md" />
            
            {/* Description Skeleton */}
            <div className="space-y-2">
              <div className="h-4 w-full bg-muted-foreground/10 rounded" />
              <div className="h-4 w-5/6 bg-muted-foreground/10 rounded" />
              <div className="h-4 w-4/6 bg-muted-foreground/10 rounded" />
            </div>
          </div>

          {/* Stats Skeleton */}
          <div className="space-y-4 mt-6">
            <div className="grid grid-cols-3 gap-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex flex-col items-center p-2 bg-muted rounded-lg">
                  <div className="h-5 w-5 bg-muted-foreground/10 rounded mb-1" />
                  <div className="h-4 w-12 bg-muted-foreground/10 rounded mb-1" />
                  <div className="h-3 w-16 bg-muted-foreground/10 rounded" />
                </div>
              ))}
            </div>

            {/* Button Skeleton */}
            <div className="h-9 w-full bg-muted-foreground/10 rounded-md" />
          </div>
        </CardContent>
      </div>
    </Card>
  );
} 