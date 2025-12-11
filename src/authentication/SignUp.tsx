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

// Firebase imports
import { auth, db } from "@/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

// Import your types
import { CandidateData, EmployerData, UserData } from "@/types/firebase";
import { toast } from "sonner";
import { SignUpContent } from "./authSides";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [activeTab, setActiveTab] = useState("candidate");
  const navigate = useNavigate();

  // Form states with proper typing
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

    // Determine which form to use based on active tab
    const isCandidate = activeTab === "candidate";
    const formData = isCandidate ? candidateForm : employerForm;

    // Basic validation for common fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      toast.error("Please fill in all required fields");
      setIsLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      setIsLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      setIsLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      setIsLoading(false);
      return;
    }

    try {
      // Show loading toast
      const loadingToast = toast.loading("Creating your account...");

      // 1. Create user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);

      const user = userCredential.user;

      // 2. Create UserData object
      const userData: UserData = {
        uid: user.uid,
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        role: isCandidate ? "candidate" : "employer",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        profileComplete: false,
        onboardingCompleted: false,
        authProviders: ["email"],
      };

      // 3. Save user data to Firestore
      await setDoc(doc(db, "users", user.uid), userData);

      // 4. Save role-specific data
      if (isCandidate) {
        // Create candidate data using your interface
        const candidateData: CandidateData = {
          userId: user.uid,
          firstName: candidateForm.firstName,
          lastName: candidateForm.lastName,
          email: candidateForm.email,
          currentJobTitle: candidateForm.currentJobTitle || "",
          experienceYears: candidateForm.experienceYears ? parseInt(candidateForm.experienceYears) : 0,
          skills: candidateForm.skills
            ? candidateForm.skills
                .split(",")
                .map((skill) => skill.trim())
                .filter((skill) => skill)
            : [],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          applications: [],
          savedJobs: [],
          profileImage: "",
          resumeUrl: "",
          location: "",
          phoneNumber: "",
          onboardingCompleted: false,
        };

        await setDoc(doc(db, "candidates", user.uid), candidateData);
      } else {
        // Create employer data using your interface
        const employerData: EmployerData = {
          userId: user.uid,
          firstName: employerForm.firstName,
          lastName: employerForm.lastName,
          email: employerForm.email,
          companyName: employerForm.companyName || "",
          companySize: employerForm.companySize || "",
          industry: employerForm.industry || "",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          jobsPosted: [],
          companyLogo: "",
          website: "",
          description: "",
          phoneNumber: "",
          onboardingCompleted: false,
        };

        await setDoc(doc(db, "employers", user.uid), employerData);
      }

      // 5. Update local storage
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userRole", isCandidate ? "candidate" : "employer");
      localStorage.setItem("userId", user.uid);
      localStorage.setItem("userEmail", formData.email);
      localStorage.setItem("userName", `${formData.firstName} ${formData.lastName}`);

      // 6. Update toast and navigate
      toast.dismiss(loadingToast);
      toast.success("Account created successfully!");

      setIsLoading(false);
      setShowLoader(true);

      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } catch (error: unknown) {
      console.error("Sign up error:", error);

      // Handle specific Firebase errors
      let errorMessage = "An error occurred during sign up. Please try again.";

      if (typeof error === "object" && error !== null && "code" in error) {
        const errorCode = (error as { code: string }).code;
        switch (errorCode) {
          case "auth/email-already-in-use":
            errorMessage = "Email is already in use. Please sign in instead.";
            break;
          case "auth/invalid-email":
            errorMessage = "Invalid email address.";
            break;
          case "auth/weak-password":
            errorMessage = "Password is too weak. Please choose a stronger password.";
            break;
          case "auth/network-request-failed":
            errorMessage = "Network error. Please check your connection.";
            break;
          case "auth/operation-not-allowed":
            errorMessage = "Email/password accounts are not enabled. Please contact support.";
            break;
          case "auth/too-many-requests":
            errorMessage = "Too many requests. Please try again later.";
            break;
        }
      }

      toast.error(errorMessage);
      setIsLoading(false);
    }
  };

  if (showLoader) {
    return <Loader size="full" />;
  }

  return (
    <motion.div className="min-h-screen bg-background flex" initial="hidden" animate="visible" variants={signUpcontainerVariants}>
      {/* Left Side - Content */}
      <SignUpContent />

      {/* Right Side - Sign Up Form */}
      <motion.div className="w-full lg:w-1/2 flex items-center justify-center p-4 md:p-6 lg:p-8" variants={formVariants}>
        <div className="w-full max-w-xl lg:max-w-xl">
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
