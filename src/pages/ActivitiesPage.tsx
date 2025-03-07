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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Program Activities
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our program spans three days, each with unique activities designed
              to foster creativity, technical skills, and teamwork.
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Tabs defaultValue="day1" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="day1">Day 1</TabsTrigger>
                <TabsTrigger value="day2">Day 2</TabsTrigger>
                <TabsTrigger value="day3">Day 3</TabsTrigger>
              </TabsList>

              <TabsContent value="day1" className="mt-6">
                <Card className="p-3">
                  <CardHeader>
                    <CardTitle>
                      Day 1: Color the Dreams - Amazing Race
                    </CardTitle>
                    <CardDescription>
                      Focused on creativity, teamwork, and fun challenges
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Header Thing */}
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        <span className="text-sm">March 15, 2025</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary" />
                        <span className="text-sm">9:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span className="text-sm">
                          Kalipay Negrense Foundation
                        </span>
                      </div>
                    </div>

                    {/* Morning Program */}
                    <div>
                      <h4 className="text-lg font-medium mb-2 mt-10 ml-auto mr-auto w-[90%]">
                        Morning Program
                      </h4>

                      <Table className="w-[90%] ml-auto mr-auto">
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-2/12">Time</TableHead>
                            <TableHead className="w-3/12">Activity</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>9:00 AM – 10:30 AM</TableCell>
                            <TableCell>
                              Departure from La Salle & Arrival at Kalipay
                              Negrense Foundation
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>10:30 AM – 12:00 NN</TableCell>
                            <TableCell>
                              Ocular Visit & Final Preparations (Venue
                              assessment, station setup, and briefing)
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>12:00 NN – 1:00 PM</TableCell>
                            <TableCell>Lunch Break</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>

                    {/* Afternoon Activities */}
                    <div>
                      <h4 className="text-lg font-medium mb-2 mt-10 ml-auto mr-auto w-[90%]">
                        Afternoon Activities: Color the Dreams Race
                      </h4>
                      <p className="text-sm text-gray-500 mb-4 dark:text-gray-400 ml-auto mr-auto w-[90%]">
                        Children will go through seven (7) various activity
                        stations where they complete tasks to earn materials for
                        their final project: Paper Treasures (Handmade Gratitude
                        Cards).
                      </p>
                      <Table className="w-[90%] ml-auto mr-auto">
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-2/12">Station</TableHead>
                            <TableHead className="w-3/12">
                              Activity Description
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>🎨 Paint Craze</TableCell>
                            <TableCell>
                              Teams paint pre-designed tote bags within a time
                              limit.
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>🦸 Super Mask Quest</TableCell>
                            <TableCell>
                              Kids decorate superhero masks and pose for a group
                              photo.
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>🧱 LEGO Project</TableCell>
                            <TableCell>
                              Teams build a LEGO creation based on a given theme
                              and present it.
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>🧩 Puzzle Race</TableCell>
                            <TableCell>
                              Teams race to complete jigsaw puzzles with a
                              mix-and-match twist.
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>🔍 Memory Match Mania</TableCell>
                            <TableCell>
                              Kids play a memory-matching game under a time
                              limit.
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>🏃‍♂️ Obstacle Madness</TableCell>
                            <TableCell>
                              A fun obstacle course promoting teamwork and
                              coordination.
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>🔊 Guess the Sound</TableCell>
                            <TableCell>
                              Kids identify sounds to earn rewards.
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>

                    {/* Roles & Responsibilities */}
                    <div>
                      <h4 className="text-lg font-medium mb-2 mt-10 ml-auto mr-auto w-[90%]">
                        Roles & Responsibilities
                      </h4>
                      <Table className="w-[90%] ml-auto mr-auto">
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-2/12">Role</TableHead>
                            <TableHead className="w-3/12">
                              Responsibilities
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>
                              Event Director/ Lead Coordinator
                            </TableCell>
                            <TableCell>
                              Oversees event flow, makes real-time adjustments,
                              ensures all teams are functioning smoothly
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Program Manager</TableCell>
                            <TableCell>
                              Ensures event follows the timeline, assists emcee,
                              manages transitions
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Emcee/ Host</TableCell>
                            <TableCell>
                              Engages participants, introduces segments,
                              maintains energy
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Team Facilitators</TableCell>
                            <TableCell>
                              Guide assigned teams through the race, encourage
                              participation. One per 5 kids in a group.
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Station Masters (Day 1)</TableCell>
                            <TableCell>
                              Explain and oversee station tasks, enforce rules,
                              distribute prizes. Station 1 and Final Station
                              will be guided by the Team Faci, and Station 7
                              will be manned by Tech. Will be in charge of
                              setting up their stations.
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              Computer Lab Repair Team (Day 1)
                            </TableCell>
                            <TableCell>
                              In collaboration with USLS ITS Office, and at most
                              2 volunteers from GDG-USLS, they will be in charge
                              of setting up the computer lab, installing
                              necessary software, and ensuring all computers are
                              in working order by the end of Day 2.
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Photographers & Documentation</TableCell>
                            <TableCell>
                              Capture highlights of activities and interactions
                              for reports and promotions
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Tech & Sound Team</TableCell>
                            <TableCell>
                              Manages microphones, speakers, and sound system.
                              Will also man the Station 7.
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Food & Logistics Team</TableCell>
                            <TableCell>
                              Responsible for buying food, running errands, and
                              assisting the kitchen in preparing snacks and
                              refreshments. Additionally, handles last-minute
                              material transfers and provides general assistance
                              as needed.
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="day2" className="mt-6">
                <Card className="p-3">
                  <CardHeader>
                    <CardTitle>
                      Day 2: Tech Seminars & Computer Lab Repair
                    </CardTitle>
                    <CardDescription>
                      Focused on hands-on tech learning while repairing and
                      optimizing Kalipay's computer lab
                    </CardDescription>
                  </CardHeader>

                  {/* Header Thing */}
                  <CardContent className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        <span className="text-sm">March 22, 2025</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary" />
                        <span className="text-sm">9:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span className="text-sm">
                          Kalipay Negrense Foundation
                        </span>
                      </div>
                    </div>

                    {/* Morning Program */}
                    <div>
                      <h4 className="text-lg font-medium mb-2 mt-10 ml-auto mr-auto w-[90%]">
                        Morning Program
                      </h4>

                      <Table className="w-[90%] ml-auto mr-auto">
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-2/12">Time</TableHead>
                            <TableHead className="w-3/12">Activity</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>9:00 AM – 10:30 AM</TableCell>
                            <TableCell>
                              Departure from La Salle & Arrival at Kalipay
                              Negrense Foundation
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>10:30 AM – 12:00 NN</TableCell>
                            <TableCell>
                              Station Setup & Venue Preparation <br />
                              Teams set up activity stations and finalize
                              materials. <br />
                              Teams continue optimising and repairing the
                              computer lab.
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>12:00 NN – 1:00 PM</TableCell>
                            <TableCell>Lunch Break</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>

                    {/* Afternoon Activities */}
                    <div>
                      <h4 className="text-lg font-medium mb-2 mt-10 ml-auto mr-auto w-[90%]">
                        Afternoon Activities: Cyber World Tour
                      </h4>
                      <p className="text-sm text-gray-500 mb-4 dark:text-gray-400 ml-auto mr-auto w-[90%]">
                        Children participate in station-based tech learning,
                        collecting stamps in their "tech passports."
                      </p>
                      <Table className="w-[90%] ml-auto mr-auto">
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-2/12">Station</TableHead>
                            <TableHead className="w-3/12">
                              Activity Description
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>
                              🚀 The AI Nexus – Gateway to Smart Tech!
                            </TableCell>
                            <TableCell>
                              Kids explore AI-generated stories, art, and
                              chatbots. They will learn how AI assists in
                              school, art, and daily life. Recommended for Tech
                              Dept. volunteers.
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              🌐 Cybernaut City – The Internet Explorer’s
                              Playground!
                            </TableCell>
                            <TableCell>
                              Internet safety and scam detection through
                              interactive challenges. Recommended for
                              Communications Dept. volunteers.
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              📸 Pixelopolis – The Content Creator’s
                              Headquarters!
                            </TableCell>
                            <TableCell>
                              Kids learn basic video and photo editing.
                              Recommended for PR Dept. volunteers.
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              🎭 DreamLens Arcade – Step Into a Digital Fantasy!
                            </TableCell>
                            <TableCell>
                              Augmented Reality (AR) storytelling and mini-comic
                              creation. Recommended for Tech Dept. volunteers.
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              🖌️ Creator's Cove – Digital Drawing Playground!
                            </TableCell>
                            <TableCell>
                              Digital drawing on tablets to create futuristic
                              inventions. Recommended for Creatives Dept.
                              volunteers.
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              🔨 CodeCrafter’s Workshop – Build a Mini Game!
                            </TableCell>
                            <TableCell>
                              kids will be introduced to Scratch, where they
                              will learn the basics of coding logic and create
                              their own mini game, helping them think like a
                              programmer through interactive, hands-on
                              problem-solving. Recommended for Tech Dept.
                              volunteers.
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              🎶 Soundwave Studio – Make Digital Music!
                            </TableCell>
                            <TableCell>
                              Kids experiment with digital music-making tools.
                              Recommended for Tech/EO Dept. volunteers.
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>

                    {/* Roles & Responsibilities */}
                    <div>
                      <h4 className="text-lg font-medium mb-2 mt-10 ml-auto mr-auto w-[90%]">
                        Roles & Responsibilities
                      </h4>
                      <Table className="w-[90%] ml-auto mr-auto">
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-2/12">Role</TableHead>
                            <TableHead className="w-3/12">
                              Responsibilities
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>
                              Event Director/ Lead Coordinator
                            </TableCell>
                            <TableCell>
                              Oversees event flow, makes real-time adjustments,
                              ensures all teams are functioning smoothly
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Program Manager</TableCell>
                            <TableCell>
                              Ensures event follows the timeline, assists emcee,
                              manages transitions
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Emcee/ Host</TableCell>
                            <TableCell>
                              Engages participants, introduces segments,
                              maintains energy
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Station Masters (Day 2)</TableCell>
                            <TableCell>
                              Guide children through their assigned stations,
                              ensure engagement and learning. In charge of
                              setting up their own stations
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              Computer Lab Repair Team (Day 2)
                            </TableCell>
                            <TableCell>
                              In collaboration with USLS ITS Office, and at most
                              2 volunteers from GDG-USLS, they will be in charge
                              of setting up the computer lab, installing
                              necessary software, and ensuring all computers are
                              in working order for the activities on Day 3.
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Photographers & Documentation</TableCell>
                            <TableCell>
                              Capture highlights of activities and interactions
                              for reports and promotions
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Tech & Sound Team</TableCell>
                            <TableCell>
                              Manages microphones, speakers, and sound system.
                              Will also man the Station 7.
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Food & Logistics Team</TableCell>
                            <TableCell>
                              Responsible for buying food, running errands, and
                              assisting the kitchen in preparing snacks and
                              refreshments. Additionally, handles last-minute
                              material transfers and provides general assistance
                              as needed.
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="day3" className="mt-6">
                <Card className="p-3">
                  <CardHeader>
                    <CardTitle>
                      Day 3: Computer Lab Hands-On & Rewards System
                    </CardTitle>
                    <CardDescription>
                      Allows kids to apply their tech skills from Day 2 while
                      engaging in a fun reward-based system
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Header Thing */}
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        <span className="text-sm">March 29, 2025</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary" />
                        <span className="text-sm">9:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span className="text-sm">
                          Kalipay Negrense Foundation
                        </span>
                      </div>
                    </div>

                    {/* Morning Program */}
                    <div>
                      <h4 className="text-lg font-medium mb-2 mt-10 ml-auto mr-auto w-[90%]">
                        Morning Program
                      </h4>

                      <Table className="w-[90%] ml-auto mr-auto">
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-2/12">Time</TableHead>
                            <TableHead className="w-3/12">Activity</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>9:00 AM – 10:30 AM</TableCell>
                            <TableCell>
                              Departure from La Salle & Arrival at Kalipay
                              Negrense Foundation
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>10:30 AM – 12:00 NN</TableCell>
                            <TableCell>
                              Computer Laboratory checking, venue assessment,
                              station setup, and briefing
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>12:00 NN – 1:00 PM</TableCell>
                            <TableCell>Lunch Break</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>

                    {/* Afternoon Activities */}
                    <div>
                      <h4 className="text-lg font-medium mb-2 mt-10 ml-auto mr-auto w-[90%]">
                        Afternoon Activities
                      </h4>
                      <p className="text-sm text-gray-500 mb-4 dark:text-gray-400 ml-auto mr-auto w-[90%]">
                        Children will rotate between stations, earning "heart"
                        cards for participation, which they can redeem for
                        prizes at the Hearts Reward Station.
                      </p>
                      <Table className="w-[90%] ml-auto mr-auto">
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-2/12">Station</TableHead>
                            <TableHead className="w-3/12">
                              Activity Description
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>🏴‍☠️ Tech Treasure Hunt</TableCell>
                            <TableCell>
                              Kids solve tech-related riddles using QR codes and
                              AR clues.
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              🎮 Color Code: The Mystery Painting
                            </TableCell>
                            <TableCell>
                              Solving riddles unlocks sections of a hidden
                              image.
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell> ⚔️ Virtual Avatar Arena</TableCell>
                            <TableCell>
                              A hidden volunteer controls a 3D model (VTuber),
                              interacting with kids in real-time. The VTuber
                              gives commands like "Bring me something red!" and
                              the first kid to fulfill the request earns heart
                              cards
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell> 🎁 Heart Rewards Station</TableCell>
                            <TableCell>
                              Throughout the event, kids will collect "heart"
                              cards from different stations as they complete
                              challenges and interact with activities. At this
                              station, they can exchange their collected heart
                              cards for small prizes and stickers as a token of
                              their participation and effort.
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              💻 Computer Lab: Smart Tech Habits
                            </TableCell>
                            <TableCell>
                              Kids will engage in hands-on sessions designed to
                              build essential digital skills. If internet access
                              is available, they will learn how to manage
                              emails, stay safe online, and organize files
                              efficiently. However, if there is no network in
                              the computer lab, the focus will shift to offline
                              skills such as basic computer navigation, using
                              Microsoft applications like Word, Excel, and
                              PowerPoint, and interactive problem-solving
                              exercises to reinforce digital literacy.
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>

                    {/* Roles & Responsibilities */}
                    <div>
                      <h4 className="text-lg font-medium mb-2 mt-10 ml-auto mr-auto w-[90%]">
                        Roles & Responsibilities
                      </h4>
                      <Table className="w-[90%] ml-auto mr-auto">
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-2/12">Role</TableHead>
                            <TableHead className="w-3/12">
                              Responsibilities
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>
                              Event Director/ Lead Coordinator
                            </TableCell>
                            <TableCell>
                              Oversees event flow, makes real-time adjustments,
                              ensures all teams are functioning smoothly
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Program Manager</TableCell>
                            <TableCell>
                              Ensures event follows the timeline, assists emcee,
                              manages transitions
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Emcee/ Host</TableCell>
                            <TableCell>
                              Engages participants, introduces segments,
                              maintains energy
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Station Masters (Day 3)</TableCell>
                            <TableCell>
                              Explain and oversee station tasks, enforce rules,
                              distribute prizes. Station 1 and Final Station
                              will be guided by the Team Faci, and Station 7
                              will be manned by Tech. Will be in charge of
                              setting up their stations.
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Computer Lab Team (Day 3)</TableCell>
                            <TableCell>
                              In collaboration with CECS, and at most 2
                              volunteers from GDG-USLS, they will take over the
                              learning sessions in the computer laboratory.
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>VTuber Operator</TableCell>
                            <TableCell>
                              Controls the virtual avatar from a different room
                              and interacts with participants in real time
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>VTuber Setup Manager</TableCell>
                            <TableCell>
                              Manages camera, software, and environment for
                              smooth execution. Setups the station.
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Photographers & Documentation</TableCell>
                            <TableCell>
                              Capture highlights of activities and interactions
                              for reports and promotions
                            </TableCell>
                          </TableRow>

                          <TableRow>
                            <TableCell>Tech & Sound Team</TableCell>
                            <TableCell>
                              Manages microphones, speakers, and sound system.
                              Will also man the Station 7.
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Food & Logistics Team</TableCell>
                            <TableCell>
                              Responsible for buying food, running errands, and
                              assisting the kitchen in preparing snacks and
                              refreshments. Additionally, handles last-minute
                              material transfers and provides general assistance
                              as needed.
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
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
