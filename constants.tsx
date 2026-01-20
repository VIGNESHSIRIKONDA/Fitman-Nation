import { ExperienceLevel, Program, Event, Testimonial, OnlineClass, Coach, BlogPost, PricingPlan } from './types';

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
    id: 'basic-foundation',
    title: 'Foundation Builder',
    description: 'Perfect for beginners. We build your base strength and establish consistency without burnout.',
    features: ['Workout Library', 'Basic Nutrition Guide', 'Community Support'],
    price: '9/mo',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800',
    benefits: ['Establish consistency', 'Build base strength']
  },
  {
    id: 'aesthetic-sculpt',
    title: 'Aesthetic Sculpt',
    description: 'Designed for muscle definition and symmetry. Focus on hypertrophy and body composition.',
    features: ['Hypertrophy Block', 'Macro Coaching', 'Form Review'],
    price: '9/mo',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2adfcd?auto=format&fit=crop&q=80&w=800',
    benefits: ['Lean muscle gain', 'Improved definition']
  },
  {
    id: 'performance-athlete',
    title: 'Performance Athlete',
    description: 'Train like a pro. High-intensity conditioning and strength work for peak athletic performance.',
    features: ['Sport Specific', 'Power Training', 'Recovery Protocols'],
    price: '19/mo',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800',
    benefits: ['Explosive power', 'Endurance']
  },
  {
    id: 'fat-loss-shred',
    title: 'Metabolic Shred',
    description: 'Aggressive fat loss focusing on metabolic conditioning and calorie-deficit management without starvation.',
    features: ['HIIT Sessions', 'Meal Timing', 'Daily Tracking'],
    price: '9/mo',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=800',
    benefits: ['Rapid fat loss', 'Metabolic health']
  },
  {
    id: 'mobility-flow',
    title: 'Mobility & Flow',
    description: 'Restore joint health, improve flexibility, and move pain-free. Essential for longevity.',
    features: ['Daily Mobility', 'Yoga Integration', 'Posture Correction'],
    price: '9/mo',
    image: 'https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&q=80&w=800',
    benefits: ['Pain relief', 'Better movement']
  },
  {
    id: 'elite-mentorship',
    title: 'Elite 1-on-1 Mentorship',
    description: 'The ultimate bespoke experience. Direct access to head coaches for total lifestyle transformation.',
    features: ['1-on-1 Chats', 'Custom Everything', 'Priority Support'],
    price: '99/mo',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800',
    benefits: ['Guaranteed results', 'Lifestyle mastery']
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
    description: 'A gentle 5km community run to start your Sunday right. Perfect for all fitness levels.'
  },
  {
    id: 'e2',
    title: 'Plank Challenge',
    date: '2024-06-20',
    time: '05:00 PM',
    location: 'Online (Zoom)',
    category: 'Challenge',
    description: 'Test your core stability with our national community. Compete and win prizes.'
  }
];

export const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Michael V.',
    tag: 'Weight Loss & Mobility',
    result: '-22kg in 6 Months',
    text: 'FitMan Nation didn\'t just give me a diet. They gave me a roadmap. My back pain is gone and I feel 10 years younger. The mentors truly care about your long-term health.',
    image: 'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '2',
    name: 'Jessica K.',
    tag: 'Elite Performance',
    result: 'Sub-4 Marathon',
    text: 'The running community here is unmatched. The mentors helped me shave 20 minutes off my PR within one training cycle. I ran my first sub-4 marathon thanks to their planning.',
    image: 'https://images.unsplash.com/photo-1518611012118-296072bb5604?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '3',
    name: 'David L.',
    tag: 'Muscle Hypertrophy',
    result: '+8kg Lean Mass',
    text: 'I struggled with being a "hard gainer" for years. The science-backed nutrition plan and heavy lifting protocols were the missing ingredients for my growth.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '4',
    name: 'Sarah P.',
    tag: 'Post-Pregnancy',
    result: 'Core Strength Restored',
    text: 'Regaining my core strength seemed impossible after two kids. The gentle yet progressive approach helped me reclaim my body and confidence safely.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '5',
    name: 'Amit R.',
    tag: 'Corporate Wellness',
    result: 'Pain-Free Living',
    text: 'Sitting at a desk all day destroyed my posture. The mobility drills combined with strength training fixed my back issues. I work better and live better.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '6',
    name: 'Elena G.',
    tag: 'Mental Resilience',
    result: 'Lifestyle Shift',
    text: 'Fitness for me was about mental clarity. The community support here is what kept me going through tough times. It is more than a gym, it is a family.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600'
  }
];

export const ONLINE_CLASSES: OnlineClass[] = [
  { id: 'functional', title: 'Functional Fitness', desc: 'Real-world movement patterns to making daily life easier and stronger.', schedule: 'Mon/Wed/Fri • 7:00 AM' },
  { id: 'home-hiit', title: 'Home HIIT', desc: 'High-energy fat burning sessions requiring minimal equipment.', schedule: 'Tue/Thu • 6:30 PM' },
  { id: 'mobility', title: 'Mobility & Recovery', desc: 'Deep stretching and joint health to prevent injury.', schedule: 'Sat • 8:00 AM' },
  { id: 'fat-loss', title: 'Fat Loss Circuits', desc: 'Continuous movement circuits designed to maximize calorie burn.', schedule: 'Mon/Wed/Fri • 6:00 PM' },
  { id: 'beginner', title: 'Beginner Fitness', desc: 'Low-impact entry-level classes to build confidence and form.', schedule: 'Tue/Thu • 7:30 AM' }
];

export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Why Consistency Beats Intensity',
    excerpt: 'Most people fail because they go too hard too soon. Here is why showing up is the real secret.',
    content: '<p>Content coming soon...</p>',
    author: 'Praveen',
    date: 'Jan 15, 2026',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800',
    category: 'Mindset'
  },
  {
    id: '2',
    title: 'Nutrition Myths Debunked',
    excerpt: 'Carbs are not the enemy. Learn how to fuel your body properly.',
    content: '<p>Content coming soon...</p>',
    author: 'Coach Sarah',
    date: 'Jan 10, 2026',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800',
    category: 'Nutrition'
  }
];

export const COACHES: Coach[] = [
  {
    id: 'praveen',
    name: 'Praveen',
    role: 'Founder / Head Coach / Transformation Specialist',
    bio: 'With over a decade of experience transforming lives, Praveen leads FitMan Nation with a philosophy rooted in sustainable discipline and mental resilience. His vision is not just about physical change, but empowering individuals to become leaders in their own lives through fitness.',
    philosophy: 'Strength starts in the mind. The body just follows.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600'
  }
];

export const PRICING_PLANS: PricingPlan[] = [];
