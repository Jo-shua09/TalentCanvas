import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { User, Upload, MessageSquare, MapPin, TrendingUp, FileText, Code, Palette, Database, Bell, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarImage } from "@/components/ui/avatar";
import { Helmet } from "react-helmet-async";
import logo from "@/assets/images/logo.png";

const CandidateDashboard = () => {
  const [profileCompletion] = useState(78);

  const mockJobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      matchScore: 95,
      salary: "$120k - $160k",
      logo: "TC",
      skills: ["React", "TypeScript", "Next.js"],
    },
    {
      id: 2,
      title: "Full Stack Engineer",
      company: "StartupXYZ",
      location: "Remote",
      matchScore: 88,
      salary: "$100k - $140k",
      logo: "SX",
      skills: ["Node.js", "React", "MongoDB"],
    },
    {
      id: 3,
      title: "UI/UX Developer",
      company: "Design Studios",
      location: "New York, NY",
      matchScore: 82,
      salary: "$90k - $120k",
      logo: "DS",
      skills: ["Figma", "React", "CSS"],
    },
  ];

  const mockApplications = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "Meta",
      status: "Interview Scheduled",
      appliedDate: "2024-01-15",
      statusColor: "bg-blue-500",
    },
    {
      id: 2,
      title: "Frontend Engineer",
      company: "Google",
      status: "Under Review",
      appliedDate: "2024-01-12",
      statusColor: "bg-yellow-500",
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "Netflix",
      status: "Feedback Available",
      appliedDate: "2024-01-10",
      statusColor: "bg-red-500",
    },
  ];

  return (
    <div className="min-h-screen relative bg-gray-50">
      <Helmet>
        <title>Candidate Dashboard - TalentCanvas</title>
        <meta
          name="description"
          content="Manage your job applications, track progress, and discover personalized job recommendations on your TalentCanvas candidate dashboard."
        />
      </Helmet>

      <div className="fixed bottom-5 right-5 hover:scale-105 cursor-pointer transition-all duration-300 p-3 bg-muted-foreground rounded-full">
        <Link to="/messages">
          <MessageSquare className="h-6 w-6 text-white" />
        </Link>
      </div>

      {/* Header */}
      <header className="px-4 bg-white border-b sticky top-0 z-50">
        <div className="mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <img src={logo} alt="Logo image" loading="lazy" className="h-24 object-contain" />
              </div>
            </Link>
            <Badge className="bg-green-100 text-green-800">Candidate</Badge>
          </div>

          <nav className="hidden md:flex items-center space-x-6 font-medium">
            <Link to="/jobs" className="text-gray-600 hover:text-blue-600">
              Jobs
            </Link>
            <Link to="/profile" className="text-gray-600 hover:text-blue-600">
              My Profile
            </Link>
          </nav>

          <div className="flex items-center space-x-6">
            <Link to="">
              <Bell className="h-5 w-5 text-gray-600 cursor-pointer hover:text-blue-600" />
            </Link>

            <Avatar>
              <AvatarImage src=""></AvatarImage>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="mx-auto container py-8">
        <div className="grid lg:grid-cols-3 gap-8 ">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Welcome Section */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">Welcome back, John! 👋</CardTitle>
                    <CardDescription>Ready to find your next opportunity?</CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Profile Completion</div>
                    <div className="flex items-center space-x-2 mt-1">
                      <Progress value={profileCompletion} className="w-20" />
                      <span className="text-sm font-medium">{profileCompletion}%</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Recommended Jobs */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Recommended Jobs</CardTitle>
                    <CardDescription>Jobs matched to your profile and preferences</CardDescription>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/jobs">View All</Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockJobs.map((job) => (
                  <div key={job.id} className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">{job.logo}</div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold">{job.title}</h3>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          {job.matchScore}% Match
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">{job.company}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                        <span className="flex items-center space-x-1">
                          <MapPin className="h-3 w-3" />
                          <span>{job.location}</span>
                        </span>
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex space-x-1 mt-2">
                        {job.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button size="sm">Apply Now</Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* My Applications */}
            <Card>
              <CardHeader>
                <CardTitle>My Applications</CardTitle>
                <CardDescription>Track your job application progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockApplications.map((app) => (
                    <div key={app.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${app.statusColor}`}></div>
                        <div>
                          <h4 className="font-medium">{app.title}</h4>
                          <p className="text-sm text-gray-600">{app.company}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant={app.status === "Feedback Available" ? "destructive" : "secondary"}>{app.status}</Badge>
                        <p className="text-xs text-gray-500 mt-1">Applied {app.appliedDate}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Profile Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">My Profile</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/profile">
                    <Upload className="h-4 w-4 mr-2" />
                    Update CV/Resume
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/profile">
                    <FileText className="h-4 w-4 mr-2" />
                    Edit Bio & Summary
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/profile">
                    <User className="h-4 w-4 mr-2" />
                    Complete Profile
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Tech Skills Portfolio */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tech Skills & Portfolio</CardTitle>
                <CardDescription>Showcase your technical expertise</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Code className="h-5 w-5 text-blue-600" />
                      <span className="font-medium">Frontend</span>
                    </div>
                    <Badge className="bg-green-100 text-green-800">8 Skills</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Database className="h-5 w-5 text-purple-600" />
                      <span className="font-medium">Backend</span>
                    </div>
                    <Badge className="bg-green-100 text-green-800">6 Skills</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Palette className="h-5 w-5 text-pink-600" />
                      <span className="font-medium">UI/UX</span>
                    </div>
                    <Badge variant="outline">Add Skills</Badge>
                  </div>
                </div>

                <Button variant="outline" className="w-full" asChild>
                  <Link to="/profile">Manage Portfolio</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Your Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Profile Views</span>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span className="font-semibold">127</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Applications Sent</span>
                  <span className="font-semibold">23</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Interview Invites</span>
                  <span className="font-semibold">5</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Job Matches</span>
                  <span className="font-semibold">156</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateDashboard;
