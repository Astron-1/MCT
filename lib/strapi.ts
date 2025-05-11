// Types for Strapi responses
export interface StrapiResponse<T> {
  data: {
    id: number;
    attributes: T;
  }[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiSingleResponse<T> {
  data: {
    id: number;
    attributes: T;
  };
}

// Placeholder fetch functions until Strapi is configured
export async function fetchFromStrapi<T>(
  endpoint: string,
  queryParams?: Record<string, any>
): Promise<StrapiResponse<T>> {
  // This is a placeholder implementation
  // Replace this with actual Strapi implementation when ready
  console.warn('Strapi is not configured yet. Using placeholder data.');
  
  return {
    data: [],
    meta: {
      pagination: {
        page: 1,
        pageSize: 10,
        pageCount: 0,
        total: 0
      }
    }
  };
}

export async function fetchSingleFromStrapi<T>(
  endpoint: string
): Promise<StrapiSingleResponse<T>> {
  // This is a placeholder implementation
  console.warn('Strapi is not configured yet. Using placeholder data.');
  
  return {
    data: {
      id: 0,
      attributes: {} as T
    }
  };
}

// Helper function to check if Strapi is configured
export function isStrapiConfigured(): boolean {
  return process.env.NEXT_PUBLIC_STRAPI_API_URL !== undefined;
}

// Export API utilities
export const strapiUtils = {
  fetchFromStrapi,
  fetchSingleFromStrapi,
  isStrapiConfigured
};