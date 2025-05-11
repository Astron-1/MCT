"use client";

import { Card, CardContent } from "@/components/ui/card";

export function InitiativeCardSkeleton() {
  return (
    <Card className="overflow-hidden h-full border-none shadow-md">
      <div className="relative w-full aspect-video bg-muted animate-pulse" />
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded-full bg-muted animate-pulse" />
          <div className="h-6 w-2/3 bg-muted animate-pulse rounded-md" />
        </div>
        <div className="space-y-2">
          <div className="h-4 w-full bg-muted animate-pulse rounded-md" />
          <div className="h-4 w-5/6 bg-muted animate-pulse rounded-md" />
          <div className="h-4 w-4/6 bg-muted animate-pulse rounded-md" />
        </div>
        <div className="h-4 w-24 bg-muted animate-pulse rounded-md" />
      </CardContent>
    </Card>
  );
} 