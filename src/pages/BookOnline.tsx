import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, DollarSign, CheckCircle } from 'lucide-react';
import ParallaxSection from '../components/ParallaxSection';
import Footer from '../components/Footer';

const BookOnline: React.FC = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const services = [
    {
      title: 'Initial Consultation',
      duration: '2 hours',
      price: 'Free',
      description: 'Comprehensive discussion of your project vision and requirements.',
      features: ['Site Assessment', 'Project Planning', 'Budget Discussion', 'Timeline Overview']
    },
    {
      title: 'Design Consultation',
      duration: '3 hours',
      price: '$500',
      description: 'Detailed design planning session with our architects and designers.',
      features: ['3D Modeling', 'Material Selection', 'Design Refinement', 'Cost Estimation']
    },
    {
      title: 'Project Planning Session',
      duration: '4 hours',
      price: '$750',
      description: 'Comprehensive project planning and scheduling consultation.',
      features: ['Timeline Development', 'Permit Planning', 'Team Assignment', 'Risk Assessment']
    },
    {
      title: 'Premium Design Package',
      duration: 'Full Day',
      price: '$1,500',
      description: 'Complete design development with our premium design team.',
      features: ['Full 3D Visualization', 'Material Sourcing', 'Custom Solutions', 'Detailed Plans']
    }
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  const handleBooking = (serviceIndex: number) => {
    setSelectedService(serviceIndex);
    // Scroll to booking form
    document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ParallaxSection
        backgroundImage="https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=1600"
        className="min-h-96 flex items-center justify-center"
      >
        <div className="text-center text-white px-4 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6"
          >
            Book Online
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl text-gray-200 leading-relaxed"
          >
            Schedule your consultation and take the first step toward your dream project
          </motion.p>
        </div>
      </ParallaxSection>

      {/* Services Selection */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-black mb-6">
              Choose Your Service
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Select the consultation type that best fits your project needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-black text-white p-8 rounded-sm relative overflow-hidden group cursor-pointer ${
                  selectedService === index ? 'ring-4 ring-yellow-500' : ''
                }`}
                onClick={() => handleBooking(index)}
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <Clock size={24} className="text-yellow-500" />
                    <span className="text-sm text-gray-300">{service.duration}</span>
                  </div>
                  
                  <h3 className="text-xl font-serif font-bold mb-3">
                    {service.title}
                  </h3>
                  
                  <div className="flex items-center mb-4">
                    <DollarSign size={20} className="text-yellow-500 mr-2" />
                    <span className="text-2xl font-bold text-yellow-500">{service.price}</span>
                  </div>
                  
                  <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle size={14} className="text-yellow-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-yellow-500 text-black py-3 px-4 rounded-sm font-semibold hover:bg-yellow-400 transition-all duration-300"
                  >
                    Book Now
                  </motion.button>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      {selectedService !== null && (
        <section id="booking-form" className="py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 md:p-12 rounded-sm shadow-lg"
            >
              <h3 className="text-3xl font-serif font-bold text-black mb-8 text-center">
                Complete Your Booking
              </h3>
              
              <div className="mb-8 p-6 bg-gray-50 rounded-sm">
                <h4 className="text-xl font-semibold mb-2">Selected Service:</h4>
                <p className="text-lg text-gray-700">{services[selectedService].title}</p>
                <div className="flex items-center mt-2 space-x-6">
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2" />
                    <span>{services[selectedService].duration}</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign size={16} className="mr-2" />
                    <span>{services[selectedService].price}</span>
                  </div>
                </div>
              </div>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Preferred Time *
                  </label>
                  <div className="grid grid-cols-3 md:grid-cols-7 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`py-3 px-4 border rounded-sm text-sm font-medium transition-all duration-300 ${
                          selectedTime === time
                            ? 'bg-black text-white border-black'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-black hover:bg-gray-50'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Brief description of your project..."
                  />
                </div>

                <div className="md:col-span-2">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-yellow-500 text-black py-4 px-6 rounded-sm font-semibold text-lg hover:bg-yellow-400 transition-all duration-300 flex items-center justify-center"
                  >
                    <Calendar size={20} className="mr-2" />
                    Confirm Booking
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default BookOnline;