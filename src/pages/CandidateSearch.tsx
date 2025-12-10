import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Search, Filter, MessageSquare, Eye, Star, MapPin, Heart, Code, Database, Palette, Briefcase, Download } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/images/logo.png";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const CandidateSearch = () => {
  const [experienceRange, setExperienceRange] = useState([2, 8]);
  const [selectedRole, setSelectedRole] = useState("all");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const mockCandidates = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Senior Frontend Developer",
      experience: "5 years",
      location: "San Francisco, CA",
      matchScore: 96,
      skills: ["React", "TypeScript", "Next.js", "GraphQL", "Node.js"],
      availability: "2 weeks notice",
      portfolio: true,
      salary: "$140k - $160k",
      avatar: "SC",
      summary: "Passionate frontend developer with expertise in React ecosystem and modern web technologies.",
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Full Stack Engineer",
      experience: "7 years",
      location: "Remote",
      matchScore: 91,
      skills: ["Node.js", "React", "MongoDB", "AWS", "Python"],
      availability: "Immediately",
      portfolio: true,
      salary: "$130k - $150k",
      avatar: "MR",
      summary: "Experienced full-stack engineer with strong backend and cloud infrastructure skills.",
    },
    {
      id: 3,
      name: "Jessica Kim",
      role: "UI/UX Developer",
      experience: "4 years",
      location: "New York, NY",
      matchScore: 88,
      skills: ["Figma", "React", "CSS", "Design Systems", "JavaScript"],
      availability: "1 month notice",
      portfolio: true,
      salary: "$110k - $130k",
      avatar: "JK",
      summary: "Creative UI/UX developer bridging design and development with attention to detail.",
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
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <img src={logo} alt="Logo image" loading="lazy" className="h-24 object-contain" />
            </div>
          </Link>

          <nav className="flex items-center space-x-6">
            {!isAuthenticated ? (
              <Button asChild className="gradient-primary border-0">
                <Link to="/sign-up">Get Started Free</Link>
              </Button>
            ) : (
              <>
                <Avatar>
                  <AvatarImage src=""></AvatarImage>
                </Avatar>
              </>
            )}
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Find Candidates</h1>
          <p className="text-gray-600">Search and discover top tech talent for your team</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
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

                {/* Skills */}
                <div>
                  <h4 className="font-medium mb-3">Required Skills</h4>
                  <Input placeholder="e.g. React, Node.js" />
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
                    <Input placeholder="Search candidates by name, skills, or experience..." className="pl-10" />
                  </div>
                  <Button>Search</Button>
                </div>
              </CardContent>
            </Card>

            {/* Results Header */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">Best Fit Candidates</h2>
                <p className="text-gray-600">Showing {mockCandidates.length} of 245 candidates</p>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  Sort by Match
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>

            {/* Candidate Cards */}
            <div className="space-y-6">
              {mockCandidates.map((candidate) => (
                <Card key={candidate.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                        {candidate.avatar}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="font-semibold text-xl text-gray-900">{candidate.name}</h3>
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
                            <p className="text-lg font-medium text-gray-700 mb-1">{candidate.role}</p>
                            <p className="text-gray-600 mb-3">{candidate.summary}</p>
                          </div>
                          <div className="text-right flex-shrink-0 ml-4">
                            <p className="font-semibold text-lg">{candidate.salary}</p>
                            <p className="text-sm text-gray-500">Expected salary</p>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span className="flex items-center space-x-1">
                              <Briefcase className="h-4 w-4" />
                              <span>{candidate.experience} experience</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>{candidate.location}</span>
                            </span>
                          </div>
                          <div className="text-right">
                            <span className="text-sm text-green-600 font-medium">Available: {candidate.availability}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {candidate.skills.slice(0, 5).map((skill) => (
                              <Badge key={skill} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                            {candidate.skills.length > 5 && (
                              <Badge variant="outline" className="text-xs">
                                +{candidate.skills.length - 5} more
                              </Badge>
                            )}
                          </div>

                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Heart className="h-4 w-4 mr-2" />
                              Shortlist
                            </Button>
                            <Button size="sm" variant="outline" asChild>
                              <Link to="/messages">
                                <MessageSquare className="h-4 w-4 mr-2" />
                                Message
                              </Link>
                            </Button>
                            <Button size="sm">
                              <Eye className="h-4 w-4 mr-2" />
                              View Full Profile
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center">
              <Button variant="outline">Load More Candidates</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateSearch;
