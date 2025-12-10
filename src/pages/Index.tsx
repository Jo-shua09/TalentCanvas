import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, CheckCircle2, ArrowRight, Zap, Target, Award, Globe, Shield, Clock, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Features from "@/components/sections/home/Features";
import HowItWorks from "@/components/sections/home/HowItWorks";
import Testimonials from "@/components/sections/home/Testimonials";
import { companies } from "@/assets/data/indexData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { cn } from "@/lib/utils";
import {
  containerVariants,
  itemVariants,
  badgeVariants,
  buttonVariants,
  statsContainerVariants,
  statItemVariants,
  ctaContainerVariants,
  ctaItemVariants,
  ctaIconVariants,
} from "@/lib/animations";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>TalentCanvas - AI-Powered Tech Recruitment Platform</title>
        <meta
          name="description"
          content="Connect top tech talent with dream opportunities. Our AI-driven platform matches candidates with perfect-fit roles while providing actionable feedback to accelerate career growth."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <motion.section
          className="gradient-hero relative py-12 md:py-20 lg:py-12 px-4 overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
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
            <div className="max-w-4xl mx-auto text-center">
              <motion.div variants={badgeVariants}>
                <Badge className="mb-6 gradient-primary text-primary-foreground border-0 px-4 py-2">
                  <Sparkles className="h-4 w-4 mr-2" />
                  AI-Powered Recruitment Platform
                </Badge>
              </motion.div>

              <motion.h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight" variants={itemVariants}>
                Connect Top Tech Talent with{" "}
                <motion.span
                  className="gradient-text bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Dream Opportunities
                </motion.span>
              </motion.h1>

              <motion.p className="text-lg md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed" variants={itemVariants}>
                Our AI-driven platform matches candidates with perfect-fit roles while providing
                <strong className="text-foreground"> actionable feedback</strong> to accelerate career growth. Experience recruitment that actually
                works.
              </motion.p>

              <motion.div className="flex flex-col sm:flex-row gap-4 justify-center mb-12" variants={buttonVariants}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    asChild
                    className="gradient-primary border-0 hover:scale-95 transition-all duration-300 text-sm rounded-xl px-8 py-6"
                  >
                    <Link to="/candidate">
                      I'm Looking for a Job
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" asChild className="text-sm rounded-xl px-8 py-6">
                    <Link to="/employer">
                      I'm Hiring Talent
                      <Users className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground" variants={itemVariants}>
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Free to join</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Privacy protected</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Zap className="h-5 w-5 text-primary" />
                  <span>AI-powered matching</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Company Logos */}
        <motion.section
          className="py-12 border-b bg-muted/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="md:container mx-auto px-4">
            <motion.p
              className="text-center text-muted-foreground mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Trusted by candidates who landed roles at top companies
            </motion.p>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={50}
              slidesPerView={5}
              autoplay={{
                delay: 0, // Set to 0 for continuous movement
                disableOnInteraction: false,
                pauseOnMouseEnter: true, // Optional: pause on hover
              }}
              speed={3000} // Control the speed of continuous movement
              loop={true}
              freeMode={true} // Enables smooth free scrolling
              className="w-full max-w-5xl mx-auto"
            >
              {companies.map((company, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    className="flex justify-center gap-8 md:gap-16 items-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <img
                      key={company.name}
                      src={company.logo}
                      alt={company.name}
                      className="h-8 md:h-10 opacity-60 hover:opacity-100 transition-opacity"
                    />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.section>

        {/* Features Section */}
        <Features />

        {/* How It Works */}
        <HowItWorks />

        {/* Stats Section */}
        <motion.section
          className="md:py-20 py-12 px-4 gradient-primary text-primary-foreground"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="container mx-auto">
            <motion.div
              className="grid md:grid-cols-4 grid-cols-2 gap-8 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={statsContainerVariants}
            >
              {[
                { value: "50K+", label: "Tech Professionals", icon: Users },
                { value: "2K+", label: "Companies Hiring", icon: Globe },
                { value: "95%", label: "Match Accuracy", icon: Target },
                { value: "3x", label: "Faster Hiring", icon: Clock },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="space-y-2"
                  variants={statItemVariants}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                    <stat.icon className="h-8 w-8 mx-auto opacity-80" />
                  </motion.div>
                  <motion.div
                    className="text-4xl md:text-5xl font-bold"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-primary-foreground/80">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Testimonials */}
        <Testimonials />

        {/* CTA Section */}
        <motion.section
          className="md:py-20 p-12 lg:py-12 px-4 bg-muted/30"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="container mx-auto text-center">
            <motion.div
              className="max-w-3xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={ctaContainerVariants}
            >
              <motion.div variants={ctaIconVariants} whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                <Award className="h-16 w-16 text-primary mx-auto mb-6" />
              </motion.div>
              <motion.h2 className="text-3xl md:text-5xl font-bold mb-6" variants={ctaItemVariants} transition={{ duration: 0.8, ease: "easeOut" }}>
                Ready to Transform Your Career?
              </motion.h2>
              <motion.p
                className="text-xl text-muted-foreground mb-10"
                variants={ctaItemVariants}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                Join thousands of tech professionals who've found their dream jobs through our AI-powered platform. Your next opportunity is just a
                click away.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                variants={ctaItemVariants}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" asChild className="gradient-primary border-0 hover:scale-95 transition-all duration-300 text-sm px-8 py-6">
                    <Link to="/candidate">Start Your Journey Today</Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" asChild className="text-sm px-8 py-6">
                    <Link to="/about">Learn More About Us</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        <Footer />
      </div>
    </>
  );
};

export default Index;
