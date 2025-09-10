import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Heart, ArrowRight, Sparkles, PawPrint } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';
import ScrollingTicker from '../components/ScrollingTicker';


const Home: React.FC = () => {
  const { user, setUser, incrementVisitor } = useAppContext();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [name, setName] = useState('');
  const [role, setRole] = useState<'Pet Owner' | 'Veterinarian' | 'Shelter' | null>(null);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // Check if user has already completed onboarding
    if (user.name && user.role) {
      setShowWelcome(true);
    } else {
      incrementVisitor();
    }
  }, [user, incrementVisitor]);

  const handleNameSubmit = () => {
    if (name.trim()) {
      setCurrentStep(1);
    }
  };

  const handleRoleSelect = (selectedRole: 'Pet Owner' | 'Veterinarian' | 'Shelter') => {
    setRole(selectedRole);
    setUser({ name: name.trim(), role: selectedRole });
    setShowWelcome(true);
    
    // Navigate to appropriate dashboard after a short delay
    setTimeout(() => {
      if (selectedRole === 'Pet Owner') {
        navigate('/pet-owner');
      } else if (selectedRole === 'Veterinarian') {
        navigate('/veterinarian');
      } else if (selectedRole === 'Shelter') {
        navigate('/shelter');
      }
    }, 2000);
  };

  const roleOptions = [
    {
      value: 'Pet Owner' as const,
      icon: '🐾',
      title: 'Pet Owner',
      description: 'Care for your furry friends with expert guidance',
      color: 'from-mint-400 to-mint-600'
    },
    {
      value: 'Veterinarian' as const,
      icon: '🩺',
      title: 'Veterinarian',
      description: 'Manage appointments and share your expertise',
      color: 'from-sky-400 to-sky-600'
    },
    {
      value: 'Shelter' as const,
      icon: '🏠',
      title: 'Shelter',
      description: 'Connect loving pets with caring families',
      color: 'from-mauve-400 to-mauve-600'
    }
  ];

  if (showWelcome && user.name && user.role) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cream-50 via-mint-50 to-sky-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <ScrollingTicker />
        
        <div className="flex items-center justify-center min-h-screen px-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, ease: "linear" }}
              className="w-20 h-20 bg-gradient-to-r from-mauve-400 to-mint-400 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Heart className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="font-nunito font-bold text-4xl text-gray-800 dark:text-white mb-4"
            >
              Welcome, {user.name}! 🎉
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="font-poppins text-lg text-gray-600 dark:text-gray-300 mb-8"
            >
              Ready to start your journey as a {user.role}?
            </motion.p>
            
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-6xl mb-8"
            >
              {user.role === 'Pet Owner' && '🐾'}
              {user.role === 'Veterinarian' && '🩺'}
              {user.role === 'Shelter' && '🏠'}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-sm text-gray-500 dark:text-gray-400"
            >
              Redirecting to your dashboard...
            </motion.div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-mint-50 to-sky-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <ScrollingTicker />
      {/* ❌ Navbar intentionally hidden before quiz */}
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-mauve-500/10 to-mint-500/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Floating Elements */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
              className="absolute top-10 left-10 text-4xl"
            >
              🐕
            </motion.div>
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, -5, 5, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute top-20 right-20 text-4xl"
            >
              🐱
            </motion.div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-24 h-24 bg-gradient-to-r from-mauve-400 to-mint-400 rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <Heart className="w-12 h-12 text-white" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-nunito font-bold text-5xl md:text-6xl text-gray-800 dark:text-white mb-6"
            >
              Welcome to{' '}
              <span className="bg-gradient-to-r from-mauve-600 to-mint-600 bg-clip-text text-transparent">
                FurEver Care
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-poppins text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto"
            >
              Your trusted companion in pet care. Connecting pet owners, veterinarians, 
              and shelters to create a loving community for all furry friends.
            </motion.p>

            {/* Onboarding Quiz */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-3xl shadow-xl p-8 max-w-2xl mx-auto"
            >
              <div className="flex items-center justify-center space-x-2 mb-6">
                <Sparkles className="w-6 h-6 text-mauve-500" />
                <h2 className="font-nunito font-semibold text-2xl text-gray-800 dark:text-white">
                  Let's Get Started!
                </h2>
                <Sparkles className="w-6 h-6 text-mint-500" />
              </div>

              <AnimatePresence mode="wait">
                {currentStep === 0 && (
                  <motion.div
                    key="name-step"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    className="space-y-6"
                  >
                    <div>
                      <label className="block font-poppins font-medium text-gray-700 dark:text-gray-300 mb-3 text-left">
                        What's your first name?
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 rounded-2xl border border-cream-300 dark:border-gray-600 focus:ring-2 focus:ring-mauve-500 focus:border-mauve-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white font-poppins transition-all"
                        onKeyPress={(e) => e.key === 'Enter' && handleNameSubmit()}
                      />
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleNameSubmit}
                      disabled={!name.trim()}
                      className="w-full py-3 bg-gradient-to-r from-mauve-500 to-mint-500 text-white rounded-2xl font-poppins font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all flex items-center justify-center space-x-2"
                    >
                      <span>Continue</span>
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </motion.div>
                )}

                {currentStep === 1 && (
                  <motion.div
                    key="role-step"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    className="space-y-6"
                  >
                    <p className="font-poppins text-gray-700 dark:text-gray-300 mb-6">
                      Hi {name}! 👋 What best describes you?
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {roleOptions.map((option) => (
                        <motion.button
                          key={option.value}
                          whileHover={{ scale: 1.05, y: -5 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleRoleSelect(option.value)}
                          className={`p-6 rounded-2xl border-2 border-transparent bg-gradient-to-br ${option.color} text-white shadow-lg hover:shadow-xl transition-all text-center`}
                        >
                          <div className="text-4xl mb-3">{option.icon}</div>
                          <h3 className="font-nunito font-semibold text-lg mb-2">
                            {option.title}
                          </h3>
                          <p className="font-poppins text-sm opacity-90">
                            {option.description}
                          </p>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Paw Prints */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-1/4 text-mauve-300 dark:text-mauve-600"
        >
          <PawPrint className="w-8 h-8" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-32 right-1/3 text-mint-300 dark:text-mint-600"
        >
          <PawPrint className="w-6 h-6" />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;