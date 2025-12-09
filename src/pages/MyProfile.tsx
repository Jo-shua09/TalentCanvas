import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Upload, Plus, X, Edit } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const MyProfile = () => {
  const [profileCompletion] = useState(78);
  const [skills, setSkills] = useState(["React", "TypeScript", "Node.js", "MongoDB"]);
  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">TC</span>
            </div>
            <span className="text-xl font-semibold">TalentCanvas</span>
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
          <h1 className="text-3xl font-bold mb-2">My Profile</h1>
          <div className="flex items-center space-x-4">
            <p className="text-gray-600">Complete your profile to get better job matches</p>
            <div className="flex items-center space-x-2">
              <Progress value={profileCompletion} className="w-32" />
              <span className="text-sm font-medium">{profileCompletion}%</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Profile Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="basic" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="basic">Basic Info</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
              </TabsList>

              <TabsContent value="basic" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Basic Information</CardTitle>
                    <CardDescription>Update your personal details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">First Name</label>
                        <Input defaultValue="John" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Last Name</label>
                        <Input defaultValue="Doe" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input type="email" defaultValue="john.doe@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <Input type="tel" defaultValue="+1 (555) 123-4567" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Location</label>
                      <Input defaultValue="San Francisco, CA" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Professional Summary</label>
                      <Textarea
                        placeholder="Write a brief summary about yourself..."
                        className="min-h-[100px]"
                        defaultValue="Passionate full-stack developer with 5+ years of experience building scalable web applications..."
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="experience" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Work Experience</CardTitle>
                        <CardDescription>Add your work history</CardDescription>
                      </div>
                      <Button size="sm">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Experience
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-semibold">Senior Frontend Developer</h4>
                          <p className="text-gray-600">TechCorp Inc.</p>
                          <p className="text-sm text-gray-500">Jan 2022 - Present</p>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-sm text-gray-600">
                        Led development of React-based dashboard used by 10,000+ users daily. Improved application performance by 40% through code
                        optimization.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Education</CardTitle>
                        <CardDescription>Add your educational background</CardDescription>
                      </div>
                      <Button size="sm">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Education
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="border rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold">Bachelor of Science in Computer Science</h4>
                          <p className="text-gray-600">University of Technology</p>
                          <p className="text-sm text-gray-500">2018 - 2022</p>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="skills" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Technical Skills</CardTitle>
                    <CardDescription>Add your programming languages, frameworks, and tools</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex space-x-2">
                      <Input
                        placeholder="Add a skill..."
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && addSkill()}
                      />
                      <Button onClick={addSkill}>
                        <Plus className="h-4 w-4 mr-2" />
                        Add
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="flex items-center space-x-1">
                          <span>{skill}</span>
                          <button onClick={() => removeSkill(skill)}>
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="portfolio" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Portfolio & Projects</CardTitle>
                        <CardDescription>Showcase your best work</CardDescription>
                      </div>
                      <Button size="sm">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Project
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-semibold">E-commerce Dashboard</h4>
                          <p className="text-sm text-gray-500">React, TypeScript, Tailwind CSS</p>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        A comprehensive dashboard for managing online store operations with real-time analytics.
                      </p>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          View Live
                        </Button>
                        <Button variant="outline" size="sm">
                          GitHub
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Photo</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center mx-auto">
                  <User className="h-12 w-12 text-gray-500" />
                </div>
                <Button variant="outline" className="w-full">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Photo
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Resume/CV</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Drop your resume here or click to upload</p>
                </div>
                <Button className="w-full">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Resume
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Profile Visibility</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Profile Views This Week</span>
                  <Badge>23</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Recruiter Searches</span>
                  <Badge>8</Badge>
                </div>
                <Button variant="outline" className="w-full">
                  Boost Visibility
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-8 flex justify-end space-x-4">
          <Button variant="outline">Cancel</Button>
          <Button>Save Changes</Button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
