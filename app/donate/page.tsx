import React from "react";
import { PageHeader } from "@/components/ui/page-header";
import { DonationForm } from "@/components/donate/donation-form";
import { DonationImpact } from "@/components/donate/donation-impact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate | Maa Charitable Trust",
  description: "Support our mission and make a difference by donating to Maa Charitable Trust's initiatives and programs.",
};

export default function DonatePage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Support Our Mission"
        description="Your donation makes a meaningful impact in communities around the world"
      />
      
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <DonationForm />
            </div>
            <div>
              <DonationImpact />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}