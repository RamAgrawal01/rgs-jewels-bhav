
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: "gold" | "silver";
  featured: boolean;
  new: boolean;
}

const sampleProducts: Product[] = [
  {
    id: 1,
    name: "22K Gold Necklace",
    price: 85000,
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=500&auto=format&fit=crop&q=80",
    category: "gold",
    featured: true,
    new: true
  },
  {
    id: 2,
    name: "Silver Anklet",
    price: 3500,
    image: "https://images.unsplash.com/photo-1611241443322-78b19f8681a8?w=500&auto=format&fit=crop&q=80",
    category: "silver",
    featured: true,
    new: false
  },
  {
    id: 3,
    name: "Gold Bangles Set",
    price: 62000,
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=500&auto=format&fit=crop&q=80",
    category: "gold",
    featured: true,
    new: false
  },
  {
    id: 4,
    name: "Silver Earrings",
    price: 2800,
    image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=500&auto=format&fit=crop&q=80",
    category: "silver",
    featured: true,
    new: true
  }
];

const FeaturedProducts = () => {
  const products = sampleProducts;
  const { toast } = useToast();

  const handleAddToCart = (product: Product) => {
    console.log(`Add ${product.name} to cart`);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      duration: 3000,
    });
  };

  return (
    <div className="py-10">
      <h2 className="text-3xl font-serif font-semibold text-center mb-8">Featured Collections</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden product-card">
            <div className="relative h-64 overflow-hidden bg-gray-100">
              <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
                {product.featured && <Badge variant="secondary">Featured</Badge>}
                {product.new && <Badge className="bg-gold-DEFAULT">New</Badge>}
              </div>
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  e.currentTarget.src = "/placeholder.svg";
                }}
              />
            </div>
            <CardContent className="pt-4">
              <Link to={`/product/${product.id}`}>
                <h3 className="font-medium text-lg mb-1 hover:text-gold-dark transition-colors">
                  {product.name}
                </h3>
              </Link>
              <p className="text-xl font-bold">
                ₹{product.price.toLocaleString('en-IN')}
              </p>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full" 
                onClick={() => handleAddToCart(product)}
              >
                <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
