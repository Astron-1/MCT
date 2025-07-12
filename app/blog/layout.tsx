import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Maa Charitable Trust",
  description: "Latest news, stories, and updates about our projects, events, and impact.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 