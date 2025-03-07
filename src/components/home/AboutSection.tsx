"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CalendarDays, Users, Target, Building } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="about"
      className="w-full py-12 md:py-24 lg:py-32 gradient-section-2"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Project Dagtaan
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              This initiative aims to empower the children of Kalipay Negrense
              Foundation through creative and technological outreach programs.
            </p>
            <p className="text-sm mt-4 text-center text-gray-500">
              Project Dagtaan is created and led by{" "}
              <span className="font-medium dark:text-gray-400">
                Arielle Marañon Jimera
              </span>
              , Chief Operations Officer.
              <br />
              Assisted by{" "}
              <span className="font-medium dark:text-gray-400">
                Alfred Alcala
              </span>
              , and{" "}
              <span className="font-medium dark:text-gray-400">
                Mark Pablico
              </span>
              , Community Development Leads.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            <Card className="bg-gradient-to-tl from-[#373B44] to-[#4286f4]">
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <Building className="h-6 w-6 text-white/50" />
                <CardTitle className="text-lg">Organizer</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[0.81rem] text-center text-white/70">
                  Google Developer Groups on Campus - University of St. La Salle
                  (GDG-USLS)
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-tl from-[#240b36] to-[#c31432]">
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <CalendarDays className="h-6 w-6 text-white/50" />
                <CardTitle className="text-lg">Program Duration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[0.81rem] text-white/70 leading-snug text-center">
                  The partnership with Kalipay Negrense Foundation spans three
                  years starting March 2025, with this AY’s three-day "Color the
                  Dreams of Children" program set for March 15, 22, and 29.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-tl from-[#000000] to-[#0f9b0f]">
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <Target className="h-6 w-6 text-white/50" />
                <CardTitle className="text-lg">Target Beneficiaries</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[0.81rem] text-center text-white/70">
                  The program will benefit approximately 80 children under the
                  care of Kalipay Negrense Foundation, with activities designed
                  for ages 6-12 on Day 1 and ages 13 and above on Days 2 and 3.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-tl from-[#c21500] to-[#ffc500]">
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <Users className="h-6 w-6 text-white/50" />
                <CardTitle className="text-lg">Partner Organization</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[0.81rem]  text-white/70 text-center">
                  The partner organization for this program is Kalipay Negrense
                  Foundation, a non-profit dedicated to providing care,
                  education, and support to disadvantaged children.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="mx-auto max-w-[800px] text-center space-y-4"
          >
            <h3 className="text-2xl font-bold mt-32">Our Mission</h3>
            <p className="text-gray-500 dark:text-gray-400">
              The initiative will span three Saturdays in March 2025, each
              focusing on fostering creativity, digital literacy, and
              interactive learning. Through a combination of hands-on
              activities, tech seminars, and creative exploration, we aim to
              provide the children with valuable skills and memorable
              experiences.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
