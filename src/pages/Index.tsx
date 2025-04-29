
import HeroBanner from "@/components/HeroBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MetalPriceCard from "@/components/MetalPriceCard";
import MeasurementConverter from "@/components/MeasurementConverter";
import FeaturedProducts from "@/components/FeaturedProducts";
import CategorySection from "@/components/CategorySection";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";
import MetalPrices from "@/components/MetalPrices";


const Index = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    // Welcome toast
    toast({
      title: "Welcome to RGS Jewellers",
      description: "Discover our premium gold and silver jewelry collections",
      duration: 5000,
    });
  }, []);

  // Format current date for "last updated"
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroBanner />
        
        <div className="container mx-auto px-4 py-12">
          {/* <h2 className="text-3xl font-serif font-semibold text-center mb-8">Today's Metal Prices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <MetalPriceCard type="gold" initialPrice={6125} lastUpdate={formattedDate} />
            <MetalPriceCard type="silver" initialPrice={78.50} lastUpdate={formattedDate} />
          </div> */}
          <MetalPrices/>
        </div>
        
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-3xl mx-auto">
            <MeasurementConverter />
          </div>
        </div>
        
        <div className="container mx-auto px-4">
          <FeaturedProducts />
        </div>
        
        <CategorySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
