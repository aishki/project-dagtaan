"use client";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function DonorsPreview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Sample donor data - replace with actual data
  const donors = [
    {
      name: "Joseph Dale Bañares",
      role: "Senior Full Stack Engineer",
      image: "/Banares2.png?height=100&width=100",
    },
    {
      name: "Josh Daniel Bañares",
      role: "Senior Full Stack Engineer",
      image: "/Banares1.png?height=100&width=100",
    },
    {
      name: "Gene Manuel Torres",
      role: "Events and Operations Officer",
      image: "/Torres.png?height=100&width=100",
    },
  ];

  return (
    <section
      id="donors"
      className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950"
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Generous Donors
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We extend our heartfelt gratitude to the individuals and
              organizations whose generosity makes Project Dagtaan possible.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {donors.map((donor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-6 rounded-lg border bg-card"
              >
                <div className="relative h-24 w-24 rounded-full overflow-hidden mb-4">
                  <img
                    src={donor.image || "/placeholder.svg"}
                    alt={donor.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-lg font-medium">{donor.name}</h3>
                <p className="text-sm text-muted-foreground">{donor.role}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/donors"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] text-white-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              View All Donors
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default DonorsPreview;
