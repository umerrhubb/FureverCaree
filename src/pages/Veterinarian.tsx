import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Calendar, User, Clock, Search, MapPin, Mail, Phone } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';
import ScrollingTicker from '../components/ScrollingTicker';

// Import data
import vetsData from '../data/vets.json';

const Veterinarian: React.FC = () => {
  const { user } = useAppContext();
  const [vetInfo, setVetInfo] = useState({
    name: '',
    specialization: '',
    contact: '',
    email: '',
    location: '',
    address: ''
  });
  const [showVetForm, setShowVetForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [specializationFilter, setSpecializationFilter] = useState('All');

  const specializations = ['All', ...new Set(vetsData.map(vet => vet.specialization))];

  const filteredVets = vetsData.filter(vet => {
    const matchesSearch = vet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vet.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialization = specializationFilter === 'All' || vet.specialization === specializationFilter;
    return matchesSearch && matchesSpecialization;
  });

  const handleVetFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would be saved to a database
    console.log('Vet info saved:', vetInfo);
    setShowVetForm(false);
  };

  const medicalHistories = [
    {
      id: 1,
      petName: 'Buddy',
      owner: 'John Smith',
      species: 'Dog',
      condition: 'Routine Checkup',
      date: '2024-01-15',
      notes: 'Healthy adult dog, vaccinations up to date'
    },
    {
      id: 2,
      petName: 'Whiskers',
      owner: 'Sarah Johnson',
      species: 'Cat',
      condition: 'Dental Cleaning',
      date: '2024-01-10',
      notes: 'Minor tartar buildup, cleaning completed successfully'
    },
    {
      id: 3,
      petName: 'Max',
      owner: 'Mike Davis',
      species: 'Dog',
      condition: 'Skin Allergies',
      date: '2024-01-08',
      notes: 'Prescribed antihistamine, follow-up in 2 weeks'
    }
  ];

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
            Veterinarian Dashboard 🩺
          </h1>
          <p className="font-poppins text-lg text-gray-600 dark:text-gray-300">
            Welcome back, {user.name}! Manage your practice and help our furry friends
          </p>
        </motion.div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            onClick={() => setShowVetForm(true)}
            className="bg-gradient-to-br from-sky-400 to-sky-600 text-white rounded-2xl p-6 cursor-pointer shadow-lg hover:shadow-xl transition-all"
          >
            <User className="w-8 h-8 mb-4" />
            <h3 className="font-nunito font-semibold text-lg mb-2">My Profile</h3>
            <p className="font-poppins text-sm opacity-90">Update your information</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-mint-400 to-mint-600 text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
          >
            <Calendar className="w-8 h-8 mb-4" />
            <h3 className="font-nunito font-semibold text-lg mb-2">Appointments</h3>
            <p className="font-poppins text-sm opacity-90">{vetsData[0]?.bookedSlots.length || 0} booked today</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-mauve-400 to-mauve-600 text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
          >
            <Stethoscope className="w-8 h-8 mb-4" />
            <h3 className="font-nunito font-semibold text-lg mb-2">Medical Records</h3>
            <p className="font-poppins text-sm opacity-90">{medicalHistories.length} recent cases</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-cream-400 to-cream-600 text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
          >
            <Search className="w-8 h-8 mb-4" />
            <h3 className="font-nunito font-semibold text-lg mb-2">Find Colleagues</h3>
            <p className="font-poppins text-sm opacity-90">{vetsData.length} vets in network</p>
          </motion.div>
        </div>

        {/* Vet Profile Form Modal */}
        {showVetForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowVetForm(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="font-nunito font-bold text-2xl text-gray-800 dark:text-white mb-6">
                Veterinarian Profile
              </h2>
              <form onSubmit={handleVetFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-poppins font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={vetInfo.name}
                      onChange={(e) => setVetInfo({ ...vetInfo, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-sky-500"
                      placeholder="Dr. John Smith"
                    />
                  </div>
                  <div>
                    <label className="block font-poppins font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Specialization
                    </label>
                    <select
                      required
                      value={vetInfo.specialization}
                      onChange={(e) => setVetInfo({ ...vetInfo, specialization: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-sky-500"
                    >
                      <option value="">Select specialization</option>
                      <option value="Small Animal Medicine">Small Animal Medicine</option>
                      <option value="Emergency Medicine">Emergency Medicine</option>
                      <option value="Surgery">Surgery</option>
                      <option value="Dentistry">Dentistry</option>
                      <option value="Dermatology">Dermatology</option>
                      <option value="Cardiology">Cardiology</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-poppins font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Contact
                    </label>
                    <input
                      type="tel"
                      required
                      value={vetInfo.contact}
                      onChange={(e) => setVetInfo({ ...vetInfo, contact: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-sky-500"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block font-poppins font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={vetInfo.email}
                      onChange={(e) => setVetInfo({ ...vetInfo, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-sky-500"
                      placeholder="doctor@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-poppins font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Location (City, State)
                  </label>
                  <input
                    type="text"
                    required
                    value={vetInfo.location}
                    onChange={(e) => setVetInfo({ ...vetInfo, location: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-sky-500"
                    placeholder="New York, NY"
                  />
                </div>
                <div>
                  <label className="block font-poppins font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Address
                  </label>
                  <input
                    type="text"
                    required
                    value={vetInfo.address}
                    onChange={(e) => setVetInfo({ ...vetInfo, address: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-sky-500"
                    placeholder="123 Veterinary Ave, New York, NY 10001"
                  />
                </div>
                <div className="flex space-x-3 pt-4">
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-gradient-to-r from-sky-500 to-mint-500 text-white rounded-xl font-poppins font-semibold hover:shadow-lg transition-shadow"
                  >
                    Save Profile
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowVetForm(false)}
                    className="px-8 py-3 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-poppins font-medium"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Appointment Slots */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
          >
            <h2 className="font-nunito font-bold text-2xl text-gray-800 dark:text-white mb-6 flex items-center">
              <Calendar className="w-6 h-6 text-mint-500 mr-2" />
              Today's Schedule
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-poppins font-semibold text-lg text-green-600 dark:text-green-400 mb-3">
                  Available Slots
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {vetsData[0]?.availableSlots.map((slot, index) => (
                    <div key={index} className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg text-center">
                      <Clock className="w-4 h-4 text-green-600 inline mr-2" />
                      <span className="font-poppins text-sm text-green-700 dark:text-green-300">
                        {slot}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-poppins font-semibold text-lg text-red-600 dark:text-red-400 mb-3">
                  Booked Slots
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {vetsData[0]?.bookedSlots.map((slot, index) => (
                    <div key={index} className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg text-center">
                      <Clock className="w-4 h-4 text-red-600 inline mr-2" />
                      <span className="font-poppins text-sm text-red-700 dark:text-red-300">
                        {slot}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Medical Histories */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
          >
            <h2 className="font-nunito font-bold text-2xl text-gray-800 dark:text-white mb-6 flex items-center">
              <Stethoscope className="w-6 h-6 text-mauve-500 mr-2" />
              Recent Medical Cases
            </h2>
            
            <div className="space-y-4">
              {medicalHistories.map((history) => (
                <div key={history.id} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-poppins font-semibold text-gray-800 dark:text-white">
                      {history.petName}
                    </h3>
                    <span className="text-xs bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 px-2 py-1 rounded-full">
                      {history.species}
                    </span>
                  </div>
                  <p className="font-poppins text-sm text-gray-600 dark:text-gray-300 mb-1">
                    Owner: {history.owner}
                  </p>
                  <p className="font-poppins text-sm text-mauve-600 dark:text-mauve-400 mb-2">
                    {history.condition}
                  </p>
                  <p className="font-poppins text-xs text-gray-500 dark:text-gray-400 mb-2">
                    {history.date}
                  </p>
                  <p className="font-poppins text-xs text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 p-2 rounded">
                    {history.notes}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Veterinarian Directory */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
        >
          <h2 className="font-nunito font-bold text-2xl text-gray-800 dark:text-white mb-6">
            Veterinarian Network 👥
          </h2>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-sky-500"
              />
            </div>
            <div className="md:w-64">
              <select
                value={specializationFilter}
                onChange={(e) => setSpecializationFilter(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-sky-500"
              >
                {specializations.map(spec => (
                  <option key={spec} value={spec}>{spec}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Vet Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVets.map((vet) => (
              <motion.div
                key={vet.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-sky-50 to-mint-50 dark:from-sky-900/20 dark:to-mint-900/20 rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <img
                  src={vet.image}
                  alt={vet.name}
                  className="w-16 h-16 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="font-nunito font-semibold text-lg text-gray-800 dark:text-white text-center mb-2">
                  {vet.name}
                </h3>
                <p className="font-poppins text-sm text-sky-600 dark:text-sky-400 text-center mb-4">
                  {vet.specialization}
                </p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Phone className="w-4 h-4 mr-2" />
                    <span className="font-poppins">{vet.contact}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Mail className="w-4 h-4 mr-2" />
                    <span className="font-poppins">{vet.email}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="font-poppins">{vet.location}</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    const query = encodeURIComponent(vet.address);
                    window.open(`https://www.google.com/maps/search/${query}`, '_blank');
                  }}
                  className="w-full mt-4 py-2 bg-gradient-to-r from-sky-500 to-mint-500 text-white rounded-lg font-poppins font-medium text-sm hover:shadow-md transition-shadow"
                >
                  View on Map
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Veterinarian;