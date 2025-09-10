import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';
import Clock from './Clock';
import VisitorCounter from './VisitorCounter';

const Footer: React.FC = () => {
  const { visitorCount } = useAppContext();

  return (
    <motion.footer 
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-mauve-600 via-mauve-700 to-mauve-800 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center"
              >
                <Heart className="w-4 h-4 text-mauve-600" />
              </motion.div>
              <span className="font-nunito font-bold text-2xl">FurEver Care</span>
            </div>
            <p className="font-poppins text-mauve-100 mb-6 max-w-md">
              Your trusted companion in pet care. Connecting pet owners, veterinarians, 
              and shelters to create a loving community for all furry friends.
            </p>
            <div className="flex items-center space-x-4">
              <Clock />
              <VisitorCounter />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-nunito font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 font-poppins">
              <li>
                <a href="/about" className="text-mauve-100 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-mauve-100 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/feedback" className="text-mauve-100 hover:text-white transition-colors">
                  Feedback
                </a>
              </li>
              <li>
                <a href="/products" className="text-mauve-100 hover:text-white transition-colors">
                  Pet Products
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-nunito font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3 font-poppins">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-mauve-200" />
                <span className="text-mauve-100">hello@furevercare.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-mauve-200" />
                <span className="text-mauve-100">(555) FUREVER</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-mauve-200" />
                <span className="text-mauve-100">Pet Care Plaza, Love Street</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-mauve-500 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-poppins text-mauve-200 text-sm mb-4 md:mb-0">
            © 2025 FurEver Care. Made with ❤️ for pets everywhere.
          </p>
          <div className="flex space-x-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="text-mauve-200 hover:text-white transition-colors cursor-pointer"
            >
              <Heart className="w-5 h-5" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;