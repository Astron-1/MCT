import React from "react";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";
import { PageHeader } from "@/components/ui/page-header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Trust Organization",
  description: "Get in touch with the Trust Organization. We're here to answer your questions and assist you with any inquiries.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Contact Us"
        description="We're here to answer your questions and assist you with any inquiries"
      />
      
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <ContactInfo />
            </div>
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}