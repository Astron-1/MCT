import { GallerySection } from "@/components/gallery/gallery-section";

type AspectRatio = "portrait" | "landscape" | "square";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  aspectRatio?: AspectRatio;
  priority?: boolean;
}

const sampleImages: GalleryImage[] = [
  {
    id: "1",
    src: "https://picsum.photos/seed/landscape1/1200/800",
    alt: "Mountain Landscape",
    category: "nature",
    aspectRatio: "landscape",
    priority: true
  },
  {
    id: "2",
    src: "https://picsum.photos/seed/urban1/800/1200",
    alt: "Urban Architecture",
    category: "urban",
    aspectRatio: "portrait"
  },
  {
    id: "3",
    src: "https://picsum.photos/seed/portrait1/800/1200",
    alt: "Portrait Photography",
    category: "portrait",
    aspectRatio: "portrait"
  },
  {
    id: "4",
    src: "https://picsum.photos/seed/arch1/1000/1000",
    alt: "Modern Architecture",
    category: "architecture",
    aspectRatio: "square"
  },
  {
    id: "5",
    src: "https://picsum.photos/seed/nature2/1200/800",
    alt: "Nature Scene",
    category: "nature",
    aspectRatio: "landscape"
  },
  {
    id: "6",
    src: "https://picsum.photos/seed/urban2/1000/1000",
    alt: "Urban Scene",
    category: "urban",
    aspectRatio: "square"
  },
  {
    id: "7",
    src: "https://picsum.photos/seed/portrait2/800/1200",
    alt: "Portrait Style",
    category: "portrait",
    aspectRatio: "portrait"
  },
  {
    id: "8",
    src: "https://picsum.photos/seed/arch2/1200/800",
    alt: "Architecture Design",
    category: "architecture",
    aspectRatio: "landscape"
  },
  {
    id: "9",
    src: "https://picsum.photos/seed/urban3/1200/800",
    alt: "Urban Landscape",
    category: "urban",
    aspectRatio: "landscape"
  },
  {
    id: "10",
    src: "https://picsum.photos/seed/nature3/1000/1000",
    alt: "Nature Close-up",
    category: "nature",
    aspectRatio: "square"
  },
  {
    id: "11",
    src: "https://picsum.photos/seed/portrait3/800/1200",
    alt: "Portrait Art",
    category: "portrait",
    aspectRatio: "portrait"
  },
  {
    id: "12",
    src: "https://picsum.photos/seed/arch3/1000/1000",
    alt: "Architectural Detail",
    category: "architecture",
    aspectRatio: "square"
  }
];

const categories = ["all", "nature", "urban", "portrait", "architecture"];

export default function GalleryPage() {
  return (
    <section className="container mx-auto py-16 md:py-24">
      <div className="space-y-6 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Our Gallery
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Explore our collection of beautiful images showcasing various categories and aspect ratios.
        </p>
      </div>
      
      <GallerySection 
        images={sampleImages}
        categories={categories}
        layout="masonry"
        columns={{ sm: 2, md: 3, lg: 4 }}
        className="max-w-7xl mx-auto"
      />
    </section>
  );
} 