import { useState, useEffect, useMemo } from 'react';
import { useDebounce } from './use-debounce';

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  slug: string;
  publishedAt: string;
  image: string;
  category: {
    name: string;
    slug: string;
  };
}

interface UseBlogPostsProps {
  postsPerPage?: number;
  initialPosts: BlogPost[];
}

export function useBlogPosts({ postsPerPage = 6, initialPosts }: UseBlogPostsProps) {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = !debouncedSearchQuery || 
        post.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
        post.category.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase());

      const matchesCategory = !selectedCategory || post.category.slug === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [posts, debouncedSearchQuery, selectedCategory]);

  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * postsPerPage;
    return filteredPosts.slice(0, startIndex + postsPerPage);
  }, [filteredPosts, currentPage, postsPerPage]);

  const hasMore = paginatedPosts.length < filteredPosts.length;

  const loadMore = () => {
    setCurrentPage(prev => prev + 1);
  };

  const resetPagination = () => {
    setCurrentPage(1);
  };

  useEffect(() => {
    resetPagination();
  }, [debouncedSearchQuery, selectedCategory]);

  return {
    posts: paginatedPosts,
    totalPosts: filteredPosts.length,
    searchQuery,
    setSearchQuery,
    hasMore,
    loadMore,
    selectedCategory,
    setSelectedCategory,
  };
} 