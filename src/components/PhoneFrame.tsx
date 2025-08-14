import { motion } from 'motion/react';
import { cn } from './ui/utils';

interface PhoneFrameProps {
  className?: string;
}

export function PhoneFrame({ className }: PhoneFrameProps) {
  return (
    <motion.div 
      className={cn("relative", className)}
      whileHover={{ scale: 1.05, rotateY: 5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Phone frame */}
      <div className="relative bg-gray-900 rounded-[2.5rem] p-4 shadow-2xl">
        {/* Screen */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-[2rem] aspect-[9/19.5] overflow-hidden relative">
          {/* Status bar */}
          <div className="flex justify-between items-center p-4 text-xs text-gray-600">
            <div className="font-semibold">9:41</div>
            <div className="flex space-x-1">
              <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
              <div className="w-6 h-2 bg-green-500 rounded-sm"></div>
            </div>
          </div>
          
          {/* App content mockup */}
          <div className="px-4 pb-4">
            {/* App header */}
            <div className="flex items-center justify-between mb-6">
              <motion.div 
                className="w-8 h-8 bg-gradient-to-br from-black to-gray-800 rounded-lg flex items-center justify-center"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-white font-bold text-sm">A</span>
              </motion.div>
              <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
            </div>
            
            {/* Search bar */}
            <div className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
            
            {/* Content cards */}
            <div className="space-y-3">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="bg-white rounded-xl p-3 shadow-sm"
                  initial={{ opacity: 0.8, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: i * 0.1,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 2
                  }}
                >
                  <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-2 bg-gray-150 rounded w-2/3"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-700 rounded-full"></div>
      </div>
      
      {/* Floating elements around phone */}
      <motion.div
        className="absolute -top-4 -right-4 w-8 h-8 bg-blue-100 rounded-full"
        animate={{ 
          y: [-10, 10, -10],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-100 rounded-full"
        animate={{ 
          y: [10, -10, 10],
          x: [-5, 5, -5]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </motion.div>
  );
}