import { Shield, Brain, Cloud, Users } from 'lucide-react';

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'solutions', label: 'Solutions' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'careers', label: 'Careers' },
  { id: 'contact', label: 'Contact' }
];

export const solutions = [
  {
    icon: Shield,
    name: 'Fang VPN',
    description: 'Lightning-fast VPN service with military-grade encryption for ultimate privacy and security.',
    features: ['Zero-log policy', 'Global server network', 'Kill switch protection', 'Multi-device support']
  },
  {
    icon: Brain,
    name: 'Fang AI',
    description: 'Advanced AI tools and automation solutions designed to transform business operations.',
    features: ['Natural language processing', 'Predictive analytics', 'Custom AI models', 'API integration']
  },
  {
    icon: Cloud,
    name: 'Fang Cloud',
    description: 'End-to-end encrypted cloud storage with seamless collaboration and enterprise security.',
    features: ['256-bit encryption', 'Real-time sync', 'Version control', 'Team collaboration']
  },
  {
    icon: Users,
    name: 'Fang Consulting',
    description: 'Strategic technology consulting to accelerate digital transformation and innovation.',
    features: ['Digital strategy', 'Security audits', 'Tech implementation', 'Training programs']
  }
];

export const blogPosts = [
  {
    title: 'The Future of Quantum-Resistant Cryptography',
    date: '2024-08-15',
    excerpt: 'Exploring next-generation encryption methods that can withstand quantum computing threats.',
    category: 'Research'
  },
  {
    title: 'FangAI Platform Beta Launch Announcement',
    date: '2024-08-10',
    excerpt: 'We are excited to announce the beta release of our revolutionary AI platform for enterprises.',
    category: 'Product'
  },
  {
    title: 'Zero Trust Architecture: Building Secure Digital Infrastructure',
    date: '2024-08-05',
    excerpt: 'How organizations can implement zero trust principles for maximum security.',
    category: 'Security'
  }
];

export const careers = [
  {
    title: 'Senior Full-Stack Developer',
    department: 'Engineering',
    location: 'Remote / San Francisco',
    description: 'Build scalable web applications and APIs for our next-gen security platform.'
  },
  {
    title: 'AI/ML Research Scientist',
    department: 'Research',
    location: 'Remote / Global',
    description: 'Develop cutting-edge AI algorithms for cybersecurity and privacy applications.'
  },
  {
    title: 'Cybersecurity Consultant',
    department: 'Consulting',
    location: 'Remote / Global',
    description: 'Help enterprises implement comprehensive security strategies and solutions.'
  },
  {
    title: 'Product Manager - Cloud Security',
    department: 'Product',
    location: 'Remote / Seattle',
    description: 'Drive product strategy for our encrypted cloud storage and collaboration tools.'
  }
];