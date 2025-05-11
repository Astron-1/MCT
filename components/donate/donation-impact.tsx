import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Heater as Water, BookOpen, Coffee, Utensils, Heart } from "lucide-react";

const impacts = [
  {
    amount: "$25",
    description: "Provides clean drinking water for a family for one month",
    icon: Water,
  },
  {
    amount: "$50",
    description: "Supplies educational materials for 10 children",
    icon: BookOpen,
  },
  {
    amount: "$100",
    description: "Funds agricultural training for a small-scale farmer",
    icon: Coffee,
  },
  {
    amount: "$250",
    description: "Provides nutritious meals for 50 children for a week",
    icon: Utensils,
  },
  {
    amount: "$500",
    description: "Helps establish a community clean water system",
    icon: Heart,
  },
];

export function DonationImpact() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Your Impact</h2>
        <p className="text-muted-foreground mb-6">
          Your donation directly funds our programs and initiatives, creating meaningful 
          impact in communities worldwide. Here's how your contribution helps:
        </p>
      </div>

      <div className="space-y-4">
        {impacts.map((impact, index) => {
          const Icon = impact.icon;
          
          return (
            <Card key={index} className="border-none shadow-sm">
              <CardContent className="p-4 flex items-center space-x-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{impact.amount}</h3>
                  <p className="text-muted-foreground">{impact.description}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="border-none shadow-sm bg-primary/5 mt-8">
        <CardContent className="p-6">
          <h3 className="font-semibold text-lg mb-2">Tax Benefits</h3>
          <p className="text-muted-foreground">
            All donations to Trust Organization are tax-deductible to the extent allowed by law. 
            Our Tax ID: 12-3456789. You will receive a receipt for your tax records.
          </p>
        </CardContent>
      </Card>

      <div className="bg-muted p-6 rounded-lg mt-6">
        <h3 className="font-semibold text-lg mb-2">Other Ways to Support</h3>
        <ul className="space-y-2 list-disc list-inside text-muted-foreground">
          <li>Corporate matching gifts</li>
          <li>Legacy giving and bequests</li>
          <li>In-kind donations</li>
          <li>Volunteer your time and expertise</li>
          <li>Fundraise on our behalf</li>
        </ul>
      </div>
    </div>
  );
}