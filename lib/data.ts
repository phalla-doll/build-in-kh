export type TechStack = 
  | 'React' | 'Next.js' | 'Vue' | 'Angular' | 'Svelte' 
  | 'Node.js' | 'Python' | 'Go' | 'Laravel' | 'Flutter' 
  | 'Swift' | 'Kotlin' | 'Firebase' | 'Supabase' | 'Tailwind CSS'
  | 'Three.js' | 'OpenAI' | 'TypeScript' | 'Google Maps API'
  | 'Stripe' | 'AWS' | 'IoT' | 'Unity' | 'C#' | 'MySQL' | 'PostgreSQL';

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
  {
    id: 'p7',
    title: 'TukTuk Go',
    description: 'Ride-hailing aggregator for finding the best TukTuk prices.',
    longDescription: 'Compare prices across multiple ride-hailing apps in real-time. TukTuk Go helps you save money on every ride by showing you the cheapest option instantly.',
    url: 'https://example.com/tuktukgo',
    imageUrl: 'https://picsum.photos/id/7/800/600',
    creatorId: 'c2',
    techStack: ['Flutter', 'Firebase'],
    launchedAt: '2024-03-12',
    category: 'Mobile App',
  },
  {
    id: 'p8',
    title: 'KhmerFonts',
    description: 'A curated collection of high-quality Khmer typefaces.',
    longDescription: 'Download free and premium Khmer fonts for your design projects. Features a type tester, pairing suggestions, and designer profiles.',
    url: 'https://example.com/khmerfonts',
    imageUrl: 'https://picsum.photos/id/8/800/600',
    creatorId: 'c1',
    techStack: ['Next.js', 'React', 'Tailwind CSS'],
    launchedAt: '2023-07-30',
    category: 'Website',
  },
  {
    id: 'p9',
    title: 'DevCam',
    description: 'Community forum for Cambodian developers to share knowledge.',
    longDescription: 'A Stack Overflow-style community for local developers. Ask questions, share tutorials, and find jobs in the Cambodian tech industry.',
    url: 'https://example.com/devcam',
    imageUrl: 'https://picsum.photos/id/9/800/600',
    creatorId: 'c4',
    techStack: ['Node.js', 'React', 'Supabase'],
    launchedAt: '2023-10-05',
    category: 'Website',
  },
  {
    id: 'p10',
    title: 'AngkorVR',
    description: 'Virtual reality tours of the Angkor Wat temple complex.',
    longDescription: 'Experience the magic of Angkor Wat from anywhere in the world. High-resolution 360-degree tours with audio guides in multiple languages.',
    url: 'https://example.com/angkorvr',
    imageUrl: 'https://picsum.photos/id/10/800/600',
    creatorId: 'c3',
    techStack: ['React', 'Three.js'],
    launchedAt: '2024-01-20',
    category: 'Website',
  },
  {
    id: 'p11',
    title: 'Kroma UI',
    description: 'A React UI component library inspired by Khmer art.',
    longDescription: 'Beautiful, accessible, and customizable UI components with a unique Cambodian aesthetic. Built with Tailwind CSS and Radix UI.',
    url: 'https://example.com/kromaui',
    imageUrl: 'https://picsum.photos/id/11/800/600',
    creatorId: 'c1',
    techStack: ['React', 'Tailwind CSS', 'TypeScript'],
    launchedAt: '2023-11-01',
    category: 'Open Source',
  },
  {
    id: 'p12',
    title: 'BongSrey',
    description: 'AI-powered chatbot for learning Khmer language.',
    longDescription: 'Practice conversational Khmer with an AI tutor. BongSrey corrects your grammar, suggests vocabulary, and helps you improve your pronunciation.',
    url: 'https://example.com/bongsrey',
    imageUrl: 'https://picsum.photos/id/12/800/600',
    creatorId: 'c2',
    techStack: ['Python', 'React', 'OpenAI'],
    launchedAt: '2024-02-15',
    category: 'SaaS',
  },
  {
    id: 'p13',
    title: 'KhmerPay',
    description: 'Unified QR payment solution for small businesses.',
    longDescription: 'KhmerPay allows merchants to accept payments from all major Cambodian banks with a single QR code. It simplifies reconciliation and provides real-time transaction alerts.',
    url: 'https://example.com/khmerpay',
    imageUrl: 'https://picsum.photos/id/13/800/600',
    creatorId: 'c2',
    techStack: ['Flutter', 'Node.js', 'Firebase'],
    launchedAt: '2024-03-20',
    category: 'Mobile App',
  },
  {
    id: 'p14',
    title: 'NomBanChok',
    description: 'Food delivery app focusing on traditional Khmer cuisine.',
    longDescription: 'Craving authentic Khmer noodles? NomBanChok connects you with the best local street food vendors. Order your favorite breakfast and support small businesses.',
    url: 'https://example.com/nombanchok',
    imageUrl: 'https://picsum.photos/id/14/800/600',
    creatorId: 'c1',
    techStack: ['React', 'Node.js', 'Tailwind CSS'],
    launchedAt: '2024-01-15',
    category: 'Mobile App',
  },
  {
    id: 'p15',
    title: 'AngkorCode',
    description: 'Interactive coding platform for Khmer students.',
    longDescription: 'Learn to code in Khmer! AngkorCode offers interactive lessons in HTML, CSS, and JavaScript, translated and culturally adapted for Cambodian learners.',
    url: 'https://example.com/angkorcode',
    imageUrl: 'https://picsum.photos/id/15/800/600',
    creatorId: 'c4',
    techStack: ['Next.js', 'TypeScript', 'Supabase'],
    launchedAt: '2023-12-10',
    category: 'Website',
  },
  {
    id: 'p16',
    title: 'PhnomPenhBus',
    description: 'Real-time bus tracking and route planning app.',
    longDescription: 'Never miss a bus again. PhnomPenhBus provides live GPS tracking of city buses, route maps, and estimated arrival times to help you navigate the capital.',
    url: 'https://example.com/ppbus',
    imageUrl: 'https://picsum.photos/id/16/800/600',
    creatorId: 'c3',
    techStack: ['Flutter', 'Google Maps API'],
    launchedAt: '2023-11-25',
    category: 'Mobile App',
  },
  {
    id: 'p17',
    title: 'KampotPepper',
    description: 'Direct-to-consumer marketplace for premium Kampot pepper.',
    longDescription: 'Buy the world\'s best pepper directly from farmers in Kampot. We ensure fair trade prices for farmers and authentic, high-quality products for customers.',
    url: 'https://example.com/kampotpepper',
    imageUrl: 'https://picsum.photos/id/17/800/600',
    creatorId: 'c1',
    techStack: ['Next.js', 'Stripe', 'Tailwind CSS'],
    launchedAt: '2023-10-18',
    category: 'Website',
  },
  {
    id: 'p18',
    title: 'KhmerMusic',
    description: 'Streaming platform for independent Cambodian artists.',
    longDescription: 'Discover the new sound of Cambodia. KhmerMusic is dedicated to promoting original music from local indie artists, offering high-quality streaming and artist support.',
    url: 'https://example.com/khmermusic',
    imageUrl: 'https://picsum.photos/id/18/800/600',
    creatorId: 'c2',
    techStack: ['React', 'Node.js', 'AWS'],
    launchedAt: '2024-02-28',
    category: 'Mobile App',
  },
  {
    id: 'p19',
    title: 'RiceField',
    description: 'IoT solution for smart rice farming management.',
    longDescription: 'Monitor water levels, soil moisture, and weather conditions in real-time. RiceField helps farmers optimize their yield and reduce resource waste with smart sensors.',
    url: 'https://example.com/ricefield',
    imageUrl: 'https://picsum.photos/id/19/800/600',
    creatorId: 'c4',
    techStack: ['Python', 'IoT', 'React'],
    launchedAt: '2023-09-05',
    category: 'SaaS',
  },
  {
    id: 'p20',
    title: 'TempleRunKH',
    description: 'Endless runner game set in the ancient Angkor empire.',
    longDescription: 'Run through the jungle, dodge obstacles, and collect ancient artifacts. A fun and educational game that showcases the beauty and history of the Khmer Empire.',
    url: 'https://example.com/templerunkh',
    imageUrl: 'https://picsum.photos/id/20/800/600',
    creatorId: 'c3',
    techStack: ['Unity', 'C#'],
    launchedAt: '2024-01-05',
    category: 'Mobile App',
  },
  {
    id: 'p21',
    title: 'SrokSre',
    description: 'Platform for buying and selling agricultural land.',
    longDescription: 'Find your perfect plot of land in the countryside. SrokSre specializes in rural real estate, connecting buyers with sellers and providing legal assistance.',
    url: 'https://example.com/sroksre',
    imageUrl: 'https://picsum.photos/id/21/800/600',
    creatorId: 'c1',
    techStack: ['Laravel', 'Vue', 'MySQL'],
    launchedAt: '2023-08-12',
    category: 'Website',
  },
  {
    id: 'p22',
    title: 'KandalMarket',
    description: 'Online grocery store delivering fresh local produce.',
    longDescription: 'Fresh vegetables, fruits, and meats delivered from Kandal market to your doorstep. We partner with local vendors to bring you the freshest ingredients daily.',
    url: 'https://example.com/kandalmarket',
    imageUrl: 'https://picsum.photos/id/22/800/600',
    creatorId: 'c2',
    techStack: ['Next.js', 'Tailwind CSS', 'Supabase'],
    launchedAt: '2023-12-22',
    category: 'Website',
  },
  {
    id: 'p23',
    title: 'SiemReapGuide',
    description: 'Digital travel companion for visiting Siem Reap.',
    longDescription: 'Explore the temples, find the best restaurants, and book tours. SiemReapGuide is your personal pocket guide to making the most of your trip to the temple city.',
    url: 'https://example.com/siemreapguide',
    imageUrl: 'https://picsum.photos/id/23/800/600',
    creatorId: 'c3',
    techStack: ['Flutter', 'Firebase'],
    launchedAt: '2024-03-01',
    category: 'Mobile App',
  },
  {
    id: 'p24',
    title: 'MekongFlow',
    description: 'Logistics management software for trucking companies.',
    longDescription: 'Streamline your fleet operations with MekongFlow. Track shipments, manage drivers, and optimize routes to reduce costs and improve delivery times.',
    url: 'https://example.com/mekongflow',
    imageUrl: 'https://picsum.photos/id/24/800/600',
    creatorId: 'c4',
    techStack: ['React', 'Node.js', 'PostgreSQL'],
    launchedAt: '2023-11-08',
    category: 'SaaS',
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
