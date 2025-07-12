import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us |Maa Charitable Trust",
  description: "Learn about our mission, vision, and the dedicated team behind Maa Charitable Trust's community impact.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 