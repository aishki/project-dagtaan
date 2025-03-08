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
import { AlertCircle, Calendar } from "lucide-react";

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
            <Card className="border-muted-foreground/20">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <AlertCircle className="h-12 w-12 text-amber-500" />
                </div>
                <CardTitle className="text-xl md:text-2xl">
                  Expenses Information Currently Unavailable
                </CardTitle>
                <CardDescription className="text-base">
                  We're currently updating our financial reporting system to
                  provide you with more accurate and detailed information.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="rounded-lg border border-muted-foreground/20 p-6 text-center">
                  <p className="text-muted-foreground mb-4">
                    Our team is working diligently to compile and verify all
                    expense data related to Project Dagtaan activities. This
                    ensures that we maintain our commitment to transparency and
                    accountability.
                  </p>

                  <div className="flex items-center justify-center gap-2 text-primary">
                    <Calendar className="h-5 w-5" />
                    <p className="font-medium">
                      Expected availability: April 15, 2025
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <Card className="bg-muted/50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Total Budget</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold text-muted-foreground">
                        Coming Soon
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-muted/50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">
                        Expenses to Date
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold text-muted-foreground">
                        Coming Soon
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-muted/50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Remaining Funds</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold text-muted-foreground">
                        Coming Soon
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <p className="text-muted-foreground">
              For questions about our expenses or financial transparency, please{" "}
              <a href="/contact" className="text-primary hover:underline">
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
