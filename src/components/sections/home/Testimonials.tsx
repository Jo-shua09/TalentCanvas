import { testimonials } from "@/assets/data/indexData";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { testimonialsContainerVariants, testimonialsItemVariants, testimonialsCardVariants } from "@/lib/animations";

export default function Testimonials() {
  return (
    <div>
      <motion.section
        className="py-20 lg:py-12 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={testimonialsContainerVariants}
      >
        <div className="md:container mx-auto">
          <motion.div className="text-center mb-10" variants={testimonialsItemVariants} transition={{ duration: 0.8, ease: "easeOut" }}>
            <Badge variant="outline" className="mb-4">
              Testimonials
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Join thousands of tech professionals who've found their dream jobs</p>
          </motion.div>

          <motion.div className="grid md:grid-cols-3 gap-8" variants={testimonialsContainerVariants}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={testimonialsCardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, duration: 0.6, ease: "easeOut" }}
                custom={index}
              >
                <Card className="border-2 hover:shadow-2xl transition-all duration-300 h-full">
                  <CardContent className="pt-6">
                    <motion.div
                      className="flex items-center gap-1 mb-4"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                        >
                          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                    </motion.div>
                    <motion.p
                      className="text-muted-foreground mb-6 italic"
                      variants={testimonialsItemVariants}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      "{testimonial.quote}"
                    </motion.p>
                    <motion.div
                      className="flex items-center gap-4"
                      variants={testimonialsItemVariants}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <motion.div
                        className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {testimonial.avatar}
                      </motion.div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
