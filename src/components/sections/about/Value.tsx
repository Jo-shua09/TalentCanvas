import { values } from "@/assets/data/aboutData";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { containerVariants, itemVariants, cardVariants } from "@/lib/animations";

export default function Value() {
  return (
    <motion.section className="py-12 px-4 bg-muted/30" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <div className="md:container mx-auto">
        <motion.div className="text-center mb-10" variants={itemVariants}>
          <Badge variant="outline" className="mb-4">
            Our Values
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Stand For</h2>
        </motion.div>

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4" variants={containerVariants}>
          {values.map((value, index) => (
            <motion.div key={value.title} variants={cardVariants} custom={index}>
              <Card className="text-center border-2 hover:border-primary/50 transition-all">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
