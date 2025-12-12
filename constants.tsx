import { PageRoute } from './types';
import { Brain, Cloud, FileText, Globe, Users, Shield, Zap, TrendingUp, BookOpen, Building } from 'lucide-react';
import React from 'react';

export const NAV_ITEMS = [
  { label: 'Home', path: PageRoute.HOME },
  { label: 'Product', path: PageRoute.PRODUCT },
  { label: 'Impact', path: PageRoute.IMPACT },
  { label: 'About Us', path: PageRoute.ABOUT },
  { label: 'Contact', path: PageRoute.CONTACT },
];

export const FEATURES = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'Predictive Analytics',
    description: 'Identify "quiet strugglers" weeks before exams using historical performance trends.',
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: 'Automated Reporting',
    description: 'Generate comprehensive Urdu/English reports for parents with a single click.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Workload Reduction',
    description: 'Save 15+ hours per week on administrative data entry and analysis.',
  },
];

export const SDG_GOALS = [
  {
    id: 4,
    title: 'Quality Education',
    description: 'Ensuring inclusive and equitable quality education and promoting lifelong learning opportunities for all.',
    relevance: '5/5 Critical Relevance',
    color: 'bg-red-600',
  },
  {
    id: 8,
    title: 'Decent Work & Economic Growth',
    description: 'Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work.',
    relevance: 'High Impact',
    color: 'bg-red-700', // Using a variation of red for visual harmony or sticking to SDG colors
  }
];

export const TESTIMONIALS = [
  {
    quote: "I used to spend my weekends grading and writing reports. Lumina did it in seconds, and it flagged three students I hadn't realized were falling behind.",
    author: "Fatima Z.",
    role: "Senior Educator, Lahore",
    image: "https://picsum.photos/seed/fatima/100/100"
  },
  {
    quote: "The hybrid model is perfect for our connectivity issues. We don't always have high-speed internet in the interior regions, but Lumina still works.",
    author: "Ahmed K.",
    role: "District Administrator, Sindh",
    image: "https://picsum.photos/seed/ahmed/100/100"
  }
];