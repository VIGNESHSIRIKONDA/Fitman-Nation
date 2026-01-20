
export enum ExperienceLevel {
  BEGINNER = 'Beginner',
  INTERMEDIATE = 'Intermediate',
  ADVANCED = 'Advanced'
}

export interface Program {
  id: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  image: string;
  benefits: string[];
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string; 
  tag?: string; 
  result?: string; 
  text: string;
  image: string;
}

export interface Coach {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  philosophy?: string;
}

export interface OnlineClass {
  id: string;
  title: string;
  desc: string;
  schedule: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string; 
  author: string;
  date: string;
  image: string;
  category: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  interval: string;
  features: string[];
  recommended?: boolean;
}

export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  fitnessGoal: string;
  experienceLevel: ExperienceLevel;
  medicalConditions: boolean;
  medicalDetails: string;
  preferredLocation: string;
  availableTime: string;
}
