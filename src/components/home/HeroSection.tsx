"use client";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section className="w-full py-12 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_300px] lg:gap-12 xl:grid-cols-[1fr_500px] ">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <motion.h1
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Project Dagtaan:{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00dbde]/80 via-[#c471ed] to-[#f64f59]">
                  Color the Dreams of Children
                </span>
              </motion.h1>
              <motion.p
                className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Empowering the children of Kalipay Negrense Foundation through
                creative and technological outreach programs.
              </motion.p>
            </div>
            <motion.div
              className="flex flex-col gap-2 min-[400px]:flex-row"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Link to="/about" className="gradient-button z-10">
                <span className="opacity-100 z-50 relative">Learn More</span>
                <div className="gradient-hoverEffect">
                  <div></div>
                </div>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8 z-10"
              >
                Get Involved
              </Link>
            </motion.div>
          </motion.div>
          <motion.img
            src="/hero-img4.png?height=full&width=full"
            alt="Children participating in Project Dagtaan activities"
            className="pointer-events-none object-cover w-1/2 relative top-16 sm:w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full h-auto rounded-xl mx-auto -z-1000"
            animate={{
              opacity: 1,
              scale: 0.8,
              y: [0, -90, 10],
              x: [0, -90, 90],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
