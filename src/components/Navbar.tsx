
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <a href="#home" className="text-xl md:text-2xl font-bold text-primary">
          Portfolio
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-4 py-2 rounded-md text-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Button>Resume</Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden p-2" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="w-6 flex flex-col gap-1">
            <span className={cn(
              "block h-0.5 w-full bg-foreground transition-all duration-300",
              mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
            )}></span>
            <span className={cn(
              "block h-0.5 w-full bg-foreground transition-all duration-300",
              mobileMenuOpen ? "opacity-0" : "opacity-100" 
            )}></span>
            <span className={cn(
              "block h-0.5 w-full bg-foreground transition-all duration-300",
              mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            )}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-x-0 bg-background/95 backdrop-blur-md shadow-md transition-all duration-300 flex flex-col md:hidden",
        mobileMenuOpen ? "top-16 opacity-100" : "-top-96 opacity-0"
      )}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-4 py-3 rounded-md hover:bg-muted transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button className="mt-2">Resume</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;




