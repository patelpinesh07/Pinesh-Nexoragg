
import React from 'react';
import { Layout, Code, Target, Share2, Video, Rocket, Search, Cpu } from 'lucide-react';
import { CaseStudy, Service, NavItem } from './types';

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'uiux',
    title: 'UI/UX Design',
    description: 'Creating intuitive, conversion-focused digital interfaces that resonate with users.',
    icon: 'Layout',
    accentColor: 'blue-500',
    details: [
      'User Research & Personas',
      'Wireframing & Prototyping',
      'Visual Interface Design',
      'Usability Testing'
    ]
  },
  {
    id: 'dev',
    title: 'Web Development',
    description: 'Building high-performance, scalable web applications using cutting-edge technologies.',
    icon: 'Code',
    accentColor: 'cyan-400',
    details: [
      'Full-stack React Development',
      'E-commerce Solutions',
      'CMS Integration',
      'Performance Optimization'
    ]
  },
  {
    id: 'meta-ads',
    title: 'Meta Ads Management',
    description: 'Scaling brands with data-driven paid social strategies that convert.',
    icon: 'Target',
    accentColor: 'indigo-500',
    details: [
      'Campaign Architecture',
      'A/B Creative Testing',
      'Audience Segmentation',
      'ROAS Optimization'
    ]
  },
  {
    id: 'social',
    title: 'Social Media Management',
    description: 'Managing your digital presence to build community and authority.',
    icon: 'Share2',
    accentColor: 'blue-400',
    details: [
      'Content Strategy',
      'Engagement Growth',
      'Brand Consistency',
      'Analytics Reporting'
    ]
  },
  {
    id: 'video',
    title: 'Video Editing',
    description: 'Cinematic storytelling and motion graphics that grab attention in 3 seconds.',
    icon: 'Video',
    accentColor: 'cyan-500',
    details: [
      'Short-form Content (Reels/TikTok)',
      'Product Explainers',
      'Color Grading',
      'Sound Design'
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    title: 'Lumina Tech Rebranding',
    category: 'UI/UX & Branding',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    description: 'A complete digital overhaul for a SaaS leader in cloud infrastructure.',
    challenge: 'Lumina faced high bounce rates and a generic brand identity that didn’t reflect their enterprise-grade power.',
    solution: 'We implemented a high-contrast dark theme with electric blue accents, interactive 3D elements, and simplified navigation paths.',
    results: [
      '45% Increase in User Retention',
      '120% Rise in Lead Form Completions',
      '30% Reduction in Page Load Speed'
    ],
    tags: ['SaaS', 'React', 'Branding']
  },
  {
    id: '2',
    title: 'Pulse Fitness App',
    category: 'Product Design',
    thumbnail: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop',
    description: 'Designing a mobile-first workout tracking experience.',
    challenge: 'Users found existing fitness apps too cluttered and demotivating.',
    solution: 'Focused on a "Gamified Minimalist" approach with electric blue micro-interactions for every completed set.',
    results: [
      'App Store Top 50 Featured',
      '85% Weekly Active User Rate',
      'Sub-2s Interaction Latency'
    ],
    tags: ['Mobile', 'UX', 'Fitness']
  },
  {
    id: '3',
    title: 'EcomBoost Campaign',
    category: 'Meta Ads & Strategy',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=800&auto=format&fit=crop',
    description: 'Scaling a luxury jewelry brand from 10k to 100k MRR.',
    challenge: 'Inefficient ad spend and poor creative testing were stalling growth.',
    solution: 'Developed a tiered funnel strategy using UGC-style video content and meticulous audience retargeting with blue-themed creative assets.',
    results: [
      '4.2x Average ROAS',
      '$90k Monthly Revenue Increase',
      '25k New Customer Emails Captured'
    ],
    tags: ['E-commerce', 'Ads', 'Scaling']
  }
];

export const PROCESS_STEPS = [
  {
    title: 'Discovery',
    description: 'Deep diving into your business goals, market position, and target audience.',
    icon: Search,
    color: 'blue-500'
  },
  {
    title: 'Strategy',
    description: 'Crafting a roadmap that aligns visual identity with conversion objectives.',
    icon: Target,
    color: 'cyan-400'
  },
  {
    title: 'Execution',
    description: 'Bringing the vision to life with pixel-perfect design and clean code.',
    icon: Cpu,
    color: 'indigo-500'
  },
  {
    title: 'Growth',
    description: 'Optimizing and scaling based on real-world performance data.',
    icon: Rocket,
    color: 'blue-400'
  }
];
