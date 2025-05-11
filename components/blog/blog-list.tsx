"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Loader2 } from "lucide-react";
import { BlogCard } from "./blog-card";
import { useBlogPosts } from "@/lib/hooks/use-blog-posts";

// Simulated blog posts (would come from Strapi in production)
const blogPosts = [
  {
    id: 1,
    title: "New Clean Water Project Launches in Rural Communities",
    excerpt: "Our latest clean water initiative aims to provide sustainable access to safe drinking water for 10,000 people in underserved regions.",
    slug: "clean-water-project-launch",
    publishedAt: "2023-09-15T09:00:00Z",
    image: "https://picsum.photos/seed/water/800/600",
    category: {
      name: "Projects",
      slug: "projects"
    }
  },
  {
    id: 2,
    title: "Education Program Reaches Milestone with 50 New Schools",
    excerpt: "Our education initiative has successfully established partnerships with 50 new schools, extending quality education to over 5,000 children.",
    slug: "education-program-milestone",
    publishedAt: "2023-08-28T09:00:00Z",
    image: "https://picsum.photos/seed/education/800/600",
    category: {
      name: "Education",
      slug: "education"
    }
  },
  {
    id: 3,
    title: "Annual Charity Gala Raises Record Funds for Community Projects",
    excerpt: "This year's charity gala exceeded all expectations, raising $1.2 million to support our ongoing community development programs.",
    slug: "annual-charity-gala",
    publishedAt: "2023-07-10T09:00:00Z",
    image: "https://picsum.photos/seed/gala/800/600",
    category: {
      name: "Events",
      slug: "events"
    }
  },
  {
    id: 4,
    title: "Sustainable Agriculture Training Improves Crop Yields by 40%",
    excerpt: "Farmers participating in our sustainable agriculture program have seen significant improvements in crop yields while reducing environmental impact.",
    slug: "sustainable-agriculture-training",
    publishedAt: "2023-06-22T09:00:00Z",
    image: "https://picsum.photos/seed/agriculture/800/600",
    category: {
      name: "Agriculture",
      slug: "agriculture"
    }
  },
  {
    id: 5,
    title: "Women's Entrepreneurship Program Celebrates 100 Successful Businesses",
    excerpt: "Our women's entrepreneurship initiative has helped establish 100 women-owned businesses, creating economic opportunities in underserved communities.",
    slug: "womens-entrepreneurship-success",
    publishedAt: "2023-05-15T09:00:00Z",
    image: "https://picsum.photos/seed/women/800/600",
    category: {
      name: "Empowerment",
      slug: "empowerment"
    }
  },
  {
    id: 6,
    title: "Global Volunteers Make a Difference in Community Health Initiatives",
    excerpt: "Our international volunteer program has successfully deployed healthcare professionals to support community health initiatives in rural areas.",
    slug: "global-volunteers-health-initiatives",
    publishedAt: "2023-04-05T09:00:00Z",
    image: "https://picsum.photos/seed/volunteers/800/600",
    category: {
      name: "Volunteers",
      slug: "volunteers"
    }
  },
];

export function BlogList() {
  const {
    posts,
    totalPosts,
    searchQuery,
    setSearchQuery,
    hasMore,
    loadMore,
    selectedCategory,
    setSelectedCategory,
  } = useBlogPosts({
    initialPosts: blogPosts,
    postsPerPage: 4,
  });

  const [isLoading, setIsLoading] = React.useState(false);

  const handleLoadMore = async () => {
    setIsLoading(true);
    // Simulate loading delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    loadMore();
    setIsLoading(false);
  };

  return (
    <div className="space-y-8">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search articles..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {searchQuery && (
        <p className="text-muted-foreground">
          {totalPosts} {totalPosts === 1 ? 'result' : 'results'} for "{searchQuery}"
        </p>
      )}

      <div className="grid grid-cols-1 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-10">
          <Button
            variant="outline"
            onClick={handleLoadMore}
            disabled={isLoading}
            className="min-w-[150px]"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Loading...
              </>
            ) : (
              'Load More'
            )}
          </Button>
        </div>
      )}

      {!hasMore && posts.length > 0 && (
        <p className="text-center text-muted-foreground">
          No more posts to load
        </p>
      )}

      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No posts found</p>
        </div>
      )}
    </div>
  );
}