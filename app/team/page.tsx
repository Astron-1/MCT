import { Metadata } from "next";
import { TeamCard } from "@/components/team/team-card";

export const metadata: Metadata = {
  title: "Our Team | Trust Organization",
  description: "Meet our dedicated team of professionals working to make a difference.",
};

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Executive Director",
    image: "https://picsum.photos/seed/sarah/400",
    bio: "Sarah brings over 15 years of experience in nonprofit leadership and a passion for community development.",
    socialLinks: {
      twitter: "https://twitter.com/sarahjohnson",
      linkedin: "https://linkedin.com/in/sarahjohnson",
      email: "sarah@trustorg.com",
      phone: "+1 (555) 123-4567",
      blog: "/blog/team/sarah-johnson"
    }
  },
  {
    name: "Michael Chen",
    role: "Program Director",
    image: "https://picsum.photos/seed/michael/400",
    bio: "Michael specializes in developing and implementing innovative community programs.",
    socialLinks: {
      linkedin: "https://linkedin.com/in/michaelchen",
      email: "michael@trustorg.com",
      phone: "+1 (555) 234-5678"
    }
  },
  {
    name: "Emily Rodriguez",
    role: "Outreach Coordinator",
    image: "https://picsum.photos/seed/emily/400",
    bio: "Emily is dedicated to building strong relationships with community partners and volunteers.",
    socialLinks: {
      twitter: "https://twitter.com/emilyrodriguez",
      email: "emily@trustorg.com"
    }
  },
  {
    name: "David Kim",
    role: "Finance Manager",
    image: "https://picsum.photos/seed/david/400",
    bio: "David ensures the responsible management of our resources and financial sustainability.",
    socialLinks: {
      linkedin: "https://linkedin.com/in/davidkim",
      email: "david@trustorg.com",
      phone: "+1 (555) 345-6789"
    }
  },
  {
    name: "Lisa Patel",
    role: "Volunteer Coordinator",
    image: "https://picsum.photos/seed/lisa/400",
    bio: "Lisa manages our volunteer programs and ensures meaningful engagement opportunities.",
    socialLinks: {
      twitter: "https://twitter.com/lisapatel",
      linkedin: "https://linkedin.com/in/lisapatel",
      email: "lisa@trustorg.com"
    }
  },
  {
    name: "James Wilson",
    role: "Communications Director",
    image: "https://picsum.photos/seed/james/400",
    bio: "James leads our communications strategy and public relations initiatives.",
    socialLinks: {
      email: "james@trustorg.com",
      phone: "+1 (555) 456-7890",
      blog: "/blog/team/james-wilson"
    }
  }
];

export default function TeamPage() {
  return (
    <section className="container mx-auto py-16 md:py-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Meet Our Team
        </h1>
        <p className="text-xl text-muted-foreground">
          Dedicated professionals working together to make a positive impact in our community.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
        {teamMembers.map((member) => (
          <TeamCard
            key={member.name}
            name={member.name}
            role={member.role}
            image={member.image}
            bio={member.bio}
            socialLinks={member.socialLinks}
          />
        ))}
      </div>
    </section>
  );
} 