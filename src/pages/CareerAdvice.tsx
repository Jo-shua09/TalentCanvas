import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  FileText, 
  MessageSquare, 
  TrendingUp, 
  Code,
  Users,
  Lightbulb,
  ArrowRight,
  Play,
  Clock
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const CareerAdvice = () => {
  const articles = [
    {
      title: "How to Ace Your Technical Interview",
      description: "Master the art of technical interviews with our comprehensive guide covering data structures, algorithms, and system design.",
      category: "Interview Prep",
      readTime: "12 min read",
      image: "🎯"
    },
    {
      title: "Building a Portfolio That Gets Noticed",
      description: "Learn what hiring managers actually look for in portfolios and how to showcase your best work effectively.",
      category: "Portfolio",
      readTime: "8 min read",
      image: "💼"
    },
    {
      title: "Negotiating Your Tech Salary",
      description: "Get the compensation you deserve with proven negotiation strategies from industry experts.",
      category: "Salary",
      readTime: "10 min read",
      image: "💰"
    },
    {
      title: "Transitioning to Tech from Another Field",
      description: "A complete roadmap for career changers looking to break into the tech industry.",
      category: "Career Change",
      readTime: "15 min read",
      image: "🔄"
    },
    {
      title: "Remote Work Best Practices",
      description: "Tips for thriving in a remote work environment and standing out to distributed teams.",
      category: "Remote Work",
      readTime: "7 min read",
      image: "🏠"
    },
    {
      title: "Growing from Developer to Tech Lead",
      description: "The skills and mindset shifts needed to take on leadership roles in engineering.",
      category: "Leadership",
      readTime: "11 min read",
      image: "📈"
    }
  ];

  const resources = [
    {
      icon: Code,
      title: "Coding Challenges",
      description: "Practice with real interview questions",
      link: "/skill-assessment"
    },
    {
      icon: FileText,
      title: "Resume Templates",
      description: "ATS-optimized templates for tech roles",
      link: "/profile"
    },
    {
      icon: MessageSquare,
      title: "Mock Interviews",
      description: "Practice with AI-powered interviews",
      link: "/candidate"
    },
    {
      icon: TrendingUp,
      title: "Salary Data",
      description: "Compare salaries across companies",
      link: "/salary-insights"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="gradient-hero py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 gradient-primary text-primary-foreground border-0 px-4 py-2">
              <BookOpen className="h-4 w-4 mr-2" />
              Career Resources
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Career Advice for Tech Professionals
            </h1>
            <p className="text-xl text-muted-foreground">
              Expert guides, tips, and resources to accelerate your tech career and land your dream job.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Resources */}
      <section className="py-12 px-4 -mt-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-4">
            {resources.map((resource) => (
              <Link key={resource.title} to={resource.link}>
                <Card className="hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer h-full">
                  <CardContent className="pt-6 text-center">
                    <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-3">
                      <resource.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold mb-1">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground">{resource.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <Card className="overflow-hidden gradient-primary text-primary-foreground">
            <div className="grid lg:grid-cols-2">
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <Badge variant="secondary" className="w-fit mb-4">Featured Guide</Badge>
                <h2 className="text-3xl font-bold mb-4">The Complete Guide to Landing a Tech Job in 2024</h2>
                <p className="text-lg opacity-90 mb-6">
                  Everything you need to know about the modern tech job market, from building your skills 
                  to acing interviews and negotiating offers.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>45 min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>50K+ readers</span>
                  </div>
                </div>
                <Button variant="secondary" className="w-fit">
                  Read the Guide
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
              <div className="hidden lg:flex items-center justify-center p-12 bg-primary-foreground/10">
                <div className="text-9xl">📚</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold">Latest Articles</h2>
              <p className="text-muted-foreground">Expert advice for every stage of your career</p>
            </div>
            <Button variant="outline">
              View All Articles
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Card key={article.title} className="hover:shadow-lg transition-all cursor-pointer group">
                <CardHeader>
                  <div className="text-5xl mb-4">{article.image}</div>
                  <Badge variant="outline" className="w-fit mb-2">{article.category}</Badge>
                  <CardTitle className="group-hover:text-primary transition-colors">{article.title}</CardTitle>
                  <CardDescription>{article.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {article.readTime}
                    </span>
                    <Button variant="ghost" size="sm">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Video Content</Badge>
            <h2 className="text-3xl font-bold mb-4">Learn from Industry Experts</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Watch video tutorials and interviews with tech leaders
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "System Design Interview Tips", views: "125K views", duration: "32:15" },
              { title: "How I Got Hired at Google", views: "89K views", duration: "18:42" },
              { title: "React Best Practices 2024", views: "156K views", duration: "45:30" }
            ].map((video) => (
              <Card key={video.title} className="overflow-hidden cursor-pointer group">
                <div className="aspect-video bg-muted relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-foreground/5 group-hover:bg-foreground/10 transition-colors" />
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 text-primary-foreground ml-1" />
                  </div>
                  <Badge className="absolute bottom-2 right-2 bg-foreground/80">{video.duration}</Badge>
                </div>
                <CardContent className="pt-4">
                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{video.title}</h3>
                  <p className="text-sm text-muted-foreground">{video.views}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Ready to Put This Advice into Action?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Create your profile and start applying to jobs that match your skills and career goals.
          </p>
          <Button asChild className="gradient-primary border-0" size="lg">
            <Link to="/candidate">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareerAdvice;
