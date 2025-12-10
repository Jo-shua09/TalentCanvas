import { team } from "@/assets/data/aboutData";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants, cardVariants } from "@/lib/animations";

export default function Team() {
  return (
    <motion.section className="py-12 px-4" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <div className="container mx-auto">
        <motion.div className="text-center mb-10" variants={itemVariants}>
          <Badge variant="outline" className="mb-4">
            Our Team
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet the People Behind TalentCanvas</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A team of industry veterans passionate about transforming how tech hiring works
          </p>
        </motion.div>

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4" variants={containerVariants}>
          {team.map((member, index) => (
            <motion.div key={member.name} variants={cardVariants} custom={index}>
              <Card className="text-center hover:shadow-xl transition-all">
                <CardContent className="pt-6">
                  <div className="w-24 h-24 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold text-primary-foreground">
                    {member.avatar}
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                  <div className="flex justify-center gap-3">
                    <a href="#" className="text-muted-foreground hover:text-primary">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary">
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
