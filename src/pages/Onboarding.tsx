import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowLeft, Sparkles, CheckCircle2, SkipForward } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { slides } from "@/assets/data/onboarding";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import logo from "@/assets/images/logo.png";
import { motion, AnimatePresence } from "framer-motion";
import { OnboardingButtonVariants, onboardingContainerVariants, OnboardingItemVariants, slideVariants } from "@/lib/animations";

const Onboarding = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      // Mark onboarding as completed and navigate to signin
      localStorage.setItem("onboardingCompleted", "true");
      navigate("/sign-up");
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const skipToLastSlide = () => {
    setCurrentSlide(slides.length - 1);
  };

  const currentSlideData = slides[currentSlide];

  const animationUrls = [
    "https://lottie.host/ab25e2ee-6098-490a-9708-061eb4c877e0/IYOqiSsVCz.lottie",
    "https://lottie.host/ccf5b3f4-1d9a-43a6-9489-2524c38d372d/zBzeaKen7e.lottie",
    "https://lottie.host/7d7074fd-ad2d-487d-904b-f367517b25b7/J2OYAJCGNx.lottie",
    "https://lottie.host/48613c9e-f0f4-4795-a28b-a7c164af4a81/R2hW4MJxRb.lottie",
  ];

  const SlideAnimations = () => {
    const url = animationUrls[currentSlide] || animationUrls[animationUrls.length - 1];

    return (
      <div className="hidden flex-1 m-auto md:flex justify-end w-full">
        <div className="w-[10rem] h-[10rem] md:w-[25rem] md:h-[25rem]">
          <DotLottieReact src={url} loop autoplay />
        </div>
      </div>
    );
  };

  return (
    <motion.div
      className="min-h-screen bg-background flex items-center justify-center p-4"
      initial="hidden"
      animate="visible"
      variants={onboardingContainerVariants}
    >
      <div className="w-full max-w-6xl flex relative flex-col md:flex-row gap-12">
        <div className="flex-[2]">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
            <Card className="border shadow-xl">
              <CardContent className="p-8 md:p-8">
                {/* Progress Indicator */}
                <motion.div className="flex justify-center mb-12" variants={OnboardingItemVariants}>
                  <div className="flex gap-2">
                    {slides.map((_, index) => (
                      <motion.button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentSlide ? "bg-primary scale-125" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                        }`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Slide Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    className="text-center mb-8"
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.3 },
                    }}
                  >
                    <motion.div className="flex justify-center items-center mb-4" variants={OnboardingItemVariants}>
                      <motion.img
                        src={logo}
                        alt="Logo image"
                        loading="lazy"
                        className="h-24 object-contain"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      />
                    </motion.div>

                    <motion.div variants={OnboardingItemVariants}>
                      <Badge className="mb-4 gradient-primary text-primary-foreground border-0 px-4 py-2">
                        <Sparkles className="h-4 w-4 mr-2" />
                        {currentSlideData.subtitle}
                      </Badge>
                    </motion.div>

                    <motion.h1 className="text-3xl md:text-4xl font-bold mb-4" variants={OnboardingItemVariants}>
                      {currentSlideData.title}
                    </motion.h1>
                    <motion.p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed" variants={OnboardingItemVariants}>
                      {currentSlideData.description}
                    </motion.p>
                  </motion.div>
                </AnimatePresence>

                {/* Features */}
                <motion.div className="flex flex-wrap justify-center gap-4 mb-8" variants={OnboardingItemVariants}>
                  {currentSlideData.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Navigation */}
                <motion.div className="flex justify-between items-center mt-10" variants={OnboardingButtonVariants}>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" onClick={prevSlide} disabled={currentSlide === 0} className="flex items-center gap-2">
                      <ArrowLeft className="h-4 w-4" />
                      Previous
                    </Button>
                  </motion.div>

                  <div className="flex gap-2">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        onClick={nextSlide}
                        className={`flex items-center gap-2 ${currentSlide === slides.length - 1 ? "gradient-primary border-0" : ""}`}
                      >
                        {currentSlide === slides.length - 1 ? "Get Started" : "Next"}
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          className="absolute top-2 right-2 md:top-0 md:right-0"
          onClick={skipToLastSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {currentSlide !== slides.length - 1 && (
            <motion.div
              className="font-medium text-sm font-heading cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Skip
            </motion.div>
          )}
        </motion.div>

        <SlideAnimations />
      </div>
    </motion.div>
  );
};

export default Onboarding;
