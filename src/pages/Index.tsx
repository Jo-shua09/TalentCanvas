import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, CheckCircle2, ArrowRight, Zap, Target, Award, Globe, Shield, Clock, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Features from "@/components/sections/home/Features";
import HowItWorks from "@/components/sections/home/HowItWorks";
import Testimonials from "@/components/sections/home/Testimonials";
import { companies } from "@/assets/data/indexData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { cn } from "@/lib/utils";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>TalentCanvas - AI-Powered Tech Recruitment Platform</title>
        <meta
          name="description"
          content="Connect top tech talent with dream opportunities. Our AI-driven platform matches candidates with perfect-fit roles while providing actionable feedback to accelerate career growth."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="gradient-hero relative py-12 md:py-20 lg:py-12 px-4  overflow-hidden">
          {/* Background decoration */}
          <div
            className={cn(
              "absolute inset-0",
              "[background-size:40px_40px]",
              "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
              "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
            )}
          />

          <div className="md:container px-4 mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 gradient-primary text-primary-foreground border-0 px-4 py-2">
                <Sparkles className="h-4 w-4 mr-2" />
                AI-Powered Recruitment Platform
              </Badge>

              <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                Connect Top Tech Talent with <span className="">Dream Opportunities</span>
              </h1>

              <p className="text-lg md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                Our AI-driven platform matches candidates with perfect-fit roles while providing
                <strong className="text-foreground"> actionable feedback</strong> to accelerate career growth. Experience recruitment that actually
                works.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button
                  size="lg"
                  asChild
                  className="gradient-primary border-0 hover:scale-95 transition-all duration-300 text-sm rounded-xl px-8 py-6"
                >
                  <Link to="/candidate">
                    I'm Looking for a Job
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-sm rounded-xl px-8 py-6">
                  <Link to="/employer">
                    I'm Hiring Talent
                    <Users className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Free to join</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Privacy protected</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <span>AI-powered matching</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Logos */}
        <section className="py-12 border-b bg-muted/30">
          <div className="md:container mx-auto px-4">
            <p className="text-center text-muted-foreground mb-8">Trusted by candidates who landed roles at top companies</p>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={50}
              slidesPerView={5}
              autoplay={{
                delay: 0, // Set to 0 for continuous movement
                disableOnInteraction: false,
                pauseOnMouseEnter: true, // Optional: pause on hover
              }}
              speed={3000} // Control the speed of continuous movement
              loop={true}
              freeMode={true} // Enables smooth free scrolling
              className="w-full max-w-5xl mx-auto"
            >
              {companies.map((company, index) => (
                <SwiperSlide key={index}>
                  <div className="flex justify-center gap-8 md:gap-16 items-center">
                    <img key={company.name} src={company.logo} alt={company.name} className="h-8 md:h-10 opacity-60" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* Features Section */}
        <Features />

        {/* How It Works */}
        <HowItWorks />

        {/* Stats Section */}
        <section className="md:py-20 py-12 px-4 gradient-primary text-primary-foreground">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-4 grid-cols-2 gap-8 text-center">
              {[
                { value: "50K+", label: "Tech Professionals", icon: Users },
                { value: "2K+", label: "Companies Hiring", icon: Globe },
                { value: "95%", label: "Match Accuracy", icon: Target },
                { value: "3x", label: "Faster Hiring", icon: Clock },
              ].map((stat) => (
                <div key={stat.label} className="space-y-2">
                  <stat.icon className="h-8 w-8 mx-auto opacity-80" />
                  <div className="text-4xl md:text-5xl font-bold">{stat.value}</div>
                  <div className="text-primary-foreground/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* CTA Section */}
        <section className="md:py-20 p-12 lg:py-12 px-4 bg-muted/30">
          <div className="container mx-auto text-center">
            <div className="max-w-3xl mx-auto">
              <Award className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Career?</h2>
              <p className="text-xl text-muted-foreground mb-10">
                Join thousands of tech professionals who've found their dream jobs through our AI-powered platform. Your next opportunity is just a
                click away.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="gradient-primary border-0 hover:scale-95 transition-all duration-300 text-sm px-8 py-6">
                  <Link to="/candidate">Start Your Journey Today</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-sm px-8 py-6">
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Index;
