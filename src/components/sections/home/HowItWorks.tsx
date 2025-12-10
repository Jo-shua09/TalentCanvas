import { forCandidatesSteps, forEmployersSteps } from "@/assets/data/indexData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div>
      <motion.section
        id="how-it-works"
        className="py-20 lg:py-12 px-4 bg-muted/30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="md:container mx-auto">
          <motion.div className="text-center mb-10" variants={itemVariants}>
            <Badge variant="outline" className="mb-4">
              How It Works
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-3">Simple Process, Amazing Results</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you're looking for your next role or the perfect candidate, we've got you covered
            </p>
          </motion.div>

          <motion.div className="grid lg:grid-cols-2 gap-16" variants={containerVariants}>
            {/* For Candidates */}
            <motion.div
              className="bg-background p-6 md:p-8 rounded-3xl border-2 shadow-lg hover:shadow-2xl transition-all duration-300"
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              <motion.div className="flex items-center gap-3 mb-8" variants={itemVariants}>
                <motion.div
                  className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Search className="h-6 w-6 text-primary-foreground" />
                </motion.div>
                <h3 className="text-2xl font-bold text-primary">For Candidates</h3>
              </motion.div>

              <motion.div className="space-y-8" variants={containerVariants}>
                {forCandidatesSteps.map((item, index) => (
                  <motion.div key={item.step} className="flex gap-4" variants={stepVariants} custom={index}>
                    <motion.div
                      className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <span className="text-primary-foreground font-bold">{item.step}</span>
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button className="w-full mt-8 gradient-primary border-0" size="lg" asChild>
                  <Link to="/candidate">Start Job Hunting</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* For Employers */}
            <motion.div
              className="bg-background p-6 md:p-8 rounded-3xl border-2 shadow-lg hover:shadow-2xl transition-all duration-300"
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              <motion.div className="flex items-center gap-3 mb-8" variants={itemVariants}>
                <motion.div
                  className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Users className="h-6 w-6 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-green-600">For Employers</h3>
              </motion.div>

              <motion.div className="space-y-8" variants={containerVariants}>
                {forEmployersSteps.map((item, index) => (
                  <motion.div key={item.step} className="flex gap-4" variants={stepVariants} custom={index}>
                    <motion.div
                      className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <span className="text-white font-bold">{item.step}</span>
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button className="w-full mt-8 bg-green-500 hover:bg-green-600 border-0" size="lg" asChild>
                  <Link to="/employer">Start Hiring</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
