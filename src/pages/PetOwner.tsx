import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, PawPrint, Users, BookOpen, ShoppingBag, Play, Activity, Phone } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';
import ScrollingTicker from '../components/ScrollingTicker';

// Import data
import productsData from '../data/products.json';
import groomingData from '../data/grooming.json';
import healthTipsData from '../data/healthTips.json';
import trainingTipsData from '../data/trainingTips.json';
import emergencyContactsData from '../data/emergencyContacts.json';

const PetOwner: React.FC = () => {
  const { user, pet, setPet } = useAppContext();
  const [showPetForm, setShowPetForm] = useState(!pet);
  const [petForm, setPetForm] = useState({
    name: pet?.name || '',
    species: pet?.species || '',
    breed: pet?.breed || '',
    age: pet?.age || ''
  });

  const handlePetFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPet(petForm);
    setShowPetForm(false);
  };

  const dashboardCards = [
    {
      title: 'My Pet Profile',
      icon: PawPrint,
      color: 'from-mint-400 to-mint-600',
      action: () => setShowPetForm(true)
    },
    {
      title: 'Pet Products',
      icon: ShoppingBag,
      color: 'from-mauve-400 to-mauve-600',
      count: productsData.length
    },
    {
      title: 'Training Tips',
      icon: BookOpen,
      color: 'from-sky-400 to-sky-600',
      count: trainingTipsData.length
    },
    {
      title: 'Health Guide',
      icon: Activity,
      color: 'from-cream-400 to-cream-600',
      count: healthTipsData.length
    }
  ];

  const feedingGuide = {
    puppies: [
      { age: '6-12 weeks', meals: 4, amount: '1/4 - 1/2 cup' },
      { age: '3-6 months', meals: 3, amount: '1/2 - 1 cup' },
      { age: '6-12 months', meals: 2, amount: '1 - 1.5 cups' }
    ],
    adultDogs: [
      { weight: '5-10 lbs', meals: 2, amount: '1/3 - 1/2 cup' },
      { weight: '10-25 lbs', meals: 2, amount: '1/2 - 1 cup' },
      { weight: '25-50 lbs', meals: 2, amount: '1 - 2 cups' },
      { weight: '50+ lbs', meals: 2, amount: '2 - 3 cups' }
    ],
    cats: [
      { age: 'Kitten', meals: 3, amount: '1/4 - 1/2 cup' },
      { age: 'Adult', meals: 2, amount: '1/4 - 1/2 cup' },
      { age: 'Senior', meals: 2, amount: '1/4 - 1/3 cup' }
    ]
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
            Welcome back, {user.name}! 🐾
          </h1>
          <p className="font-poppins text-lg text-gray-600 dark:text-gray-300">
            Everything you need to care for your furry friend
          </p>
        </motion.div>

        {/* Pet Form Modal */}
        {showPetForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => !pet && setShowPetForm(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="font-nunito font-bold text-2xl text-gray-800 dark:text-white mb-6 text-center">
                {pet ? 'Edit Pet Profile' : 'Tell us about your pet'}
              </h2>
              <form onSubmit={handlePetFormSubmit} className="space-y-4">
                <div>
                  <label className="block font-poppins font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Pet's Name
                  </label>
                  <input
                    type="text"
                    required
                    value={petForm.name}
                    onChange={(e) => setPetForm({ ...petForm, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-mauve-500"
                    placeholder="Enter pet's name"
                  />
                </div>
                <div>
                  <label className="block font-poppins font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Species
                  </label>
                  <select
                    required
                    value={petForm.species}
                    onChange={(e) => setPetForm({ ...petForm, species: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-mauve-500"
                  >
                    <option value="">Select species</option>
                    <option value="Dog">Dog</option>
                    <option value="Cat">Cat</option>
                    <option value="Rabbit">Rabbit</option>
                    <option value="Bird">Bird</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block font-poppins font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Breed
                  </label>
                  <input
                    type="text"
                    required
                    value={petForm.breed}
                    onChange={(e) => setPetForm({ ...petForm, breed: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-mauve-500"
                    placeholder="Enter breed"
                  />
                </div>
                <div>
                  <label className="block font-poppins font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Age
                  </label>
                  <input
                    type="text"
                    required
                    value={petForm.age}
                    onChange={(e) => setPetForm({ ...petForm, age: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-mauve-500"
                    placeholder="e.g., 2 years, 6 months"
                  />
                </div>
                <div className="flex space-x-3 pt-4">
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-gradient-to-r from-mauve-500 to-mint-500 text-white rounded-xl font-poppins font-semibold hover:shadow-lg transition-shadow"
                  >
                    {pet ? 'Update' : 'Save'} Pet
                  </button>
                  {pet && (
                    <button
                      type="button"
                      onClick={() => setShowPetForm(false)}
                      className="px-6 py-3 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-poppins font-medium"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {dashboardCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={card.action}
              className={`bg-gradient-to-br ${card.color} text-white rounded-2xl p-6 cursor-pointer shadow-lg hover:shadow-xl transition-all`}
            >
              <card.icon className="w-8 h-8 mb-4" />
              <h3 className="font-nunito font-semibold text-lg mb-2">{card.title}</h3>
              {card.count && (
                <p className="font-poppins text-sm opacity-90">{card.count} items available</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Pet Profile */}
        {pet && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-nunito font-bold text-2xl text-gray-800 dark:text-white">
                {pet.name}'s Profile
              </h2>
              <button
                onClick={() => setShowPetForm(true)}
                className="px-4 py-2 bg-mauve-500 text-white rounded-lg font-poppins text-sm hover:bg-mauve-600 transition-colors"
              >
                Edit
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-mint-50 dark:bg-mint-900/20 rounded-xl">
                <PawPrint className="w-8 h-8 text-mint-600 mx-auto mb-2" />
                <h3 className="font-poppins font-semibold text-gray-800 dark:text-white">{pet.name}</h3>
              </div>
              <div className="text-center p-4 bg-sky-50 dark:bg-sky-900/20 rounded-xl">
                <span className="text-2xl mb-2 block">🐾</span>
                <p className="font-poppins text-sm text-gray-600 dark:text-gray-300">Species</p>
                <h3 className="font-poppins font-semibold text-gray-800 dark:text-white">{pet.species}</h3>
              </div>
              <div className="text-center p-4 bg-mauve-50 dark:bg-mauve-900/20 rounded-xl">
                <span className="text-2xl mb-2 block">🏷️</span>
                <p className="font-poppins text-sm text-gray-600 dark:text-gray-300">Breed</p>
                <h3 className="font-poppins font-semibold text-gray-800 dark:text-white">{pet.breed}</h3>
              </div>
              <div className="text-center p-4 bg-cream-50 dark:bg-cream-900/20 rounded-xl">
                <span className="text-2xl mb-2 block">🎂</span>
                <p className="font-poppins text-sm text-gray-600 dark:text-gray-300">Age</p>
                <h3 className="font-poppins font-semibold text-gray-800 dark:text-white">{pet.age}</h3>
              </div>
            </div>

            {/* Vaccination Status */}
            <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-mint-50 dark:from-green-900/20 dark:to-mint-900/20 rounded-xl">
              <h3 className="font-nunito font-semibold text-lg text-gray-800 dark:text-white mb-4">
                Vaccination Status
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-poppins text-sm text-gray-700 dark:text-gray-300">Rabies: Current</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-poppins text-sm text-gray-700 dark:text-gray-300">DHPP: Current</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="font-poppins text-sm text-gray-700 dark:text-gray-300">Bordetella: Due Soon</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Feeding Guide */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
          >
            <h2 className="font-nunito font-bold text-2xl text-gray-800 dark:text-white mb-6">
              Feeding Guide 🍽️
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-poppins font-semibold text-lg text-mauve-600 dark:text-mauve-400 mb-3">
                  Kids
                </h3>
                {feedingGuide.puppies.map((guide, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                    <span className="font-poppins text-sm text-gray-600 dark:text-gray-300">{guide.age}</span>
                    <span className="font-poppins text-sm font-medium text-gray-800 dark:text-white">
                      {guide.meals}x daily, {guide.amount}
                    </span>
                  </div>
                ))}
              </div>
              <div>
                <h3 className="font-poppins font-semibold text-lg text-mint-600 dark:text-mint-400 mb-3">
                  adults
                </h3>
                {feedingGuide.adultDogs.map((guide, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                    <span className="font-poppins text-sm text-gray-600 dark:text-gray-300">{guide.weight}</span>
                    <span className="font-poppins text-sm font-medium text-gray-800 dark:text-white">
                      {guide.meals}x daily, {guide.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Emergency Contacts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
          >
            <h2 className="font-nunito font-bold text-2xl text-gray-800 dark:text-white mb-6 flex items-center">
              <Phone className="w-6 h-6 text-red-500 mr-2" />
              Emergency Contacts
            </h2>
            <div className="space-y-4">
              {emergencyContactsData.map((contact) => (
                <div key={contact.id} className="p-4 bg-red-50 dark:bg-red-900/20 rounded-xl">
                  <h3 className="font-poppins font-semibold text-gray-800 dark:text-white">
                    {contact.name}
                  </h3>
                  <p className="font-poppins text-sm text-gray-600 dark:text-gray-300 mb-2">
                    {contact.type} • {contact.hours}
                  </p>
                  <a
                    href={`tel:${contact.phone}`}
                    className="inline-flex items-center space-x-2 text-red-600 dark:text-red-400 font-poppins font-medium hover:text-red-700 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{contact.phone}</span>
                  </a>
                  <p className="font-poppins text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {contact.address}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {groomingData.map((video) => {
    // Convert normal YouTube link → embed link
    const embedUrl = video.videoId.replace("watch?v=", "embed/");

    return (
      <div
        key={video.id}
        className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden"
      >
        <div className="aspect-video">
          <iframe
            src={embedUrl}
            title={video.title}
            className="w-full h-full rounded-t-xl"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-4">
          <h3 className="font-poppins font-semibold text-gray-800 dark:text-white mb-2">
            {video.title}
          </h3>
          <p className="font-poppins text-sm text-gray-600 dark:text-gray-300 mb-2">
            {video.description}
          </p>
          <span className="font-poppins text-xs text-gray-500 dark:text-gray-400">
            Duration: {video.duration}
          </span>
        </div>
      </div>
    );
  })}
</div>

        {/* Health & Training Tips */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Health Tips */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
          >
            <h2 className="font-nunito font-bold text-2xl text-gray-800 dark:text-white mb-6 flex items-center">
              <Activity className="w-6 h-6 text-mint-500 mr-2" />
              Health Tips
            </h2>
            <div className="space-y-4">
              {healthTipsData.map((tip) => (
                <div key={tip.id} className="p-4 bg-mint-50 dark:bg-mint-900/20 rounded-xl">
                  <h3 className="font-poppins font-semibold text-gray-800 dark:text-white mb-2">
                    {tip.title}
                  </h3>
                  <p className="font-poppins text-sm text-gray-600 dark:text-gray-300 mb-3">
                    {tip.content}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tip.tips.map((t, index) => (
                      <span key={index} className="px-2 py-1 bg-mint-200 dark:bg-mint-800 text-mint-800 dark:text-mint-200 rounded-full text-xs font-poppins">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Training Tips */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
          >
            <h2 className="font-nunito font-bold text-2xl text-gray-800 dark:text-white mb-6 flex items-center">
              <BookOpen className="w-6 h-6 text-mauve-500 mr-2" />
              Training Tips
            </h2>
            <div className="space-y-4">
              {trainingTipsData.map((tip) => (
                <div key={tip.id} className="p-4 bg-mauve-50 dark:bg-mauve-900/20 rounded-xl">
                  <h3 className="font-poppins font-semibold text-gray-800 dark:text-white mb-2">
                    {tip.title}
                  </h3>
                  <p className="font-poppins text-sm text-gray-600 dark:text-gray-300 mb-3">
                    {tip.content}
                  </p>
                  <ul className="space-y-1">
                    {tip.lessons.map((lesson, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-mauve-500 rounded-full"></div>
                        <span className="font-poppins text-sm text-gray-700 dark:text-gray-300">
                          {lesson}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PetOwner;