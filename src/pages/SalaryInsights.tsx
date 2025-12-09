import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  DollarSign, 
  TrendingUp, 
  MapPin, 
  Briefcase,
  Search,
  Building2,
  ArrowUp,
  ArrowDown
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const SalaryInsights = () => {
  const salaryData = [
    {
      role: "Senior Frontend Developer",
      avgSalary: "$145,000",
      range: "$120,000 - $180,000",
      growth: "+8%",
      trending: "up"
    },
    {
      role: "Full Stack Engineer",
      avgSalary: "$155,000",
      range: "$125,000 - $195,000",
      growth: "+12%",
      trending: "up"
    },
    {
      role: "Backend Developer",
      avgSalary: "$140,000",
      range: "$115,000 - $175,000",
      growth: "+6%",
      trending: "up"
    },
    {
      role: "DevOps Engineer",
      avgSalary: "$160,000",
      range: "$130,000 - $200,000",
      growth: "+15%",
      trending: "up"
    },
    {
      role: "UI/UX Designer",
      avgSalary: "$115,000",
      range: "$90,000 - $150,000",
      growth: "+5%",
      trending: "up"
    },
    {
      role: "Data Engineer",
      avgSalary: "$165,000",
      range: "$135,000 - $210,000",
      growth: "+18%",
      trending: "up"
    }
  ];

  const topCompanies = [
    { name: "Google", avgSalary: "$185,000", employees: "156K" },
    { name: "Meta", avgSalary: "$178,000", employees: "77K" },
    { name: "Netflix", avgSalary: "$195,000", employees: "12K" },
    { name: "Stripe", avgSalary: "$172,000", employees: "8K" },
    { name: "Airbnb", avgSalary: "$168,000", employees: "6K" }
  ];

  const locationData = [
    { city: "San Francisco", multiplier: "1.2x", avgSalary: "$175,000" },
    { city: "New York", multiplier: "1.15x", avgSalary: "$165,000" },
    { city: "Seattle", multiplier: "1.1x", avgSalary: "$160,000" },
    { city: "Austin", multiplier: "1.0x", avgSalary: "$145,000" },
    { city: "Remote (US)", multiplier: "0.95x", avgSalary: "$140,000" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="gradient-hero py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 gradient-primary text-primary-foreground border-0 px-4 py-2">
              <DollarSign className="h-4 w-4 mr-2" />
              Salary Insights
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Know Your Worth in Tech
            </h1>
            <p className="text-xl text-muted-foreground">
              Get real salary data from thousands of tech professionals. Make informed decisions 
              about your career and compensation.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 px-4 -mt-8">
        <div className="container mx-auto">
          <Card>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <Input placeholder="Search job title..." className="h-12" />
                </div>
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sf">San Francisco</SelectItem>
                    <SelectItem value="ny">New York</SelectItem>
                    <SelectItem value="seattle">Seattle</SelectItem>
                    <SelectItem value="remote">Remote</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="h-12 gradient-primary border-0">
                  <Search className="h-5 w-5 mr-2" />
                  Search Salaries
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Salary Table */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold">Tech Salary Overview</h2>
              <p className="text-muted-foreground">Based on 50,000+ data points from our users</p>
            </div>
            <Badge variant="outline">Updated January 2024</Badge>
          </div>

          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-4 font-semibold">Role</th>
                      <th className="text-left p-4 font-semibold">Average Salary</th>
                      <th className="text-left p-4 font-semibold">Range</th>
                      <th className="text-left p-4 font-semibold">YoY Growth</th>
                    </tr>
                  </thead>
                  <tbody>
                    {salaryData.map((item, index) => (
                      <tr key={item.role} className={index % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                        <td className="p-4 font-medium">{item.role}</td>
                        <td className="p-4 text-lg font-semibold text-primary">{item.avgSalary}</td>
                        <td className="p-4 text-muted-foreground">{item.range}</td>
                        <td className="p-4">
                          <div className="flex items-center gap-1 text-green-600">
                            <ArrowUp className="h-4 w-4" />
                            {item.growth}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Top Companies & Location */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Top Companies */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Building2 className="h-6 w-6 text-primary" />
                  <div>
                    <CardTitle>Top Paying Companies</CardTitle>
                    <CardDescription>Average engineering salary</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {topCompanies.map((company, index) => (
                  <div key={company.name} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                        {index + 1}
                      </span>
                      <div>
                        <p className="font-semibold">{company.name}</p>
                        <p className="text-sm text-muted-foreground">{company.employees} employees</p>
                      </div>
                    </div>
                    <span className="text-lg font-bold text-primary">{company.avgSalary}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Location */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <CardTitle>Salary by Location</CardTitle>
                    <CardDescription>How location affects compensation</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {locationData.map((location) => (
                  <div key={location.city} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-semibold">{location.city}</p>
                      <p className="text-sm text-muted-foreground">Cost of living multiplier: {location.multiplier}</p>
                    </div>
                    <span className="text-lg font-bold text-primary">{location.avgSalary}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Insights</h2>
            <p className="text-muted-foreground">What the data tells us about tech compensation in 2024</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "AI/ML Premium",
                description: "Roles involving AI and machine learning command a 25-35% salary premium over similar positions.",
                stat: "+32%"
              },
              {
                icon: Briefcase,
                title: "Remote Impact",
                description: "Fully remote positions now pay 5-10% less than equivalent on-site roles in major tech hubs.",
                stat: "-8%"
              },
              {
                icon: DollarSign,
                title: "Equity Growth",
                description: "Stock compensation now accounts for 20-40% of total compensation at top tech companies.",
                stat: "30%"
              }
            ].map((insight) => (
              <Card key={insight.title} className="hover:shadow-lg transition-all">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                      <insight.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <span className="text-2xl font-bold text-primary">{insight.stat}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{insight.title}</h3>
                  <p className="text-muted-foreground">{insight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 gradient-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <DollarSign className="h-12 w-12 mx-auto mb-4 opacity-80" />
          <h2 className="text-3xl font-bold mb-4">Get Personalized Salary Insights</h2>
          <p className="text-xl opacity-80 mb-8 max-w-2xl mx-auto">
            Create your profile to see how your salary compares to others with similar experience and skills.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/candidate">See Your Salary Range</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SalaryInsights;
