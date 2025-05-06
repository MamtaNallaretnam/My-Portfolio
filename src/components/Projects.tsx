
import Section from "./Section";
import ProjectCard from "./ProjectCard";
import { Project } from "@/types";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Crypto Trader",
      description: "A crypto trading and portfolio management app that provides real-time exchange rates, price trend predictions,a trading simulator, sentiment-based news analysis, and price alerts, all powered by a scalable microservices backend with Kubernetes.",
      tags: ["Microservices", "Kubernetes", "Binance API", "ML"],
      imageUrl: "/crypto_trader.jpg",
      link: "#"
    },
    {
      id: 2,
      title: "Bot Atla",
      description: "A chatbot built using PyTorch and multi-layer neural networks for intent classification, leveraging NLP techniques and optimizers like SGD and Adam to deliver accurate, context-aware responses.",
      tags: ["Python", "PyTorch", "NLP", "Neural Networks"],
      imageUrl: "/bot_atla.jpg",
      link: "https://github.com/MamtaNallaretnam/Pytorch-Chatbot"
    },
    {
      id: 3,
      title: "Home Credit Risk Baseline",
      description: "A predictive model developed and used Stratified K-Fold cross-validation for assessing home credit risk stability Utilizing LightGBM and CatBoost for model development, along with Python libraries.",
      tags: ["Python", "LightGBM", "CatBoost", "K-Fold"],
      imageUrl: "/home_credit.jpg",
      link: "#"
    },
    {
      id: 4,
      title: "Weather Guide(Group Project)",
      description: "Developed a weather forecasting app for tourists using Time series models, allowing business users to upload CSVs for analysis and providing insights on weather patterns, temperature, and humidity.",
      tags: ["HTML", "CSS", "JS", "React", "FastAPI", "Firebase", "OpenMeteo API"],
      imageUrl: "/weather_guide.jpg",
      link: "#"
    },
    {
      id: 5,
      title: "Banking System(Group Project)",
      description: "A Banking application designed and implemented an RDBMS database for account management, transactions and balance checks with user features.",
      tags: ["C#", "MySQL", "RDBMS", ".NET Core"],
      imageUrl: "/bank_management.jpg",
      link: "https://github.com/MamtaNallaretnam/BankingSystem"
    },
    {
      id: 6,
      title: "NYC Taxi Travel Data Analysis (Research Project)",
      description: "Conducted research on the impact of the pandemic on NYC taxi travel data from 2019 to 2021, utilizing a windowing scheme and driving data through XGBoost to predict future trends post-pandemic.",
      tags: ["Python", "XGBoost", "Pandas", "NumPy"],
      imageUrl: "/busdata_analysis.jpg",
      link: "https://github.com/MamtaNallaretnam/Research-NYC"
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





