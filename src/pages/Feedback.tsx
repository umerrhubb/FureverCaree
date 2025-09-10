import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Star, Heart, MessageCircle, CheckCircle } from 'lucide-react';
import ScrollingTicker from '../components/ScrollingTicker';

const Feedback: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'general',
    rating: 0,
    feedback: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hoveredRating, setHoveredRating] = useState(0);

  // <-- Added only this errors state for inline validation messages
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const feedbackTypes = [
    { value: 'general', label: 'General Feedback', icon: '💬' },
    { value: 'bug', label: 'Bug Report', icon: '🐛' },
    { value: 'feature', label: 'Feature Request', icon: '✨' },
    { value: 'compliment', label: 'Compliment', icon: '❤️' },
    { value: 'complaint', label: 'Complaint', icon: '😔' },
    { value: 'suggestion', label: 'Suggestion', icon: '💡' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Strict name validation: letters & spaces only, 2-50 chars
    const nameTrim = formData.name.trim();
    const nameRegex = /^[A-Za-z\s]{2,50}$/;

    // Standard email validation
    const emailTrim = formData.email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const newErrors: { name?: string; email?: string } = {};

    if (!nameTrim || !nameRegex.test(nameTrim)) {
      newErrors.name = 'Please enter a valid name (letters & spaces only, 2–50 characters).';
    }

    if (!emailTrim || !emailRegex.test(emailTrim)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    setErrors(newErrors);

    // Stop submission if there are validation errors
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // Proceed with submission (your original behavior)
    console.log('Feedback submitted:', formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        type: 'general',
        rating: 0,
        feedback: ''
      });
      setErrors({});
    }, 3000);
  };

  const handleRatingClick = (rating: number) => {
    setFormData({ ...formData, rating });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cream-50 via-mint-50 to-sky-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <ScrollingTicker />
        <div className="flex items-center justify-center min-h-screen px-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="text-center bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-12 max-w-md"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, ease: "linear" }}
              className="w-20 h-20 bg-gradient-to-r from-green-400 to-mint-400 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-10 h-10 text-white" />
            </motion.div>
            
            <h2 className="font-nunito font-bold text-3xl text-gray-800 dark:text-white mb-4">
              Thank You! 🎉
            </h2>
            
            <p className="font-poppins text-lg text-gray-600 dark:text-gray-300 mb-6">
              Your feedback has been received. We appreciate you taking the time to help us improve!
            </p>
            
            <div className="text-6xl mb-6">🐾</div>
            
            <p className="font-poppins text-sm text-gray-500 dark:text-gray-400">
              Redirecting you back to the form...
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-mint-50 to-sky-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <ScrollingTicker />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 bg-gradient-to-r from-mauve-400 to-mint-400 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <MessageCircle className="w-10 h-10 text-white" />
          </motion.div>

          <h1 className="font-nunito font-bold text-5xl text-gray-800 dark:text-white mb-6">
            We'd Love Your Feedback
          </h1>
          <p className="font-poppins text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your thoughts help us make FurEver Care better for pets and their families. 
            Share your experience, report issues, or suggest new features.
          </p>
        </motion.div>

        {/* Feedback Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-poppins font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-mauve-500 focus:border-mauve-500 transition-all font-poppins"
                  placeholder="Enter your name"
                />
                {/* inline name error */}
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <label className="block font-poppins font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-mauve-500 focus:border-mauve-500 transition-all font-poppins"
                  placeholder="Enter your email"
                />
                {/* inline email error */}
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
            </div>

            {/* Feedback Type */}
            <div>
              <label className="block font-poppins font-semibold text-gray-700 dark:text-gray-300 mb-4">
                What type of feedback is this?
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {feedbackTypes.map((type) => (
                  <motion.button
                    key={type.value}
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setFormData({ ...formData, type: type.value })}
                    className={`p-4 rounded-xl border-2 transition-all font-poppins text-center ${
                      formData.type === type.value
                        ? 'border-mauve-500 bg-mauve-50 dark:bg-mauve-900/20 text-mauve-700 dark:text-mauve-300'
                        : 'border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:border-mauve-300 hover:bg-mauve-50 dark:hover:bg-mauve-900/10'
                    }`}
                  >
                    <div className="text-2xl mb-2">{type.icon}</div>
                    <div className="text-sm font-medium">{type.label}</div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Rating */}
            <div>
              <label className="block font-poppins font-semibold text-gray-700 dark:text-gray-300 mb-4">
                How would you rate your overall experience?
              </label>
              <div className="flex items-center justify-center space-x-2 bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                <span className="font-poppins text-sm text-gray-600 dark:text-gray-400 mr-4">Poor</span>
                {[1, 2, 3, 4, 5].map((star) => (
                  <motion.button
                    key={star}
                    type="button"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleRatingClick(star)}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    className="transition-all"
                  >
                    <Star
                      className={`w-8 h-8 ${
                        star <= (hoveredRating || formData.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300 dark:text-gray-600'
                      }`}
                    />
                  </motion.button>
                ))}
                <span className="font-poppins text-sm text-gray-600 dark:text-gray-400 ml-4">Excellent</span>
              </div>
            </div>

            {/* Feedback Text */}
            <div>
              <label className="block font-poppins font-semibold text-gray-700 dark:text-gray-300 mb-3">
                Tell us more about your experience
              </label>
              <textarea
                required
                rows={6}
                value={formData.feedback}
                onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-mauve-500 focus:border-mauve-500 transition-all font-poppins resize-vertical"
                placeholder="Share your thoughts, suggestions, or report any issues you've encountered..."
              />
              <div className="flex justify-between items-center mt-2">
                <p className="font-poppins text-xs text-gray-500 dark:text-gray-400">
                  Please be as detailed as possible. This helps us improve!
                </p>
                <p className="font-poppins text-xs text-gray-400 dark:text-gray-500">
                  {formData.feedback.length} characters
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-mauve-500 to-mint-500 text-white py-4 rounded-xl font-poppins font-semibold text-lg hover:shadow-lg transition-shadow flex items-center justify-center space-x-2"
            >
              <Send className="w-5 h-5" />
              <span>Send Feedback</span>
            </motion.button>
          </form>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-mint-50 dark:bg-mint-900/20 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="font-nunito font-bold text-lg text-gray-800 dark:text-white mb-2">
              Suggestions Welcome
            </h3>
            <p className="font-poppins text-sm text-gray-600 dark:text-gray-300">
              Have an idea for a new feature? We'd love to hear it!
            </p>
          </div>
          
          <div className="bg-sky-50 dark:bg-sky-900/20 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-4">🐛</div>
            <h3 className="font-nunito font-bold text-lg text-gray-800 dark:text-white mb-2">
              Bug Reports
            </h3>
            <p className="font-poppins text-sm text-gray-600 dark:text-gray-300">
              Found something that's not working right? Let us know!
            </p>
          </div>
          
          <div className="bg-mauve-50 dark:bg-mauve-900/20 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-4">❤️</div>
            <h3 className="font-nunito font-bold text-lg text-gray-800 dark:text-white mb-2">
              Share the Love
            </h3>
            <p className="font-poppins text-sm text-gray-600 dark:text-gray-300">
              Tell us about your positive experiences with our platform!
            </p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 bg-gradient-to-r from-cream-400 to-mint-400 rounded-3xl text-white p-8 text-center"
        >
          <Heart className="w-12 h-12 mx-auto mb-4" />
          <h2 className="font-nunito font-bold text-2xl mb-4">
            Thank You for Being Part of Our Community
          </h2>
          <p className="font-poppins text-lg max-w-2xl mx-auto">
            Every piece of feedback helps us create a better experience for pets and their families. 
            Together, we're building something amazing! 🐾
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Feedback;
