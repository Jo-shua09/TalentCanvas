import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Loader = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/onboarding");
    }, 2000); // 2 second delay

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <DotLottieReact src="https://lottie.host/417d9801-5fd8-4d4e-87ce-af48ee156025/JuYepJJVF0.lottie" loop autoplay />
      </div>
    </div>
  );
};

export default Loader;
