import { Brain, Linkedin, Twitter, Github, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="md:container px-4 mx-auto">
        <div className="grid md:grid-cols-5 gap-8 mb-16">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
                <img src={logo} alt="Logo image" loading="lazy" className="h-24 object-contain" />
              </div>
              <span className="text-2xl font-bold">TalentCanvas</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              AI-powered recruitment platform connecting top tech talent with amazing opportunities. Get actionable feedback to accelerate your
              career.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-background transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-background transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-background transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-background transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">For Candidates</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <Link to="/jobs" className="hover:text-background transition-colors">
                  Find Jobs
                </Link>
              </li>
              <li>
                <Link to="/career-advice" className="hover:text-background transition-colors">
                  Career Advice
                </Link>
              </li>
              <li>
                <Link to="/skill-assessment" className="hover:text-background transition-colors">
                  Skill Assessment
                </Link>
              </li>
              <li>
                <Link to="/salary-insights" className="hover:text-background transition-colors">
                  Salary Insights
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">For Employers</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <Link to="/job-postings" className="hover:text-background transition-colors">
                  Post Jobs
                </Link>
              </li>
              <li>
                <Link to="/candidates" className="hover:text-background transition-colors">
                  Browse Talent
                </Link>
              </li>
              <li>
                <Link to="/hiring-analytics" className="hover:text-background transition-colors">
                  Hiring Analytics
                </Link>
              </li>
              <li>
                <Link to="/employer" className="hover:text-background transition-colors">
                  Employer Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <Link to="/about" className="hover:text-background transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-background transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-background transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-background transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted-foreground/20 pt-8 flex justify-center md:flex-row items-center text-muted-foreground text-sm">
          <p>&copy; 2025 TalentCanvas. All rights reserved.</p>
          <p className="mt-2 md:mt-0"> </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
