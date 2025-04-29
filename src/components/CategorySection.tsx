
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface Category {
  id: string;
  name: string;
  image: string;
  link: string;
}

const goldCategories: Category[] = [
  { id: "g1", name: "Necklaces", image: "/categories/gold-necklaces.jpg", link: "/gold/necklaces" },
  { id: "g2", name: "Rings", image: "/categories/gold-rings.jpg", link: "/gold/rings" },
  { id: "g3", name: "Bangles", image: "/categories/gold-bangles.jpg", link: "/gold/bangles" },
  { id: "g4", name: "Earrings", image: "/categories/gold-earrings.jpg", link: "/gold/earrings" },
];

const silverCategories: Category[] = [
  { id: "s1", name: "Anklets", image: "/categories/silver-anklets.jpg", link: "/silver/anklets" },
  { id: "s2", name: "Chains", image: "/categories/silver-chains.jpg", link: "/silver/chains" },
  { id: "s3", name: "Bracelets", image: "/categories/silver-bracelets.jpg", link: "/silver/bracelets" },
  { id: "s4", name: "Pendants", image: "/categories/silver-pendants.jpg", link: "/silver/pendants" },
];

const CategorySection = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-serif font-semibold text-center mb-4">Gold Collections</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
            Discover our exquisite gold jewelry collection crafted with the finest 22K and 24K gold
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {goldCategories.map((category) => (
              <Link to={category.link} key={category.id}>
                <Card className="overflow-hidden product-card h-full">
                  <div className="relative h-40 sm:h-48 overflow-hidden bg-gray-100">
                    <img 
                      src={category.image || "/placeholder.svg"} 
                      alt={category.name} 
                      className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        e.currentTarget.src = "/placeholder.svg";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <CardContent className="p-4">
                        <h3 className="font-serif text-lg font-medium text-white">
                          {category.name}
                        </h3>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-3xl font-serif font-semibold text-center mb-4">Silver Collections</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
            Browse our premium silver jewelry collection featuring elegant designs and superior craftsmanship
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {silverCategories.map((category) => (
              <Link to={category.link} key={category.id}>
                <Card className="overflow-hidden product-card h-full">
                  <div className="relative h-40 sm:h-48 overflow-hidden bg-gray-100">
                    <img 
                      src={category.image || "/placeholder.svg"} 
                      alt={category.name} 
                      className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        e.currentTarget.src = "/placeholder.svg";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <CardContent className="p-4">
                        <h3 className="font-serif text-lg font-medium text-white">
                          {category.name}
                        </h3>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
