
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  switchToSignup: () => void;
}

const LoginModal = ({ isOpen, onClose, switchToSignup }: LoginModalProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      // Basic validation
      if (email === "demo@example.com" && password === "password") {
        toast({
          title: "Login successful",
          description: "Welcome back to RGS Jewellers!",
          variant: "default",
        });
        // In a real app, you would store authentication state
        localStorage.setItem("user", JSON.stringify({ email, name: "Demo User" }));
        window.location.reload();
      } else {
        toast({
          title: "Login failed",
          description: "Please use demo@example.com / password for demo",
          variant: "destructive",
        });
      }
      setIsLoading(false);
      onClose();
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-center">Login to RGS Jewellers</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input 
              id="password" 
              type="password" 
              placeholder="Enter your password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-gold-DEFAULT hover:bg-gold-dark"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </Button>
          <p className="text-center text-sm text-gray-500 mt-2">
            Don't have an account?{" "}
            <button
              type="button"
              className="text-gold-DEFAULT hover:underline font-medium"
              onClick={switchToSignup}
            >
              Sign Up
            </button>
          </p>
          <div className="text-xs text-center text-gray-500 mt-4">
            <p>Demo credentials:</p>
            <p>Email: demo@example.com</p>
            <p>Password: password</p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
