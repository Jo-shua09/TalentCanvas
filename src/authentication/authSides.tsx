import { leftPanelVariants } from "@/lib/animations";
import { motion } from "framer-motion";
import logo from "@/assets/images/logo.png";
import { Briefcase, Clock, GraduationCap, Target, TrendingUp, Users } from "lucide-react";

export const SignUpContent = () => {
  return (
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
  );
};

export const SignInContent = () => {
  return (
    <motion.div
      className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary/20 to-secondary/20 p-12 flex-col justify-between relative overflow-hidden"
      variants={leftPanelVariants}
    >
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
    </motion.div>
  );
};
