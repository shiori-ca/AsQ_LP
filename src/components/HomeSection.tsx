import { motion } from 'motion/react';
import { PhoneFrame } from './PhoneFrame';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';

export function HomeSection() {
  return (
    <section id="home" className="min-h-screen pt-16 bg-gradient-to-br from-white via-gray-50/30 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side - App image */}
          <motion.div 
            className="flex-1 flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <PhoneFrame className="w-64 sm:w-72 lg:w-80" />
          </motion.div>

          {/* Right side - Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* AsQ Logo */}
            <motion.div 
              className="flex items-center justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-black via-gray-800 to-black rounded-2xl flex items-center justify-center mr-4 shadow-xl"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: [0, -5, 5, 0],
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-white font-bold text-2xl">A</span>
              </motion.div>
              <motion.h1 
                className="text-5xl font-bold text-black"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                AsQ
              </motion.h1>
            </motion.div>

            {/* Catchphrase */}
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold text-black mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.span
                className="inline-block"
                whileHover={{ scale: 1.05, color: "#374151" }}
                transition={{ duration: 0.2 }}
              >
                すぐに知りたい疑問を
              </motion.span>
              <br />
              <motion.span
                className="inline-block bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                即解決
              </motion.span>
            </motion.h2>

            {/* App Store Button */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-black text-white px-8 py-4 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <ExternalLink className="mr-2" size={20} />
                  </motion.div>
                  App Storeでダウンロード
                </Button>
              </motion.div>
            </motion.div>

            {/* Android development note */}
            <motion.p 
              className="text-gray-600 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              ※ Android版は現在開発中です
            </motion.p>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-gray-100 to-transparent rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-40 left-10 w-24 h-24 bg-gradient-to-tr from-gray-200 to-transparent rounded-full"
          animate={{ 
            y: [-10, 10, -10],
            x: [-5, 5, -5]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
}