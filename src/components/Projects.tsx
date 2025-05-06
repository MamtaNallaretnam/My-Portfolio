
import Section from "./Section";
import ProjectCard from "./ProjectCard";
import { Project } from "@/types";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A fully responsive e-commerce platform with product catalog, shopping cart, and secure checkout features.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      link: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag and drop functionality, and team workspaces.",
      tags: ["React", "Firebase", "Tailwind CSS"],
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      link: "#"
    },
    {
      id: 3,
      title: "Finance Dashboard",
      description: "An interactive finance dashboard with data visualization, reporting features, and predictive analytics.",
      tags: ["TypeScript", "D3.js", "Express", "PostgreSQL"],
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      link: "#"
    },
    {
      id: 4,
      title: "Social Media Platform",
      description: "A modern social media platform with real-time messaging, post sharing, and community features.",
      tags: ["Next.js", "GraphQL", "MongoDB", "Socket.io"],
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      link: "#"
    },
    {
      id: 5,
      title: "Weather Forecasting App",
      description: "A weather forecasting application with accurate predictions, location-based services, and interactive maps.",
      tags: ["React", "OpenWeather API", "Leaflet", "Tailwind CSS"],
      imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      link: "#"
    },
    {
      id: 6,
      title: "Recipe Sharing Platform",
      description: "A community-driven recipe sharing platform with search functionality, favorites, and user profiles.",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      imageUrl: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
      link: "#"
    },
  ];

  return (
    <Section 
      id="projects" 
      title="My Projects" 
      subtitle="Check out some of my recent work"
      className="bg-muted/30"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
            imageUrl={project.imageUrl}
            link={project.link}
          />
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Button size="lg">View All Projects</Button>
      </div>
    </Section>
  );
};

export default Projects;
