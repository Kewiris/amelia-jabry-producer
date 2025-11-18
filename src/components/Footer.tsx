import { Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <footer className="bg-surface-elevated border-t border-border/20 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Amelia Jabry
            </p>
          </div>
          
          <nav className="flex gap-6 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-accent transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-muted-foreground hover:text-accent transition-colors">
              About
            </Link>
            <Link to="/my-work" className="text-muted-foreground hover:text-accent transition-colors">
              My Work
            </Link>
            <Link to="/extras" className="text-muted-foreground hover:text-accent transition-colors">
              Extras
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-accent transition-colors">
              Contact
            </Link>
          </nav>
          
          <a
            href="https://www.linkedin.com/in/amelia-j-03546a16a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
