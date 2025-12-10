import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface LoaderProps {
  size?: "sm" | "md" | "lg" | "full";
  className?: string;
}

const Loader = ({ size = "md", className = "" }: LoaderProps) => {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
    full: "w-48 h-48",
  };

  if (size === "full") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="text-center">
          <DotLottieReact
            src="https://lottie.host/417d9801-5fd8-4d4e-87ce-af48ee156025/JuYepJJVF0.lottie"
            loop
            autoplay
            className={sizeClasses[size]}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="text-center">
        <DotLottieReact
          src="https://lottie.host/417d9801-5fd8-4d4e-87ce-af48ee156025/JuYepJJVF0.lottie"
          loop
          autoplay
          className={sizeClasses[size]}
        />
      </div>
    </div>
  );
};

export default Loader;
