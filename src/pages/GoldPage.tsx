
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MetalPriceCard from "@/components/MetalPriceCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const GoldPage = () => {
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

  // Sample gold products with real images
  const goldProducts = [
    {
      id: 1,
      name: "22K Gold Necklace",
      price: 85000,
      image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=500&auto=format&fit=crop&q=80",
      category: "necklaces"
    },
    {
      id: 3,
      name: "Gold Bangles Set",
      price: 62000,
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=500&auto=format&fit=crop&q=80",
      category: "bangles"
    },
    {
      id: 5,
      name: "Gold Ring with Diamond",
      price: 45000,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&auto=format&fit=crop&q=80",
      category: "rings"
    },
    {
      id: 7,
      name: "Gold Earrings",
      price: 28000,
      image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=500&auto=format&fit=crop&q=80",
      category: "earrings"
    },
    {
      id: 9,
      name: "Gold Pendant",
      price: 18000,
      image: "https://images.unsplash.com/photo-1618403088890-3d9ff6f4c8b1?w=500&auto=format&fit=crop&q=80",
      category: "pendants"
    },
    {
      id: 11,
      name: "Gold Bracelet",
      price: 32000,
      image: "https://images.unsplash.com/photo-1626784215021-2fbed52493ac?w=500&auto=format&fit=crop&q=80",
      category: "bracelets"
    },
    {
      id: 13,
      name: "Gold Chain",
      price: 42000,
      image: "https://images.unsplash.com/photo-1574104876533-723d5486dc12?w=500&auto=format&fit=crop&q=80",
      category: "chains"
    },
    {
      id: 15,
      name: "Gold Mangalsutra",
      price: 56000,
      image: "https://images.unsplash.com/photo-1589304433707-a35edabe9ebc?w=500&auto=format&fit=crop&q=80",
      category: "mangalsutra"
    }
  ];

  // Gold categories
  const categories = [
    "All", "Necklaces", "Bangles", "Rings", "Earrings", 
    "Pendants", "Bracelets", "Chains", "Mangalsutra"
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
        <div className="bg-gradient-to-r from-gold-dark/10 to-gold-light/20 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-serif font-bold text-center mb-2">Gold Collection</h1>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
              Discover our exquisite collection of premium gold jewelry crafted with precision and elegance
            </p>
            
            <div className="max-w-sm mx-auto mb-12">
              <MetalPriceCard type="gold" initialPrice={6125} lastUpdate={formattedDate} />
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categories.map((category) => (
              <Button 
                key={category} 
                variant={category === "All" ? "default" : "outline"}
                className={category === "All" ? "bg-gold-DEFAULT hover:bg-gold-dark" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {goldProducts.map((product) => (
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
                    <h3 className="font-medium text-lg mb-1 hover:text-gold-dark transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-xl font-bold mb-3">
                    ₹{product.price.toLocaleString('en-IN')}
                  </p>
                  <Button className="w-full" onClick={() => handleAddToCart(product)}>
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

export default GoldPage;
