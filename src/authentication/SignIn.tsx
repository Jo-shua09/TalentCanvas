import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Brain, Mail, Lock, Eye, EyeOff, Sparkles, Zap, Target, TrendingUp, Users, Clock } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import logo from "@/assets/images/logo.png";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    localStorage.setItem("isAuthenticated", "true");
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Side - Sign In Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 md:p-8">
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
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="email" type="email" placeholder="Enter your email" className="pl-10" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="password" type={showPassword ? "text" : "password"} placeholder="Enter your password" className="pl-10 pr-10" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                <div className="text-right">
                  <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                    Forgot password?
                  </Link>
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
              <Button variant="outline" className="flex items-center gap-3">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Google-favicon-2015.png" alt="Google Logo" className="h-7" />
                Google
              </Button>
              <Button variant="outline" className="flex items-center gap-3">
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
      </div>

      {/* Right Side - Content */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary/20 to-secondary/20 p-12 flex-col justify-between relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
              <img src={logo} alt="Logo image" loading="lazy" className="h-24 object-contain" />
            </div>
            <h1 className="text-2xl font-bold">TalentCanvas</h1>
          </div>

          <div className="max-w-md">
            <h2 className="text-4xl font-bold mb-4">
              Welcome back!
              <span className="block gradient-text bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Your opportunities await
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">Continue your career journey with personalized matches and AI-powered insights.</p>

            {/* Features List */}
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <TrendingUp className="h-3 w-3" />
                </div>
                <span>Check your application status updates</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <Target className="h-3 w-3" />
                </div>
                <span>View new personalized job matches</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <Users className="h-3 w-3" />
                </div>
                <span>Connect with your interviewers</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <Clock className="h-3 w-3" />
                </div>
                <span>Access your scheduled interviews</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-8 justify-between mt-8">
          <div className="text-center">
            <div className="text-2xl font-bold gradient-text">85%</div>
            <div className="text-sm text-muted-foreground">Interview Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold gradient-text">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold gradient-text">4.8★</div>
            <div className="text-sm text-muted-foreground">User Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
