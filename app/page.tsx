"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Instagram, Twitter, Facebook } from "lucide-react";
import { motion } from "framer-motion";

export default function ComingSoonPage() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#fcf8f2] text-[#242424] font-sans selection:bg-[#e8c9c0] selection:text-black overflow-hidden flex flex-col relative w-full">
      
      {/* Global Background Elements */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gradient-to-br from-[#e8c9c0]/30 to-transparent rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-gradient-to-tl from-[#d9c2a8]/20 to-transparent rounded-full blur-[120px] -z-10 pointer-events-none" />

      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full p-6 md:p-10 flex justify-center md:justify-start items-center z-10"
      >
        <h1 className="font-serif text-2xl md:text-3xl tracking-[0.15em] uppercase font-semibold text-[#161616]">
          DRM Beauty
        </h1>
      </motion.header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 md:px-12 lg:px-20 py-10 lg:py-0 relative z-10">
        
        {/* Left Column - Text */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-8 lg:pr-10"
        >
          <div className="space-y-4 w-full">
            <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] text-[#161616]">
              Something <br className="hidden lg:block" /> Beautiful <br className="hidden lg:block" /> Is Coming
            </h2>
            <p className="text-lg md:text-xl text-[#333333] max-w-md mx-auto lg:mx-0 font-light leading-relaxed">
              We’re creating something special for your beauty routine. Our new collection is launching soon.
            </p>
          </div>

          <motion.h3 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#c99587] tracking-[0.2em] font-bold select-none uppercase lg:text-left text-center"
          >
            Coming Soon
          </motion.h3>

          <button 
            onClick={() => document.getElementById('footer-signup')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative flex items-center justify-center px-8 py-4 bg-[#242424] text-white overflow-hidden transition-all duration-300 hover:bg-[#161616] hover:shadow-xl hover:shadow-[#242424]/20 mx-auto lg:mx-0"
          >
            <span className="relative z-10 text-xs sm:text-sm tracking-[0.15em] uppercase font-medium mr-4">Stay Tuned</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 transform group-hover:translate-x-2 transition-transform duration-300" />
            <div className="absolute inset-0 bg-[#333333] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
          </button>
          
        </motion.div>

        {/* Right Column - Visual/Decorative element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
          className="w-full lg:w-1/2 h-[40vh] sm:h-[50vh] lg:h-[80vh] mt-16 lg:mt-0 relative flex items-center justify-center"
        >
          <div className="relative w-full max-w-sm lg:max-w-md aspect-square flex items-center justify-center">
            {/* Soft decorative background glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#f7e7e2] to-[#e8c9c0] rounded-full blur-[60px] opacity-70 animate-pulse" style={{ animationDuration: "6s" }} />
            
            {/* Elegant Floating Sphere (Replaces Liquid Blob) */}
            <motion.div 
              animate={{ 
                y: [0, -15, 0],
                boxShadow: [
                  "0 10px 40px rgba(217,167,155,0.15)",
                  "0 20px 60px rgba(217,167,155,0.3)",
                  "0 10px 40px rgba(217,167,155,0.15)"
                ]
              }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
              className="relative w-[65%] h-[65%] rounded-full bg-gradient-to-br from-[#ffffff] to-[#fbf5ee] flex items-center justify-center border border-white/80 backdrop-blur-md z-10"
            >
               {/* Inner concentric rings for a premium compact/mirror feel */}
               <div className="absolute inset-4 rounded-full border border-[#d9a79b]/20" />
               <div className="absolute inset-8 rounded-full border border-[#d9a79b]/10" />
            </motion.div>
            
            {/* Secondary floating elements (Clean circles instead of blurs) */}
            <motion.div 
              animate={{ y: [0, -20, 0], x: [0, 10, 0], rotate: [0, 90, 0] }}
              transition={{ duration: 7, ease: "easeInOut", repeat: Infinity, delay: 1 }}
              className="absolute top-1/4 right-8 w-16 h-16 rounded-full border border-[#d9c2a8]/50 z-0" 
            />
            <motion.div 
              animate={{ y: [0, 25, 0], x: [0, -15, 0], rotate: [0, -90, 0] }}
              transition={{ duration: 8, ease: "easeInOut", repeat: Infinity, delay: 2 }}
              className="absolute bottom-1/4 left-8 w-24 h-24 rounded-full border border-[#d9a79b]/40 z-0" 
            />
          </div>
        </motion.div>

      </main>

      {/* Footer / Contact */}
      <motion.footer 
        id="footer-signup" 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full bg-[#f6efe6]/80 backdrop-blur-md py-12 px-6 md:px-10 flex flex-col items-center justify-center space-y-6 relative z-10 border-t border-[#eadcca]/50 mt-10 lg:mt-0"
      >
        <p className="font-serif text-xl md:text-2xl text-[#242424] italic">
          Follow us for updates
        </p>
        
        <div className="flex space-x-6">
          <a href="#" aria-label="Instagram" className="p-3 bg-white/80 rounded-full text-[#333333] hover:text-[#d9a79b] hover:bg-white hover:shadow-soft transition-all duration-300 transform hover:-translate-y-1">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" aria-label="Twitter" className="p-3 bg-white/80 rounded-full text-[#333333] hover:text-[#d9a79b] hover:bg-white hover:shadow-soft transition-all duration-300 transform hover:-translate-y-1">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" aria-label="Facebook" className="p-3 bg-white/80 rounded-full text-[#333333] hover:text-[#d9a79b] hover:bg-white hover:shadow-soft transition-all duration-300 transform hover:-translate-y-1">
            <Facebook className="w-5 h-5" />
          </a>
        </div>

        <div className="w-full max-w-md border-b border-[#d9c2a8]/30 my-2" />
        
        <p className="text-xs text-[#737373] tracking-widest uppercase font-medium">
          © 2026 DRM Beauty. All rights reserved.
        </p>
      </motion.footer>

    </div>
  );
}
