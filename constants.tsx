
import React from 'react';
import { ExperienceLevel, Program, Event, Testimonial } from './types';

export const COLORS = {
  primary: '#E11D48', // Tailwind rose-600
  background: '#000000',
  text: '#FFFFFF',
};

export const NAVIGATION_LINKS = [
  { name: 'Home', path: '#/' },
  { name: 'About', path: '#/about' },
  { name: 'How It Works', path: '#/how-it-works' },
  { name: 'Programs', path: '#/programs' },
  { name: 'Online Classes', path: '#/online-classes' },
  { name: 'Events', path: '#/events' },
  { name: 'Success Stories', path: '#/success' },
  { name: 'Blog', path: '#/blog' },
];

export const MOCK_PROGRAMS: Program[] = [
  {
    id: 'basic-plan',
    title: 'Basic Plan',
    description: 'Foundation for your fitness journey with expert guidance.',
    features: ['Workout Library', 'Basic Nutrition Guide', 'Community Support'],
    price: '$49/mo',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800',
    benefits: ['Establish consistency', 'Build base strength']
  },
  {
    id: 'pro-transformation',
    title: 'Pro Transformation',
    description: 'Aggressive results-oriented program for serious athletes.',
    features: ['Customized Workouts', 'Personal Meal Plan', 'Weekly Check-ins'],
    price: '$149/mo',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2adfcd?auto=format&fit=crop&q=80&w=800',
    benefits: ['Rapid fat loss', 'Lean muscle gain']
  },
  {
    id: 'premium-coaching',
    title: 'Premium 1-on-1',
    description: 'Elite mentor-led coaching with daily direct communication.',
    features: ['Private Mentor', 'Daily Accountability', 'Form Correction'],
    price: '$299/mo',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800',
    benefits: ['Professional athlete mindset', 'Peak performance']
  },
  {
    id: 'special-case',
    title: 'Special Case Coaching',
    description: 'Adaptive fitness for medical-safe or limited mobility training.',
    features: ['Rehab Exercises', 'Doctor-aligned Plans', 'Gentle Progress'],
    price: 'Custom',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=800',
    benefits: ['Safety first', 'Improved quality of life']
  }
  ,
  {
    id: 'group-classes',
    title: 'Group Fitness Classes',
    description: 'Energetic group sessions for motivation and social training.',
    features: ['Weekly Class Schedule', 'Challenge Series', 'Coach-Led Sessions'],
    price: '$29/mo',
    image: 'https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&q=80&w=800',
    benefits: ['Community motivation', 'Fun, structured workouts']
  },
  {
    id: 'family-corporate',
    title: 'Family & Corporate Plans',
    description: 'Group-friendly plans for families and corporate wellness programs.',
    features: ['Multi-user Pricing', 'Onsite Sessions', 'Wellness Programs'],
    price: 'Contact Us',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800',
    benefits: ['Team health improvements', 'Flexible scheduling']
  }
];

export const MOCK_EVENTS: Event[] = [
  {
    id: 'e1',
    title: 'Sunday Sunrise Run',
    date: '2024-06-15',
    time: '06:00 AM',
    location: 'Central Park',
    category: 'Run',
    description: 'A gentle 5km community run to start your Sunday right.'
  },
  {
    id: 'e2',
    title: 'Plank Challenge',
    date: '2024-06-20',
    time: '05:00 PM',
    location: 'Online (Zoom)',
    category: 'Challenge',
    description: 'Test your core stability with our national community.'
  }
];

export const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'John Doe',
    role: 'Marathon Runner',
    text: 'FitMan Nation completely changed my perspective on mobility. I am running faster and pain-free.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 't2',
    name: 'Sarah Smith',
    role: 'Busy Professional',
    text: 'The 1-on-1 coaching kept me accountable when I wanted to quit. Best investment I ever made.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
  }
];
