import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Trust Organization",
  description: "Learn about our mission, vision, and the dedicated team behind Trust Organization's community impact.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 