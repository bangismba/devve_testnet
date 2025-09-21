// src/components/About.tsx
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-gray-50 text-gray-800 px-6 py-20 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-extrabold mb-6 text-gray-900"
        >
          About <span className="text-blue-600">Ghunaghost Tech Ltd</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
        >
          At <span className="font-semibold text-gray-900">Ghunaghost Tech Ltd</span>, 
          we are dedicated to delivering innovative technology solutions that empower
          individuals, businesses, and institutions across Africa and beyond.  
          From <span className="text-blue-600 font-medium">web development</span> and 
          <span className="text-blue-600 font-medium"> cybersecurity</span>, to 
          <span className="text-blue-600 font-medium"> tech education</span> and 
          <span className="text-blue-600 font-medium"> cloud services</span>, our mission 
          is to transform ideas into secure, scalable, and impactful digital experiences.
        </motion.p>

        {/* Expertise Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-semibold shadow-sm">
            Web Development
          </span>
          <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-semibold shadow-sm">
            Cybersecurity
          </span>
          <span className="bg-purple-100 text-purple-700 px-5 py-2 rounded-full text-sm font-semibold shadow-sm">
            Tech Education
          </span>
          <span className="bg-yellow-100 text-yellow-700 px-5 py-2 rounded-full text-sm font-semibold shadow-sm">
            IT Consulting
          </span>
          <span className="bg-pink-100 text-pink-700 px-5 py-2 rounded-full text-sm font-semibold shadow-sm">
            Cloud Solutions
          </span>
        </motion.div>
      </div>

      {/* Decorative background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-transparent to-purple-100/40 pointer-events-none"></div>
    </section>
  );
}
