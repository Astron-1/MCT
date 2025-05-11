// Common Strapi Media Type
export interface StrapiMedia {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string | null;
      caption: string | null;
      width: number;
      height: number;
      formats: {
        thumbnail: {
          name: string;
          hash: string;
          ext: string;
          mime: string;
          width: number;
          height: number;
          size: number;
          url: string;
        };
        small?: {
          name: string;
          hash: string;
          ext: string;
          mime: string;
          width: number;
          height: number;
          size: number;
          url: string;
        };
        medium?: {
          name: string;
          hash: string;
          ext: string;
          mime: string;
          width: number;
          height: number;
          size: number;
          url: string;
        };
        large?: {
          name: string;
          hash: string;
          ext: string;
          mime: string;
          width: number;
          height: number;
          size: number;
          url: string;
        };
      };
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      createdAt: string;
      updatedAt: string;
    };
  };
}

// Homepage Types
export interface HeroSection {
  title: string;
  subtitle: string;
  cta_text: string;
  cta_link: string;
  image: StrapiMedia;
}

export interface StatItem {
  title: string;
  value: string;
  description: string;
  icon: string;
}

export interface ImpactStats {
  title: string;
  description: string;
  stats: StatItem[];
}

export interface Initiative {
  title: string;
  description: string;
  image: StrapiMedia;
  link: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: StrapiMedia;
}

export interface Homepage {
  hero: HeroSection;
  mission_statement: string;
  impact_stats: ImpactStats;
  key_initiatives: Initiative[];
  testimonials: Testimonial[];
  cta_section: {
    title: string;
    description: string;
    button_text: string;
    button_link: string;
  };
}

// Blog Types
export interface BlogPost {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featured_image: StrapiMedia;
  published_at: string;
  categories: {
    data: {
      id: number;
      attributes: {
        name: string;
        slug: string;
      };
    }[];
  };
  author: {
    data: {
      id: number;
      attributes: {
        name: string;
        bio: string;
        avatar: StrapiMedia;
      };
    };
  };
}

export interface BlogCategory {
  name: string;
  slug: string;
  description: string;
}

// Team Member Types
export interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: StrapiMedia;
  social_links: {
    platform: string;
    url: string;
  }[];
}

// Program/Initiative Types
export interface Program {
  title: string;
  slug: string;
  description: string;
  content: string;
  featured_image: StrapiMedia;
  gallery: {
    data: StrapiMedia[];
  };
  stats: {
    label: string;
    value: string;
  }[];
}

// About Page Types
export interface AboutPage {
  title: string;
  content: string;
  vision: string;
  mission: string;
  values: {
    title: string;
    description: string;
    icon: string;
  }[];
  timeline: {
    year: string;
    title: string;
    description: string;
  }[];
  featured_image: StrapiMedia;
}

// Gallery Types
export interface GalleryItem {
  title: string;
  description: string;
  image: StrapiMedia;
  category: string;
}

// Contact Types
export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: string;
  map_coordinates: {
    latitude: number;
    longitude: number;
  };
  social_links: {
    platform: string;
    url: string;
  }[];
}