"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Heart } from "lucide-react";

function DonationDrivePage() {
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

  // Sample donation drive images - replace with actual images
  const donationDriveImages = [
    {
      src: "/dd5.jpg?height=400&width=600",
      alt: "Donation Drive pubmat",
      caption: "Donation drive publication material",
    },
    {
      src: "/dd2.jpg?height=400&width=600",
      alt: "Donation drive located in front of BALAYAN Office",
      caption: "Donation drive located in front of BALAYAN Office",
    },
    {
      src: "/dd3.jpg?height=400&width=600",
      alt: "Arielle Jimera with donation boxes",
      caption: "Chief Officer organizing the donation boxes",
    },
    {
      src: "/dd4.jpg?height=400&width=600",
      alt: "Hygiene kits and school supplies collection",
      caption:
        "Hygiene kits and school supplies collected for creative activities",
    },
    {
      src: "/dd1.jpg?height=400&width=600",
      alt: "Students donating school supplies",
      caption: "USLS students bringing donations to the collection point",
    },
  ];

  return (
    <section
      id="donation-drive"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900"
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
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] text-white-foreground hover:bg-primary/80 mb-2">
              <Heart className="mr-1 h-3.5 w-3.5" />
              Initiative Led by Arielle Jimera
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Donation Drive
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our successful donation drive at the University of St. La Salle
              collected essential supplies for the children of Kalipay Negrense
              Foundation.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {donationDriveImages.map((image, index) => (
              <Card key={index}>
                <CardContent className="flex flex-col items-center justify-center">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="sm:h-[300px] h-full w-full object-cover transition-all hover:scale-105"
                    />
                  </div>
                  <p className="mt-3 text-sm text-center text-muted-foreground p-2">
                    {image.caption}
                  </p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
          <motion.div variants={itemVariants} className="mx-auto max-w-[800px]">
            <h3 className="text-2xl font-bold text-center">
              Impact of Our Donation Drive
            </h3>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10">
              {/* Impact 1: Digital Access */}
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="m7 11 2-2-2-2" />
                    <path d="M11 13h4" />
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                  </svg>
                </div>

                <h4 className="text-lg font-medium">Digital Access</h4>
                <p className="text-sm text-muted-foreground">
                  The donation of 45-47 digital drawing tablets provided
                  children with modern tools, fostering creativity and tech
                  literacy.
                </p>
              </div>

              {/* Impact 6: Computer Lab */}
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    viewBox="0 0 24.00 24.00"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#2563eb"
                    stroke-width="0.00024000000000000003"
                    className="h-6 w-6"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2 6C2 4.34315 3.34315 3 5 3H19C20.6569 3 22 4.34315 22 6V15C22 16.6569 20.6569 18 19 18H13V19H15C15.5523 19 16 19.4477 16 20C16 20.5523 15.5523 21 15 21H9C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19H11V18H5C3.34315 18 2 16.6569 2 15V6ZM5 5C4.44772 5 4 5.44772 4 6V15C4 15.5523 4.44772 16 5 16H19C19.5523 16 20 15.5523 20 15V6C20 5.44772 19.5523 5 19 5H5Z"
                        fill="#2563eb"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
                <h4 className="text-lg font-medium">Enhanced Computer Lab</h4>
                <p className="text-sm text-muted-foreground">
                  Repairs and software installations in the computer lab ensured
                  children have reliable access to technology for learning and
                  creativity.
                </p>
              </div>

              {/* Impact 2: Increased Engagement */}
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium">Increased Engagement</h4>
                <p className="text-sm text-muted-foreground">
                  The Heart Card rewards system and donated giveaways boosted
                  participation, making learning more interactive and
                  motivating.
                </p>
              </div>

              {/* Impact 3: Educational Support */}
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    fill="#2563eb"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 335.08 335.079"
                    xmlSpace="preserve"
                    className="h-6 w-6 text-primary"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <path d="M311.175,115.775c-1.355-10.186-1.546-27.73,7.915-33.621c0.169-0.108,0.295-0.264,0.443-0.398 c7.735-2.474,13.088-5.946,8.886-10.618l-114.102-34.38L29.56,62.445c0,0-21.157,3.024-19.267,35.894 c1.026,17.89,6.637,26.676,11.544,31l-15.161,4.569c-4.208,4.672,1.144,8.145,8.88,10.615c0.147,0.138,0.271,0.293,0.443,0.401 c9.455,5.896,9.273,23.438,7.913,33.626c-33.967,9.645-21.774,12.788-21.774,12.788l7.451,1.803 c-5.241,4.736-10.446,13.717-9.471,30.75c1.891,32.864,19.269,35.132,19.269,35.132l120.904,39.298l182.49-44.202 c0,0,12.197-3.148-21.779-12.794c-1.366-10.172-1.556-27.712,7.921-33.623c0.174-0.105,0.301-0.264,0.442-0.396 c7.736-2.474,13.084-5.943,8.881-10.615l-7.932-2.395c5.29-3.19,13.236-11.527,14.481-33.183 c0.859-14.896-3.027-23.62-7.525-28.756l15.678-3.794C332.949,128.569,345.146,125.421,311.175,115.775z M158.533,115.354 l30.688-6.307l103.708-21.312l15.451-3.178c-4.937,9.036-4.73,21.402-3.913,29.35c0.179,1.798,0.385,3.44,0.585,4.688 L288.14,122.8l-130.897,32.563L158.533,115.354z M26.71,147.337l15.449,3.178l99.597,20.474l8.701,1.782l0,0l0,0l26.093,5.363 l1.287,40.01L43.303,184.673l-13.263-3.296c0.195-1.25,0.401-2.89,0.588-4.693C31.44,168.742,31.651,156.373,26.71,147.337z M20.708,96.757c-0.187-8.743,1.371-15.066,4.52-18.28c2.004-2.052,4.369-2.479,5.991-2.479c0.857,0,1.474,0.119,1.516,0.119 l79.607,25.953l39.717,12.949l-1.303,40.289L39.334,124.07l-5.88-1.647c-0.216-0.061-0.509-0.103-0.735-0.113 C32.26,122.277,21.244,121.263,20.708,96.757z M140.579,280.866L23.28,247.98c-0.217-0.063-0.507-0.105-0.733-0.116 c-0.467-0.031-11.488-1.044-12.021-25.544c-0.19-8.754,1.376-15.071,4.519-18.288c2.009-2.052,4.375-2.479,5.994-2.479 c0.859,0,1.474,0.115,1.519,0.115c0,0,0.005,0,0,0l119.316,38.908L140.579,280.866z M294.284,239.459 c0.185,1.804,0.391,3.443,0.591,4.693l-147.812,36.771l1.292-40.01l31.601-6.497l4.667,1.129l17.492-5.685l80.631-16.569 l15.457-3.18C293.261,219.146,293.466,231.517,294.284,239.459z M302.426,185.084c-0.269,0.006-0.538,0.042-0.791,0.122 l-11.148,3.121l-106.148,29.764l-1.298-40.289l34.826-11.359l84.327-27.501c0.011-0.005,4.436-0.988,7.684,2.315 c3.144,3.214,4.704,9.537,4.52,18.28C313.848,184.035,302.827,185.053,302.426,185.084z"></path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </div>
                <h4 className="text-lg font-medium">Educational Support</h4>
                <p className="text-sm text-muted-foreground">
                  Donations of stationery, art materials, and digital tools
                  enriched Kalipay’s learning resources, ensuring continued
                  education.
                </p>
              </div>

              {/* Impact 4: Community Involvement */}
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium">Community Involvement</h4>
                <p className="text-sm text-muted-foreground">
                  The donation drive fostered collaboration between
                  organizations and individuals, strengthening long-term support
                  for Kalipay.
                </p>
              </div>

              {/* Impact 5: Lasting Impact */}
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium">Lasting Impact</h4>
                <p className="text-sm text-muted-foreground">
                  The improved computer lab, digital tools, and materials
                  provide sustainable learning benefits beyond the outreach
                  event.
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <p className="text-muted-foreground">
                The donation drive was a tremendous success thanks to the
                generosity of the USLS community and the leadership of Arielle
                Jimera, Chief Operations Officer of GDG-USLS.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default DonationDrivePage;
