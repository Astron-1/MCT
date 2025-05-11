import React from "react";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
        <ul className="space-y-4">
          <li className="flex items-start space-x-3">
            <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <span className="text-muted-foreground">
              123 Community Drive<br />
              Cityville, ST 12345<br />
              United States
            </span>
          </li>
          <li className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-primary shrink-0" />
            <span className="text-muted-foreground">(123) 456-7890</span>
          </li>
          <li className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-primary shrink-0" />
            <span className="text-muted-foreground">info@trustorg.org</span>
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
          <Button variant="outline" size="icon">
            <Facebook className="h-4 w-4" />
            <span className="sr-only">Facebook</span>
          </Button>
          <Button variant="outline" size="icon">
            <Twitter className="h-4 w-4" />
            <span className="sr-only">Twitter</span>
          </Button>
          <Button variant="outline" size="icon">
            <Instagram className="h-4 w-4" />
            <span className="sr-only">Instagram</span>
          </Button>
          <Button variant="outline" size="icon">
            <Linkedin className="h-4 w-4" />
            <span className="sr-only">LinkedIn</span>
          </Button>
        </div>
      </div>
    </div>
  );
}