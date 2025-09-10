import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock } from 'lucide-react';

const ScrollingTicker: React.FC = () => {
  const [location, setLocation] = useState('Getting location...');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Get user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // In a real app, you'd reverse geocode these coordinates
          setLocation('Your Current Location');
        },
        () => {
          setLocation('Location unavailable');
        }
      );
    }

    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const tickerItems = [
    `📍 ${location}`,
    `⏰ ${currentTime.toLocaleTimeString()}`,
    '🐾 Welcome to FurEver Care',
    '💝 Your pet deserves the best care',
    '🏥 Emergency vet services available 24/7',
    '🎯 Find the perfect pet products',
    '📚 Access expert training tips',
  ];

  return (
    <div className="bg-gradient-to-r from-mint-500 to-sky-500 text-white py-2 overflow-hidden">
      <motion.div
        animate={{ x: [-1000, 1000] }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: 'linear' 
        }}
        className="flex items-center space-x-8 whitespace-nowrap font-poppins text-sm"
      >
        {tickerItems.map((item, index) => (
          <span key={index} className="flex items-center space-x-2">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollingTicker;