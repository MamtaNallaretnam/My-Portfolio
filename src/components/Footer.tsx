
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <a href="#home" className="text-xl font-bold text-primary">
              Portfolio
            </a>
            <p className="text-muted-foreground mt-2">
              Data Science Enthusiast
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground flex items-center justify-center md:justify-end gap-1">
              Made in {currentYear}
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
