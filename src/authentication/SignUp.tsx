import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Brain, Mail, Lock, User, Building, Eye, EyeOff, Sparkles, Briefcase, GraduationCap } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import logo from "@/assets/images/logo.png";
import { motion } from "framer-motion";
import Loader from "@/components/ui/loader";
import { formVariants, leftPanelVariants, signUpcontainerVariants } from "@/lib/animations";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [activeTab, setActiveTab] = useState("candidate");
  const navigate = useNavigate();

  // Form states
  const [candidateForm, setCandidateForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    currentJobTitle: "",
    experienceYears: "",
    skills: "",
  });

  const [employerForm, setEmployerForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    companyName: "",
    companySize: "",
    industry: "",
  });

  const handleCandidateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setCandidateForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleEmployerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setEmployerForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSignUp = async () => {
    setIsLoading(true);

    // Prepare form data based on active tab
    const formData = activeTab === "candidate" ? candidateForm : employerForm;

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      setIsLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setIsLoading(false);
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setShowLoader(true);
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("userRole", activeTab);

    setTimeout(() => {
      navigate("/home");
    }, 3000);
  };

  if (showLoader) {
    return <Loader size="full" />;
  }

  return (
    <motion.div className="min-h-screen bg-background flex" initial="hidden" animate="visible" variants={signUpcontainerVariants}>
      {/* Left Side - Content */}
      <motion.div
        className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary/20 to-secondary/20 p-8 lg:p-12 flex-col justify-between relative overflow-hidden"
        variants={leftPanelVariants}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4 lg:mb-6">
            <div className="w-10 h-10 lg:w-12 lg:h-12 gradient-primary rounded-xl flex items-center justify-center">
              <img src={logo} alt="Logo image" loading="lazy" className="h-16 lg:h-24 object-contain" />
            </div>
            <h1 className="text-xl lg:text-2xl font-bold">TalentCanvas</h1>
          </div>

          <div className="max-w-md">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4">
              Join the future of
              <span className="gradient-text bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> hiring</span>
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground mb-6 lg:mb-8">
              Whether you're looking for your next role or searching for top talent, TalentCanvas is built for you.
            </p>

            {/* Features List */}
            <div className="space-y-4 lg:space-y-6">
              <div className="p-3 lg:p-4 rounded-lg bg-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-2 lg:mb-3">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <GraduationCap className="h-4 w-4" />
                  </div>
                  <h3 className="font-semibold text-sm">For Candidates</h3>
                </div>
                <ul className="space-y-1 lg:space-y-2 pl-9 lg:pl-11">
                  <li className="text-xs lg:text-sm">AI-powered job matching</li>
                  <li className="text-xs lg:text-sm">Personalized career coaching</li>
                  <li className="text-xs lg:text-sm">Direct access to top companies</li>
                </ul>
              </div>

              <div className="p-3 lg:p-4 rounded-lg bg-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-2 lg:mb-3">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <Briefcase className="h-4 w-4" />
                  </div>
                  <h3 className="font-semibold text-sm">For Employers</h3>
                </div>
                <ul className="space-y-1 lg:space-y-2 pl-9 lg:pl-11">
                  <li className="text-xs lg:text-sm">AI-powered candidate screening</li>
                  <li className="text-xs lg:text-sm">Access to verified talent pool</li>
                  <li className="text-xs lg:text-sm">Reduced time-to-hire</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-4 lg:gap-8 justify-between mt-8 lg:mt-12">
          <div className="text-center">
            <div className="text-lg lg:text-2xl font-bold gradient-text">98%</div>
            <div className="text-xs lg:text-sm text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-lg lg:text-2xl font-bold gradient-text">3x</div>
            <div className="text-xs lg:text-sm text-muted-foreground">Faster Hiring</div>
          </div>
          <div className="text-center">
            <div className="text-lg lg:text-2xl font-bold gradient-text">50%</div>
            <div className="text-xs lg:text-sm text-muted-foreground">Less Bias</div>
          </div>
        </div>
      </motion.div>

      {/* Right Side - Sign Up Form */}
      <motion.div className="w-full lg:w-1/2 flex items-center justify-center p-4 md:p-6 lg:p-8" variants={formVariants}>
        <div className="w-full max-w-md lg:max-w-xl">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-4">
            <div className="w-12 h-12 lg:w-16 lg:h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <img src={logo} alt="Logo image" loading="lazy" className="h-16 lg:h-24 object-contain" />
            </div>
            <Badge className="gradient-primary text-primary-foreground border-0 px-2 py-1 text-xs lg:text-sm">
              <Sparkles className="h-2 w-2 lg:h-3 lg:w-3 mr-1" />
              AI-Powered Recruitment
            </Badge>
          </div>

          <Card className="border-2 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-xl lg:text-2xl">Create Account</CardTitle>
              <CardDescription className="text-sm lg:text-base">Choose your role and join our community</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 lg:space-y-4 md:p-6 p-3">
              <Tabs defaultValue="candidate" className="w-full" onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2 mb-4 lg:mb-6">
                  <TabsTrigger value="candidate" className="flex items-center gap-1 lg:gap-2 text-xs lg:text-sm">
                    <GraduationCap className="h-4 w-4" />
                    Candidate
                  </TabsTrigger>
                  <TabsTrigger value="employer" className="flex items-center gap-1 lg:gap-2 text-xs lg:text-sm">
                    <Briefcase className="h-4 w-4" />
                    Employer
                  </TabsTrigger>
                </TabsList>

                {/* Candidate Form */}
                <TabsContent value="candidate" className="space-y-3 lg:space-y-4">
                  <div className="grid grid-cols-2 gap-3 lg:gap-4">
                    <div className="space-y-1 lg:space-y-2">
                      <Label htmlFor="firstName" className="text-xs lg:text-sm">
                        First Name *
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="firstName"
                          placeholder="John"
                          className="pl-8 lg:pl-10 text-sm lg:text-base"
                          value={candidateForm.firstName}
                          onChange={handleCandidateChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-1 lg:space-y-2">
                      <Label htmlFor="lastName" className="text-xs lg:text-sm">
                        Last Name *
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          className="pl-8 lg:pl-10 text-sm lg:text-base"
                          value={candidateForm.lastName}
                          onChange={handleCandidateChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1 lg:space-y-2">
                    <Label htmlFor="email" className="text-xs lg:text-sm">
                      Email *
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="pl-8 lg:pl-10 text-sm lg:text-base"
                        value={candidateForm.email}
                        onChange={handleCandidateChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1 lg:space-y-2">
                    <Label htmlFor="currentJobTitle" className="text-xs lg:text-sm">
                      Current Job Title
                    </Label>
                    <Input
                      id="currentJobTitle"
                      placeholder="e.g., Software Engineer"
                      className="text-sm lg:text-base"
                      value={candidateForm.currentJobTitle}
                      onChange={handleCandidateChange}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3 lg:gap-4">
                    <div className="space-y-1 lg:space-y-2">
                      <Label htmlFor="experienceYears" className="text-xs lg:text-sm">
                        Years of Experience
                      </Label>
                      <Input
                        id="experienceYears"
                        type="number"
                        placeholder="e.g., 3"
                        min="0"
                        className="text-sm lg:text-base"
                        value={candidateForm.experienceYears}
                        onChange={handleCandidateChange}
                      />
                    </div>
                    <div className="space-y-1 lg:space-y-2">
                      <Label htmlFor="skills" className="text-xs lg:text-sm">
                        Top Skills
                      </Label>
                      <Input
                        id="skills"
                        placeholder="e.g., React, Node.js, Python"
                        className="text-sm lg:text-base"
                        value={candidateForm.skills}
                        onChange={handleCandidateChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-1 lg:space-y-2">
                    <Label htmlFor="password" className="text-xs lg:text-sm">
                      Password *
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        className="pl-8 lg:pl-10 pr-8 lg:pr-10 text-sm lg:text-base"
                        value={candidateForm.password}
                        onChange={handleCandidateChange}
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-1 lg:space-y-2">
                    <Label htmlFor="confirmPassword" className="text-xs lg:text-sm">
                      Confirm Password *
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        className="pl-8 lg:pl-10 pr-8 lg:pr-10 text-sm lg:text-base"
                        value={candidateForm.confirmPassword}
                        onChange={handleCandidateChange}
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                </TabsContent>

                {/* Employer Form */}
                <TabsContent value="employer" className="space-y-3 lg:space-y-4">
                  <div className="grid grid-cols-2 gap-3 lg:gap-4">
                    <div className="space-y-1 lg:space-y-2">
                      <Label htmlFor="firstName" className="text-xs lg:text-sm">
                        First Name *
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="firstName"
                          placeholder="John"
                          className="pl-8 lg:pl-10 text-sm lg:text-base"
                          value={employerForm.firstName}
                          onChange={handleEmployerChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-1 lg:space-y-2">
                      <Label htmlFor="lastName" className="text-xs lg:text-sm">
                        Last Name *
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          className="pl-8 lg:pl-10 text-sm lg:text-base"
                          value={employerForm.lastName}
                          onChange={handleEmployerChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1 lg:space-y-2">
                    <Label htmlFor="email" className="text-xs lg:text-sm">
                      Work Email *
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        className="pl-8 lg:pl-10 text-sm lg:text-base"
                        value={employerForm.email}
                        onChange={handleEmployerChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1 lg:space-y-2">
                    <Label htmlFor="companyName" className="text-xs lg:text-sm">
                      Company Name *
                    </Label>
                    <Input
                      id="companyName"
                      placeholder="e.g., TechCorp Inc."
                      className="text-sm lg:text-base"
                      value={employerForm.companyName}
                      onChange={handleEmployerChange}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3 lg:gap-4">
                    <div className="space-y-1 lg:space-y-2">
                      <Label htmlFor="companySize" className="text-xs lg:text-sm">
                        Company Size
                      </Label>
                      <Input
                        id="companySize"
                        placeholder="e.g., 50-100 employees"
                        className="text-sm lg:text-base"
                        value={employerForm.companySize}
                        onChange={handleEmployerChange}
                      />
                    </div>
                    <div className="space-y-1 lg:space-y-2">
                      <Label htmlFor="industry" className="text-xs lg:text-sm">
                        Industry
                      </Label>
                      <Input
                        id="industry"
                        placeholder="e.g., Technology"
                        className="text-sm lg:text-base"
                        value={employerForm.industry}
                        onChange={handleEmployerChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-1 lg:space-y-2">
                    <Label htmlFor="password" className="text-xs lg:text-sm">
                      Password *
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        className="pl-8 lg:pl-10 pr-8 lg:pr-10 text-sm lg:text-base"
                        value={employerForm.password}
                        onChange={handleEmployerChange}
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-1 lg:space-y-2">
                    <Label htmlFor="confirmPassword" className="text-xs lg:text-sm">
                      Confirm Password *
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        className="pl-8 lg:pl-10 pr-8 lg:pr-10 text-sm lg:text-base"
                        value={employerForm.confirmPassword}
                        onChange={handleEmployerChange}
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <Button className="w-full gradient-primary border-0 mt-4 lg:mt-6 text-sm lg:text-base" onClick={handleSignUp} disabled={isLoading}>
                {isLoading ? (
                  <>
                    <div className="animate-spin border-t-2 rounded-full p-2 lg:p-3"></div>
                  </>
                ) : (
                  <>Create Account</>
                )}
              </Button>

              <div className="text-center mt-3 lg:mt-4">
                <p className="text-xs lg:text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link to="/sign-in" className="text-primary hover:underline font-medium">
                    Sign in here
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>

          <p className="text-center text-xs lg:text-sm text-muted-foreground mt-4 lg:mt-6">
            By continuing, you agree to our{" "}
            <a href="/terms" className="text-primary hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SignUp;
