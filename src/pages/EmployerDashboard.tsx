import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import {
  Search,
  Filter,
  Plus,
  MessageSquare,
  Eye,
  Star,
  MapPin,
  Calendar,
  Users,
  TrendingUp,
  FileText,
  Code,
  Palette,
  Database,
  Bell,
  User,
  Briefcase,
  Target,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";

const EmployerDashboard = () => {
  const [experienceRange, setExperienceRange] = useState([2, 8]);
  const [selectedRole, setSelectedRole] = useState("all");

  const mockCandidates = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Senior Frontend Developer",
      experience: "5 years",
      location: "San Francisco, CA",
      matchScore: 96,
      skills: ["React", "TypeScript", "Next.js", "GraphQL"],
      availability: "2 weeks notice",
      portfolio: true,
      salary: "$140k - $160k",
      avatar: "SC",
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Full Stack Engineer",
      experience: "7 years",
      location: "Remote",
      matchScore: 91,
      skills: ["Node.js", "React", "MongoDB", "AWS"],
      availability: "Immediately",
      portfolio: true,
      salary: "$130k - $150k",
      avatar: "MR",
    },
    {
      id: 3,
      name: "Jessica Kim",
      role: "UI/UX Developer",
      experience: "4 years",
      location: "New York, NY",
      matchScore: 88,
      skills: ["Figma", "React", "CSS", "Design Systems"],
      availability: "1 month notice",
      portfolio: true,
      salary: "$110k - $130k",
      avatar: "JK",
    },
  ];

  const mockJobPostings = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      applications: 45,
      status: "Active",
      postedDate: "2024-01-10",
      newApplicants: 8,
    },
    {
      id: 2,
      title: "Backend Engineer",
      applications: 32,
      status: "Active",
      postedDate: "2024-01-08",
      newApplicants: 5,
    },
    {
      id: 3,
      title: "Product Designer",
      applications: 28,
      status: "Draft",
      postedDate: "2024-01-12",
      newApplicants: 0,
    },
  ];

  const roleCategories = [
    { id: "all", name: "All Roles", count: 245 },
    { id: "frontend", name: "Frontend", count: 89, icon: Code },
    { id: "backend", name: "Backend", count: 76, icon: Database },
    { id: "fullstack", name: "Full Stack", count: 52, icon: Briefcase },
    { id: "uiux", name: "UI/UX", count: 28, icon: Palette },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">TC</span>
              </div>
              <span className="text-xl font-semibold">TalentCanvas</span>
            </Link>
            <Badge className="bg-green-100 text-green-800">Employer</Badge>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/employer" className="text-gray-600 hover:text-blue-600">
              Dashboard
            </Link>
            <Link to="/candidates" className="text-gray-600 hover:text-blue-600">
              Candidates
            </Link>
            <Link to="/job-postings" className="text-gray-600 hover:text-blue-600">
              Job Postings
            </Link>
            <Link to="/messages">
              <MessageSquare className="h-5 w-5 text-gray-600 cursor-pointer hover:text-blue-600" />
            </Link>
            <Bell className="h-5 w-5 text-gray-600 cursor-pointer hover:text-blue-600" />
          </nav>
          <div className="flex items-center space-x-3">
            <Button asChild>
              <Link to="/job-postings">
                <Plus className="h-4 w-4 mr-2" />
                Post New Job
              </Link>
            </Button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <User className="h-4 w-4" />
              </div>
              <span className="text-sm">TechCorp HR</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Filters */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Filter className="h-5 w-5 mr-2" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Role Categories */}
                <div>
                  <h4 className="font-medium mb-3">Role Categories</h4>
                  <div className="space-y-2">
                    {roleCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedRole(category.id)}
                        className={`w-full flex items-center justify-between p-2 rounded-lg text-left transition-colors ${
                          selectedRole === category.id ? "bg-blue-100 text-blue-800" : "hover:bg-gray-100"
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          {category.icon && <category.icon className="h-4 w-4" />}
                          <span className="text-sm">{category.name}</span>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {category.count}
                        </Badge>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Experience Range */}
                <div>
                  <h4 className="font-medium mb-3">Years of Experience</h4>
                  <div className="space-y-3">
                    <Slider value={experienceRange} onValueChange={setExperienceRange} max={15} min={0} step={1} className="w-full" />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{experienceRange[0]} years</span>
                      <span>{experienceRange[1]} years</span>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div>
                  <h4 className="font-medium mb-3">Location</h4>
                  <Input placeholder="City, State or Remote" />
                </div>

                {/* Availability */}
                <div>
                  <h4 className="font-medium mb-3">Availability</h4>
                  <div className="space-y-2">
                    {["Immediately", "2 weeks notice", "1 month notice"].map((avail) => (
                      <label key={avail} className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">{avail}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Search Bar */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex space-x-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input placeholder="Search for candidates by skills, role, or company..." className="pl-10" />
                  </div>
                  <Button>Search</Button>
                </div>
              </CardContent>
            </Card>

            {/* Analytics Overview */}
            <div className="grid md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-2">
                    <Briefcase className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-2xl font-bold">12</p>
                      <p className="text-sm text-gray-600">Active Job Postings</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="text-2xl font-bold">245</p>
                      <p className="text-sm text-gray-600">New Applicants</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-2">
                    <Eye className="h-5 w-5 text-purple-600" />
                    <div>
                      <p className="text-2xl font-bold">1.2k</p>
                      <p className="text-sm text-gray-600">Candidates Viewed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-orange-600" />
                    <div>
                      <p className="text-2xl font-bold">28</p>
                      <p className="text-sm text-gray-600">Interviews Scheduled</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Candidate Results */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Best Fit Candidates</CardTitle>
                    <CardDescription>Ranked by AI matching algorithm</CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary">245 matches</Badge>
                    <Button variant="outline" size="sm">
                      Sort by Match
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockCandidates.map((candidate) => (
                  <div key={candidate.id} className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {candidate.avatar}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-semibold text-lg">{candidate.name}</h3>
                        <Badge className="bg-green-100 text-green-800">
                          <Star className="h-3 w-3 mr-1" />
                          {candidate.matchScore}% Match
                        </Badge>
                        {candidate.portfolio && (
                          <Badge variant="outline">
                            <Eye className="h-3 w-3 mr-1" />
                            Portfolio
                          </Badge>
                        )}
                      </div>

                      <p className="text-gray-600 font-medium">{candidate.role}</p>

                      <div className="flex items-center space-x-4 text-sm text-gray-500 mt-2">
                        <span>{candidate.experience} experience</span>
                        <span className="flex items-center space-x-1">
                          <MapPin className="h-3 w-3" />
                          <span>{candidate.location}</span>
                        </span>
                        <span className="text-green-600">Available: {candidate.availability}</span>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex space-x-1">
                          {candidate.skills.slice(0, 4).map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                          {candidate.skills.length > 4 && (
                            <Badge variant="outline" className="text-xs">
                              +{candidate.skills.length - 4} more
                            </Badge>
                          )}
                        </div>
                        <span className="text-sm font-medium text-gray-700">{candidate.salary}</span>
                      </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                      <Button size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View Profile
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <Link to="/messages">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Message
                        </Link>
                      </Button>
                      <Button size="sm" variant="outline">
                        <Heart className="h-4 w-4 mr-2" />
                        Shortlist
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Job Postings */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Your Job Postings</CardTitle>
                  <Button size="sm" asChild>
                    <Link to="/job-postings">
                      <Plus className="h-4 w-4 mr-2" />
                      Post New Job
                    </Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockJobPostings.map((job) => (
                    <div key={job.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{job.title}</h4>
                        <p className="text-sm text-gray-600">Posted on {job.postedDate}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <p className="text-lg font-semibold">{job.applications}</p>
                          <p className="text-xs text-gray-500">Applications</p>
                        </div>
                        {job.newApplicants > 0 && <Badge className="bg-orange-100 text-orange-800">+{job.newApplicants} new</Badge>}
                        <Badge variant={job.status === "Active" ? "default" : "secondary"}>{job.status}</Badge>
                        <Button size="sm" variant="outline" asChild>
                          <Link to="/job-postings">
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboard;
