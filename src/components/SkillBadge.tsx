
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  level?: number;
  className?: string;
}

const SkillBadge = ({ name, level = 0, className }: SkillBadgeProps) => {
  return (
    <div className={cn(
      "flex flex-col items-center bg-white rounded-lg p-4 shadow-sm border transition-transform hover:scale-105",
      className
    )}>
      <span className="text-lg font-medium mb-2">{name}</span>
      {level > 0 && (
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "w-2 h-2 rounded-full",
                i < level ? "bg-primary" : "bg-muted"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillBadge;





