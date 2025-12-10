import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, CheckCircle, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogOverlay, DialogPortal } from "@/components/ui/dialog";

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
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 5000);
  };

  const resetForm = () => {
    setEmail("");
    setIsSubmitted(false);
    setIsLoading(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
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
                          Email Address
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
                            required
                            autoFocus
                          />
                        </div>
                        <p className="text-xs text-muted-foreground">We'll send you a link to reset your password</p>
                      </div>

                      <Button type="submit" className="w-full gradient-primary border-0" disabled={isLoading}>
                        {isLoading ? (
                          <>
                            <div className="animate-spin border-t-2 rounded-full p-3"></div>
                          </>
                        ) : (
                          "Send Reset Link"
                        )}
                      </Button>
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
                        We've sent a password reset link to <strong>{email}</strong>. Please check your inbox and follow the instructions.
                      </p>
                      <div className="pt-4">
                        <p className="text-sm text-muted-foreground mb-2">
                          Didn't receive the email? Check your spam folder or
                          <button onClick={() => setIsSubmitted(false)} className="text-primary hover:underline ml-1">
                            try again
                          </button>
                        </p>
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
