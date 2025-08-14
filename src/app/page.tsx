'use client';

import { motion } from 'motion/react';
import { Header } from '../components/Header';
import { HomeSection } from '../components/HomeSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { BackgroundDecorations } from '../components/BackgroundDecorations';

export default function Home() {
  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      <BackgroundDecorations />
      <Header />
      <main className="relative z-10">
        <HomeSection />
        <FeaturesSection />
      </main>
      
      {/* Copyright */}
      <motion.div 
        className="bg-gradient-to-r from-black via-gray-900 to-black text-white text-center py-8 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-1"></div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-40"
              initial={{
                left: `${15 + i * 15}%`,
                top: `${20 + i * 10}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
        
        <motion.p 
          className="text-sm relative z-10"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          ©︎ AsQ. All Right Reserved
        </motion.p>
      </motion.div>
    </div>
  );
}
