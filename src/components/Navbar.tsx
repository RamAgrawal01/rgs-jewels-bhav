
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
            <Link to="/about" className="font-medium hover:text-gold-dark transition-colors">About Us</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button>Login</Button>
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
              <Link to="/about" className="px-3 py-2 rounded-md hover:bg-gray-100" onClick={toggleMenu}>About Us</Link>
              <Link to="/cart" className="flex items-center px-3 py-2 rounded-md hover:bg-gray-100" onClick={toggleMenu}>
                <ShoppingCart className="h-5 w-5 mr-2" />
                Cart
              </Link>
              <Button className="mt-2">Login</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
