"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { Button } from "../components/ui/button";
import { ExternalLink, FileSpreadsheet, Download } from "lucide-react";

function ExpensesPage() {
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

  // Replace with your actual Google Sheets URL
  const googleSheetsUrl =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTol4vlAmcT13V1Ggu5ZPlnSWD428JKOtRthgEKqqujKLFSIBmhp6ftUY9eSAzDOUlm0wGQ3qgRAzeQ/pubhtml";

  return (
    <section
      id="expenses"
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
              Financial Transparency
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We are committed to full transparency in how funds are utilized
              for Project Dagtaan.
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card>
              <CardHeader>
                <CardTitle>Project Expenses</CardTitle>
                <CardDescription>
                  Live tracking of all expenses related to Project Dagtaan
                  activities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="day1">Day 1</TabsTrigger>
                    <TabsTrigger value="day2">Day 2</TabsTrigger>
                    <TabsTrigger value="day3">Day 3</TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview" className="space-y-4">
                    <div className="rounded-lg border p-4 mt-4">
                      <div className="flex items-center gap-4 mb-4">
                        <FileSpreadsheet className="h-8 w-8 text-primary" />
                        <div>
                          <h3 className="text-lg font-medium">
                            Live Expense Tracking
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            This Google Sheet is updated in real-time as
                            expenses occur
                          </p>
                        </div>
                      </div>
                      <div className="aspect-video w-full rounded-lg border bg-muted/50 mb-4">
                        <iframe
                          src={googleSheetsUrl.replace(
                            "/edit?usp=sharing",
                            "/pubhtml?widget=true&amp;headers=false"
                          )}
                          className="w-full h-full rounded-lg"
                          title="Project Dagtaan Expenses"
                        ></iframe>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-muted-foreground">
                          Last updated: March 5, 2025
                        </p>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" asChild>
                            <a
                              href={googleSheetsUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Open in Google Sheets
                            </a>
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="mr-2 h-4 w-4" />
                            Download as PDF
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">
                            Total Budget
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-2xl font-bold">₱21,620</p>
                          <p className="text-xs text-muted-foreground">
                            For all three days of activities
                          </p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">
                            Expenses to Date
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-2xl font-bold">₱65,750</p>
                          <p className="text-xs text-muted-foreground">
                            43.8% of total budget
                          </p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">
                            Remaining Funds
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-2xl font-bold">₱84,250</p>
                          <p className="text-xs text-muted-foreground">
                            56.2% of total budget
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                  <TabsContent value="day1" className="space-y-4">
                    <div className="rounded-lg border p-4 mt-4">
                      <h3 className="text-lg font-medium mb-4">
                        Day 1: Creative Exploration & Team Building
                      </h3>
                      <div className="aspect-video w-full rounded-lg border bg-muted/50">
                        <iframe
                          src={googleSheetsUrl.replace(
                            "/edit?usp=sharing",
                            "/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
                          )}
                          className="w-full h-full rounded-lg"
                          title="Day 1 Expenses"
                        ></iframe>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="day2" className="space-y-4">
                    <div className="rounded-lg border p-4 mt-4">
                      <h3 className="text-lg font-medium mb-4">
                        Day 2: Tech Seminars & Computer Lab Repair
                      </h3>
                      <div className="aspect-video w-full rounded-lg border bg-muted/50">
                        <iframe
                          src={googleSheetsUrl.replace(
                            "/edit?usp=sharing",
                            "/pubhtml?gid=1&amp;single=true&amp;widget=true&amp;headers=false"
                          )}
                          className="w-full h-full rounded-lg"
                          title="Day 2 Expenses"
                        ></iframe>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="day3" className="space-y-4">
                    <div className="rounded-lg border p-4 mt-4">
                      <h3 className="text-lg font-medium mb-4">
                        Day 3: Computer Lab Hands-On & Rewards System
                      </h3>
                      <div className="aspect-video w-full rounded-lg border bg-muted/50">
                        <iframe
                          src={googleSheetsUrl.replace(
                            "/edit?usp=sharing",
                            "/pubhtml?gid=2&amp;single=true&amp;widget=true&amp;headers=false"
                          )}
                          className="w-full h-full rounded-lg"
                          title="Day 3 Expenses"
                        ></iframe>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-muted-foreground">
              For detailed financial reports or questions about our expenses,
              please{" "}
              <a href="#contact" className="text-primary hover:underline">
                contact us
              </a>
              .
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default ExpensesPage;
