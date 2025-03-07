"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  AlertCircle,
  CheckCircle,
  X,
} from "lucide-react";

function ContactPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [cooldownActive, setCooldownActive] = useState(false);
  const [cooldownRemaining, setCooldownRemaining] = useState(0);

  // Check for existing cooldown on component mount
  useEffect(() => {
    const lastSubmissionTime = localStorage.getItem("lastFormSubmission");
    if (lastSubmissionTime) {
      const elapsedTime = Date.now() - Number.parseInt(lastSubmissionTime);
      const cooldownPeriod = 10 * 60 * 1000; // 10 minutes in milliseconds

      if (elapsedTime < cooldownPeriod) {
        setCooldownActive(true);
        const remainingTime = Math.ceil(
          (cooldownPeriod - elapsedTime) / 1000 / 60
        );
        setCooldownRemaining(remainingTime);
      }
    }
  }, []);

  // Update cooldown timer
  useEffect(() => {
    let timer: number | undefined;

    if (cooldownActive && cooldownRemaining > 0) {
      timer = window.setInterval(() => {
        setCooldownRemaining((prev) => {
          if (prev <= 1) {
            setCooldownActive(false);
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 60000); // Update every minute
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [cooldownActive, cooldownRemaining]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id === "first-name"
        ? "firstName"
        : id === "last-name"
        ? "lastName"
        : id]: value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if cooldown is active
    if (cooldownActive) {
      setSubmitStatus({
        success: false,
        message: `Please wait ${cooldownRemaining} minute${
          cooldownRemaining !== 1 ? "s" : ""
        } before submitting another message.`,
      });
      return;
    }

    // Show confirmation dialog
    setShowConfirmation(true);
  };

  const handleConfirmedSubmit = async () => {
    setShowConfirmation(false);
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xjkyboyn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        // Set cooldown
        localStorage.setItem("lastFormSubmission", Date.now().toString());
        setCooldownActive(true);
        setCooldownRemaining(10); // 10 minutes

        setSubmitStatus({
          success: true,
          message: "Thank you! Your message has been sent successfully.",
        });

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        success: false,
        message: "There was an error sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
      id="contact"
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
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Get Involved
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Join us in making a difference in the lives of children at Kalipay
              Negrense Foundation.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="grid gap-8 md:grid-cols-2"
          >
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Reach out to us for more information about Project Dagtaan
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-sm text-muted-foreground">
                      gdg@usls.edu.ph
                    </p>
                    <p className="text-sm text-muted-foreground">
                      s2121362@usls.edu.ph
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-sm text-muted-foreground">
                      (+63) 956 756 7122
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-sm text-muted-foreground">
                      University of St. La Salle
                      <br />
                      La Salle Avenue, Bacolod City
                      <br />
                      Negros Occidental, Philippines
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Office Hours</h3>
                    <p className="text-sm text-muted-foreground">
                      Monday - Friday: 8:00 AM - 5:00 PM
                      <br />
                      Saturday: 8:00 AM - 12:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below to get in touch with our team
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitStatus.message && (
                  <div
                    className={`p-4 mb-4 rounded-md flex items-start gap-3 ${
                      submitStatus.success
                        ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-100"
                        : "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-100"
                    }`}
                  >
                    {submitStatus.success ? (
                      <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    )}
                    <p>{submitStatus.message}</p>
                  </div>
                )}
                <form className="space-y-4" onSubmit={handleFormSubmit}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input
                        id="first-name"
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input
                        id="last-name"
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      placeholder="Enter your email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="Enter the subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Enter your message"
                      className="min-h-[120px] resize-none"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting || cooldownActive}
                  >
                    {isSubmitting
                      ? "Sending..."
                      : cooldownActive
                      ? `Please wait (${cooldownRemaining} min)`
                      : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>

      {/* Simple Modal Confirmation */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-md w-full p-6 relative">
            <button
              onClick={() => setShowConfirmation(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </button>

            <h3 className="text-lg font-medium mb-2">Confirm Submission</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Your message will be sent to the organization's email. Please
              confirm that all details are correct.
            </p>

            <div className="space-y-3 mb-6">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-sm font-medium">Name:</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {formData.firstName} {formData.lastName}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium">Email:</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {formData.email}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium">Subject:</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {formData.subject}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium">Message:</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
                  {formData.message}
                </p>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <Button
                variant="outline"
                onClick={() => setShowConfirmation(false)}
              >
                Cancel
              </Button>
              <Button onClick={handleConfirmedSubmit} disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Confirm & Send"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ContactPage;
