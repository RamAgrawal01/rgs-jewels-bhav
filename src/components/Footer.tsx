
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 pt-10 pb-6">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 text-center md:text-left mb-8 md:mb-0">
            <h2 className="font-serif text-2xl mb-4 font-bold">RGS Jewellers</h2>
            <p className="mb-4">
              Premium gold and silver jewelry with the finest craftsmanship and design.
            </p>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2"><Link to="/" className="hover:text-gold-DEFAULT transition-colors">Home</Link></li>
              <li className="mb-2"><Link to="/gold" className="hover:text-gold-DEFAULT transition-colors">Gold Jewelry</Link></li>
              <li className="mb-2"><Link to="/silver" className="hover:text-gold-DEFAULT transition-colors">Silver Jewelry</Link></li>
              <li className="mb-2"><Link to="/converter" className="hover:text-gold-DEFAULT transition-colors">Measurement Converter</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul>
              <li className="mb-2"><Link to="/contact" className="hover:text-gold-DEFAULT transition-colors">Contact Us</Link></li>
              <li className="mb-2"><Link to="/shipping" className="hover:text-gold-DEFAULT transition-colors">Shipping Policy</Link></li>
              <li className="mb-2"><Link to="/returns" className="hover:text-gold-DEFAULT transition-colors">Returns & Exchanges</Link></li>
              <li className="mb-2"><Link to="/faq" className="hover:text-gold-DEFAULT transition-colors">FAQs</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">123 Jewelry Street</p>
            <p className="mb-2">New Delhi, India</p>
            <p className="mb-2">Phone: +91 98765 43210</p>
            <p className="mb-2">Email: info@rgsjewellers.com</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} RGS Jewellers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
