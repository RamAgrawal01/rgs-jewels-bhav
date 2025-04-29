
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MetalPriceCard from "@/components/MetalPriceCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MetalPrices from "@/components/MetalPrices";

interface SilverProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const SilverPage = () => {
  const { toast } = useToast();
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [cart, setCart] = useState<SilverProduct[]>([]);
  
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

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('rgsCart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse cart from localStorage:', e);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('rgsCart', JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product: SilverProduct) => {
    console.log(`Add ${product.name} to cart`);
    
    // Check if product already exists in cart
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    
    if (existingProductIndex >= 0) {
      // Product already in cart, you could implement quantity logic here
      toast({
        title: "Already in cart",
        description: `${product.name} is already in your cart.`,
        duration: 3000,
      });
    } else {
      // Add new product to cart
      setCart([...cart, product]);
      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart.`,
        duration: 3000,
      });
    }
  };

  // Filter products based on selected category
  const filteredProducts = activeCategory === "All" 
    ? silverProducts 
    : silverProducts.filter(product => 
        product.category.toLowerCase() === activeCategory.toLowerCase()
      );

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
            
            <div className="container mx-auto px-4 py-12">
              {/* <MetalPriceCard type="silver" initialPrice={78.50} lastUpdate={formattedDate} /> */}
              <MetalPrices/>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <Tabs defaultValue="All" value={activeCategory} onValueChange={setActiveCategory} className="mb-8">
            <TabsList className="flex flex-wrap justify-center gap-2 p-1">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className={activeCategory === category ? "bg-silver-dark text-white" : ""}
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
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
