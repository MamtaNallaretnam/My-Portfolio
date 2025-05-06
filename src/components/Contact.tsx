
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import Section from "./Section";
import { Mail, Phone, Linkedin, Github, Twitter } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <Section 
      id="contact" 
      title="Get In Touch" 
      subtitle="Have a question or want to work together?"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
          <p className="text-muted-foreground mb-8">
            Feel free to reach out to me through any of these channels. 
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-medium">Email</p>
                <a 
                  href="nretnammamta@gmail.com" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  nretnammamta@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-medium">Phone</p>
                <a 
                  href="tel:+94766287587" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +94 766287587
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/mamta-nallaretnam-884931221/" 
                className="bg-card p-3 rounded-full border hover:bg-primary hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/MamtaNallaretnam" 
                className="bg-card p-3 rounded-full border hover:bg-primary hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              {/* <a 
                href="#" 
                className="bg-card p-3 rounded-full border hover:bg-primary hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a> */}
            </div>
          </div>
        </div>
        
        <div className="rounded-xl border bg-card shadow-sm p-6">
          <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="text-sm font-medium mb-1 block">
                Name
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium mb-1 block">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="text-sm font-medium mb-1 block">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium mb-1 block">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
