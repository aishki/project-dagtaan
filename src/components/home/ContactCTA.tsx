"use client";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function ContactCTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 dark:bg-gray-950">
      <div className="container px-4 md:px-6 ">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="grid gap-6 lg:grid-cols-2 items-center"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter pb-2 sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#00dbde]/80 via-[#c471ed] to-[#f64f59]">
              Join Us in Making a Difference!
            </h2>
            <p className="max-w-[600px] text-white-foreground/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Together, we can empower the children of Kalipay Negrense
              Foundation and color their dreams with hope and opportunity.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-end">
            <Link to="/contact" className="gradient-button">
              <span className="opacity-100 z-50">Get Involved</span>
              <div className="gradient-hoverEffect">
                <div></div>
              </div>
            </Link>

            <Link
              to="/donation-drive"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8"
            >
              Learn About Our Donation Drive
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactCTA;
