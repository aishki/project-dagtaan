"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

function DonorsPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  // Donor Data
  const donors = [
    {
      name: "Joseph Dale Bañares",
      role: "Senior Software Engineer",
      company: "Venatus Global Corporation",
      image: "/Banares2.png?height=100&width=100",
      contribution: "40+ Toy Bricks",
    },
    {
      name: "Josh Daniel Bañares",
      role: "Senior Full Stack Engineer",
      company: "Referenta UG",
      image: "/Banares1.png?height=100&width=100",
      contribution: "40+ Digital Drawing Tablets",
    },
    {
      name: "Gene Manuel Torres",
      role: "Events and Operations Officer",
      company: "Google Developer Groups on Campus-USLS",
      image: "/Torres.png?height=100&width=100",
      contribution: "Station Materials",
    },
    {
      name: "Vizarie Mamilla Candeluna",
      role: "Individual Donor",
      company: "Student at the University of St. La Salle",
      image: "/Candeluna.jpg?height=100&width=100",
      contribution: "Prizes/Giveaways",
    },
    {
      name: "Class of IT3C",
      role: "Class Donor A.Y. 2023-2024",
      company: "Students at the University of St. La Salle",
      image: "/IT3C.jpg?height=100&width=100",
      contribution: "Creamy Carbonara Buldak Noodles",
    },
    {
      name: "Lasallian Community",
      role: "Community Donors",
      company: "University of St. La Salle",
      image: "/lasalle.jpg?height=100&width=100",
      contribution: "Books, food, art supplies, clothes, hygiene kits",
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
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Generous Donors
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We extend our heartfelt gratitude to the individuals and
              organizations whose generosity makes Project Dagtaan possible.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {donors.map((donor, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="overflow-hidden min-h-[200px] max-h-[200px]">
                  <CardHeader className="pb-0">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-16 w-16 border-2">
                        <AvatarImage src={donor.image} alt={donor.name} />
                        <AvatarFallback>
                          {donor.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle>{donor.name}</CardTitle>
                        <CardDescription>{donor.role}</CardDescription>
                        <p className="text-sm text-muted-foreground">
                          {donor.company}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">Contribution:</p>
                        <p className="text-sm text-muted-foreground">
                          {donor.contribution}
                        </p>
                      </div>
                      <div className="flex items-center gap-1">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <svg
                              key={i}
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                            >
                              <defs>
                                <linearGradient
                                  id="gradientFill"
                                  x1="0%"
                                  y1="50%"
                                  x2="100%"
                                  y2="50%"
                                >
                                  <stop offset="0%" stopColor="#F37335" />{" "}
                                  {/* Left color */}
                                  <stop
                                    offset="100%"
                                    stopColor="#fff95b"
                                  />{" "}
                                  {/* Right color */}
                                </linearGradient>
                              </defs>
                              <path
                                d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z"
                                fill="url(#gradientFill)"
                              />
                            </svg>
                          ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-muted-foreground">
              Want to become a donor?{" "}
              <a href="#contact" className="text-primary hover:underline">
                Contact us
              </a>{" "}
              to learn more about how you can support Project Dagtaan.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default DonorsPage;
