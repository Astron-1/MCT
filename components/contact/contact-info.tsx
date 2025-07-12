import React from "react";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/config/contact";

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
        <ul className="space-y-4">
          <li className="flex items-start space-x-3">
            <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <span className="text-muted-foreground">
              {contactInfo.address.fullAddress}
            </span>
          </li>
          <li className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-primary shrink-0" />
            <span className="text-muted-foreground">{contactInfo.phone}</span>
          </li>
          <li className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-primary shrink-0" />
            <span className="text-muted-foreground">{contactInfo.email}</span>
          </li>
          <li className="flex items-start space-x-3">
            <FileText className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div className="text-muted-foreground">
              <p>{contactInfo.registration.label}: {contactInfo.registration.ngoDarpan}</p>
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div className="text-muted-foreground">
              <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p>Saturday: 10:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
        <div className="flex space-x-2">
          {contactInfo.social.facebook && (
            <Button variant="outline" size="icon" asChild>
              <a href={contactInfo.social.facebook} target="_blank" rel="noopener noreferrer">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </a>
            </Button>
          )}
          {contactInfo.social.twitter && (
            <Button variant="outline" size="icon" asChild>
              <a href={contactInfo.social.twitter} target="_blank" rel="noopener noreferrer">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </a>
            </Button>
          )}
          {contactInfo.social.instagram && (
            <Button variant="outline" size="icon" asChild>
              <a href={contactInfo.social.instagram} target="_blank" rel="noopener noreferrer">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </a>
            </Button>
          )}
          {contactInfo.social.linkedin && (
            <Button variant="outline" size="icon" asChild>
              <a href={contactInfo.social.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}