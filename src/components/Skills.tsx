
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Section from "./Section";
import SkillBadge from "./SkillBadge";
import { Skill } from "@/types";

const Skills = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  
  const skills: Skill[] = [
    // Frontend
    { name: "HTML/CSS", level: 5, category: "frontend" },
    { name: "JavaScript", level: 5, category: "frontend" },
    { name: "React", level: 5, category: "frontend" },
    { name: "TypeScript", level: 4, category: "frontend" },
    { name: "Next.js", level: 4, category: "frontend" },
    { name: "Tailwind CSS", level: 5, category: "frontend" },
    { name: "Redux", level: 4, category: "frontend" },
    { name: "Responsive Design", level: 5, category: "frontend" },
    
    // Backend
    { name: "Node.js", level: 4, category: "backend" },
    { name: "Express", level: 4, category: "backend" },
    { name: "MongoDB", level: 3, category: "backend" },
    { name: "PostgreSQL", level: 3, category: "backend" },
    { name: "GraphQL", level: 3, category: "backend" },
    { name: "REST APIs", level: 4, category: "backend" },
    
    // Design
    { name: "Figma", level: 4, category: "design" },
    { name: "UI/UX Design", level: 3, category: "design" },
    { name: "Adobe XD", level: 3, category: "design" },
    
    // Tools
    { name: "Git", level: 5, category: "tools" },
    { name: "Docker", level: 3, category: "tools" },
    { name: "Webpack", level: 3, category: "tools" },
    { name: "Jest", level: 4, category: "tools" },
    { name: "CI/CD", level: 3, category: "tools" },
    
    // Soft Skills
    { name: "Problem Solving", level: 5, category: "soft" },
    { name: "Communication", level: 4, category: "soft" },
    { name: "Team Collaboration", level: 5, category: "soft" },
    { name: "Time Management", level: 4, category: "soft" },
  ];
  
  const filteredSkills = activeTab === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeTab);

  return (
    <Section 
      id="skills" 
      title="My Skills" 
      subtitle="Technologies and tools I work with"
    >
      <div className="mb-8 flex justify-center">
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full max-w-3xl">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 w-full">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="design">Design</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
            <TabsTrigger value="soft">Soft Skills</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredSkills.map((skill, index) => (
          <SkillBadge 
            key={index} 
            name={skill.name} 
            level={skill.level} 
            className="h-full"
          />
        ))}
      </div>
    </Section>
  );
};

export default Skills;
