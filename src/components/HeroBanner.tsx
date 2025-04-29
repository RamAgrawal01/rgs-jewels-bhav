
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div 
      className="hero relative h-[600px] flex items-center" 
      style={{
        backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url('https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1920&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-lg text-white">
          <h1 className="text-5xl font-serif font-bold mb-4">
            Exquisite Jewelry for Every Occasion
          </h1>
          <p className="text-xl mb-8">
            Discover our premium collection of gold and silver jewelry 
            crafted with precision and passion
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-gold-DEFAULT hover:bg-gold-dark text-white"
              asChild
            >
              <Link to="/gold">Gold Collection</Link>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-white hover:bg-gray-100 text-gray-900 border-white"
              asChild
            >
              <Link to="/silver">Silver Collection</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
