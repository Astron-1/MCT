export const contactInfo = {
  address: {
    street: "2/713 Vivek Khand",
    area: "Gomti Nagar",
    city: "Lucknow",
    fullAddress: "2/713 Vivek Khand, Gomti Nagar, Lucknow"
  },
  email: "maa.edu16@gmail.com",
  phone: "+91 7068869272",
  registration: {
    ngoDarpan: "UP/2019/0231038",
    label: "NGO Darpan Registration"
  },
  social: {
    facebook: "", // Add social media links when available
    twitter: "",
    instagram: "",
    linkedin: ""
  }
} as const;

// Type for the contact info
export type ContactInfo = typeof contactInfo; 