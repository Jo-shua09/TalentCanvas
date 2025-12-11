import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Mail, Lock, Eye, EyeOff, Sparkles, Target, TrendingUp, Users, Clock, X } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import logo from "@/assets/images/logo.png";
import { motion } from "framer-motion";
import Loader from "@/components/ui/loader";
import { formVariants, leftPanelVariants, signUpcontainerVariants } from "@/lib/animations";
import ForgotPasswordModal from "./ForgotPasswordModal";
import { SignInContent } from "./authSides";

// Firebase imports
import { auth, db } from "@/lib/firebase";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { setDoc } from "firebase/firestore";
import { toast } from "sonner";

// Main SignIn Component
const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async () => {
    setIsLoading(true);

    // Validation
    if (!email || !password) {
      toast.error("Please enter both email and password");
      setIsLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      setIsLoading(false);
      return;
    }

    try {
      // Show loading toast
      const loadingToast = toast.loading("Signing in...");

      // 1. Sign in with Firebase Authentication
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // 2. Get user data from Firestore
      const userDoc = await getDoc(doc(db, "users", user.uid));

      if (userDoc.exists()) {
        const userData = userDoc.data();

        // 3. Get role-specific data
        if (userData.role === "candidate") {
          const candidateDoc = await getDoc(doc(db, "candidates", user.uid));
          if (candidateDoc.exists()) {
            localStorage.setItem("candidateData", JSON.stringify(candidateDoc.data()));
          }
        } else if (userData.role === "employer") {
          const employerDoc = await getDoc(doc(db, "employers", user.uid));
          if (employerDoc.exists()) {
            localStorage.setItem("employerData", JSON.stringify(employerDoc.data()));
          }
        }

        // 4. Save to localStorage
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("userRole", userData.role || "candidate");
        localStorage.setItem("userId", user.uid);
        localStorage.setItem("userEmail", user.email || "");
        localStorage.setItem("userName", `${userData.firstName} ${userData.lastName}`);
        localStorage.setItem("userData", JSON.stringify(userData));

        // 5. Success
        toast.dismiss(loadingToast);
        toast.success("Signed in successfully!");

        setIsLoading(false);
        setShowLoader(true);

        // 6. Redirect to home
        setTimeout(() => {
          navigate("/home");
        }, 2000);
      } else {
        toast.dismiss(loadingToast);
        toast.error("User data not found. Please contact support.");
        setIsLoading(false);
      }
    } catch (error: unknown) {
      const firebaseError = error as { code?: string };
      console.error("Sign in error:", error);

      // Handle specific Firebase errors
      let errorMessage = "An error occurred during sign in. Please try again.";

      switch (firebaseError.code) {
        case "auth/invalid-credential":
        case "auth/user-not-found":
        case "auth/wrong-password":
          errorMessage = "Invalid email or password";
          break;
        case "auth/user-disabled":
          errorMessage = "This account has been disabled";
          break;
        case "auth/network-request-failed":
          errorMessage = "Network error. Please check your connection";
          break;
        case "auth/too-many-requests":
          errorMessage = "Too many failed attempts. Please try again later";
          break;
        case "auth/invalid-email":
          errorMessage = "Invalid email address";
          break;
        case "auth/operation-not-allowed":
          errorMessage = "Email/password sign-in is not enabled";
          break;
      }

      toast.error(errorMessage);
      setIsLoading(false);
    }
  };

  // Google Sign In
  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check if user exists in Firestore
      const userDoc = await getDoc(doc(db, "users", user.uid));

      if (!userDoc.exists()) {
        // Create new user in Firestore
        const userName = user.displayName?.split(" ") || ["", ""];

        const userData = {
          uid: user.uid,
          email: user.email,
          firstName: userName[0] || "",
          lastName: userName[1] || "",
          role: "candidate", // Default role for Google sign-in
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          profileComplete: false,
          onboardingCompleted: false,
        };

        await setDoc(doc(db, "users", user.uid), userData);

        // Create candidate data
        const candidateData = {
          userId: user.uid,
          email: user.email,
          firstName: userName[0] || "",
          lastName: userName[1] || "",
          currentJobTitle: "",
          experienceYears: 0,
          skills: [],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          applications: [],
          savedJobs: [],
          profileImage: user.photoURL || "",
          resumeUrl: "",
          location: "",
          phoneNumber: "",
          onboardingCompleted: false,
        };

        await setDoc(doc(db, "candidates", user.uid), candidateData);
      }

      // Get user data
      const existingUserDoc = await getDoc(doc(db, "users", user.uid));
      const userData = existingUserDoc.exists() ? existingUserDoc.data() : null;

      // Save to localStorage
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userRole", userData?.role || "candidate");
      localStorage.setItem("userId", user.uid);
      localStorage.setItem("userEmail", user.email || "");
      localStorage.setItem("userName", user.displayName || "");

      toast.success("Signed in with Google successfully!");

      setShowLoader(true);
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } catch (error: unknown) {
      const firebaseError = error as { code?: string };
      console.error("Google sign in error:", error);

      let errorMessage = "Failed to sign in with Google";

      switch (firebaseError.code) {
        case "auth/popup-closed-by-user":
          errorMessage = "Sign in was cancelled";
          break;
        case "auth/popup-blocked":
          errorMessage = "Popup was blocked by your browser. Please allow popups for this site";
          break;
        case "auth/unauthorized-domain":
          errorMessage = "This domain is not authorized for Google sign-in";
          break;
        case "auth/network-request-failed":
          errorMessage = "Network error. Please check your connection";
          break;
      }

      toast.error(errorMessage);
    }
  };

  // Handle Enter key press for sign in
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !isLoading) {
      handleSignIn();
    }
  };

  if (showLoader) {
    return <Loader size="full" />;
  }

  return (
    <>
      <motion.div className="min-h-screen bg-background flex" initial="hidden" animate="visible" variants={signUpcontainerVariants}>
        {/* Left Side - Sign In Form */}
        <motion.div className="w-full lg:w-1/2 flex items-center justify-center p-4 md:p-8" variants={formVariants}>
          <div className="w-full max-w-md">
            {/* Mobile Logo */}
            <div className="lg:hidden text-center mb-4">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <img src={logo} alt="Logo image" loading="lazy" className="h-24 object-contain" />
              </div>
              <Badge className="gradient-primary text-primary-foreground border-0 px-3 py-1">
                <Sparkles className="h-3 w-3 mr-1" />
                AI-Powered Recruitment
              </Badge>
            </div>

            <Card className="border-2 shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Welcome Back</CardTitle>
                <CardDescription>Sign in to access your personalized dashboard</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 lg:space-y-4 md:p-6 p-3">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="pl-10"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onKeyPress={handleKeyPress}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="pl-10 pr-10"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onKeyPress={handleKeyPress}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="text-right">
                    <button onClick={() => setShowForgotPassword(true)} className="text-sm text-primary hover:underline">
                      Forgot password?
                    </button>
                  </div>
                </div>

                <Button className="w-full gradient-primary border-0" onClick={handleSignIn} disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <div className="animate-spin border-t-2 rounded-full p-3"></div>
                    </>
                  ) : (
                    <>Sign In</>
                  )}
                </Button>

                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Don't have an account?{" "}
                    <Link to="/sign-up" className="text-primary hover:underline font-medium">
                      Sign up here
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Login Options */}
            <div className="mt-6">
              <p className="text-center text-sm text-muted-foreground mb-3">Or sign in with</p>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="flex items-center gap-3" onClick={handleGoogleSignIn} disabled={isLoading}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Google-favicon-2015.png" alt="Google Logo" className="h-7" />
                  Google
                </Button>
                <Button variant="outline" className="flex items-center cursor-not-allowed hover:scale-100 opacity-50 gap-3" disabled>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
                    alt="Facebook Logo"
                    className="h-7"
                  />
                  Facebook
                </Button>
              </div>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-6">
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

        {/* Right Side - Content */}
        <SignInContent />
      </motion.div>

      {/* Forgot Password Modal */}
      <ForgotPasswordModal isOpen={showForgotPassword} onClose={() => setShowForgotPassword(false)} />
    </>
  );
};

export default SignIn;
