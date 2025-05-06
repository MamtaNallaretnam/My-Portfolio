
import { Button } from "@/components/ui/button";
import { ArrowDownCircle } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-8 relative overflow-hidden">
      <div className="absolute -z-10 inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <span className="inline-block text-primary font-medium mb-4">Hello, I'm</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block">Mamta Nallaretnam</span>
              <span className="block text-primary mt-2">Data Science Enthusiast</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8">
              I build intelligent data-driven solutions with a focus on accuracy, scalability, and real-world impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#projects">View My Work</a>
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:flex justify-center">
            <div className="relative w-72 h-72 rounded-full bg-primary/10 p-1">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary/20">
                <img 
                  src="/ml.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" aria-label="Scroll down">
            <ArrowDownCircle className="w-10 h-10 text-primary opacity-70" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
