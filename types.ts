
export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  tags: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
  accentColor: string; // Tailwind color name (e.g., 'blue-500')
}

export interface NavItem {
  label: string;
  path: string;
  isExternal?: boolean;
}
