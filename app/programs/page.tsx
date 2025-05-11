import { Metadata } from "next";
import { Programs } from "@/components/programs/programs";

export const metadata: Metadata = {
  title: "Our Programs | MCT",
  description: "Explore our diverse range of programs aimed at community development, education, and social welfare initiatives.",
};

export default function ProgramsPage() {
  return <Programs />;
} 