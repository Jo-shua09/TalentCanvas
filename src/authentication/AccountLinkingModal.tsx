import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Mail, Key, X } from "lucide-react";

interface AccountLinkingModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
  googleCredential: unknown;
  onLinkAccounts: (email: string, password: string, googleCredential: unknown) => Promise<void>;
  isLoading: boolean;
}

const AccountLinkingModal = ({ isOpen, onClose, email, googleCredential, onLinkAccounts, isLoading }: AccountLinkingModalProps) => {
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onLinkAccounts(email, password, googleCredential);
  };

  const handleClose = () => {
    setPassword("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl">Link Your Accounts</DialogTitle>
          <DialogDescription className="sr-only">Link your Google account to your existing email account</DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Key className="h-6 w-6 text-blue-600" />
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              We found an existing account with <strong className="text-primary">{email}</strong>.<br />
              Enter your password to link your Google account.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input id="email" type="email" value={email} className="pl-10" disabled />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password *</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="pl-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={isLoading}
                  onKeyPress={(e) => {
                    if (e.key === "Enter" && !isLoading) {
                      handleSubmit(e);
                    }
                  }}
                />
              </div>
            </div>

            <Button type="submit" className="w-full gradient-primary border-0" disabled={isLoading || !password}>
              {isLoading ? (
                <>
                  <div className="animate-spin border-t-2 rounded-full p-2 mr-2"></div>
                  Linking...
                </>
              ) : (
                "Link Accounts"
              )}
            </Button>

            <div className="text-center">
              <p className="text-sm text-muted-foreground">After linking, you can sign in with either method.</p>
            </div>
          </form>

          <div className="text-center pt-2">
            <button type="button" onClick={handleClose} className="text-sm text-muted-foreground hover:text-foreground">
              Cancel
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AccountLinkingModal;
