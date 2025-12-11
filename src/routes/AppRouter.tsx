import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { useState, useEffect } from "react";
import Loader from "@/components/ui/loader";
import Onboarding from "@/pages/Onboarding";
import Index from "@/pages/Index";
import CandidateDashboard from "@/pages/CandidateDashboard";
import EmployerDashboard from "@/pages/EmployerDashboard";
import JobSearch from "@/pages/JobSearch";
import MyProfile from "@/pages/MyProfile";
import Messages from "@/pages/Messages";
import JobPostings from "@/pages/JobPostings";
import CandidateSearch from "@/pages/CandidateSearch";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Privacy from "@/legals/Privacy";
import Terms from "@/legals/Terms";
import CareerAdvice from "@/pages/CareerAdvice";
import SkillAssessment from "@/pages/SkillAssessment";
import SalaryInsights from "@/pages/SalaryInsights";
import HiringAnalytics from "@/pages/HiringAnalytics";
import SignUp from "@/authentication/SignUp";
import NotFound from "@/pages/NotFound";
import { HelmetProvider } from "react-helmet-async";
import ProtectedRoute from "@/components/extras/ProtectedRoute";
import AuthCheck from "@/components/extras/AuthCheck";
import { SignIn } from "@/authentication/SignIn";

const queryClient = new QueryClient();

const AppRouter = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show loader for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader size="full" />;
  }

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <Routes>
              {/* Root path - Auth check decides where to go */}
              <Route path="/" element={<AuthCheck />} />

              {/* Public routes */}
              <Route path="/onboarding" element={<Onboarding />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />

              {/* Protected routes - require authentication */}
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Index />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/candidate"
                element={
                  <ProtectedRoute>
                    <CandidateDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/employer"
                element={
                  <ProtectedRoute>
                    <EmployerDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/jobs"
                element={
                  <ProtectedRoute>
                    <JobSearch />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <MyProfile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/messages"
                element={
                  <ProtectedRoute>
                    <Messages />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/job-postings"
                element={
                  <ProtectedRoute>
                    <JobPostings />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/candidates"
                element={
                  <ProtectedRoute>
                    <CandidateSearch />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/career-advice"
                element={
                  <ProtectedRoute>
                    <CareerAdvice />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/skill-assessment"
                element={
                  <ProtectedRoute>
                    <SkillAssessment />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/salary-insights"
                element={
                  <ProtectedRoute>
                    <SalaryInsights />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/hiring-analytics"
                element={
                  <ProtectedRoute>
                    <HiringAnalytics />
                  </ProtectedRoute>
                }
              />

              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default AppRouter;
