import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
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
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import CareerAdvice from "@/pages/CareerAdvice";
import SkillAssessment from "@/pages/SkillAssessment";
import SalaryInsights from "@/pages/SalaryInsights";
import HiringAnalytics from "@/pages/HiringAnalytics";
import SignIn from "@/authentication/SignIn";
import SignUp from "@/authentication/SignUp";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const AppRouter = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loader />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/home" element={<Index />} />
          <Route path="/candidate" element={<CandidateDashboard />} />
          <Route path="/employer" element={<EmployerDashboard />} />
          <Route path="/jobs" element={<JobSearch />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/job-postings" element={<JobPostings />} />
          <Route path="/candidates" element={<CandidateSearch />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/career-advice" element={<CareerAdvice />} />
          <Route path="/skill-assessment" element={<SkillAssessment />} />
          <Route path="/salary-insights" element={<SalaryInsights />} />
          <Route path="/hiring-analytics" element={<HiringAnalytics />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default AppRouter;
