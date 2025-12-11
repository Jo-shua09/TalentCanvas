import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import logo from "@/assets/images/logo.png";
import LogoutButton from "../extras/LogoutButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="border-b bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="px-4 md:container mx-auto py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
            <img src={logo} alt="Logo image" loading="lazy" className="h-24 object-contain" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`transition-colors ${isActive("/") ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"}`}>
            Home
          </Link>
          <Link
            to="/about"
            className={`transition-colors ${isActive("/about") ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"}`}
          >
            About
          </Link>

          <Link
            to="/contact"
            className={`transition-colors ${isActive("/contact") ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"}`}
          >
            Contact
          </Link>
          <Link
            to="/candidate"
            className={`transition-colors ${isActive("/candidate") ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"}`}
          >
            Dashboard
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          {!isAuthenticated ? (
            <Button asChild className="gradient-primary border-0">
              {/* <Link to="/candidate">Get Started Free</Link> */}
              <LogoutButton />
            </Button>
          ) : (
            <>
              <Avatar>
                <AvatarImage src=""></AvatarImage>
              </Avatar>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background px-4 py-4 space-y-4">
          <Link to="/" className="block py-2 text-foreground" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="block py-2 text-foreground" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link to="/contact" className="block py-2 text-foreground" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
          <Link to="/candidate" className="block py-2 text-foreground" onClick={() => setIsMenuOpen(false)}>
            Dashboard
          </Link>

          {!isAuthenticated ? (
            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full" asChild>
                <Link to="/sign-in">Sign In</Link>
              </Button>
              <Button className="w-full gradient-primary border-0" asChild>
                <Link to="/sign-up">Get Started Free</Link>
              </Button>
            </div>
          ) : (
            <>
              <Avatar>
                <AvatarImage src=""></AvatarImage>
              </Avatar>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
