import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Target, Heart, Lightbulb, Users, Award, ArrowRight, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Mission from "@/components/sections/about/Mission";
import Value from "@/components/sections/about/Value";
import Team from "@/components/sections/about/Team";
import { cn } from "@/lib/utils";

const About = () => {
  return (
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
            <Badge className="mb-6 gradient-primary text-primary-foreground border-0 px-4 py-2">About TalentCanvas</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-3">
              We're Revolutionizing <span className="">Tech Recruitment</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Born from frustration with traditional hiring, TalentCanvas was created to bring transparency, fairness, and AI-powered efficiency to
              tech recruitment.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <Mission />

      {/* Values Section */}
      <Value />

      {/* Team Section */}
      <Team />

      {/* CTA Section */}
      <section className="py-12 px-4 gradient-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <Award className="h-16 w-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl opacity-80 mb-10 max-w-2xl mx-auto">
            Whether you're looking for your next role or searching for top talent, TalentCanvas is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/sign-up">Join The Community</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
