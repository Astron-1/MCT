"use client";

import React from "react";
import { PageHeader } from "@/components/ui/page-header";
import { BlogList } from "@/components/blog/blog-list";
import { BlogSidebar } from "@/components/blog/blog-sidebar";
import { useBlogPosts } from "@/lib/hooks/use-blog-posts";

export default function BlogPage() {
  const { selectedCategory, setSelectedCategory } = useBlogPosts({
    initialPosts: [],
    postsPerPage: 4,
  });

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Our Blog"
        description="Latest news, stories, and updates about our projects and impact"
      />
      
      <section className="flex-grow py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <BlogList />
            </div>
            
            {/* Sidebar */}
            <div className="order-first lg:order-last">
              <div className="lg:sticky lg:top-8">
                <BlogSidebar
                  selectedCategory={selectedCategory}
                  onCategorySelect={setSelectedCategory}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}