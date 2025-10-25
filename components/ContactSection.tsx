'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const ContactSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFocused, setIsFocused] = useState({ name: false, email: false, message: false });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-4 relative" ref={ref}>
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Let&apos;s connect and create something amazing together. Reach out through the cosmos!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="glass-strong rounded-3xl p-8 md:p-12 relative overflow-hidden universe-float"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Holographic overlay */}
            <div className="absolute inset-0 holographic pointer-events-none rounded-3xl" />
            
            <h3 className="text-3xl font-bold text-cyan-400 mb-8 relative">Send a Message</h3>
            
            <form action="https://formspree.io/f/xanlwred" method="POST" className="space-y-6 relative">
              {/* Name Field */}
              <div className="relative">
                <motion.label
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    isFocused.name || formData.name
                      ? 'top-0 text-xs text-cyan-400 bg-cosmic-dark px-2'
                      : 'top-4 text-gray-400'
                  }`}
                  animate={{
                    y: isFocused.name || formData.name ? -10 : 0,
                  }}
                >
                  Your Name
                </motion.label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setIsFocused({ ...isFocused, name: true })}
                  onBlur={() => setIsFocused({ ...isFocused, name: false })}
                  required
                  className="w-full bg-transparent border-2 border-gray-700 rounded-xl px-4 py-4 text-white focus:border-cyan-400 transition-colors outline-none"
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <motion.label
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    isFocused.email || formData.email
                      ? 'top-0 text-xs text-cyan-400 bg-cosmic-dark px-2'
                      : 'top-4 text-gray-400'
                  }`}
                  animate={{
                    y: isFocused.email || formData.email ? -10 : 0,
                  }}
                >
                  Your Email
                </motion.label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setIsFocused({ ...isFocused, email: true })}
                  onBlur={() => setIsFocused({ ...isFocused, email: false })}
                  required
                  className="w-full bg-transparent border-2 border-gray-700 rounded-xl px-4 py-4 text-white focus:border-cyan-400 transition-colors outline-none"
                />
              </div>

              {/* Message Field */}
              <div className="relative">
                <motion.label
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    isFocused.message || formData.message
                      ? 'top-0 text-xs text-cyan-400 bg-cosmic-dark px-2'
                      : 'top-4 text-gray-400'
                  }`}
                  animate={{
                    y: isFocused.message || formData.message ? -10 : 0,
                  }}
                >
                  Your Message
                </motion.label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setIsFocused({ ...isFocused, message: true })}
                  onBlur={() => setIsFocused({ ...isFocused, message: false })}
                  required
                  rows={5}
                  className="w-full bg-transparent border-2 border-gray-700 rounded-xl px-4 py-4 text-white focus:border-cyan-400 transition-colors outline-none resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full text-white font-semibold flex items-center justify-center gap-3 hover:scale-105 transition-smooth glow-purple"
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(168, 85, 247, 0.6)' }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPaperPlane /> Send Message
              </motion.button>
            </form>

            {/* Floating orb decoration */}
            <motion.div
              className="absolute -right-8 -bottom-8 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-30"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="glass-strong rounded-3xl p-8 md:p-12 relative overflow-hidden universe-float">
              {/* Holographic overlay */}
              <div className="absolute inset-0 holographic pointer-events-none rounded-3xl" />
              
              <h3 className="text-3xl font-bold text-pink-400 mb-8 relative">Contact Info</h3>
              
              <div className="space-y-6 relative">
                {/* Email */}
                <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <FaEnvelope />
                  </motion.div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <a href="mailto:Arifeen.sifat@gmail.com" className="text-cyan-400 hover:underline">
                      Arifeen.sifat@gmail.com
                    </a>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <FaPhone />
                  </motion.div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                    <a href="tel:01306842102" className="text-cyan-400 hover:underline">
                      01306842102
                    </a>
                  </div>
                </motion.div>

                {/* Location */}
                <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <FaMapMarkerAlt />
                  </motion.div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Location</h4>
                    <p className="text-cyan-400">Bangladesh</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass rounded-3xl p-8 relative overflow-hidden universe-float">
              {/* Holographic overlay */}
              <div className="absolute inset-0 holographic pointer-events-none rounded-3xl" />
              
              <h3 className="text-2xl font-bold text-white mb-6 relative">Connect With Me</h3>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/sif1t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xl hover:scale-110 transition-smooth"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/arifeen-sifat-037a78226/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xl hover:scale-110 transition-smooth"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-xl hover:scale-110 transition-smooth"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTwitter />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating animation decoration */}
        <motion.div
          className="absolute top-1/4 left-10 w-20 h-20 bg-cyan-500 rounded-full blur-2xl opacity-30"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-24 h-24 bg-pink-500 rounded-full blur-2xl opacity-30"
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
          }}
        />
      </div>
    </section>
  );
};

export default ContactSection;
