"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"
import { useRef } from "react"

export default function Home() {
  const statsRef = useRef<HTMLDivElement>(null)

  const scrollToStats = () => {
    statsRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <motion.div
              className="flex flex-col justify-center space-y-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Innovative Solutions for Modern Businesses
              </motion.div>
              <div className="space-y-2">
                <motion.h1
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Transform Your Business with <span className="text-primary">Aurxon Technologies</span>
                </motion.h1>
                <motion.p
                  className="max-w-[600px] text-muted-foreground md:text-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  We deliver cutting-edge digital solutions that drive innovation, efficiency, and growth. Our expert
                  team is ready to help you navigate the digital landscape and achieve your business goals.
                </motion.p>
              </div>
              <motion.div
                className="flex flex-col gap-2 min-[400px]:flex-row"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/contact">
                    <Button size="lg" className="px-8">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/services">
                    <Button size="lg" variant="outline" className="px-8">
                      Our Services
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
              <motion.div
                className="pt-8 hidden md:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Button variant="ghost" onClick={scrollToStats} className="flex items-center gap-2">
                  <span>Discover more</span>
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                  >
                    <ArrowDown className="h-4 w-4" />
                  </motion.div>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] md:h-[450px] md:w-[450px] lg:h-[500px] lg:w-[500px]">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/0 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.7, 0.5],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 5,
                    ease: "easeInOut",
                  }}
                ></motion.div>
                <motion.div whileHover={{ rotate: 5, scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Image
                    alt="Hero Image"
                    className="relative z-10 object-cover"
                    height={500}
                    src="/placeholder.svg?height=500&width=500"
                    width={500}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 border-y bg-muted/40">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h2 className="text-xl font-medium tracking-tight md:text-2xl">Trusted by Companies Worldwide</h2>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
              {["Brand 1", "Brand 2", "Brand 3", "Brand 4", "Brand 5"].map((brand, index) => (
                <motion.div
                  key={brand}
                  className="flex items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-2xl font-bold text-muted-foreground">{brand}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Services</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Comprehensive Solutions for Your Business
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                We offer a wide range of services to meet your business needs and help you stay ahead of the
                competition.
              </p>
            </div>
          </motion.div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="group relative overflow-hidden transition-all hover:shadow-lg h-full">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center space-y-4">
                      <motion.div
                        className="rounded-full bg-primary/10 p-3 text-primary"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      >
                        {service.icon}
                      </motion.div>
                      <h3 className="text-xl font-bold">{service.title}</h3>
                      <p className="text-center text-muted-foreground">{service.description}</p>
                    </div>
                  </CardContent>
                  <div className="absolute inset-0 flex items-center justify-center bg-primary/80 opacity-0 transition-opacity group-hover:opacity-100">
                    <Link href="/services" className="rounded-full bg-white p-2 text-primary">
                      <ArrowRight className="h-6 w-6" />
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/services">
              <Button variant="outline" size="lg">
                View All Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
            {[
              { value: "500+", label: "Projects Completed" },
              { value: "300+", label: "Happy Clients" },
              { value: "50+", label: "Team Members" },
              { value: "10+", label: "Years of Experience" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="flex flex-col items-center justify-center space-y-2 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="text-4xl font-bold md:text-5xl"
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    delay: 0.2 * index,
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm font-medium md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <Image
                    alt="Company office"
                    className="aspect-[4/3] object-cover w-full h-auto"
                    height={400}
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                  />
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">About Us</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Story</h2>
              <p className="text-muted-foreground md:text-lg">
                Founded in 2010, Aurxon Technologies has been at the forefront of innovation in the industry. Our
                mission is to provide cutting-edge solutions that help businesses thrive in the digital age.
              </p>
              <p className="text-muted-foreground md:text-lg">
                With a team of experienced professionals, we are committed to delivering excellence in every project we
                undertake. Our client-centric approach ensures that we understand your unique requirements and provide
                tailored solutions.
              </p>
              <ul className="grid gap-2">
                {["Innovative Solutions", "Expert Team", "Client-Centric Approach", "Quality Assurance"].map(
                  (item, index) => (
                    <motion.li
                      key={item}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>{item}</span>
                    </motion.li>
                  ),
                )}
              </ul>
              <motion.div
                className="flex flex-col gap-2 min-[400px]:flex-row pt-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/about">
                  <Button variant="outline">Learn More About Us</Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Testimonials</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Clients Say</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Don't just take our word for it. Here's what our clients have to say about working with us.
              </p>
            </div>
          </motion.div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="overflow-hidden h-full">
                  <CardContent className="p-6">
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center space-x-4">
                        <motion.div className="rounded-full bg-primary/10 p-1" whileHover={{ scale: 1.1 }}>
                          <Image
                            alt={testimonial.name}
                            className="rounded-full"
                            height={48}
                            src="/placeholder.svg?height=48&width=48"
                            width={48}
                          />
                        </motion.div>
                        <div>
                          <h3 className="text-lg font-bold">{testimonial.name}</h3>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{testimonial.content}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">FAQ</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Frequently Asked Questions</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Find answers to common questions about our services and how we can help your business.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="mx-auto max-w-3xl py-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Get Started?</h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Contact us today to discuss your project requirements and how we can help you achieve your business
                goals.
              </p>
            </div>
            <motion.div
              className="flex flex-col gap-2 min-[400px]:flex-row"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="px-8">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

const services = [
  {
    title: "Web Development",
    description: "Custom websites and web applications tailored to your specific business requirements.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect height="14" rx="2" ry="2" width="20" x="2" y="3"></rect>
        <line x1="8" x2="16" y1="21" y2="21"></line>
        <line x1="12" x2="12" y1="17" y2="21"></line>
      </svg>
    ),
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android devices.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect>
        <line x1="12" x2="12.01" y1="18" y2="18"></line>
      </svg>
    ),
  },
  {
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies to boost your online presence and drive growth.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 20V10"></path>
        <path d="M18 20V4"></path>
        <path d="M6 20v-6"></path>
      </svg>
    ),
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content:
      "Working with Aurxon Technologies was a game-changer for our business. Their team delivered a website that exceeded our expectations and helped us increase our online sales by 40%.",
  },
  {
    name: "Michael Chen",
    role: "Marketing Director, GrowthCo",
    content:
      "The digital marketing strategy developed by Aurxon Technologies transformed our online presence. We've seen a significant increase in leads and conversions since implementing their recommendations.",
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager, InnovateTech",
    content:
      "The mobile app developed by Aurxon Technologies has received outstanding feedback from our users. Their attention to detail and focus on user experience is unmatched.",
  },
]

const faqs = [
  {
    question: "What services does Aurxon Technologies offer?",
    answer:
      "Aurxon Technologies offers a wide range of services including web development, mobile app development, digital marketing, UI/UX design, cloud solutions, and IT consulting. Our comprehensive solutions are designed to meet all your business technology needs.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines vary depending on the scope and complexity of the work. A simple website might take 4-6 weeks, while a complex web application or mobile app could take 3-6 months. During our initial consultation, we'll provide you with a detailed timeline based on your specific requirements.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "We offer flexible pricing options including fixed-price quotes for well-defined projects and time-and-materials billing for projects with evolving requirements. We'll work with you to determine the most appropriate pricing structure based on your project needs and budget constraints.",
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes, we offer various support and maintenance packages to ensure your digital products continue to perform optimally after launch. Our support services include bug fixes, security updates, performance optimization, and feature enhancements.",
  },
  {
    question: "How do I get started with Aurxon Technologies?",
    answer:
      "Getting started is easy! Simply contact us through our website or give us a call. We'll schedule an initial consultation to discuss your project requirements, goals, and timeline. After this meeting, we'll provide you with a detailed proposal outlining our approach, timeline, and pricing.",
  },
]
