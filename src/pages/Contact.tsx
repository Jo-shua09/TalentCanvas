import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, MessageSquare, Send, Clock, Headphones } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { containerVariants, itemVariants, badgeVariants, cardVariants, buttonVariants } from "@/lib/animations";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "support@talentcanvas.com",
      subtitle: "We respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "+1 (555) 123-4567",
      subtitle: "Mon-Fri 9am - 6pm PST",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "123 Tech Street, San Francisco, CA 94102",
      subtitle: "Open for meetings by appointment",
    },
  ];

  const faqs = [
    {
      q: "How does the AI matching work?",
      a: "Our AI analyzes your skills, experience, and preferences to find roles with the highest compatibility.",
    },
    { q: "Is TalentCanvas free for candidates?", a: "Yes! Job seekers can use all features completely free of charge." },
    {
      q: "How do I get feedback on my applications?",
      a: "Employers provide feedback through our platform, and you'll receive notifications when feedback is available.",
    },
  ];

  return (
    <motion.div className="min-h-screen bg-background" initial="hidden" animate="visible" variants={containerVariants}>
      <Helmet>
        <title>Contact Us - TalentCanvas</title>
        <meta
          name="description"
          content="Get in touch with TalentCanvas. Have questions about our AI-powered recruitment platform? Contact our support team for assistance."
        />
      </Helmet>
      <Header />

      {/* Hero Section */}
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
          <div className="max-w-3xl mx-auto text-center">
            <motion.div variants={badgeVariants}>
              <Badge className="mb-6 gradient-primary text-primary-foreground border-0 px-4 py-2">Contact Us</Badge>
            </motion.div>
            <motion.h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3" variants={itemVariants}>
              Get in Touch
            </motion.h1>
            <motion.p className="text-xl text-muted-foreground" variants={itemVariants}>
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <motion.section className="py-12 px-4" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="container mx-auto">
          <motion.div className="grid md:grid-cols-3 gap-6" variants={containerVariants}>
            {contactInfo.map((info, index) => (
              <motion.div key={info.title} variants={cardVariants} custom={index}>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-14 h-14 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <info.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                    <p className="text-foreground font-medium">{info.description}</p>
                    <p className="text-sm text-muted-foreground mt-1">{info.subtitle}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section className="py-12 px-4" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="container mx-auto">
          <motion.div className="grid lg:grid-cols-2 gap-8" variants={containerVariants}>
            {/* Form */}
            <motion.div variants={cardVariants}>
              <Card className="h-fit">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you shortly.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div className="grid md:grid-cols-2 gap-4" variants={itemVariants}>
                      <div>
                        <label className="block text-sm font-medium mb-2">Your Name</label>
                        <Input
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email Address</label>
                        <Input
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-medium mb-2">Subject</label>
                      <Input
                        placeholder="How can we help?"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                      />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <Textarea
                        placeholder="Tell us more about your inquiry..."
                        className="min-h-[150px]"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </motion.div>
                    <motion.div variants={buttonVariants}>
                      <Button type="submit" className="w-full gradient-primary border-0" size="lg">
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* FAQ & Support */}
            <motion.div className="space-y-6" variants={containerVariants}>
              <motion.div variants={cardVariants}>
                <Card className="bg-muted/50">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                        <Headphones className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <CardTitle>Need Immediate Help?</CardTitle>
                        <CardDescription>Our support team is here for you</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      For urgent inquiries, you can reach our support team directly via live chat or phone during business hours.
                    </p>
                    <Button variant="outline" className="w-full">
                      <MessageSquare className="h-5 w-5 mr-2" />
                      Start Live Chat
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={cardVariants}>
                <Card>
                  <CardHeader>
                    <CardTitle>Frequently Asked Questions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {faqs.map((faq, index) => (
                      <motion.div key={index} className="border-b pb-4 last:border-0" variants={itemVariants} custom={index}>
                        <h4 className="font-semibold mb-2">{faq.q}</h4>
                        <p className="text-sm text-muted-foreground">{faq.a}</p>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={cardVariants}>
                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold">Response Time</p>
                        <p className="text-sm text-muted-foreground">Average response within 4 hours</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Our team works around the clock to ensure you get the help you need as quickly as possible.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </motion.div>
  );
};

export default Contact;
