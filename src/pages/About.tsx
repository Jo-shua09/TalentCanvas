import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Mission from "@/components/sections/about/Mission";
import Value from "@/components/sections/about/Value";
import Team from "@/components/sections/about/Team";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  containerVariants,
  itemVariants,
  badgeVariants,
  buttonVariants,
  ctaContainerVariants,
  ctaItemVariants,
  ctaIconVariants,
} from "@/lib/animations";

const About = () => {
  return (
    <motion.div className="min-h-screen bg-background" initial="hidden" animate="visible" variants={containerVariants}>
      <Helmet>
        <title>About Us - TalentCanvas</title>
        <meta
          name="description"
          content="Learn about TalentCanvas, the AI-powered tech recruitment platform revolutionizing how companies find top talent and candidates discover their dream jobs."
        />
      </Helmet>
      <Header />

      <section className="gradient-hero relative py-12 md:py-20 lg:py-12 px-4 overflow-hidden">
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
              <Badge className="mb-6 gradient-primary text-primary-foreground border-0 px-4 py-2">About TalentCanvas</Badge>
            </motion.div>
            <motion.h1 className="text-4xl md:text-6xl font-bold text-foreground mb-3" variants={itemVariants}>
              We're Revolutionizing <span className="">Tech Recruitment</span>
            </motion.h1>
            <motion.p className="text-xl text-muted-foreground max-w-3xl mx-auto" variants={itemVariants}>
              Born from frustration with traditional hiring, TalentCanvas was created to bring transparency, fairness, and AI-powered efficiency to
              tech recruitment.
            </motion.p>
          </div>
        </div>
      </section>

      <Mission />
      <Value />
      <Team />

      <motion.section
        className="py-12 px-4 gradient-primary text-primary-foreground"
        variants={ctaContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto text-center">
          <motion.div variants={ctaIconVariants}>
            <Award className="h-16 w-16 mx-auto mb-6 opacity-80" />
          </motion.div>
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" variants={ctaItemVariants}>
            Ready to Join Our Community?
          </motion.h2>
          <motion.p className="text-xl opacity-80 mb-10 max-w-2xl mx-auto" variants={ctaItemVariants}>
            Whether you're looking for your next role or searching for top talent, TalentCanvas is here to help.
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={ctaItemVariants}>
            <motion.div variants={buttonVariants}>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/sign-up">Join The Community</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </motion.div>
  );
};

export default About;
