import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Award, 
  Code, 
  Database, 
  Layout, 
  Server, 
  Shield,
  Clock,
  CheckCircle2,
  ArrowRight,
  Trophy,
  Target
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const SkillAssessment = () => {
  const assessments = [
    {
      icon: Code,
      title: "JavaScript Fundamentals",
      description: "Test your knowledge of core JavaScript concepts, ES6+, and modern practices.",
      questions: 25,
      duration: "30 mins",
      difficulty: "Beginner",
      color: "bg-yellow-500"
    },
    {
      icon: Layout,
      title: "React & Frontend",
      description: "Assess your React skills including hooks, state management, and component patterns.",
      questions: 30,
      duration: "45 mins",
      difficulty: "Intermediate",
      color: "bg-blue-500"
    },
    {
      icon: Server,
      title: "Node.js & Backend",
      description: "Evaluate your backend skills with Node.js, Express, and API development.",
      questions: 28,
      duration: "40 mins",
      difficulty: "Intermediate",
      color: "bg-green-500"
    },
    {
      icon: Database,
      title: "Database & SQL",
      description: "Test your knowledge of SQL, database design, and optimization techniques.",
      questions: 25,
      duration: "35 mins",
      difficulty: "Intermediate",
      color: "bg-purple-500"
    },
    {
      icon: Shield,
      title: "System Design",
      description: "Challenge yourself with system design problems and architectural decisions.",
      questions: 15,
      duration: "60 mins",
      difficulty: "Advanced",
      color: "bg-red-500"
    }
  ];

  const completedAssessments = [
    {
      title: "JavaScript Fundamentals",
      score: 92,
      date: "Jan 10, 2024",
      badge: "Expert"
    },
    {
      title: "React & Frontend",
      score: 85,
      date: "Jan 8, 2024",
      badge: "Proficient"
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
              <Target className="h-4 w-4 mr-2" />
              Skill Assessments
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Validate Your Technical Skills
            </h1>
            <p className="text-xl text-muted-foreground">
              Take AI-powered assessments to earn verified badges and stand out to employers.
              Showcase your expertise with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 -mt-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { icon: Trophy, label: "Assessments Taken", value: "2" },
              { icon: Award, label: "Badges Earned", value: "2" },
              { icon: Target, label: "Average Score", value: "88%" },
              { icon: Clock, label: "Time Invested", value: "1.5 hrs" }
            ].map((stat) => (
              <Card key={stat.label}>
                <CardContent className="pt-6 text-center">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Completed Assessments */}
      {completedAssessments.length > 0 && (
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-6">Your Achievements</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {completedAssessments.map((assessment) => (
                <Card key={assessment.title} className="border-2 border-primary/20 bg-primary/5">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                          <Award className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{assessment.title}</h3>
                          <p className="text-sm text-muted-foreground">Completed {assessment.date}</p>
                        </div>
                      </div>
                      <Badge className="gradient-primary border-0">{assessment.badge}</Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Score</span>
                        <span className="font-medium">{assessment.score}%</span>
                      </div>
                      <Progress value={assessment.score} className="h-2" />
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button variant="outline" size="sm" className="flex-1">View Certificate</Button>
                      <Button variant="outline" size="sm" className="flex-1">Retake</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Available Assessments */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold">Available Assessments</h2>
              <p className="text-muted-foreground">Choose an assessment to validate your skills</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assessments.map((assessment) => (
              <Card key={assessment.title} className="hover:shadow-lg transition-all group">
                <CardHeader>
                  <div className={`w-14 h-14 ${assessment.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <assessment.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle>{assessment.title}</CardTitle>
                  </div>
                  <CardDescription>{assessment.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">
                      <Clock className="h-3 w-3 mr-1" />
                      {assessment.duration}
                    </Badge>
                    <Badge variant="outline">{assessment.questions} questions</Badge>
                    <Badge variant={
                      assessment.difficulty === "Beginner" ? "secondary" :
                      assessment.difficulty === "Intermediate" ? "default" : "destructive"
                    }>
                      {assessment.difficulty}
                    </Badge>
                  </div>
                  <Button className="w-full gradient-primary border-0">
                    Start Assessment
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How Skill Assessments Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Earn verified badges that employers trust
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Choose Assessment", description: "Select a skill area you want to validate" },
              { step: "2", title: "Complete Test", description: "Answer questions within the time limit" },
              { step: "3", title: "Get Results", description: "Receive instant feedback and your score" },
              { step: "4", title: "Earn Badge", description: "Display your verified badge to employers" }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">Why Take Assessments?</Badge>
              <h2 className="text-3xl font-bold mb-6">Stand Out to Employers</h2>
              <div className="space-y-4">
                {[
                  "Verified badges appear on your profile and applications",
                  "Employers can filter candidates by skill badges",
                  "Demonstrate expertise beyond your resume",
                  "Get matched with higher-quality job opportunities",
                  "Identify skill gaps and areas for improvement"
                ].map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              <Button asChild className="mt-8 gradient-primary border-0" size="lg">
                <Link to="/candidate">
                  View Your Profile
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["JavaScript Expert", "React Pro", "SQL Master", "Full Stack"].map((badge) => (
                <Card key={badge} className="text-center p-6">
                  <Award className="h-12 w-12 text-primary mx-auto mb-3" />
                  <p className="font-semibold">{badge}</p>
                  <p className="text-sm text-muted-foreground">Verified Badge</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SkillAssessment;
