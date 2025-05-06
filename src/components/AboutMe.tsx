
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
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
              alt="About Me" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 -z-10 w-64 h-64 bg-primary/10 rounded-full"></div>
        </div>
          
        <div>
          <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
          <p className="mb-4 text-muted-foreground">
            I'm a passionate Full Stack Developer with a love for creating elegant solutions to complex problems. 
            With a background in computer science and several years of industry experience, I've worked on a variety of projects 
            ranging from small business websites to complex enterprise applications.
          </p>
          <p className="mb-4 text-muted-foreground">
            My journey into tech began when I built my first website at 14. Since then, I've been captivated by the 
            ever-evolving landscape of web development and the power it has to transform businesses and user experiences.
          </p>
          <p className="mb-6 text-muted-foreground">
            When I'm not coding, you can find me hiking in nature, reading science fiction, or experimenting with new recipes in the kitchen.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div>
              <h4 className="text-lg font-semibold mb-2">Education</h4>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>B.S. in Computer Science, University of Technology, 2017-2021</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Full Stack Web Development, Tech Academy, 2021</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Experience</h4>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Full Stack Developer, Tech Solutions Inc, 2021-Present</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Web Developer Intern, Digital Agency, 2020</span>
                </li>
              </ul>
            </div>
          </div>
          
          <Button variant="outline" size="lg">
            Download Resume
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default AboutMe;
