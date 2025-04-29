
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Conversion rates
const CONVERSIONS = {
  gram: {
    aana: 0.625, // 1 gram = 0.625 aana
    ratti: 5.0   // 1 gram = 5.0 ratti
  },
  aana: {
    gram: 1.6,   // 1 aana = 1.6 grams
    ratti: 8.0   // 1 aana = 8.0 ratti
  },
  ratti: {
    gram: 0.2,   // 1 ratti = 0.2 grams
    aana: 0.125  // 1 ratti = 0.125 aana
  }
};

const MeasurementConverter = () => {
  const [inputValue, setInputValue] = useState<string>("1");
  const [inputUnit, setInputUnit] = useState<"gram" | "aana" | "ratti">("gram");
  const [outputValues, setOutputValues] = useState<{
    gram: string;
    aana: string;
    ratti: string;
  }>({
    gram: "1",
    aana: CONVERSIONS.gram.aana.toString(),
    ratti: CONVERSIONS.gram.ratti.toString(),
  });
  const [metal, setMetal] = useState<"gold" | "silver">("gold");

  useEffect(() => {
    convertValue();
  }, [inputValue, inputUnit]);

  const convertValue = () => {
    const numValue = parseFloat(inputValue) || 0;
    
    const results = {
      gram: "0",
      aana: "0",
      ratti: "0",
    };
    
    // Set the input unit value
    results[inputUnit] = numValue.toString();
    
    // Calculate the other values
    if (inputUnit === "gram") {
      results.aana = (numValue * CONVERSIONS.gram.aana).toFixed(3);
      results.ratti = (numValue * CONVERSIONS.gram.ratti).toFixed(2);
    } else if (inputUnit === "aana") {
      results.gram = (numValue * CONVERSIONS.aana.gram).toFixed(3);
      results.ratti = (numValue * CONVERSIONS.aana.ratti).toFixed(2);
    } else if (inputUnit === "ratti") {
      results.gram = (numValue * CONVERSIONS.ratti.gram).toFixed(3);
      results.aana = (numValue * CONVERSIONS.ratti.aana).toFixed(3);
    }
    
    setOutputValues(results as any);
  };

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="text-center font-serif">Jewelry Measurement Converter</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="gold" onValueChange={(val: any) => setMetal(val)} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="gold" className="font-medium">Gold</TabsTrigger>
            <TabsTrigger value="silver" className="font-medium">Silver</TabsTrigger>
          </TabsList>
          
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="inputValue">Enter Value</Label>
                <Input
                  id="inputValue"
                  type="number"
                  min="0"
                  step="0.001"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="inputUnit">Unit</Label>
                <Select
                  value={inputUnit}
                  onValueChange={(val: any) => setInputUnit(val)}
                >
                  <SelectTrigger id="inputUnit">
                    <SelectValue placeholder="Select unit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gram">Gram</SelectItem>
                    <SelectItem value="aana">Aana</SelectItem>
                    <SelectItem value="ratti">Ratti</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="pt-4 border-t">
              <h4 className="font-medium mb-4">Converted Values:</h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-3 border rounded-md bg-muted/30">
                  <div className="text-sm font-medium mb-1">Grams</div>
                  <div className="text-lg font-bold">{outputValues.gram}</div>
                </div>
                <div className="p-3 border rounded-md bg-muted/30">
                  <div className="text-sm font-medium mb-1">Aana</div>
                  <div className="text-lg font-bold">{outputValues.aana}</div>
                </div>
                <div className="p-3 border rounded-md bg-muted/30">
                  <div className="text-sm font-medium mb-1">Ratti</div>
                  <div className="text-lg font-bold">{outputValues.ratti}</div>
                </div>
              </div>
            </div>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default MeasurementConverter;
