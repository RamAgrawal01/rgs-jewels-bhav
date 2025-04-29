// MetalPriceCard.tsx
interface MetalPriceCardProps {
  type: "gold" | "silver";
  price: number;
  change: number;
}

const MetalPriceCard: React.FC<MetalPriceCardProps> = ({ type, price, change }) => {
  return (
    <div className="w-full md:w-1/2 p-4">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 text-center hover:shadow-xl transition duration-300">
        <h2 className="text-xl font-bold mb-2">
          {type === "gold" ? "Gold" : "Silver"} Price (per 10 gram)
        </h2>
        <p className="text-3xl font-semibold text-blue-700">₹{price.toFixed(2)}</p>
        <p className={`text-sm mt-2 ${change >= 0 ? "text-green-600" : "text-red-600"}`}>
          {change >= 0 ? "+" : ""}
          {change.toFixed(2)} INR since last update
        </p>
      </div>
    </div>
  );
};

export default MetalPriceCard;
