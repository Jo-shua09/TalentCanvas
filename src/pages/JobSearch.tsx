import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, MapPin, Star, Briefcase, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import logo from "@/assets/images/logo.png";

const JobSearch = () => {
  const mockJobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      matchScore: 95,
      salary: "$120k - $160k",
      type: "Full-time",
      posted: "2 days ago",
      logo: "TC",
      skills: ["React", "TypeScript", "Next.js", "GraphQL"],
      description: "Join our innovative team building the future of fintech applications.",
    },
    {
      id: 2,
      title: "Full Stack Engineer",
      company: "StartupXYZ",
      location: "Remote",
      matchScore: 88,
      salary: "$100k - $140k",
      type: "Full-time",
      posted: "1 week ago",
      logo: "SX",
      skills: ["Node.js", "React", "MongoDB", "AWS"],
      description: "Help us scale our platform to millions of users worldwide.",
    },
    {
      id: 3,
      title: "UI/UX Developer",
      company: "Design Studios",
      location: "New York, NY",
      matchScore: 82,
      salary: "$90k - $120k",
      type: "Contract",
      posted: "3 days ago",
      logo: "DS",
      skills: ["Figma", "React", "CSS", "Design Systems"],
      description: "Create beautiful, intuitive interfaces for our creative platform.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <img src={logo} alt="Logo image" loading="lazy" className="h-24 object-contain" />
            </div>
          </Link>

          <nav className="flex items-center space-x-6">
            <Avatar>
              <AvatarImage src=""></AvatarImage>
            </Avatar>
          </nav>
        </div>
      </header>

      <div className="container mx-auto py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Find Your Dream Job</h1>
          <p className="text-gray-600">Discover opportunities matched to your skills and preferences</p>
        </div>

        {/* Search and Filters */}
        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          <div className="lg:col-span-3">
            <div className="flex space-x-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input placeholder="Search for jobs, companies, or skills..." className="pl-10" />
              </div>
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="remote">Remote</SelectItem>
                  <SelectItem value="sf">San Francisco</SelectItem>
                  <SelectItem value="ny">New York</SelectItem>
                  <SelectItem value="la">Los Angeles</SelectItem>
                </SelectContent>
              </Select>

              <Button>
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>

          {/* <div>
            <Button variant="outline" className="w-full">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div> */}
        </div>

        {/* Results */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Recommended Jobs</h2>
              <p className="text-gray-600 font-semibold">
                {mockJobs.length} <span className="font-normal">jobs found</span>
              </p>
            </div>

            {mockJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex space-x-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">{job.logo}</div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <CardTitle className="text-xl">{job.title}</CardTitle>
                          <Badge className="bg-green-100 text-green-800">
                            <Star className="h-3 w-3 mr-1" />
                            {job.matchScore}% Match
                          </Badge>
                        </div>
                        <p className="text-gray-600 font-medium">{job.company}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mt-2">
                          <span className="flex items-center space-x-1">
                            <MapPin className="h-3 w-3" />
                            <span>{job.location}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Briefcase className="h-3 w-3" />
                            <span>{job.type}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{job.posted}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-lg">{job.salary}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-1">
                      {job.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <Button>Apply Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Job Alerts</CardTitle>
                <CardDescription>Get notified of new matching jobs</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Create Job Alert</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Searches</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer">Frontend Developer</p>
                <p className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer">React Jobs</p>
                <p className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer">Remote TypeScript</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Career Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  Resume Tips
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Interview Prep
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Salary Insights
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSearch;
