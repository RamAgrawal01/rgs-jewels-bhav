
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X, LogIn, UserCircle } from "lucide-react";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [user, setUser] = useState<{ name: string, email: string } | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (e) {
        localStorage.removeItem("user");
      }
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    toast({
      title: "Logged out successfully",
      description: "Come back soon to RGS Jewellers!",
    });
  };

  const openLogin = () => {
    setIsLoginOpen(true);
    setIsSignupOpen(false);
    setIsMenuOpen(false);
  };

  const openSignup = () => {
    setIsSignupOpen(true);
    setIsLoginOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="font-serif text-2xl font-bold text-gold-dark">RGS</span>
            <span className="font-serif text-2xl ml-2">Jewellers</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium hover:text-gold-dark transition-colors">Home</Link>
            <Link to="/gold" className="font-medium hover:text-gold-dark transition-colors">Gold</Link>
            <Link to="/silver" className="font-medium hover:text-gold-dark transition-colors">Silver</Link>
            <Link to="/converter" className="font-medium hover:text-gold-dark transition-colors">Converter</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            {!user ? (
              <Button onClick={openLogin}>
                <LogIn className="mr-2 h-4 w-4" /> Login
              </Button>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <UserCircle className="h-4 w-4" />
                    {user.name.split(' ')[0]}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link to="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/orders">My Orders</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-gray-200 mt-3">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="px-3 py-2 rounded-md hover:bg-gray-100" onClick={toggleMenu}>Home</Link>
              <Link to="/gold" className="px-3 py-2 rounded-md hover:bg-gray-100" onClick={toggleMenu}>Gold</Link>
              <Link to="/silver" className="px-3 py-2 rounded-md hover:bg-gray-100" onClick={toggleMenu}>Silver</Link>
              <Link to="/converter" className="px-3 py-2 rounded-md hover:bg-gray-100" onClick={toggleMenu}>Converter</Link>
              <Link to="/cart" className="flex items-center px-3 py-2 rounded-md hover:bg-gray-100" onClick={toggleMenu}>
                <ShoppingCart className="h-5 w-5 mr-2" />
                Cart
              </Link>
              {!user ? (
                <Button className="mt-2" onClick={openLogin}>Login</Button>
              ) : (
                <>
                  <div className="px-3 py-2">Logged in as {user.name}</div>
                  <Button variant="outline" onClick={handleLogout}>Logout</Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Login/Signup Modals */}
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)}
        switchToSignup={openSignup}
      />
      <SignupModal 
        isOpen={isSignupOpen} 
        onClose={() => setIsSignupOpen(false)}
        switchToLogin={openLogin}
      />
    </nav>
  );
};

export default Navbar;
