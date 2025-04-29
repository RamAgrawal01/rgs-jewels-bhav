
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-gold-light/20 to-silver-light/20 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-serif font-bold text-center mb-2">About RGS Jewellers</h1>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
              A legacy of elegance and craftsmanship since 1985
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-serif font-semibold mb-6">Our Story</h2>
              <p className="mb-4 text-gray-700">
                RGS Jewellers was founded in 1985 by Ram Gopal Sharma with a vision to create exquisite jewelry that combines traditional Indian craftsmanship with contemporary designs. What started as a small family store has now grown into one of the most trusted jewelry brands in India.
              </p>
              <p className="mb-4 text-gray-700">
                For over three decades, we have been committed to providing our customers with the finest quality gold and silver jewelry, each piece crafted with precision and passion by our skilled artisans.
              </p>
              <p className="text-gray-700">
                Today, led by the third generation of the Sharma family, RGS Jewellers continues to uphold its legacy of excellence, trust, and innovation in the jewelry industry.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1626784215021-2fbed52493ac?w=800&auto=format&fit=crop&q=80" 
                alt="RGS Jewellers Workshop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-serif font-semibold text-center mb-10">Why Choose RGS Jewellers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="h-16 w-16 rounded-full bg-gold-light/30 flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold-dark"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
                  </div>
                  <h3 className="text-xl font-medium text-center mb-2">Authentic Craftsmanship</h3>
                  <p className="text-center text-gray-600">
                    Every piece is handcrafted by our skilled artisans using traditional techniques passed down through generations.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="h-16 w-16 rounded-full bg-gold-light/30 flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold-dark"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
                  </div>
                  <h3 className="text-xl font-medium text-center mb-2">Quality Assurance</h3>
                  <p className="text-center text-gray-600">
                    We use only certified precious metals and stones, ensuring that each piece meets the highest quality standards.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="h-16 w-16 rounded-full bg-gold-light/30 flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold-dark"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
                  </div>
                  <h3 className="text-xl font-medium text-center mb-2">Trust & Transparency</h3>
                  <p className="text-center text-gray-600">
                    We believe in complete transparency in our pricing and provide detailed certificates for all our jewelry.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold mb-6">Visit Our Store</h2>
            <p className="mb-6 text-gray-700">
              We invite you to visit our flagship store and experience our exquisite collection of gold and silver jewelry. Our knowledgeable staff will be happy to assist you in finding the perfect piece for any occasion.
            </p>
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2">Store Hours</h3>
              <p className="text-gray-700">Monday to Saturday: 10:00 AM - 8:00 PM</p>
              <p className="text-gray-700">Sunday: 11:00 AM - 6:00 PM</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Contact Information</h3>
              <p className="text-gray-700">Address: 123 Jewelry Lane, Luxury Market, Delhi, India</p>
              <p className="text-gray-700">Phone: +91 98765 43210</p>
              <p className="text-gray-700">Email: info@rgsjewellers.com</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
