
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MetalPriceCard from "@/components/MetalPriceCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const SilverPage = () => {
  const { toast } = useToast();
  
  // Format current date for "last updated"
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  // Sample silver products with real images
  const silverProducts = [
    {
      id: 2,
      name: "Silver Anklet",
      price: 3500,
      image: "https://images.unsplash.com/photo-1611241443322-78b19f8681a8?w=500&auto=format&fit=crop&q=80",
      category: "anklets"
    },
    {
      id: 4,
      name: "Silver Earrings",
      price: 2800,
      image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=500&auto=format&fit=crop&q=80",
      category: "earrings"
    },
    {
      id: 6,
      name: "Silver Ring",
      price: 1500,
      image: "https://images.unsplash.com/photo-1499200380170-364ab891c01b?w=500&auto=format&fit=crop&q=80",
      category: "rings"
    },
    {
      id: 8,
      name: "Silver Bracelet",
      price: 2200,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&auto=format&fit=crop&q=80",
      category: "bracelets"
    },
    {
      id: 10,
      name: "Silver Pendant",
      price: 1800,
      image: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=500&auto=format&fit=crop&q=80",
      category: "pendants"
    },
    {
      id: 12,
      name: "Silver Chain",
      price: 2500,
      image: "https://images.unsplash.com/photo-1616255089729-1c233e892e91?w=500&auto=format&fit=crop&q=80",
      category: "chains"
    },
    {
      id: 14,
      name: "Silver Toe Rings",
      price: 1200,
      image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=500&auto=format&fit=crop&q=80",
      category: "toe-rings"
    },
    {
      id: 16,
      name: "Silver Necklace",
      price: 4200,
      image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=500&auto=format&fit=crop&q=80",
      category: "necklaces"
    }
  ];

  // Silver categories
  const categories = [
    "All", "Anklets", "Earrings", "Rings", "Bracelets", 
    "Pendants", "Chains", "Toe Rings", "Necklaces"
  ];

  const handleAddToCart = (product: any) => {
    console.log(`Add ${product.name} to cart`);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      duration: 3000,
    });
  };

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
                    src={product.image} 
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
                  <Button className="w-full bg-silver-dark hover:bg-silver-dark/80" onClick={() => handleAddToCart(product)}>
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
