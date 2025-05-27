import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const fonts = [
  "'Anton', sans-serif",               
  "'Pacifico', cursive",                  
  "'Press Start 2P', cursive",           
  "'Rubik Burned', cursive",              
];
export const NotFound = () => {
  const [fontIndex, setFontIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFontIndex((prev) => (prev + 1) % fonts.length);
    }, 1500); // trochu delší a jemnější
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black text-white text-center">
      {/* Google Fonts import */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Rubik+Burned&family=Anton&family=Pacifico&display=swap');
        `}
      </style>

      <h1
        style={{
          fontSize: "8vw",
          fontWeight: "bold",
          lineHeight: "1.2",
          transition: "all 0.5s ease",
        }}
      >
        Page{" "}
        <motion.span
          key={fontIndex}
          initial={{ opacity: 0.2, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: fonts[fontIndex],
            display: "inline-block",
            color: "#3b82f6", // Tailwind's blue-500
            textShadow: "0 0 15px #1e40af, 0 0 30px #1e40af", // Glow effect
            transition: "all 0.5s ease",
          }}
        >
          NOT
        </motion.span>{" "}
        Found
      </h1>
    </div>
  );
};
