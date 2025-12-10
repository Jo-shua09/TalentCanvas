import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Users, Shield, AlertCircle, Scale, Clock } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="gradient-hero relative py-12 md:py-20 lg:py-12 px-4 overflow-hidden">
        {/* Background decoration */}
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />

        <div className="md:container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 gradient-primary text-primary-foreground border-0 px-4 py-2">
              <FileText className="h-4 w-4 mr-2" />
              Terms of Service
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Terms of Service</h1>
            <p className="text-xl text-muted-foreground">Please read these terms carefully before using TalentCanvas.</p>
            <p className="text-sm text-muted-foreground mt-4">Last updated: December 10, 2025</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4">
        <div className="md:container mx-auto max-w-4xl space-y-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Scale className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-4">Acceptance of Terms</h2>
                  <p className="text-muted-foreground">
                    By accessing or using TalentCanvas, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do
                    not use our platform.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-4">User Accounts</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• You must provide accurate and complete information when creating an account</li>
                    <li>• You are responsible for maintaining the security of your account</li>
                    <li>• You must be at least 18 years old to use our platform</li>
                    <li>• One person may not maintain more than one account</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-4">Acceptable Use</h2>
                  <p className="text-muted-foreground mb-4">You agree not to:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Post false, misleading, or fraudulent information</li>
                    <li>• Harass, abuse, or threaten other users</li>
                    <li>• Use the platform for any illegal purposes</li>
                    <li>• Attempt to gain unauthorized access to our systems</li>
                    <li>• Scrape or collect data from our platform without permission</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-4">Limitation of Liability</h2>
                  <p className="text-muted-foreground">
                    TalentCanvas is provided "as is" without warranties of any kind. We are not responsible for hiring decisions made by employers or
                    employment outcomes for candidates. We do not guarantee job placement or candidate quality.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-4">Termination</h2>
                  <p className="text-muted-foreground">
                    We reserve the right to suspend or terminate your account at any time for violations of these terms or for any other reason. You
                    may also delete your account at any time through your account settings.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="pt-6">
              <h2 className="text-xl font-bold mb-4">Questions?</h2>
              <p className="text-muted-foreground">
                If you have any questions about these Terms of Service, please contact us at{" "}
                <a href="mailto:legal@talentcanvas.com" className="text-primary hover:underline">
                  legal@talentcanvas.com
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
