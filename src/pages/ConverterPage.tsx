
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MeasurementConverter from "@/components/MeasurementConverter";
import { Card, CardContent } from "@/components/ui/card";

const ConverterPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-serif font-bold text-center mb-2">Jewelry Measurement Converter</h1>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
              Convert between different jewelry weight measurements - Gram, Aana, and Ratti
            </p>
            
            <div className="max-w-3xl mx-auto mb-12">
              <MeasurementConverter />
            </div>
            
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-serif font-semibold mb-6">Understanding Jewelry Measurements</h2>
              
              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium mb-3">Gram</h3>
                    <p className="text-gray-700">
                      The gram is the international standard unit of mass in the metric system. 
                      In jewelry, it's commonly used to measure the weight of precious metals.
                    </p>
                    <div className="mt-4 text-sm">
                      <p>1 gram = 1.372 aana</p>
                      <p>1 gram = 8.233 ratti</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium mb-3">Aana</h3>
                    <p className="text-gray-700">
                      Aana is a traditional Indian unit of measurement used in jewelry. 
                      It's particularly common in northern parts of India for gold and silver.
                    </p>
                    <div className="mt-4 text-sm">
                      <p>1 aana = 0.729 grams</p>
                      <p>1 aana = 6 ratti</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium mb-3">Ratti</h3>
                    <p className="text-gray-700">
                      Ratti is a traditional Indian unit used for measuring gemstones and precious metals.
                      It is derived from the weight of a specific seed.
                    </p>
                    <div className="mt-4 text-sm">
                      <p>1 ratti = 0.121 grams</p>
                      <p>1 ratti = 0.167 aana</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-10">
                <h2 className="text-2xl font-serif font-semibold mb-4">Common Conversion Tips</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>For quick estimation, 10 grams of gold is approximately 13.72 aana</li>
                  <li>1 tola (a common unit in South Asia) is equal to 11.66 grams</li>
                  <li>6 ratti makes 1 aana in traditional measurement</li>
                  <li>1 ounce of gold (international measurement) equals approximately 31.1 grams</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ConverterPage;
