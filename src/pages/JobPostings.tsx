
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Eye, Edit, Users, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const JobPostings = () => {
  const [activeTab, setActiveTab] = useState("active");

  const mockJobPostings = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      applications: 45,
      status: "Active",
      postedDate: "2024-01-10",
      newApplicants: 8,
      description: "We're looking for an experienced frontend developer to join our team..."
    },
    {
      id: 2,
      title: "Backend Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      applications: 32,
      status: "Active",
      postedDate: "2024-01-08",
      newApplicants: 5,
      description: "Join our backend team to build scalable APIs and services..."
    },
    {
      id: 3,
      title: "Product Designer",
      department: "Design",
      location: "New York, NY",
      type: "Contract",
      applications: 28,
      status: "Draft",
      postedDate: "2024-01-12",
      newApplicants: 0,
      description: "Help us create beautiful and intuitive user experiences..."
    }
  ];

  const filterJobs = (status: string) => {
    if (status === "all") return mockJobPostings;
    return mockJobPostings.filter(job => job.status.toLowerCase() === status);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">TC</span>
            </div>
            <span className="text-xl font-semibold">TalentCanvas</span>
          </Link>
          <nav className="flex items-center space-x-6">
            <Link to="/employer" className="text-blue-600 font-medium">Back to Dashboard</Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Job Postings</h1>
            <p className="text-gray-600">Manage your open positions and track applications</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Post New Job
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList>
            <TabsTrigger value="active">Active ({filterJobs("active").length})</TabsTrigger>
            <TabsTrigger value="draft">Drafts ({filterJobs("draft").length})</TabsTrigger>
            <TabsTrigger value="closed">Closed (0)</TabsTrigger>
            <TabsTrigger value="create">Create New</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-6">
            <div className="grid gap-6">
              {filterJobs("active").map((job) => (
                <Card key={job.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <CardTitle className="text-xl">{job.title}</CardTitle>
                          <Badge className="bg-green-100 text-green-800">{job.status}</Badge>
                          {job.newApplicants > 0 && (
                            <Badge className="bg-orange-100 text-orange-800">
                              +{job.newApplicants} new
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>{job.department}</span>
                          <span className="flex items-center space-x-1">
                            <MapPin className="h-3 w-3" />
                            <span>{job.location}</span>
                          </span>
                          <span>{job.type}</span>
                          <span className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>Posted {job.postedDate}</span>
                          </span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          Preview
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="md:col-span-2">
                        <p className="text-gray-600 mb-4">{job.description}</p>
                      </div>
                      <div className="space-y-4">
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                          <div className="flex items-center justify-center space-x-2 mb-2">
                            <Users className="h-5 w-5 text-blue-600" />
                            <span className="text-2xl font-bold text-blue-600">{job.applications}</span>
                          </div>
                          <p className="text-sm text-gray-600">Total Applications</p>
                        </div>
                        <Button className="w-full">
                          View Applications
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="draft" className="space-y-6">
            <div className="grid gap-6">
              {filterJobs("draft").map((job) => (
                <Card key={job.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <CardTitle className="text-xl">{job.title}</CardTitle>
                          <Badge variant="secondary">{job.status}</Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>{job.department}</span>
                          <span className="flex items-center space-x-1">
                            <MapPin className="h-3 w-3" />
                            <span>{job.location}</span>
                          </span>
                          <span>{job.type}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm">
                          <Edit className="h-4 w-4 mr-2" />
                          Continue Editing
                        </Button>
                        <Button variant="outline" size="sm">
                          Publish
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{job.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="closed" className="space-y-6">
            <div className="text-center py-12">
              <h3 className="text-lg font-semibold mb-2">No Closed Job Postings</h3>
              <p className="text-gray-600">Closed job postings will appear here</p>
            </div>
          </TabsContent>

          <TabsContent value="create" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Create New Job Posting</CardTitle>
                <CardDescription>Fill out the details for your new job posting</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Job Title</label>
                    <Input placeholder="e.g. Senior Frontend Developer" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Department</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="engineering">Engineering</SelectItem>
                        <SelectItem value="design">Design</SelectItem>
                        <SelectItem value="product">Product</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Location</label>
                    <Input placeholder="e.g. San Francisco, CA" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Job Type</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full-time">Full-time</SelectItem>
                        <SelectItem value="part-time">Part-time</SelectItem>
                        <SelectItem value="contract">Contract</SelectItem>
                        <SelectItem value="internship">Internship</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Experience Level</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="entry">Entry Level</SelectItem>
                        <SelectItem value="mid">Mid Level</SelectItem>
                        <SelectItem value="senior">Senior Level</SelectItem>
                        <SelectItem value="lead">Lead/Principal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Job Description</label>
                  <Textarea 
                    placeholder="Describe the role, responsibilities, and what you're looking for..."
                    className="min-h-[150px]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Requirements</label>
                  <Textarea 
                    placeholder="List the required skills, experience, and qualifications..."
                    className="min-h-[100px]"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Salary Range (Optional)</label>
                    <Input placeholder="e.g. $120k - $160k" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Application Deadline</label>
                    <Input type="date" />
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button>Publish Job</Button>
                  <Button variant="outline">Save as Draft</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default JobPostings;
