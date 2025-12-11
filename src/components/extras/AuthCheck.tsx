import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import Loader from "@/components/ui/loader";

const AuthCheck = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);

      // Check if user has seen onboarding
      const onboardingSeen = localStorage.getItem("hasSeenOnboarding") === "true";
      setHasSeenOnboarding(onboardingSeen);

      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  if (isLoading) {
    return <Loader size="full" />;
  }

  // If user is logged in, redirect to home
  if (user) {
    return <Navigate to="/home" replace />;
  }

  // If user has seen onboarding before, redirect to sign-in
  if (hasSeenOnboarding) {
    return <Navigate to="/sign-in" replace />;
  }

  // First-time visitor, show onboarding
  return <Navigate to="/onboarding" replace />;
};

export default AuthCheck;
