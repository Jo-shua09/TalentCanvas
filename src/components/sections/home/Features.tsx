import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Brain, Globe, MessageSquare, Target, Users } from "lucide-react";
import { motion } from "framer-motion";
import { cardVariants, containerVariants, itemVariants } from "@/lib/animations";

export default function Features() {
  return (
    <div className="">
      <motion.section
        id="features"
        className="py-20 lg:py-12 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="md:container mx-auto">
          <motion.div className="text-center mb-10" variants={itemVariants}>
            <Badge variant="outline" className="mb-4">
              Features
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-3">Why TalentCanvas?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're revolutionizing tech recruitment with AI-powered matching and transparent feedback
            </p>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants}>
            <motion.div variants={cardVariants} whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="text-center border-2 hover:border-primary/50 transition-all hover:shadow-xl group h-full">
                <CardHeader>
                  <motion.div
                    className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Brain className="h-8 w-8 text-primary-foreground" />
                  </motion.div>
                  <CardTitle className="text-xl">AI-Powered Matching</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Our advanced AI analyzes skills, experience, and preferences to deliver perfect job matches with compatibility scores up to 98%
                    accuracy.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants} whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="text-center border-2 hover:border-primary/50 transition-all hover:shadow-xl group h-full">
                <CardHeader>
                  <motion.div
                    className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <MessageSquare className="h-8 w-8 text-white" />
                  </motion.div>
                  <CardTitle className="text-xl">Actionable Feedback</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    No more silent rejections. Get detailed insights on why applications weren't successful and concrete steps to improve your
                    candidacy.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants} whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="text-center border-2 hover:border-primary/50 transition-all hover:shadow-xl group h-full">
                <CardHeader>
                  <motion.div
                    className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Target className="h-8 w-8 text-white" />
                  </motion.div>
                  <CardTitle className="text-xl">Skills Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Validate your technical skills with our AI-powered assessments and showcase verified badges to employers for instant credibility.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants} whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="text-center border-2 hover:border-primary/50 transition-all hover:shadow-xl group h-full">
                <CardHeader>
                  <motion.div
                    className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Users className="h-8 w-8 text-white" />
                  </motion.div>
                  <CardTitle className="text-xl">Direct Communication</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Connect directly with hiring managers and candidates through our integrated messaging system. No middlemen, no delays.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants} whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="text-center border-2 hover:border-primary/50 transition-all hover:shadow-xl group h-full">
                <CardHeader>
                  <motion.div
                    className="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <BarChart3 className="h-8 w-8 text-white" />
                  </motion.div>
                  <CardTitle className="text-xl">Career Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Track your job search progress with detailed analytics. Monitor profile views, application status, and interview conversion rates.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants} whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="text-center border-2 hover:border-primary/50 transition-all hover:shadow-xl group h-full">
                <CardHeader>
                  <motion.div
                    className="w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Globe className="h-8 w-8 text-white" />
                  </motion.div>
                  <CardTitle className="text-xl">Global Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Access remote and on-site opportunities from companies worldwide. Filter by location preferences and visa sponsorship
                    availability.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
