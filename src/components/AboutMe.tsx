
import { Button } from "@/components/ui/button";
import Section from "./Section";

const AboutMe = () => {
  return (
    <Section 
      id="about" 
      title="About Me" 
      subtitle="Get to know me better"
      className="bg-muted/30"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="hidden lg:block relative">
          <div className="w-full max-w-md aspect-[3/4] rounded-lg overflow-hidden">
            <img 
              src="/me.jpg" 
              alt="About Me" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 -z-10 w-64 h-64 bg-primary/10 rounded-full"></div> */}
        </div>
          
        <div>
          <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
          <p className="mb-4 text-muted-foreground">
          I'm a passionate Data Science enthusiast driven by the pursuit of insights hidden within data. 
          With a background in computer science and hands-on experience in machine learning and analytics, 
          I've contributed to projects ranging from LLM models to deepfake detection systems.
          </p>
          <p className="mb-4 text-muted-foreground">
          My journey into data science began with exploring simple Kaggle datasets, but quickly evolved into 
          building predictive models, experimenting with neural networks, and applying real-world solutions through research.
          </p>
          <p className="mb-6 text-muted-foreground">
            When I'm not coding, you can find me arrangings picnics at the  beach, reading love fiction, or experimenting with new recipes in the kitchen.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div>
              <h4 className="text-lg font-semibold mb-2">Education</h4>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Bachelor of Science of Engineering (Honors) in Computer Science and Engineering, University of Moratuwa, Sri Lanka, 2022-Present</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>BT/Vincent Girls’ High School, Batticaloa, Sri Lanka, 2007-2020</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Experience</h4>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>AI ML Intern , iVedha Inc, 2024-Present</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Junior Researcher (Volunteer), Aaivu Colombo, 2024</span>
                </li>
              </ul>
            </div>
          </div>
          
          <a href="/210365J_CV.pdf" download>
            <Button variant="outline" size="lg">
              Download Resume
            </Button>
          </a>
        </div>
      </div>
    </Section>
  );
};

export default AboutMe;
