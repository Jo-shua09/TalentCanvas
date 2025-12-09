import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Clock,
  Target,
  CheckCircle2,
  ArrowRight,
  Eye,
  MessageSquare,
  Calendar
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const HiringAnalytics = () => {
  const metrics = [
    { label: "Active Job Postings", value: "12", change: "+3 this month", icon: Target },
    { label: "Total Applications", value: "487", change: "+89 this week", icon: Users },
    { label: "Average Time to Hire", value: "18 days", change: "-5 days", icon: Clock },
    { label: "Interview Rate", value: "24%", change: "+4%", icon: Calendar }
  ];

  const pipelineStages = [
    { stage: "Applied", count: 487, percentage: 100 },
    { stage: "Screened", count: 245, percentage: 50 },
    { stage: "Interviewed", count: 89, percentage: 18 },
    { stage: "Offered", count: 32, percentage: 7 },
    { stage: "Hired", count: 18, percentage: 4 }
  ];

  const topSources = [
    { source: "TalentCanvas Direct", candidates: 245, quality: 92 },
    { source: "LinkedIn", candidates: 89, quality: 78 },
    { source: "Referrals", candidates: 67, quality: 95 },
    { source: "Job Boards", candidates: 54, quality: 65 },
    { source: "Company Website", candidates: 32, quality: 71 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="gradient-hero py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 gradient-primary text-primary-foreground border-0 px-4 py-2">
              <BarChart3 className="h-4 w-4 mr-2" />
              Hiring Analytics
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Data-Driven Hiring Decisions
            </h1>
            <p className="text-xl text-muted-foreground">
              Track your hiring funnel, measure recruiter performance, and optimize your 
              talent acquisition strategy with real-time analytics.
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-8 px-4 -mt-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-4">
            {metrics.map((metric) => (
              <Card key={metric.label}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{metric.label}</p>
                      <p className="text-3xl font-bold mt-1">{metric.value}</p>
                      <p className="text-sm text-green-600 mt-1">{metric.change}</p>
                    </div>
                    <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                      <metric.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Pipeline */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Hiring Pipeline</CardTitle>
              <CardDescription>Track candidates through each stage of your hiring process</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {pipelineStages.map((stage, index) => (
                  <div key={stage.stage} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                          {index + 1}
                        </div>
                        <span className="font-medium">{stage.stage}</span>
                      </div>
                      <div className="text-right">
                        <span className="font-bold">{stage.count}</span>
                        <span className="text-muted-foreground ml-2">({stage.percentage}%)</span>
                      </div>
                    </div>
                    <Progress value={stage.percentage} className="h-3" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Source Analytics */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Candidate Sources */}
            <Card>
              <CardHeader>
                <CardTitle>Candidate Sources</CardTitle>
                <CardDescription>Where your best candidates come from</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {topSources.map((source) => (
                  <div key={source.source} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium">{source.source}</p>
                      <p className="text-sm text-muted-foreground">{source.candidates} candidates</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-primary">{source.quality}%</p>
                      <p className="text-xs text-muted-foreground">Quality Score</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Performance Metrics */}
            <Card>
              <CardHeader>
                <CardTitle>Performance Insights</CardTitle>
                <CardDescription>Key metrics to optimize your hiring</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  { label: "Application to Interview Rate", value: 24, target: 30 },
                  { label: "Interview to Offer Rate", value: 36, target: 40 },
                  { label: "Offer Acceptance Rate", value: 78, target: 80 },
                  { label: "Candidate Satisfaction", value: 92, target: 90 }
                ].map((metric) => (
                  <div key={metric.label} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{metric.label}</span>
                      <span className={metric.value >= metric.target ? "text-green-600" : "text-orange-600"}>
                        {metric.value}% / {metric.target}% target
                      </span>
                    </div>
                    <Progress 
                      value={metric.value} 
                      className={`h-2 ${metric.value >= metric.target ? '' : ''}`} 
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { icon: Eye, title: "View All Applications", link: "/candidates" },
              { icon: Target, title: "Manage Job Postings", link: "/job-postings" },
              { icon: MessageSquare, title: "Check Messages", link: "/messages" },
              { icon: Calendar, title: "Scheduled Interviews", link: "/employer" }
            ].map((action) => (
              <Link key={action.title} to={action.link}>
                <Card className="hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer h-full">
                  <CardContent className="pt-6 text-center">
                    <action.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                    <p className="font-medium">{action.title}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 gradient-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <TrendingUp className="h-12 w-12 mx-auto mb-4 opacity-80" />
          <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Hiring?</h2>
          <p className="text-xl opacity-80 mb-8 max-w-2xl mx-auto">
            Access advanced analytics, AI-powered insights, and automation tools to build your dream team faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/employer">Go to Dashboard</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/job-postings">Post a New Job</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HiringAnalytics;
