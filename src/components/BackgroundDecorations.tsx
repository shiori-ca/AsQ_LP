export function BackgroundDecorations() {
  return (
    <>
      {/* Geometric patterns */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Top left gradient circle */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-gray-100 to-transparent rounded-full opacity-60"></div>
        
        {/* Top right pattern */}
        <div className="absolute -top-20 -right-20 w-60 h-60 opacity-20">
          <div className="w-full h-full bg-black rounded-full animate-pulse"></div>
        </div>
        
        {/* Middle left floating shapes */}
        <div className="absolute top-1/3 -left-20 space-y-8">
          <div className="w-4 h-4 bg-black rounded-full animate-bounce [animation-delay:0s]"></div>
          <div className="w-6 h-6 bg-gray-300 rounded-full animate-bounce [animation-delay:0.5s]"></div>
          <div className="w-3 h-3 bg-black rounded-full animate-bounce [animation-delay:1s]"></div>
        </div>
        
        {/* Middle right geometric shapes */}
        <div className="absolute top-1/2 -right-10 transform -translate-y-1/2">
          <div className="w-20 h-20 border border-gray-200 transform rotate-45 animate-spin [animation-duration:20s]"></div>
        </div>
        
        {/* Bottom pattern */}
        <div className="absolute -bottom-32 left-1/4 w-64 h-64 bg-gradient-to-tr from-gray-50 to-transparent rounded-full opacity-80"></div>
        
        {/* Floating dots pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-gray-300 rounded-full animate-ping [animation-delay:0s]"></div>
          <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-black rounded-full animate-ping [animation-delay:1s]"></div>
          <div className="absolute top-3/4 right-1/3 w-2.5 h-2.5 bg-gray-400 rounded-full animate-ping [animation-delay:2s]"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-gray-600 rounded-full animate-ping [animation-delay:1.5s]"></div>
        </div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="60" height="60" className="w-full h-full">
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>
    </>
  );
}