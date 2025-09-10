import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Filter, MapPin, Calendar, Award, Users } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';
import ScrollingTicker from '../components/ScrollingTicker';

// Import data
import adoptionsData from '../data/adoptions.json';

const Shelter: React.FC = () => {
  const { user } = useAppContext();
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const filterOptions = ['All', 'Dog', 'Cat', 'Rabbit'];

  const filteredPets = selectedFilter === 'All'
    ? adoptionsData
    : adoptionsData.filter(pet => pet.species === selectedFilter);

  const successStories = [
    {
      id: 1,
      title: "Bella Found Her Forever Home",
      image: "https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg",
      story: "After 6 months at our shelter, Bella finally found her perfect family. She's now living her best life with two kids who adore her!",
      adoptionDate: "December 2024",
      family: "The Johnson Family"
    },
    {
      id: 2,
      title: "Max's Second Chance",
      image: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
      story: "Max was a senior cat who thought he'd never find love again. Thanks to our special senior adoption program, he's now spoiled rotten!",
      adoptionDate: "November 2024",
      family: "The Rodriguez Family"
    },
    {
      id: 3,
      title: "Luna's Lucky Day",
      image: "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg",
      story: "Luna came to us as a scared kitten. With lots of love and patience, she blossomed into a confident cat and found her perfect match.",
      adoptionDate: "October 2024",
      family: "The Chen Family"
    }
  ];

  const events = [
    {
      id: 1,
      title: "Weekend Adoption Drive",
      date: "January 27-28, 2024",
      type: "Adoption Event",
      description: "Meet your new best friend! Special adoption rates for senior pets.",
      location: "Central Park Pavilion"
    },
    {
      id: 2,
      title: "Free Vaccination Clinic",
      date: "February 3, 2024",
      type: "Health Clinic",
      description: "Free vaccines and health checkups for adopted pets.",
      location: "Shelter Main Building"
    },
    {
      id: 3,
      title: "Pet Training Workshop",
      date: "February 10, 2024",
      type: "Educational",
      description: "Learn basic obedience and house training techniques.",
      location: "Community Center"
    }
  ];

  const nextStory = () => {
    setCurrentStoryIndex((prev) => (prev + 1) % successStories.length);
  };

  const prevStory = () => {
    setCurrentStoryIndex((prev) => (prev - 1 + successStories.length) % successStories.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-mint-50 to-sky-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <ScrollingTicker />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-nunito font-bold text-4xl text-gray-800 dark:text-white mb-4">
            Shelter Dashboard 🏠
          </h1>
          <p className="font-poppins text-lg text-gray-600 dark:text-gray-300">
            Welcome back, {user.name}! Help connect loving pets with caring families
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-mint-400 to-mint-600 text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
          >
            <Heart className="w-8 h-8 mb-4" />
            <h3 className="font-nunito font-semibold text-lg mb-2">Available Pets</h3>
            <p className="font-poppins text-2xl font-bold">{adoptionsData.length}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-mauve-400 to-mauve-600 text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
          >
            <Award className="w-8 h-8 mb-4" />
            <h3 className="font-nunito font-semibold text-lg mb-2">Success Stories</h3>
            <p className="font-poppins text-2xl font-bold">{successStories.length}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-sky-400 to-sky-600 text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
          >
            <Calendar className="w-8 h-8 mb-4" />
            <h3 className="font-nunito font-semibold text-lg mb-2">Upcoming Events</h3>
            <p className="font-poppins text-2xl font-bold">{events.length}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-cream-400 to-cream-600 text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
          >
            <Users className="w-8 h-8 mb-4" />
            <h3 className="font-nunito font-semibold text-lg mb-2">Volunteers</h3>
            <p className="font-poppins text-2xl font-bold">24</p>
          </motion.div>
        </div>

        {/* Adoption Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h2 className="font-nunito font-bold text-2xl text-gray-800 dark:text-white mb-4 md:mb-0">
              Adoption Gallery 🐾
            </h2>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {filterOptions.map((filter) => (
                <motion.button
                  key={filter}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-2 rounded-full font-poppins font-medium text-sm transition-all ${selectedFilter === filter
                    ? 'bg-gradient-to-r from-mauve-500 to-mint-500 text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                >
                  {filter === 'All' ? '🐾' :
                    filter === 'Dog' ? '🐕' :
                      filter === 'Cat' ? '🐱' : '🐰'} {filter}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Pet Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPets.map((pet, index) => (
              <motion.div
                key={pet.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-cream-50 to-mint-50 dark:from-gray-700 dark:to-gray-600 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={pet.image}
                    alt={pet.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-poppins font-medium">
                      {pet.species}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Heart className="w-6 h-6 text-red-500 filter drop-shadow-md" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-nunito font-bold text-xl text-gray-800 dark:text-white mb-2">
                    {pet.name}
                  </h3>
                  <p className="font-poppins text-sm text-gray-600 dark:text-gray-300 mb-1">
                    {pet.breed} • {pet.age}
                  </p>
                  <p className="font-poppins text-sm text-gray-700 dark:text-gray-300 mb-4">
                    {pet.description}
                  </p>

                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-4">
                    <MapPin className="w-3 h-3 mr-1" />
                    <span className="font-poppins">{pet.location}</span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      const query = encodeURIComponent(pet.location);
                      window.open(`https://www.google.com/maps/search/${query}`, '_blank');
                    }}
                    className="w-full py-3 bg-gradient-to-r from-mauve-500 to-mint-500 text-white rounded-lg font-poppins font-semibold hover:shadow-lg transition-shadow"
                  >
                    Meet {pet.name}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Success Stories Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
          >
            <h2 className="font-nunito font-bold text-2xl text-gray-800 dark:text-white mb-6">
              Success Stories 💝
            </h2>

            <div className="relative">
              <motion.div
                key={currentStoryIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="bg-gradient-to-br from-green-50 to-mint-50 dark:from-green-900/20 dark:to-mint-900/20 rounded-xl p-6"
              >
                <img
                  src={successStories[currentStoryIndex].image}
                  alt={successStories[currentStoryIndex].title}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="font-nunito font-semibold text-lg text-gray-800 dark:text-white mb-2">
                  {successStories[currentStoryIndex].title}
                </h3>
                <p className="font-poppins text-sm text-gray-600 dark:text-gray-300 mb-3">
                  {successStories[currentStoryIndex].story}
                </p>
                <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
                  <span>{successStories[currentStoryIndex].family}</span>
                  <span>{successStories[currentStoryIndex].adoptionDate}</span>
                </div>
              </motion.div>

              <div className="flex justify-between items-center mt-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevStory}
                  className="p-2 bg-mauve-500 text-white rounded-full hover:bg-mauve-600 transition-colors"
                >
                  ←
                </motion.button>
                <div className="flex space-x-2">
                  {successStories.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all ${index === currentStoryIndex ? 'bg-mauve-500' : 'bg-gray-300 dark:bg-gray-600'
                        }`}
                    />
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextStory}
                  className="p-2 bg-mauve-500 text-white rounded-full hover:bg-mauve-600 transition-colors"
                >
                  →
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Events List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
          >
            <h2 className="font-nunito font-bold text-2xl text-gray-800 dark:text-white mb-6 flex items-center">
              <Calendar className="w-6 h-6 text-sky-500 mr-2" />
              Upcoming Events
            </h2>

            <div className="space-y-4">
              {events.map((event) => (
                <div key={event.id} className="p-4 bg-sky-50 dark:bg-sky-900/20 rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-poppins font-semibold text-gray-800 dark:text-white">
                      {event.title}
                    </h3>
                    <span className="text-xs bg-sky-100 dark:bg-sky-800 text-sky-700 dark:text-sky-300 px-2 py-1 rounded-full">
                      {event.type}
                    </span>
                  </div>
                  <p className="font-poppins text-sm text-sky-600 dark:text-sky-400 mb-2">
                    📅 {event.date}
                  </p>
                  <p className="font-poppins text-sm text-gray-600 dark:text-gray-300 mb-2">
                    {event.description}
                  </p>
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <MapPin className="w-3 h-3 mr-1" />
                    <span className="font-poppins">{event.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Google Maps Embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
        >
          <h2 className="font-nunito font-bold text-2xl text-gray-800 dark:text-white mb-6 flex items-center">
            <MapPin className="w-6 h-6 text-mint-500 mr-2" />
            Visit Our Shelter
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="font-poppins font-semibold text-lg text-gray-800 dark:text-white mb-4">
                Happy Tails Animal Shelter
              </h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <p className="font-poppins">📍 123 Hope Street, Pet City, PC 12345</p>
                <p className="font-poppins">📞 (555) SHELTER</p>
                <p className="font-poppins">✉️ info@happytailsshelter.org</p>
                <p className="font-poppins">🕐 Mon-Fri: 9 AM - 6 PM, Sat-Sun: 10 AM - 4 PM</p>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const query = encodeURIComponent('Happy Tails Animal Shelter, 123 Hope Street, Pet City');
                  window.open(`https://www.google.com/maps/search/${query}`, '_blank');
                }}
                className="mt-6 px-6 py-3 bg-gradient-to-r from-mint-500 to-sky-500 text-white rounded-lg font-poppins font-semibold hover:shadow-lg transition-shadow"
              >
                Get Directions
              </motion.button>
            </div>

            <div className="bg-gray-100 dark:bg-gray-700 rounded-xl overflow-hidden w-full h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.7701906023717!2d-73.97376168459325!3d40.761432979326975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f9c5f5c1d1%3A0xf36f0e5a0e6dfc57!2sAnimal%20Rescue%20Shelter!5e0!3m2!1sen!2sus!4v1693401234567!5m2!1sen!2sus"
                className="w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pet Shelter Location"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Shelter;