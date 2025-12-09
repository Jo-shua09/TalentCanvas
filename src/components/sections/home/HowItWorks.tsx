import { forCandidatesSteps, forEmployersSteps } from "@/assets/data/indexData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function HowItWorks() {
  return (
    <div>
      <section id="how-it-works" className="py-20 lg:py-12 px-4 bg-muted/30">
        <div className="md:container mx-auto">
          <div className="text-center mb-10">
            <Badge variant="outline" className="mb-4">
              How It Works
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-3">Simple Process, Amazing Results</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you're looking for your next role or the perfect candidate, we've got you covered
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* For Candidates */}
            <div className="bg-background p-6 md:p-8 rounded-3xl border-2 shadow-lg">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                  <Search className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-primary">For Candidates</h3>
              </div>

              <div className="space-y-8">
                {forCandidatesSteps.map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground font-bold">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button className="w-full mt-8 gradient-primary border-0" size="lg" asChild>
                <Link to="/candidate">Start Job Hunting</Link>
              </Button>
            </div>

            {/* For Employers */}
            <div className="bg-background p-6 md:p-8 rounded-3xl border-2 shadow-lg">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-600">For Employers</h3>
              </div>

              <div className="space-y-8">
                {forEmployersSteps.map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button className="w-full mt-8 bg-green-500 hover:bg-green-600 border-0" size="lg" asChild>
                <Link to="/employer">Start Hiring</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
