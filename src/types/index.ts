
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link?: string;
}

export interface Skill {
  name: string;
  level: number; // 1-5
  category: "frontend" | "backend" | "design" | "tools" | "soft";
}
