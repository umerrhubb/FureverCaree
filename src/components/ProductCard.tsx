import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, MapPin, ExternalLink } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  website: string;
  location: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { favorites, toggleFavorite } = useAppContext();
  const isFavorite = favorites.includes(product.id);

  const openLocation = () => {
    const query = encodeURIComponent(product.location);
    window.open(`https://www.google.com/maps/search/${query}`, '_blank');
  };

  const openWebsite = () => {
    window.open(product.website, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => toggleFavorite(product.id)}
          className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-md transition-colors ${
            isFavorite 
              ? 'bg-red-500 text-white' 
              : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
          }`}
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
        </motion.button>

        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={openLocation}
            className="p-2 rounded-full bg-white/90 text-mauve-600 hover:bg-mauve-500 hover:text-white transition-colors mr-2"
          >
            <MapPin className="w-4 h-4" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={openWebsite}
            className="p-2 rounded-full bg-white/90 text-mint-600 hover:bg-mint-500 hover:text-white transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-nunito font-semibold text-lg text-gray-800 dark:text-white leading-tight">
            {product.name}
          </h3>
          <span className="text-sm bg-mauve-100 dark:bg-mauve-900 text-mauve-700 dark:text-mauve-300 px-2 py-1 rounded-full">
            {product.category}
          </span>
        </div>

        <p className="font-poppins text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="text-2xl font-nunito font-bold text-mint-600 dark:text-mint-400">
            ${product.price}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={openWebsite}
            className="flex items-center space-x-2 bg-gradient-to-r from-mauve-500 to-mint-500 text-white px-4 py-2 rounded-full font-poppins font-medium text-sm hover:shadow-lg transition-shadow"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Buy Now</span>
          </motion.button>
        </div>

        <div className="flex items-center mt-3 text-gray-500 dark:text-gray-400">
          <MapPin className="w-3 h-3 mr-1" />
          <span className="font-poppins text-xs">{product.location}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;