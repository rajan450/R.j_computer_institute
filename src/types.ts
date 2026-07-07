export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  duration: string;
  icon: string;
  category?: string;
  eligibility?: string;
  mode?: string;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  category: string;
  title: string;
}
