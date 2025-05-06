
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Section from "./Section";
import SkillBadge from "./SkillBadge";
import { Skill } from "@/types";

const Skills = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  
  const skills: Skill[] = [
    // Machine Learning Libraries
    { name: "TensorFlow", level: 4, category: "ml" },
    { name: "PyTorch", level: 4, category: "ml" },
    { name: "Scikit-learn", level: 5, category: "ml" },
    { name: "Pandas", level: 5, category: "ml" },
    { name: "NumPy", level: 5, category: "ml" },
    { name: "Matplotlib", level: 4, category: "ml" },
    { name: "Seaborn", level: 4, category: "ml" },
    
    // Backend
    { name: "Node.js", level: 4, category: "backend" },
    { name: "Express", level: 4, category: "backend" },
    { name: "MongoDB", level: 3, category: "backend" },
    { name: "PostgreSQL", level: 5, category: "backend" },
    { name: "REST APIs", level: 4, category: "backend" },
    { name: "FastAPI", level: 4, category: "backend" },
    
    // Cloud, DevOps & Tools
    { name: "GIT", level: 4, category: "devops" },
    { name: "AWS", level: 3, category: "devops" },
    { name: "Azure", level: 3, category: "devops" },
    { name: "Docker", level: 4, category: "devops" },
    { name: "Kubernetes", level: 3, category: "devops" },
    
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
            <TabsTrigger value="ml">ML Libs</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="devops">DevOps</TabsTrigger>
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





