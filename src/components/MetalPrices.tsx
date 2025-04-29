// MetalPrices.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import MetalPriceCard from "./MetalPriceCard";

const GOLD_API_URL = "https://api.gold-api.com/price/XAU";
const SILVER_API_URL = "https://api.gold-api.com/price/XAG";
const EXCHANGE_RATE_API_URL = "https://api.exchangerate-api.com/v4/latest/USD";

const getConversionRate = async (): Promise<number> => {
  const response = await axios.get(EXCHANGE_RATE_API_URL);
  return response.data.rates.INR;
};

const getMetalPrice = async (
  apiUrl: string,
  divisor: number,
  grams: number
): Promise<number> => {
  const response = await axios.get(apiUrl);
  const pricePerOunce = response.data.price;
  const pricePerGramUSD = pricePerOunce / divisor;
  const conversionRate = await getConversionRate();
  return pricePerGramUSD * conversionRate * grams;
};

const MetalPrices: React.FC = () => {
  const [goldPrice, setGoldPrice] = useState(0);
  const [silverPrice, setSilverPrice] = useState(0);
  const [goldChange, setGoldChange] = useState(0);
  const [silverChange, setSilverChange] = useState(0);

  const fetchPrices = async () => {
    try {
      const newGoldPrice = await getMetalPrice(GOLD_API_URL, 29.62, 10);     // 10g gold
      const newSilverPrice = await getMetalPrice(SILVER_API_URL, 29.37, 1000); // 1kg silver

      if (goldPrice) setGoldChange(newGoldPrice - goldPrice);
      if (silverPrice) setSilverChange(newSilverPrice - silverPrice);

      setGoldPrice(newGoldPrice);
      setSilverPrice(newSilverPrice);
    } catch (err) {
      console.error("Error fetching metal prices:", err);
    }
  };

  useEffect(() => {
    fetchPrices();
    const interval = setInterval(fetchPrices, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Live Metal Prices</h1>
      <div className="flex flex-col md:flex-row justify-center">
        <MetalPriceCard type="gold" price={goldPrice} change={goldChange} />
        <MetalPriceCard type="silver" price={silverPrice} change={silverChange} />
      </div>
    </div>
  );
};

export default MetalPrices;
