import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Eye, Database, Bell, UserCheck } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Privacy = () => {
  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: [
        "Account information (name, email, password)",
        "Profile data (resume, skills, work history)",
        "Usage data (how you interact with our platform)",
        "Communication data (messages sent through our platform)"
      ]
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        "To provide and improve our job matching services",
        "To connect candidates with employers",
        "To send relevant job recommendations",
        "To analyze and improve our AI algorithms"
      ]
    },
    {
      icon: UserCheck,
      title: "Information Sharing",
      content: [
        "With employers when you apply to their jobs",
        "With service providers who help us operate",
        "When required by law or legal process",
        "With your explicit consent"
      ]
    },
    {
      icon: Lock,
      title: "Data Security",
      content: [
        "End-to-end encryption for all sensitive data",
        "Regular security audits and penetration testing",
        "SOC 2 Type II certified infrastructure",
        "GDPR and CCPA compliant practices"
      ]
    },
    {
      icon: Bell,
      title: "Your Rights",
      content: [
        "Access and download your personal data",
        "Request correction of inaccurate data",
        "Delete your account and associated data",
        "Opt-out of marketing communications"
      ]
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
              <Shield className="h-4 w-4 mr-2" />
              Privacy Policy
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Your Privacy Matters
            </h1>
            <p className="text-xl text-muted-foreground">
              We're committed to protecting your personal information and being transparent about how we use it.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: January 15, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="mb-8 border-primary/20 bg-primary/5">
            <CardContent className="pt-6">
              <p className="text-lg">
                At TalentCanvas, we believe in transparency and respect for your privacy. This policy explains 
                how we collect, use, and protect your personal information when you use our platform.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <section.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold mb-4">{section.title}</h2>
                      <ul className="space-y-2">
                        {section.content.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8">
            <CardContent className="pt-6">
              <h2 className="text-xl font-bold mb-4">Contact Us About Privacy</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="font-medium">TalentCanvas Privacy Team</p>
                <p className="text-muted-foreground">privacy@talentcanvas.com</p>
                <p className="text-muted-foreground">123 Tech Street, San Francisco, CA 94102</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
