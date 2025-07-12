import { Metadata } from "next";
import { TeamCard } from "@/components/team/team-card";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Team | Maa Charitable Trust",
  description: "Meet our dedicated team of professionals working to make a difference.",
};

const teamMembers = [
  {
    name: "Mr. Mayank Mohan Mishra",
    role: "Managing Director & Chairman, MAA Charitable Trust",
    image: "/images/team/mayank.jpg",
    bio: `Mr. Mayank Mohan Mishra is a dynamic and visionary leader with over 15 years of diverse professional experience across industries. A postgraduate in Business Administration (MBA), he has consistently demonstrated a strong commitment to excellence, ethical leadership, and community development. Throughout his career, he has held key leadership roles where he successfully combined strategic thinking with a people-first approach, building high-impact teams and driving sustainable growth.

As the Managing Director and Chairman of MAA Charitable Trust, Mr. Mishra plays a pivotal role in shaping the organization's vision, strategy, and social outreach programs. Under his stewardship, the Trust has grown into a respected institution dedicated to empowering underserved communities through initiatives in healthcare, education, skill development, and social welfare.

His leadership style is marked by empathy, accountability, and innovation. He believes in creating long-term value by aligning organizational goals with the greater good of society. With a deep understanding of grassroots challenges and a strong belief in inclusive development, Mr. Mishra continues to inspire positive change through impactful projects and compassionate leadership.

Driven by purpose and guided by principles, Mr. Mayank Mohan Mishra remains committed to building a better future for all, one initiative at a time.`,
    socialLinks: {
      email: "maa.edu16@gmail.com",
      phone: "+91 7068869272"
    }
  }
];

export default function TeamPage() {
  return (
    <section className="container mx-auto py-16 md:py-24">
      {/* Header */}
      <div className={cn(
        "text-center mx-auto mb-16 px-4",
        teamMembers.length === 1 ? "max-w-3xl" : "max-w-4xl"
      )}>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Our Leadership Team
        </h1>
        <p className="text-xl text-muted-foreground">
          Meet the dedicated professionals who guide our vision and mission to create lasting positive change in our community.
        </p>
      </div>

      {/* Team Grid */}
      <div className={cn(
        "px-4",
        teamMembers.length === 1 ? "max-w-4xl mx-auto" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 place-items-center"
      )}>
        {teamMembers.map((member) => (
          <TeamCard
            key={member.name}
            name={member.name}
            role={member.role}
            image={member.image}
            bio={member.bio}
            socialLinks={member.socialLinks}
            className={teamMembers.length === 1 ? "w-full" : ""}
            layout={teamMembers.length === 1 ? "landscape" : "portrait"}
          />
        ))}
      </div>
    </section>
  );
} 