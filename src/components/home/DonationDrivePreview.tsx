"use client";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Heart } from "lucide-react";

function DonationDrivePreview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="donation-drive"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] text-white-foreground hover:bg-primary/80 mb-2">
              <Heart className="mr-1 h-3.5 w-3.5" />
              Initiative Led by Arielle Jimera
            </div>

            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Donation Drive
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our successful donation drive at the University of St. La Salle
              collected essential supplies for the children of Kalipay Negrense
              Foundation.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="overflow-hidden rounded-lg border bg-card"
            >
              <div className="p-1">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="/dd1.jpg?height=200&width=300"
                    alt="Project Logo"
                    className="h-[200px] w-full object-cover transition-all hover:scale-105"
                  />
                </div>
                <p className="mt-3 text-sm text-center text-muted-foreground p-2">
                  Project Dagtaan stationed near the BALAYAN Office at USLS
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="overflow-hidden rounded-lg border bg-card"
            >
              <div className="p-1">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="/dd2.jpg?height=200&width=300"
                    alt="Project Update"
                    className="h-[200px] w-full object-cover transition-all hover:scale-105"
                  />
                </div>
                <p className="mt-3 text-sm text-center text-muted-foreground p-2">
                  Project Update on the donation drive
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="overflow-hidden rounded-lg border bg-card"
            >
              <div className="p-1">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="/dd3.jpg?height=200&width=300"
                    alt="Organization of donation boxes"
                    className="h-[200px] w-full object-cover transition-all hover:scale-105"
                  />
                </div>
                <p className="mt-3 text-sm text-center text-muted-foreground p-2">
                  Chief Officer organizing the donation boxes
                </p>
              </div>
            </motion.div>
          </div>
          <div className="text-center">
            <Link
              to="/donation-drive"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] text-white-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Learn More About Our Donation Drive
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default DonationDrivePreview;
