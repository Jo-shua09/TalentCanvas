import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { containerVariants, itemVariants, cardVariants } from "@/lib/animations";

export default function Mission() {
  const stats = [
    { number: "50K+", label: "Active Users" },
    { number: "2K+", label: "Partner Companies" },
    { number: "95%", label: "Match Accuracy" },
    { number: "10K+", label: "Successful Hires" },
  ];

  return (
    <motion.section className="py-12 px-4" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={itemVariants}>
            <Badge variant="outline" className="mb-4">
              Our Mission
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Making Tech Hiring Fair, Fast, and Feedback-Driven</h2>
            <p className="text-lg text-muted-foreground mb-6">
              We started TalentCanvas after experiencing the frustration of the traditional hiring process firsthand. Silent rejections, unclear
              requirements, and inefficient matching—we knew there had to be a better way.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Our AI-powered platform ensures that every candidate gets matched with roles that truly fit their skills, and every application receives
              meaningful feedback. No more guessing games.
            </p>
            <Button asChild className="gradient-primary border-0 hover:scale-95 transition-all duration-300">
              <Link to="/candidate">Join Our Platform</Link>
            </Button>
          </motion.div>
          <motion.div className="grid grid-cols-2 gap-6" variants={containerVariants}>
            {stats.map((stat, index) => (
              <motion.div key={stat.label} variants={cardVariants} custom={index}>
                <Card className="text-center p-6">
                  <CardContent className="p-0">
                    <p className="text-4xl font-bold text-primary mb-2">{stat.number}</p>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
