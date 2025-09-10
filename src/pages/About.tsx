import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Target, Award, Sparkles } from 'lucide-react';
import ScrollingTicker from '../components/ScrollingTicker';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      bio: "Passionate about connecting pets with loving families for over 10 years."
    },
    {
      name: "Dr. Michael Chen",
      role: "Chief Veterinarian",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg",
      bio: "Leading veterinary expert with 15+ years of experience in animal care."
    },
    {
      name: "Emily Rodriguez",
      role: "Community Manager",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      bio: "Building bridges between pet owners, vets, and shelters nationwide."
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "Every pet deserves love and care",
      color: "from-red-400 to-pink-500"
    },
    {
      icon: Users,
      title: "Community",
      description: "Bringing people together for pets",
      color: "from-mint-400 to-green-500"
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Highest standards in pet care",
      color: "from-sky-400 to-blue-500"
    },
    {
      icon: Award,
      title: "Trust",
      description: "Reliable platform you can count on",
      color: "from-mauve-400 to-purple-500"
    }
  ];

  const milestones = [
    { year: "2020", event: "FurEver Care launched", pets: "100+ pets helped" },
    { year: "2021", event: "First veterinary partnerships", pets: "500+ pets helped" },
    { year: "2022", event: "Shelter network expansion", pets: "1,500+ pets helped" },
    { year: "2023", event: "Mobile app launch", pets: "5,000+ pets helped" },
    { year: "2024", event: "AI-powered matching", pets: "10,000+ pets helped" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-mint-50 to-sky-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <ScrollingTicker />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 bg-gradient-to-r from-mauve-400 to-mint-400 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <Heart className="w-10 h-10 text-white" />
          </motion.div>

          <h1 className="font-nunito font-bold text-5xl text-gray-800 dark:text-white mb-6">
            About FurEver Care
          </h1>
          <p className="font-poppins text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're on a mission to create a world where every pet finds their perfect family, 
            and every family finds their perfect pet companion.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-12 mb-16 text-center"
        >
          <Sparkles className="w-12 h-12 text-mauve-500 mx-auto mb-6" />
          <h2 className="font-nunito font-bold text-3xl text-gray-800 dark:text-white mb-6">
            Our Mission
          </h2>
          <p className="font-poppins text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            FurEver Care is dedicated to strengthening the bond between pets and their human families 
            through innovative technology, expert guidance, and a supportive community. We believe 
            that by connecting pet owners, veterinarians, and shelters, we can create better outcomes 
            for pets everywhere.
          </p>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="font-nunito font-bold text-3xl text-gray-800 dark:text-white text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`bg-gradient-to-br ${value.color} text-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all`}
              >
                <value.icon className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-nunito font-bold text-xl mb-4">{value.title}</h3>
                <p className="font-poppins text-sm opacity-90">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-nunito font-bold text-3xl text-gray-800 dark:text-white text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all p-8 text-center"
              >
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-6 border-4 border-mauve-200 dark:border-mauve-600"
                />
                <h3 className="font-nunito font-bold text-xl text-gray-800 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="font-poppins text-sm text-mauve-600 dark:text-mauve-400 mb-4">
                  {member.role}
                </p>
                <p className="font-poppins text-sm text-gray-600 dark:text-gray-300">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Milestones */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-12 mb-16"
        >
          <h2 className="font-nunito font-bold text-3xl text-gray-800 dark:text-white text-center mb-12">
            Our Journey
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-mauve-400 to-mint-400 hidden md:block"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.2 }}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
              >
                <div className={`flex-1 ${
                  index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
                } text-center md:text-left`}>
                  <div className="bg-gradient-to-r from-mauve-100 to-mint-100 dark:from-mauve-900/20 dark:to-mint-900/20 rounded-xl p-6">
                    <h3 className="font-nunito font-bold text-xl text-gray-800 dark:text-white mb-2">
                      {milestone.year}
                    </h3>
                    <p className="font-poppins font-semibold text-mauve-600 dark:text-mauve-400 mb-2">
                      {milestone.event}
                    </p>
                    <p className="font-poppins text-sm text-gray-600 dark:text-gray-300">
                      {milestone.pets}
                    </p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="w-6 h-6 bg-gradient-to-r from-mauve-400 to-mint-400 rounded-full border-4 border-white dark:border-gray-800 z-10 my-4 md:my-0 hidden md:block"></div>
                
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-gradient-to-r from-mauve-500 to-mint-500 rounded-3xl text-white p-12 text-center"
        >
          <h2 className="font-nunito font-bold text-3xl mb-6">
            Join Our Mission
          </h2>
          <p className="font-poppins text-lg mb-8 max-w-2xl mx-auto">
            Whether you're a pet owner, veterinarian, or shelter, you can be part of 
            our community dedicated to improving the lives of pets everywhere.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-mauve-600 px-8 py-3 rounded-full font-poppins font-semibold text-lg hover:shadow-lg transition-shadow"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;