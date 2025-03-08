"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Clock, MapPin, Calendar } from "lucide-react";

function ActivitiesPage() {
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
      id="activities"
      className="w-full py-8 sm:py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container px-0 sm:px-4 md:px-6 max-w-full sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8 sm:space-y-12"
        >
          <motion.div
            variants={itemVariants}
            className="text-center space-y-4 px-4 sm:px-0"
          >
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
              Program Activities
            </h2>
            <p className="mx-auto max-w-[700px] text-sm sm:text-base text-gray-500 md:text-lg lg:text-xl/relaxed dark:text-gray-400">
              Our program spans three days, each with unique activities designed
              to foster creativity, technical skills, and teamwork.
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Tabs defaultValue="day1" className="w-full">
              <div className="overflow-x-auto pb-2 px-4 sm:px-0">
                <TabsList className="grid w-full min-w-[300px] grid-cols-3">
                  <TabsTrigger value="day1">Day 1</TabsTrigger>
                  <TabsTrigger value="day2">Day 2</TabsTrigger>
                  <TabsTrigger value="day3">Day 3</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="day1" className="mt-4 sm:mt-6">
                <Card className="p-2 sm:p-3 rounded-none sm:rounded-lg">
                  <CardHeader className="p-2 sm:p-4">
                    <CardTitle className="text-lg sm:text-xl md:text-2xl">
                      Day 1: Color the Dreams - Amazing Race
                    </CardTitle>
                    <CardDescription>
                      Focused on creativity, teamwork, and fun challenges
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 sm:space-y-6 p-2 sm:p-4">
                    {/* Header Thing */}
                    <div className="grid gap-2 sm:gap-4 grid-cols-1 sm:grid-cols-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                        <span className="text-xs sm:text-sm">
                          March 15, 2025
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                        <span className="text-xs sm:text-sm">
                          9:00 AM - 5:00 PM
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                        <span className="text-xs sm:text-sm">
                          Kalipay Negrense Foundation
                        </span>
                      </div>
                    </div>

                    {/* Morning Program */}
                    <div>
                      <h4 className="text-base sm:text-lg font-medium mb-2 mt-6 sm:mt-10 w-full px-0">
                        Morning Program
                      </h4>

                      <div className="overflow-x-auto -mx-2 sm:mx-0">
                        <Table className="w-full">
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-2/12 p-1 sm:p-2 text-xs sm:text-sm">
                                Time
                              </TableHead>
                              <TableHead className="w-3/12 p-1 sm:p-2 text-xs sm:text-sm">
                                Activity
                              </TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                9:00 AM – 10:30 AM
                              </TableCell>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Departure from La Salle & Arrival at Kalipay
                                Negrense Foundation
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                10:30 AM – 12:00 NN
                              </TableCell>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Ocular Visit & Final Preparations (Venue
                                assessment, station setup, and briefing)
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                12:00 NN – 1:00 PM
                              </TableCell>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Lunch Break
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </div>

                    {/* Afternoon Activities */}
                    <div>
                      <h4 className="text-base sm:text-lg font-medium mb-2 mt-6 sm:mt-10 w-full px-0">
                        Afternoon Activities: Color the Dreams Race
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-4 dark:text-gray-400 w-full px-0">
                        Children will go through seven (7) various activity
                        stations where they complete tasks to earn materials for
                        their final project: Paper Treasures (Handmade Gratitude
                        Cards).
                      </p>
                      <div className="overflow-x-auto -mx-2 sm:mx-0">
                        <Table className="w-full">
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-2/12 p-1 sm:p-2 text-xs sm:text-sm">
                                Station
                              </TableHead>
                              <TableHead className="w-3/12 p-1 sm:p-2 text-xs sm:text-sm">
                                Activity Description
                              </TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                🎨 Paint Craze
                              </TableCell>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Teams paint pre-designed tote bags within a time
                                limit.
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                🦸 Super Mask Quest
                              </TableCell>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Kids decorate superhero masks and pose for a
                                group photo.
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                🧱 LEGO Project
                              </TableCell>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Teams build a LEGO creation based on a given
                                theme and present it.
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                🧩 Puzzle Race
                              </TableCell>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Teams race to complete jigsaw puzzles with a
                                mix-and-match twist.
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                🔍 Memory Match Mania
                              </TableCell>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Kids play a memory-matching game under a time
                                limit.
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                🏃‍♂️ Obstacle Madness
                              </TableCell>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                A fun obstacle course promoting teamwork and
                                coordination.
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                🔊 Guess the Sound
                              </TableCell>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Kids identify sounds to earn rewards.
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </div>

                    {/* Roles & Responsibilities */}
                    <div>
                      <h4 className="text-base sm:text-lg font-medium mb-2 mt-6 sm:mt-10 w-full px-0">
                        Roles & Responsibilities
                      </h4>
                      <div className="overflow-x-auto -mx-2 sm:mx-0">
                        <Table className="w-full">
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-2/12 p-1 sm:p-2 text-xs sm:text-sm">
                                Role
                              </TableHead>
                              <TableHead className="w-3/12 p-1 sm:p-2 text-xs sm:text-sm">
                                Responsibilities
                              </TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Event Director/ Lead Coordinator
                              </TableCell>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Oversees event flow, makes real-time
                                adjustments, ensures all teams are functioning
                                smoothly
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Program Manager
                              </TableCell>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Ensures event follows the timeline, assists
                                emcee, manages transitions
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Emcee/ Host
                              </TableCell>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Engages participants, introduces segments,
                                maintains energy
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Team Facilitators
                              </TableCell>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Guide assigned teams through the race, encourage
                                participation. One per 5 kids in a group.
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Station Masters (Day 1)
                              </TableCell>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Explain and oversee station tasks, enforce
                                rules, distribute prizes. Station 1 and Final
                                Station will be guided by the Team Faci, and
                                Station 7 will be manned by Tech. Will be in
                                charge of setting up their stations.
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Computer Lab Repair Team (Day 1)
                              </TableCell>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                In collaboration with USLS ITS Office, and at
                                most 2 volunteers from GDG-USLS, they will be in
                                charge of setting up the computer lab,
                                installing necessary software, and ensuring all
                                computers are in working order by the end of Day
                                2.
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Photographers & Documentation
                              </TableCell>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Capture highlights of activities and
                                interactions for reports and promotions
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Tech & Sound Team
                              </TableCell>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Manages microphones, speakers, and sound system.
                                Will also man the Station 7.
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Food & Logistics Team
                              </TableCell>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Responsible for buying food, running errands,
                                and assisting the kitchen in preparing snacks
                                and refreshments. Additionally, handles
                                last-minute material transfers and provides
                                general assistance as needed.
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="day2" className="mt-4 sm:mt-6">
                <Card className="p-2 sm:p-3 rounded-none sm:rounded-lg">
                  <CardHeader className="p-2 sm:p-4">
                    <CardTitle className="text-lg sm:text-xl md:text-2xl">
                      Day 2: Tech Seminars & Computer Lab Repair
                    </CardTitle>
                    <CardDescription>
                      Focused on hands-on tech learning while repairing and
                      optimizing Kalipay's computer lab
                    </CardDescription>
                  </CardHeader>

                  {/* Header Thing */}
                  <CardContent className="space-y-4 sm:space-y-6 p-2 sm:p-4">
                    <div className="grid gap-2 sm:gap-4 grid-cols-1 sm:grid-cols-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                        <span className="text-xs sm:text-sm">
                          March 22, 2025
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                        <span className="text-xs sm:text-sm">
                          9:00 AM - 5:00 PM
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                        <span className="text-xs sm:text-sm">
                          Kalipay Negrense Foundation
                        </span>
                      </div>
                    </div>

                    {/* Morning Program */}
                    <div>
                      <h4 className="text-base sm:text-lg font-medium mb-2 mt-6 sm:mt-10 w-full px-0">
                        Morning Program
                      </h4>

                      <div className="overflow-x-auto -mx-2 sm:mx-0">
                        <Table className="w-full">
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-2/12 p-1 sm:p-2 text-xs sm:text-sm">
                                Time
                              </TableHead>
                              <TableHead className="w-3/12 p-1 sm:p-2 text-xs sm:text-sm">
                                Activity
                              </TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                9:00 AM – 10:30 AM
                              </TableCell>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Departure from La Salle & Arrival at Kalipay
                                Negrense Foundation
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                10:30 AM – 12:00 NN
                              </TableCell>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Station Setup & Venue Preparation <br />
                                Teams set up activity stations and finalize
                                materials. <br />
                                Teams continue optimising and repairing the
                                computer lab.
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                12:00 NN – 1:00 PM
                              </TableCell>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Lunch Break
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </div>

                    {/* Afternoon Activities */}
                    <div>
                      <h4 className="text-base sm:text-lg font-medium mb-2 mt-6 sm:mt-10 w-full px-0">
                        Afternoon Activities: Cyber World Tour
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-4 dark:text-gray-400 w-full px-0">
                        Children participate in station-based tech learning,
                        collecting stamps in their "tech passports."
                      </p>
                      <div className="overflow-x-auto -mx-2 sm:mx-0">
                        <Table className="w-full">
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-2/12 p-1 sm:p-2 text-xs sm:text-sm">
                                Station
                              </TableHead>
                              <TableHead className="w-3/12 p-1 sm:p-2 text-xs sm:text-sm">
                                Activity Description
                              </TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                🚀 The AI Nexus
                              </TableCell>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Kids explore AI-generated stories, art, and
                                chatbots. They will learn how AI assists in
                                school, art, and daily life.
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                🌐 Cybernaut City
                              </TableCell>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Internet safety and scam detection through
                                interactive challenges.
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                📸 Pixelopolis
                              </TableCell>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Kids learn basic video and photo editing.
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                🎭 DreamLens Arcade
                              </TableCell>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Augmented Reality (AR) storytelling and
                                mini-comic creation.
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                🖌️ Creator's Cove
                              </TableCell>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Digital drawing on tablets to create futuristic
                                inventions.
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                🔨 CodeCrafter's Workshop
                              </TableCell>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Kids will be introduced to Scratch, where they
                                will learn the basics of coding logic and create
                                their own mini game.
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                🎶 Soundwave Studio
                              </TableCell>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Kids experiment with digital music-making tools.
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </div>

                    {/* Roles & Responsibilities - Simplified for mobile */}
                    <div className="sm:block hidden">
                      <h4 className="text-base sm:text-lg font-medium mb-2 mt-6 sm:mt-10 w-full px-0">
                        Roles & Responsibilities
                      </h4>
                      <div className="overflow-x-auto -mx-2 sm:mx-0">
                        <Table className="w-full">
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-2/12 p-1 sm:p-2 text-xs sm:text-sm">
                                Role
                              </TableHead>
                              <TableHead className="w-3/12 p-1 sm:p-2 text-xs sm:text-sm">
                                Responsibilities
                              </TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Event Director/ Lead Coordinator
                              </TableCell>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Oversees event flow, makes real-time
                                adjustments, ensures all teams are functioning
                                smoothly
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Program Manager
                              </TableCell>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Ensures event follows the timeline, assists
                                emcee, manages transitions
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Emcee/ Host
                              </TableCell>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Engages participants, introduces segments,
                                maintains energy
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Station Masters (Day 2)
                              </TableCell>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Guide children through their assigned stations,
                                ensure engagement and learning. In charge of
                                setting up their own stations
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Computer Lab Repair Team (Day 2)
                              </TableCell>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                In collaboration with USLS ITS Office, and at
                                most 2 volunteers from GDG-USLS, they will be in
                                charge of setting up the computer lab,
                                installing necessary software, and ensuring all
                                computers are in working order for the
                                activities on Day 3.
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Photographers & Documentation
                              </TableCell>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Capture highlights of activities and
                                interactions for reports and promotions
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Tech & Sound Team
                              </TableCell>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Manages microphones, speakers, and sound system.
                                Will also man the Station 7.
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Food & Logistics Team
                              </TableCell>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Responsible for buying food, running errands,
                                and assisting the kitchen in preparing snacks
                                and refreshments. Additionally, handles
                                last-minute material transfers and provides
                                general assistance as needed.
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="day3" className="mt-4 sm:mt-6">
                <Card className="p-2 sm:p-3 rounded-none sm:rounded-lg">
                  <CardHeader className="p-2 sm:p-4">
                    <CardTitle className="text-lg sm:text-xl md:text-2xl">
                      Day 3: Computer Lab Hands-On & Rewards System
                    </CardTitle>
                    <CardDescription>
                      Allows kids to apply their tech skills from Day 2 while
                      engaging in a fun reward-based system
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 sm:space-y-6 p-2 sm:p-4">
                    {/* Header Thing */}
                    <div className="grid gap-2 sm:gap-4 grid-cols-1 sm:grid-cols-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                        <span className="text-xs sm:text-sm">
                          March 29, 2025
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                        <span className="text-xs sm:text-sm">
                          9:00 AM - 5:00 PM
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                        <span className="text-xs sm:text-sm">
                          Kalipay Negrense Foundation
                        </span>
                      </div>
                    </div>

                    {/* Morning Program */}
                    <div>
                      <h4 className="text-base sm:text-lg font-medium mb-2 mt-6 sm:mt-10 w-full px-0">
                        Morning Program
                      </h4>

                      <div className="overflow-x-auto -mx-2 sm:mx-0">
                        <Table className="w-full">
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-2/12 p-1 sm:p-2 text-xs sm:text-sm">
                                Time
                              </TableHead>
                              <TableHead className="w-3/12 p-1 sm:p-2 text-xs sm:text-sm">
                                Activity
                              </TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                9:00 AM – 10:30 AM
                              </TableCell>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Departure from La Salle & Arrival at Kalipay
                                Negrense Foundation
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                10:30 AM – 12:00 NN
                              </TableCell>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Computer Laboratory checking, venue assessment,
                                station setup, and briefing
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                12:00 NN – 1:00 PM
                              </TableCell>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Lunch Break
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </div>

                    {/* Afternoon Activities */}
                    <div>
                      <h4 className="text-base sm:text-lg font-medium mb-2 mt-6 sm:mt-10 w-full px-0">
                        Afternoon Activities
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-4 dark:text-gray-400 w-full px-0">
                        Children will rotate between stations, earning "heart"
                        cards for participation, which they can redeem for
                        prizes at the Hearts Reward Station.
                      </p>
                      <div className="overflow-x-auto -mx-2 sm:mx-0">
                        <Table className="w-full">
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-2/12 p-1 sm:p-2 text-xs sm:text-sm">
                                Station
                              </TableHead>
                              <TableHead className="w-3/12 p-1 sm:p-2 text-xs sm:text-sm">
                                Activity Description
                              </TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                🏴‍☠️ Tech Treasure Hunt
                              </TableCell>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Kids solve tech-related riddles using QR codes
                                and AR clues.
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                🎮 Color Code: The Mystery Painting
                              </TableCell>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Solving riddles unlocks sections of a hidden
                                image.
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                {" "}
                                ⚔️ Virtual Avatar Arena
                              </TableCell>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                A hidden volunteer controls a 3D model (VTuber),
                                interacting with kids in real-time.
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                {" "}
                                🎁 Heart Rewards Station
                              </TableCell>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Kids exchange "heart" cards for small prizes and
                                stickers.
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                💻 Computer Lab: Smart Tech Habits
                              </TableCell>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Kids learn email management, online safety, and
                                file organization.
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </div>

                    {/* Roles & Responsibilities - Simplified for mobile */}
                    <div className="sm:block hidden">
                      <h4 className="text-base sm:text-lg font-medium mb-2 mt-6 sm:mt-10 w-full px-0">
                        Roles & Responsibilities
                      </h4>
                      <div className="overflow-x-auto -mx-2 sm:mx-0">
                        <Table className="w-full">
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-2/12 p-1 sm:p-2 text-xs sm:text-sm">
                                Role
                              </TableHead>
                              <TableHead className="w-3/12 p-1 sm:p-2 text-xs sm:text-sm">
                                Responsibilities
                              </TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Event Director/ Lead Coordinator
                              </TableCell>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Oversees event flow, makes real-time
                                adjustments, ensures all teams are functioning
                                smoothly
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Program Manager
                              </TableCell>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Ensures event follows the timeline, assists
                                emcee, manages transitions
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Emcee/ Host
                              </TableCell>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Engages participants, introduces segments,
                                maintains energy
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Station Masters (Day 3)
                              </TableCell>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Explain and oversee station tasks, enforce
                                rules, distribute prizes.
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Computer Lab Team (Day 3)
                              </TableCell>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                In collaboration with CECS, and at most 2
                                volunteers from GDG-USLS, they will take over
                                the learning sessions in the computer
                                laboratory.
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                VTuber Operator
                              </TableCell>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Controls the virtual avatar from a different
                                room and interacts with participants in real
                                time
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                VTuber Setup Manager
                              </TableCell>
                              <TableCell className="p-1 sm:p-2 text-xs sm:text-sm">
                                Manages camera, software, and environment for
                                smooth execution. Setups the station.
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default ActivitiesPage;
