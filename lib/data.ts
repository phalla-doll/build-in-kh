export type TechStack = 
  | 'React' | 'Next.js' | 'Vue' | 'Angular' | 'Svelte' 
  | 'Node.js' | 'Python' | 'Go' | 'Laravel' | 'Flutter' 
  | 'Swift' | 'Kotlin' | 'Firebase' | 'Supabase' | 'Tailwind CSS';

export interface Creator {
  id: string;
  name: string;
  bio: string;
  avatar: string;
  role: string;
  socials: {
    twitter?: string;
    github?: string;
    website?: string;
    linkedin?: string;
  };
}

export interface Product {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  url: string;
  imageUrl: string;
  creatorId: string;
  techStack: TechStack[];
  launchedAt: string;
  category: 'SaaS' | 'Mobile App' | 'Open Source' | 'Tool' | 'Website';
  isFeatured?: boolean;
}

export const creators: Creator[] = [
  {
    id: 'c1',
    name: 'Sophea Chan',
    bio: 'Full-stack developer passionate about building tools for creators.',
    avatar: 'https://i.pravatar.cc/150?u=c1',
    role: 'Indie Hacker',
    socials: {
      twitter: 'https://twitter.com/sopheachan',
      github: 'https://github.com/sopheachan',
    },
  },
  {
    id: 'c2',
    name: 'Visal Sok',
    bio: 'Mobile app developer and UI/UX enthusiast.',
    avatar: 'https://i.pravatar.cc/150?u=c2',
    role: 'Mobile Dev',
    socials: {
      linkedin: 'https://linkedin.com/in/visalsok',
    },
  },
  {
    id: 'c3',
    name: 'Dara Leng',
    bio: 'Building the future of e-commerce in Cambodia.',
    avatar: 'https://i.pravatar.cc/150?u=c3',
    role: 'Founder',
    socials: {
      website: 'https://daraleng.com',
    },
  },
  {
    id: 'c4',
    name: 'Bopha Keo',
    bio: 'Open source contributor and Go enthusiast.',
    avatar: 'https://i.pravatar.cc/150?u=c4',
    role: 'Backend Engineer',
    socials: {
      github: 'https://github.com/bophakeo',
    },
  },
];

export const products: Product[] = [
  {
    id: 'p1',
    title: 'KhmerDict',
    description: 'A modern, offline-first Khmer-English dictionary app.',
    longDescription: 'KhmerDict is built to solve the problem of slow and outdated dictionary apps. It features a clean UI, instant search, and works completely offline. Built with Flutter for cross-platform performance.',
    url: 'https://example.com/khmerdict',
    imageUrl: 'https://picsum.photos/id/1/800/600',
    creatorId: 'c2',
    techStack: ['Flutter', 'Firebase'],
    launchedAt: '2023-11-15',
    category: 'Mobile App',
    isFeatured: true,
  },
  {
    id: 'p2',
    title: 'SalaKhmer',
    description: 'Platform for finding and reviewing schools in Phnom Penh.',
    longDescription: 'SalaKhmer helps parents find the best schools for their children. It aggregates data from hundreds of schools, including tuition fees, curriculum, and parent reviews.',
    url: 'https://example.com/salakhmer',
    imageUrl: 'https://picsum.photos/id/20/800/600',
    creatorId: 'c1',
    techStack: ['Next.js', 'Tailwind CSS', 'Supabase'],
    launchedAt: '2024-01-10',
    category: 'Website',
    isFeatured: true,
  },
  {
    id: 'p3',
    title: 'Go-Payment',
    description: 'A Go library for integrating Cambodian payment gateways.',
    longDescription: 'An open-source library that simplifies the integration of popular Cambodian payment gateways like ABA Pay, Pi Pay, and Wing. It provides a unified API for handling payments.',
    url: 'https://github.com/example/go-payment',
    imageUrl: 'https://picsum.photos/id/3/800/600',
    creatorId: 'c4',
    techStack: ['Go'],
    launchedAt: '2023-08-22',
    category: 'Open Source',
  },
  {
    id: 'p4',
    title: 'TaskFlow KH',
    description: 'Project management tool designed for remote teams in SEA.',
    longDescription: 'TaskFlow KH is a lightweight project management tool tailored for small teams. It focuses on simplicity and speed, with features like Kanban boards, time tracking, and automated reports.',
    url: 'https://example.com/taskflow',
    imageUrl: 'https://picsum.photos/id/4/800/600',
    creatorId: 'c3',
    techStack: ['React', 'Node.js', 'Tailwind CSS'],
    launchedAt: '2024-02-01',
    category: 'SaaS',
    isFeatured: true,
  },
  {
    id: 'p5',
    title: 'EventHub',
    description: 'Discover tech events and meetups happening in Cambodia.',
    longDescription: 'EventHub is the go-to place for finding tech events, workshops, and hackathons in Cambodia. Organizers can list their events for free, and attendees can RSVP directly.',
    url: 'https://example.com/eventhub',
    imageUrl: 'https://picsum.photos/id/5/800/600',
    creatorId: 'c1',
    techStack: ['Next.js', 'Firebase'],
    launchedAt: '2023-12-05',
    category: 'Website',
  },
  {
    id: 'p6',
    title: 'RentKhmer',
    description: 'Apartment hunting made easy for expats and locals.',
    longDescription: 'RentKhmer connects landlords with tenants. It features a map-based search, virtual tours, and direct messaging. Built to bring transparency to the rental market.',
    url: 'https://example.com/rentkhmer',
    imageUrl: 'https://picsum.photos/id/6/800/600',
    creatorId: 'c3',
    techStack: ['Laravel', 'Vue', 'Tailwind CSS'],
    launchedAt: '2023-09-18',
    category: 'Website',
  },
];

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

export function getCreator(id: string) {
  return creators.find((c) => c.id === id);
}

export function getCreatorProducts(creatorId: string) {
  return products.filter((p) => p.creatorId === creatorId);
}
