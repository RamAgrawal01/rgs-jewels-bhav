import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CONVERSIONS = {
  gram: { aana: 1.372212692, ratti: 8.233276158 },
  aana: { gram: 0.72874, ratti: 6 },
  ratti: { gram: 0.121457, aana: 0.166667 },
};

const MeasurementConverter = () => {
  const [inputValue, setInputValue] = useState("1");
  const [inputUnit, setInputUnit] = useState<"gram" | "aana" | "ratti">("gram");
  const [outputValues, setOutputValues] = useState({ gram: "1", aana: CONVERSIONS.gram.aana.toString(), ratti: CONVERSIONS.gram.ratti.toString() });
  const [metal, setMetal] = useState<"gold" | "silver">("gold");

  useEffect(() => { convertValue(); }, [inputValue, inputUnit]);

  const convertValue = () => {
    const numValue = parseFloat(inputValue) || 0;
    const results = { gram: "0", aana: "0", ratti: "0" };
    results[inputUnit] = numValue.toString();

    if (inputUnit === "gram") {
      results.aana = (numValue * CONVERSIONS.gram.aana).toFixed(4);
      results.ratti = (numValue * CONVERSIONS.gram.ratti).toFixed(2);
    } else if (inputUnit === "aana") {
      results.gram = (numValue * CONVERSIONS.aana.gram).toFixed(4);
      results.ratti = (numValue * CONVERSIONS.aana.ratti).toFixed(2);
    } else if (inputUnit === "ratti") {
      results.gram = (numValue * CONVERSIONS.ratti.gram).toFixed(4);
      results.aana = (numValue * CONVERSIONS.ratti.aana).toFixed(4);
    }

    setOutputValues(results);
  };

  const metalTheme = metal === "gold"
    ? "from-yellow-400 via-yellow-500 to-yellow-600 text-yellow-950"
    : "from-slate-300 via-slate-200 to-white text-gray-800";

  const bgGlass = "bg-white/20 backdrop-blur-lg shadow-lg border border-white/20";

  return (
    <Card className={`shadow-xl rounded-2xl p-1 bg-gradient-to-tr ${metalTheme}`}>
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-serif font-bold">Jewellry Converter</CardTitle>
      </CardHeader>
      <CardContent className={`rounded-xl p-6 ${bgGlass}`}>
        <Tabs defaultValue="gold" onValueChange={(val) => setMetal(val)} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6 bg-black/10 rounded-xl overflow-hidden">
            <TabsTrigger value="gold" className="data-[state=active]:bg-yellow-400/80 data-[state=active]:text-black font-semibold py-2 transition">Gold</TabsTrigger>
            <TabsTrigger value="silver" className="data-[state=active]:bg-slate-300/80 data-[state=active]:text-black font-semibold py-2 transition">Silver</TabsTrigger>
          </TabsList>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm text-black">Enter Value</Label>
                <Input
                  type="number"
                  min="0"
                  step="0.001"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="rounded-lg shadow-md bg-white/90 text-black"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm text-black">Unit</Label>
                <Select value={inputUnit} onValueChange={(val) => setInputUnit(val as any)}>
                  <SelectTrigger className="rounded-lg shadow-md bg-white/90 text-black">
                    <SelectValue placeholder="Select unit" />
                  </SelectTrigger>
                  <SelectContent className="bg-white text-black">
                    <SelectItem value="gram">Gram</SelectItem>
                    <SelectItem value="aana">Aana</SelectItem>
                    <SelectItem value="ratti">Ratti</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="pt-4 border-t border-white/30">
              <h4 className="font-medium text-black mb-4 text-lg">Converted Values:</h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                {["gram", "aana", "ratti"].map((unit) => (
                  <div key={unit} className={`p-4 rounded-xl ${bgGlass}`}>
                    <div className="text-sm text-black capitalize mb-1">{unit}</div>
                    <div className="text-xl font-bold text-black">{outputValues[unit as keyof typeof outputValues]}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default MeasurementConverter;
