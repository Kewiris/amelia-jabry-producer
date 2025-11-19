import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="font-serif text-2xl font-bold tracking-tight hover:text-accent transition-colors"
        >
          Amelia Jabry
        </Link>
        <div className="flex gap-8">
          <Link to="/" className="text-sm font-medium hover:text-accent transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-accent transition-colors">
            About
          </Link>
          <Link to="/my-work" className="text-sm font-medium hover:text-accent transition-colors">
            My Work
          </Link>
          <Link to="/extras" className="text-sm font-medium hover:text-accent transition-colors">
            Extras
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
