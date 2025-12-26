
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
  category: 'Run' | 'Challenge' | 'Meetup' | 'Class';
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  image: string;
}

export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  fitnessGoal: string;
  experienceLevel: ExperienceLevel;
  medicalConditions: boolean;
  medicalDetails: string;
  preferredLocation: 'home' | 'gym';
  availableTime: string;
}
