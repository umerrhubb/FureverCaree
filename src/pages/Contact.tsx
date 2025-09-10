import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageSquare, Heart } from 'lucide-react';
import ScrollingTicker from '../components/ScrollingTicker';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@furevercare.com",
      description: "We'll get back to you within 24 hours",
      color: "from-mint-400 to-green-500"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "(555) FUREVER",
      description: "Monday - Friday, 9 AM - 6 PM EST",
      color: "from-sky-400 to-blue-500"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Pet Care Plaza",
      description: "Love Street, Heart City, HC 12345",
      color: "from-mauve-400 to-purple-500"
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Mon - Fri: 9 AM - 6 PM",
      description: "Sat: 10 AM - 4 PM, Sun: Closed",
      color: "from-cream-400 to-orange-500"
    }
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Customer Success Manager",
      email: "sarah@furevercare.com",
      phone: "(555) 123-0001",
      image: "https://medstarhealth-delivery.sitecorecontenthub.cloud/api/public/content/JOHNSON_Sarah_600",
      specialty: "Pet owner support and product recommendations"
    },
    {
      name: "Dr. Michael Chen",
      role: "Veterinary Liaison",
      email: "michael@furevercare.com",
      phone: "(555) 123-0002",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8agEZueJ7RN6_jPfDcca5WWK0FdXf7nVPgw&s",
      specialty: "Medical questions and veterinary partnerships"
    },
    {
      name: "Emily Rodriguez",
      role: "Shelter Coordinator",
      email: "emily@furevercare.com",
      phone: "(555) 123-0003",
      image: "https://miro.medium.com/v2/1*hATEYt0u5wpq4VqRjsXfhQ.png",
      specialty: "Adoption services and shelter partnerships"
    }
  ];

  const handleLocationClick = () => {
    const query = encodeURIComponent('123 Pet Care Plaza, Love Street, Heart City');
    window.open(`https://www.google.com/maps/search/${query}`, '_blank');
  };

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
            <MessageSquare className="w-10 h-10 text-white" />
          </motion.div>

          <h1 className="font-nunito font-bold text-5xl text-gray-800 dark:text-white mb-6">
            Get in Touch
          </h1>
          <p className="font-poppins text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We'd love to hear from you! Whether you have questions, need support, 
            or want to share your pet's story, our team is here to help.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`bg-gradient-to-br ${info.color} text-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all cursor-pointer`}
              onClick={info.icon === MapPin ? handleLocationClick : undefined}
            >
              <info.icon className="w-12 h-12 mb-6" />
              <h3 className="font-nunito font-bold text-xl mb-2">{info.title}</h3>
              <p className="font-poppins font-semibold mb-2">{info.content}</p>
              <p className="font-poppins text-sm opacity-90">{info.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-12 mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="font-nunito font-bold text-3xl text-gray-800 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="font-poppins text-lg text-gray-600 dark:text-gray-300">
              Our dedicated team is here to assist you with all your pet care needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-cream-50 to-mint-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition-all"
              >
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-6 border-4 border-white shadow-lg"
                />
                
                <h3 className="font-nunito font-bold text-xl text-gray-800 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="font-poppins text-sm text-mauve-600 dark:text-mauve-400 mb-4 font-semibold">
                  {member.role}
                </p>
                <p className="font-poppins text-sm text-gray-600 dark:text-gray-300 mb-6">
                  {member.specialty}
                </p>
                
                <div className="space-y-3">
                  <motion.a
                    href={`mailto:${member.email}`}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center justify-center space-x-2 bg-mint-500 text-white px-4 py-2 rounded-lg font-poppins text-sm hover:bg-mint-600 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                  </motion.a>
                  <motion.a
                    href={`tel:${member.phone}`}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center justify-center space-x-2 bg-sky-500 text-white px-4 py-2 rounded-lg font-poppins text-sm hover:bg-sky-600 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call</span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-12 mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-nunito font-bold text-3xl text-gray-800 dark:text-white mb-6">
                Visit Our Office
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-mauve-500 mt-1" />
                  <div>
                    <h3 className="font-poppins font-semibold text-lg text-gray-800 dark:text-white mb-2">
                      Address
                    </h3>
                    <p className="font-poppins text-gray-600 dark:text-gray-300">
                      123 Pet Care Plaza<br />
                      Love Street<br />
                      Heart City, HC 12345
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-mint-500 mt-1" />
                  <div>
                    <h3 className="font-poppins font-semibold text-lg text-gray-800 dark:text-white mb-2">
                      Office Hours
                    </h3>
                    <div className="font-poppins text-gray-600 dark:text-gray-300 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-sky-500 mt-1" />
                  <div>
                    <h3 className="font-poppins font-semibold text-lg text-gray-800 dark:text-white mb-2">
                      Phone & Emergency
                    </h3>
                    <div className="font-poppins text-gray-600 dark:text-gray-300 space-y-1">
                      <p>Main: (555) FUREVER</p>
                      <p>Emergency: (555) 911-PETS</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLocationClick}
                className="mt-8 bg-gradient-to-r from-mauve-500 to-mint-500 text-white px-8 py-3 rounded-full font-poppins font-semibold hover:shadow-lg transition-shadow flex items-center space-x-2"
              >
                <MapPin className="w-5 h-5" />
                <span>Get Directions</span>
              </motion.button>
            </div>
            
