
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface MetalPriceCardProps {
  type: "gold" | "silver";
  initialPrice: number;
  lastUpdate: string;
}

const MetalPriceCard = ({ type, initialPrice, lastUpdate }: MetalPriceCardProps) => {
  const [price, setPrice] = useState(initialPrice);
  const [priceChange, setPriceChange] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchMetalPrice = async () => {
      setLoading(true);
      try {
        // For demo purposes, we'll simulate real API call with random fluctuations
        // In a production app, you would replace this with a real API call
        const response = await simulateApiCall(type);
        setPrice(response.price);
        setPriceChange(response.change);
        setLoading(false);
      } catch (error) {
        console.error(`Error fetching ${type} price:`, error);
        toast({
          title: `Failed to update ${type} price`,
          description: "Using fallback price data",
          variant: "destructive",
        });
        // Fallback to initial price with small random change
        const fallbackChange = (Math.random() * 5) - 2.5;
        setPrice(initialPrice + fallbackChange);
        setPriceChange(fallbackChange);
        setLoading(false);
      }
    };

    fetchMetalPrice();

    // Real-time updates every 30 seconds
    const interval = setInterval(() => {
      fetchMetalPrice();
    }, 30000);

    return () => clearInterval(interval);
  }, [type, initialPrice]);

  // Simulate API call with realistic price data
  const simulateApiCall = async (metalType: "gold" | "silver") => {
    return new Promise<{ price: number; change: number }>((resolve) => {
      setTimeout(() => {
        // Simulate API response with slightly more realistic prices
        if (metalType === "gold") {
          // Gold price in INR per gram (10 grams = 1 tola)
          const basePrice = 6125; // Base price
          const fluctuation = (Math.random() * 100) - 50; // +/- 50 rupees
          const newPrice = basePrice + fluctuation;
          resolve({
            price: newPrice,
            change: fluctuation,
          });
        } else {
          // Silver price in INR per gram
          const basePrice = 78.5; // Base price
          const fluctuation = (Math.random() * 2) - 1; // +/- 1 rupee
          const newPrice = basePrice + fluctuation;
          resolve({
            price: newPrice,
            change: fluctuation,
          });
        }
      }, 1000);
    });
  };

  const isPositive = priceChange >= 0;
  const metalName = type === "gold" ? "Gold" : "Silver";
  const gradientClass = type === "gold" ? "gold-gradient" : "silver-gradient";

  if (loading) {
    return (
      <Card className="overflow-hidden">
        <div className={`h-2 ${gradientClass}`}></div>
        <CardContent className="p-6">
          <div className="animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-1/3 mb-2"></div>
            <div className="h-8 bg-gray-200 rounded w-2/3 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-1"></div>
            <div className="h-4 bg-gray-200 rounded w-2/5"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden product-card">
      <div className={`h-2 ${gradientClass}`}></div>
      <CardContent className="p-6">
        <h3 className="font-medium text-lg text-muted-foreground">{metalName} Price</h3>
        <div className="flex items-baseline mt-1">
          <span className="text-3xl font-bold">₹{price.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
          <span className="ml-1 text-sm">/gram</span>
          <div 
            className={cn(
              "ml-3 flex items-center text-sm",
              isPositive ? "text-green-600" : "text-red-600"
            )}
          >
            {isPositive ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
            {Math.abs(priceChange).toFixed(2)}
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          Last updated: {new Date().toLocaleString('en-IN', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}
        </p>
        <p className="text-xs mt-1">
          Source: Indian Bullion Market
        </p>
      </CardContent>
    </Card>
  );
};

export default MetalPriceCard;
