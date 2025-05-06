
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link?: string;
  className?: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  tags, 
  imageUrl, 
  link,
  className 
}: ProjectCardProps) => {
  return (
    <div className={cn(
      "rounded-xl overflow-hidden border bg-card shadow-sm transition-all hover:shadow-md group",
      className
    )}>
      <div className="aspect-video overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary">{tag}</Badge>
          ))}
        </div>
        
        {link && (
          <Button variant="outline" size="sm" className="mt-2 w-full" asChild>
            <a href={link} target="_blank" rel="noopener noreferrer">
              View Project <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
