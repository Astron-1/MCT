"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";

export function NewsCardSkeleton() {
  return (
    <Card className="h-full flex flex-col overflow-hidden border-none shadow-md">
      <div className="relative w-full aspect-video bg-muted animate-pulse">
        <div className="absolute top-4 left-4 h-6 w-20 bg-muted-foreground/10 rounded-full" />
      </div>
      <CardContent className="p-6 flex-grow space-y-4">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded bg-muted-foreground/10 animate-pulse" />
          <div className="h-4 w-24 bg-muted-foreground/10 animate-pulse rounded" />
        </div>
        <div className="space-y-2">
          <div className="h-6 w-3/4 bg-muted-foreground/10 animate-pulse rounded" />
          <div className="h-6 w-1/2 bg-muted-foreground/10 animate-pulse rounded" />
        </div>
        <div className="space-y-2">
          <div className="h-4 w-full bg-muted-foreground/10 animate-pulse rounded" />
          <div className="h-4 w-5/6 bg-muted-foreground/10 animate-pulse rounded" />
          <div className="h-4 w-4/6 bg-muted-foreground/10 animate-pulse rounded" />
        </div>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0">
        <div className="h-9 w-full bg-muted-foreground/10 animate-pulse rounded-md" />
      </CardFooter>
    </Card>
  );
} 