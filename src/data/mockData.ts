import { Course, Review, Feature, GalleryImage } from '../types';

export const courses: Course[] = [
  {
    id: "1",
    slug: "basic-computer",
    title: "Basic Computer",
    description: "Learn the fundamentals of computer and its applications.",
    duration: "1 - 2 Months",
    eligibility: "Any",
    mode: "Offline / Online",
    category: "Computer Basics",
    icon: "Monitor"
  },
  {
    id: "2",
    slug: "dca",
    title: "DCA",
    description: "Diploma in Computer Applications.",
    duration: "6 Months",
    eligibility: "10th Pass",
    mode: "Offline / Online",
    category: "Computer Basics",
    icon: "MonitorPlay"
  },
  {
    id: "3",
    slug: "adca",
    title: "ADCA",
    description: "Advanced Diploma in Computer Applications.",
    duration: "12 Months",
    eligibility: "10th Pass",
    mode: "Offline / Online",
    category: "Computer Basics",
    icon: "Laptop"
  },
  {
    id: "4",
    slug: "dfa",
    title: "DFA",
    description: "Diploma in Financial Accounting.",
    duration: "6 Months",
    eligibility: "10th Pass",
    mode: "Offline / Online",
    category: "Accounting",
    icon: "BarChart"
  },
  {
    id: "5",
    slug: "tally-gst",
    title: "Tally (GST)",
    description: "Learn Tally with GST for accounting and taxation.",
    duration: "1 - 2 Months",
    eligibility: "Any",
    mode: "Offline / Online",
    category: "Accounting",
    icon: "FileText"
  },
  {
    id: "6",
    slug: "ms-office",
    title: "MS Office",
    description: "Master Word, Excel, PowerPoint & more.",
    duration: "1 - 2 Months",
    eligibility: "Any",
    mode: "Offline / Online",
    category: "Office Productivity",
    icon: "LayoutGrid"
  },
  {
    id: "7",
    slug: "web-development",
    title: "Web Development",
    description: "Learn modern web development skills.",
    duration: "3 - 6 Months",
    eligibility: "12th / Any",
    mode: "Offline / Online",
    category: "Programming",
    icon: "Code"
  },
  {
    id: "8",
    slug: "typing",
    title: "Typing",
    description: "Improve your typing speed and accuracy.",
    duration: "1 - 2 Months",
    eligibility: "Any",
    mode: "Offline / Online",
    category: "Short Term",
    icon: "Keyboard"
  },
  {
    id: "9",
    slug: "ccc",
    title: "CCC",
    description: "Course on Computer Concepts.",
    duration: "3 Months",
    eligibility: "10th Pass",
    mode: "Offline / Online",
    category: "Computer Basics",
    icon: "BookOpen"
  },
  {
    id: "10",
    slug: "pgdca",
    title: "PGDCA",
    description: "Post Graduate Diploma in Computer Applications.",
    duration: "12 Months",
    eligibility: "Graduate",
    mode: "Offline / Online",
    category: "Computer Basics",
    icon: "GraduationCap"
  },
  {
    id: "11",
    slug: "autocad",
    title: "AutoCAD",
    description: "Master Computer Aided Design.",
    duration: "2 - 3 Months",
    eligibility: "10th / 12th",
    mode: "Offline / Online",
    category: "Designing",
    icon: "PenTool"
  },
  {
    id: "12",
    slug: "spoken-english",
    title: "Spoken English",
    description: "Improve your english communication skills.",
    duration: "2 - 3 Months",
    eligibility: "Any",
    mode: "Offline",
    category: "Short Term",
    icon: "MessageCircle"
  },
  {
    id: "13",
    slug: "computer-hardware",
    title: "Computer Hardware",
    description: "Learn about computer components and maintenance.",
    duration: "3 - 6 Months",
    eligibility: "10th Pass",
    mode: "Offline",
    category: "Short Term",
    icon: "Cpu"
  }
];

export const reviews: Review[] = [
  {
    id: '1',
    name: 'Ashish Patel',
    role: 'Local Guide',
    rating: 5,
    content: 'Best computer teachers. There learn ADCA, DCA, DFA, Web Development, etc. There are new library for self study. Good peaceful place for learning.',
  },
  {
    id: '2',
    name: 'Reeya Sinha',
    role: 'Student',
    rating: 5,
    content: 'In this institute, all facilities are available and the teachers are highly supportive and appreciate students.',
  },
  {
    id: '3',
    name: 'Anjali',
    role: 'Student',
    rating: 5,
    content: 'Computer institute and education very good. This coaching is too good and all facilities are available.',
  },
];

export const features: Feature[] = [
  {
    id: '1',
    title: 'Experienced Teachers',
    description: 'Well qualified and dedicated teachers.',
    icon: 'UserCheck',
  },
  {
    id: '2',
    title: 'Practical Training',
    description: 'Hands-on learning with real-world examples.',
    icon: 'BookOpen',
  },
  {
    id: '3',
    title: 'Affordable Fees',
    description: 'Quality education at reasonable fees.',
    icon: 'Wallet',
  },
  {
    id: '4',
    title: 'Friendly Environment',
    description: 'Comfortable & motivating learning atmosphere.',
    icon: 'Smile',
  },
  {
    id: '5',
    title: 'Good Reviews',
    description: 'Trusted by hundreds of happy learners.',
    icon: 'Star',
  },
  {
    id: '6',
    title: 'Easy Location',
    description: 'Located in Tarna Bazar, Shivpur, Varanasi.',
    icon: 'MapPin',
  },
];

export const gallery: GalleryImage[] = [
  {
    id: '1',
    title: 'Classroom',
    category: 'Classroom',
    url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    title: 'Computer Lab',
    category: 'Computer Lab',
    url: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    title: 'Students Learning',
    category: 'Students',
    url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    title: 'Library / Self Study',
    category: 'Library',
    url: 'https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '5',
    title: 'Institute Entrance',
    category: 'Institute',
    url: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '6',
    title: 'Certificates',
    category: 'Certificates',
    url: 'https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&q=80&w=800',
  },
];
