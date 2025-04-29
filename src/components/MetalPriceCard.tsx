
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetalPriceCardProps {
  type: "gold" | "silver";
  initialPrice: number;
  lastUpdate: string;
}

const MetalPriceCard = ({ type, initialPrice, lastUpdate }: MetalPriceCardProps) => {
  const [price, setPrice] = useState(initialPrice);
  const [priceChange, setPriceChange] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for initial data fetch
    const timer = setTimeout(() => {
      setLoading(false);
      // Random small fluctuation for demo purposes
      const fluctuation = (Math.random() * 10) - 5;
      setPrice(initialPrice + fluctuation);
      setPriceChange(fluctuation);
    }, 1500);

    return () => clearTimeout(timer);
  }, [initialPrice]);

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
          Last updated: {lastUpdate}
        </p>
        <p className="text-xs mt-1">
          Source: Indian Bullion Market
        </p>
      </CardContent>
    </Card>
  );
};

export default MetalPriceCard;
