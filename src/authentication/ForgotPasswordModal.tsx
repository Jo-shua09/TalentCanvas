import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, CheckCircle, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogOverlay, DialogPortal } from "@/components/ui/dialog";

// Firebase imports
import { auth } from "@/lib/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "sonner";

interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ForgotPasswordModal = ({ isOpen, onClose }: ForgotPasswordModalProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    try {
      // Send password reset email with Firebase
      await sendPasswordResetEmail(auth, email);

      setIsLoading(false);
      setIsSubmitted(true);
      toast.success("Password reset email sent! Check your inbox.");
    } catch (error: unknown) {
      console.error("Password reset error:", error);

      // Handle specific Firebase errors
      let errorMessage = "Failed to send reset email. Please try again.";

      if (typeof error === "object" && error !== null && "code" in error) {
        const errorCode = (error as { code: string }).code;
        switch (errorCode) {
          case "auth/user-not-found":
            errorMessage = "No account found with this email address";
            break;
          case "auth/invalid-email":
            errorMessage = "Invalid email address";
            break;
          case "auth/too-many-requests":
            errorMessage = "Too many requests. Please try again later";
            break;
          case "auth/network-request-failed":
            errorMessage = "Network error. Please check your connection";
            break;
          case "auth/missing-continue-uri":
            errorMessage = "Reset email configuration error. Please contact support";
            break;
          case "auth/unauthorized-continue-uri":
            errorMessage = "Unauthorized domain. Please contact support";
            break;
          case "auth/invalid-continue-uri":
            errorMessage = "Invalid configuration. Please contact support";
            break;
        }
      }

      toast.error(errorMessage);
      setIsLoading(false);
    }
  };

  const handleResetForm = () => {
    setEmail("");
    setIsSubmitted(false);
    setIsLoading(false);
  };

  const handleClose = () => {
    handleResetForm();
    onClose();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !isLoading && !isSubmitted) {
      handleSubmit(e as unknown as React.FormEvent);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={handleClose}>
          <DialogPortal>
            <DialogOverlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
            <DialogContent className="fixed left-[50%] top-[50%] z-50 w-full max-w-md translate-x-[-50%] translate-y-[-50%] border bg-background p-0 shadow-lg duration-200 sm:rounded-lg">
              <Card className="border-0 shadow-none">
                <CardHeader className="text-center relative">
                  <CardTitle className="text-2xl mt-2">Reset Password</CardTitle>
                  <CardDescription>
                    {isSubmitted ? "Check your email for reset instructions" : "Enter your email to receive a password reset link"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm">
                          Email Address *
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="pl-10"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onKeyPress={handleKeyPress}
                            required
                            autoFocus
                            disabled={isLoading}
                          />
                        </div>
                        <p className="text-xs text-muted-foreground">We'll send you a link to reset your password</p>
                      </div>

                      <Button type="submit" className="w-full gradient-primary border-0" disabled={isLoading || !email}>
                        {isLoading ? (
                          <>
                            <div className="animate-spin border-t-2 rounded-full p-3"></div>
                          </>
                        ) : (
                          "Send Reset Link"
                        )}
                      </Button>

                      <div className="text-center pt-2">
                        <p className="text-xs text-muted-foreground">
                          Remember your password?{" "}
                          <button type="button" onClick={handleClose} className="text-primary hover:underline font-medium">
                            Sign in here
                          </button>
                        </p>
                      </div>
                    </form>
                  ) : (
                    <motion.div
                      className="text-center space-y-4 py-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                      </div>
                      <h3 className="text-lg font-semibold">Reset Link Sent!</h3>
                      <p className="text-muted-foreground">
                        We've sent a password reset link to <strong className="text-primary">{email}</strong>. Please check your inbox and follow the
                        instructions.
                      </p>

                      <div className="space-y-3 pt-4">
                        <p className="text-sm text-muted-foreground">Didn't receive the email?</p>
                        <div className="flex flex-col gap-2">
                          <Button type="button" variant="outline" onClick={handleResetForm} className="w-full">
                            Try Again with Different Email
                          </Button>
                          <Button type="button" variant="ghost" onClick={handleClose} className="w-full">
                            Return to Sign In
                          </Button>
                        </div>
                      </div>

                      <div className="pt-2">
                        <p className="text-xs text-muted-foreground">If you still don't see the email, please check your spam folder.</p>
                      </div>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </DialogContent>
          </DialogPortal>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default ForgotPasswordModal;
