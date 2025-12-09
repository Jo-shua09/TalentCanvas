import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowLeft, Sparkles, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { slides } from "@/assets/data/onboarding";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import logo from "@/assets/images/logo.png";

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
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-12">
        <div className="flex-[2]">
          <Card className="border shadow-xl">
            <CardContent className="p-8 md:p-8">
              {/* Progress Indicator */}
              <div className="flex justify-center mb-12">
                <div className="flex gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentSlide ? "bg-primary scale-125" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Slide Content */}
              <div className="text-center mb-8">
                <div className="flex justify-center items-center mb-4">
                  <img src={logo} alt="Logo image" loading="lazy" className="h-24 object-contain" />
                </div>

                <Badge className="mb-4 gradient-primary text-primary-foreground border-0 px-4 py-2">
                  <Sparkles className="h-4 w-4 mr-2" />
                  {currentSlideData.subtitle}
                </Badge>

                <h1 className="text-3xl md:text-4xl font-bold mb-4">{currentSlideData.title}</h1>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">{currentSlideData.description}</p>
              </div>

              {/* Features */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {currentSlideData.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-10">
                <Button variant="outline" onClick={prevSlide} disabled={currentSlide === 0} className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Previous
                </Button>

                <Button
                  onClick={nextSlide}
                  className={`flex items-center gap-2 ${currentSlide === slides.length - 1 ? "gradient-primary border-0" : ""}`}
                >
                  {currentSlide === slides.length - 1 ? "Get Started" : "Next"}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <SlideAnimations />
      </div>
    </div>
  );
};

export default Onboarding;
