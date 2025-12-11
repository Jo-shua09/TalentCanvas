// src/hooks/useAuth.ts
import { useState, useEffect } from "react";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface UserData {
  role?: string;
  [key: string]: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);

      if (firebaseUser) {
        try {
          // Get user data from Firestore
          const userDoc = await getDoc(doc(db, "users", firebaseUser.uid));
          if (userDoc.exists()) {
            const data = userDoc.data();
            setUserData(data);

            // Store in localStorage for quick access
            localStorage.setItem("userData", JSON.stringify(data));
            localStorage.setItem("userId", firebaseUser.uid);
            localStorage.setItem("userEmail", firebaseUser.email || "");
            localStorage.setItem("userRole", data.role || "candidate");
            localStorage.setItem("isAuthenticated", "true");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        // Clear localStorage when signed out
        localStorage.removeItem("userData");
        localStorage.removeItem("userId");
        localStorage.removeItem("userEmail");
        localStorage.removeItem("userRole");
        localStorage.removeItem("isAuthenticated");
        setUserData(null);
      }

      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return { user, userData, loading };
};