<div className="bg-gray-100 dark:bg-gray-700 rounded-2xl h-96 overflow-hidden">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.123456789!2d67.042!3d24.938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339123456789%3A0xabcdef123456789!2sHappy%20Paws%20Veterinary%20Clinic!5e0!3m2!1sen!2s!4v1699999999999"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen={true}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-gradient-to-br from-mint-50 to-sky-50 dark:from-mint-900/20 dark:to-sky-900/20 rounded-3xl p-12 mb-16"
        >
          <h2 className="font-nunito font-bold text-3xl text-gray-800 dark:text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-poppins font-semibold text-lg text-gray-800 dark:text-white mb-2">
                  How do I get started with FurEver Care?
                </h3>
                <p className="font-poppins text-gray-600 dark:text-gray-300">
                  Simply take our quick onboarding quiz on the homepage to get personalized 
                  recommendations based on your role as a pet owner, veterinarian, or shelter.
                </p>
              </div>
              
              <div>
                <h3 className="font-poppins font-semibold text-lg text-gray-800 dark:text-white mb-2">
                  Is FurEver Care free to use?
                </h3>
                <p className="font-poppins text-gray-600 dark:text-gray-300">
                  Yes! Our core features are completely free. We believe every pet deserves 
                  access to quality care and resources.
                </p>
              </div>
              
              <div>
                <h3 className="font-poppins font-semibold text-lg text-gray-800 dark:text-white mb-2">
                  Can I trust the veterinarian recommendations?
                </h3>
                <p className="font-poppins text-gray-600 dark:text-gray-300">
                  All veterinarians in our network are licensed professionals. We verify 
                  credentials and maintain high standards for our partnerships.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-poppins font-semibold text-lg text-gray-800 dark:text-white mb-2">
                  How do I find pets for adoption?
                </h3>
                <p className="font-poppins text-gray-600 dark:text-gray-300">
                  Browse our adoption gallery where you can filter by species, age, and location. 
                  Each listing includes contact information for the shelter.
                </p>
              </div>
              
              <div>
                <h3 className="font-poppins font-semibold text-lg text-gray-800 dark:text-white mb-2">
                  Do you offer emergency support?
                </h3>
                <p className="font-poppins text-gray-600 dark:text-gray-300">
                  While we provide emergency contact information, please contact your local 
                  emergency vet clinic directly for urgent medical situations.
                </p>
              </div>
              
              <div>
                <h3 className="font-poppins font-semibold text-lg text-gray-800 dark:text-white mb-2">
                  How can I contact support?
                </h3>
                <p className="font-poppins text-gray-600 dark:text-gray-300">
                  Reach out via email, phone, or our feedback form. Our team typically 
                  responds within 24 hours during business days.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-gradient-to-r from-mauve-500 to-mint-500 rounded-3xl text-white p-12 text-center"
        >
          <Heart className="w-16 h-16 mx-auto mb-6" />
          <h2 className="font-nunito font-bold text-3xl mb-6">
            Still Have Questions?
          </h2>
          <p className="font-poppins text-lg mb-8 max-w-2xl mx-auto">
            Our friendly team is always ready to help. Don't hesitate to reach out 
            – we're here to support you and your furry friends!
          </p>
          <motion.a
            href="/feedback"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-mauve-600 px-8 py-3 rounded-full font-poppins font-semibold text-lg hover:shadow-lg transition-shadow"
          >
            Send Us a Message
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;