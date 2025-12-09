import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Brain, Globe, MessageSquare, Target, Users } from "lucide-react";

export default function Features() {
  return (
    <div className="">
      <section id="features" className="py-20 lg:py-12 px-4">
        <div className="md:container mx-auto">
          <div className="text-center mb-10">
            <Badge variant="outline" className="mb-4">
              Features
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-3">Why TalentCanvas?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're revolutionizing tech recruitment with AI-powered matching and transparent feedback
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center border-2 hover:border-primary/50 transition-all hover:shadow-xl group">
              <CardHeader>
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Brain className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">AI-Powered Matching</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Our advanced AI analyzes skills, experience, and preferences to deliver perfect job matches with compatibility scores up to 98%
                  accuracy.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary/50 transition-all hover:shadow-xl group">
              <CardHeader>
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Actionable Feedback</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  No more silent rejections. Get detailed insights on why applications weren't successful and concrete steps to improve your
                  candidacy.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary/50 transition-all hover:shadow-xl group">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Skills Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Validate your technical skills with our AI-powered assessments and showcase verified badges to employers for instant credibility.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary/50 transition-all hover:shadow-xl group">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Direct Communication</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Connect directly with hiring managers and candidates through our integrated messaging system. No middlemen, no delays.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary/50 transition-all hover:shadow-xl group">
              <CardHeader>
                <div className="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Career Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Track your job search progress with detailed analytics. Monitor profile views, application status, and interview conversion rates.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary/50 transition-all hover:shadow-xl group">
              <CardHeader>
                <div className="w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Global Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Access remote and on-site opportunities from companies worldwide. Filter by location preferences and visa sponsorship availability.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
