
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MetalPriceCard from "@/components/MetalPriceCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const SilverPage = () => {
  // Format current date for "last updated"
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  // Sample silver products
  const silverProducts = [
    {
      id: 2,
      name: "Silver Anklet",
      price: 3500,
      image: "/products/silver-anklet.jpg",
      category: "anklets"
    },
    {
      id: 4,
      name: "Silver Earrings",
      price: 2800,
      image: "/products/silver-earrings.jpg",
      category: "earrings"
    },
    {
      id: 6,
      name: "Silver Ring",
      price: 1500,
      image: "/products/silver-ring.jpg",
      category: "rings"
    },
    {
      id: 8,
      name: "Silver Bracelet",
      price: 2200,
      image: "/products/silver-bracelet.jpg",
      category: "bracelets"
    },
    {
      id: 10,
      name: "Silver Pendant",
      price: 1800,
      image: "/products/silver-pendant.jpg",
      category: "pendants"
    },
    {
      id: 12,
      name: "Silver Chain",
      price: 2500,
      image: "/products/silver-chain.jpg",
      category: "chains"
    },
    {
      id: 14,
      name: "Silver Toe Rings",
      price: 1200,
      image: "/products/silver-toe-rings.jpg",
      category: "toe-rings"
    },
    {
      id: 16,
      name: "Silver Necklace",
      price: 4200,
      image: "/products/silver-necklace.jpg",
      category: "necklaces"
    }
  ];

  // Silver categories
  const categories = [
    "All", "Anklets", "Earrings", "Rings", "Bracelets", 
    "Pendants", "Chains", "Toe Rings", "Necklaces"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-silver-dark/10 to-silver-light/20 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-serif font-bold text-center mb-2">Silver Collection</h1>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
              Browse our premium silver jewelry collection featuring elegant designs and superior craftsmanship
            </p>
            
            <div className="max-w-sm mx-auto mb-12">
              <MetalPriceCard type="silver" initialPrice={78.50} lastUpdate={formattedDate} />
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categories.map((category) => (
              <Button 
                key={category} 
                variant={category === "All" ? "default" : "outline"}
                className={category === "All" ? "bg-silver-dark hover:bg-silver-dark/80" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {silverProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden product-card">
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img 
                    src={product.image || "/placeholder.svg"} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                </div>
                <CardContent className="p-4">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-medium text-lg mb-1 hover:text-silver-dark transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-xl font-bold mb-3">
                    ₹{product.price.toLocaleString('en-IN')}
                  </p>
                  <Button className="w-full bg-silver-dark hover:bg-silver-dark/80" onClick={() => console.log(`Add ${product.name} to cart`)}>
                    <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SilverPage;
