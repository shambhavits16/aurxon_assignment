"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function ServicesClientPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  }

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 md:px-6">
          <motion.div className="flex flex-col items-center justify-center space-y-4 text-center" {...fadeIn}>
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">What We Offer</div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Explore our comprehensive range of services designed to meet your business needs and help you stay ahead
                of the competition.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <Card className="overflow-hidden transition-all hover:shadow-lg h-full">
                  <div className="aspect-video w-full bg-muted relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/0"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="rounded-full bg-background/90 p-4 text-primary">{service.icon}</div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start space-x-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.2 + idx * 0.1 }}
                        >
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                      <Link href="/contact" className="inline-flex items-center text-primary hover:underline">
                        Learn more <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <motion.div className="flex flex-col items-center justify-center space-y-4 text-center mb-10" {...fadeIn}>
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">How We Work</div>
            <h2 className="text-3xl font-bold tracking-tighter">Our Process</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              We follow a structured approach to ensure the success of every project we undertake.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We start by understanding your business, goals, and requirements through in-depth consultations.",
              },
              {
                step: "02",
                title: "Planning",
                description:
                  "We create a detailed project plan outlining timelines, deliverables, and resource allocation.",
              },
              {
                step: "03",
                title: "Execution",
                description: "Our team works diligently to develop and implement the solution according to the plan.",
              },
              {
                step: "04",
                title: "Delivery & Support",
                description:
                  "We deliver the final product and provide ongoing support to ensure its continued success.",
              },
            ].map((process, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg border bg-card p-6 transition-all hover:shadow-md"
              >
                <div className="mb-4 text-4xl font-bold text-primary/20">{process.step}</div>
                <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
                {index < 3 && (
                  <div className="absolute -right-4 top-1/2 hidden transform md:block">
                    <ArrowRight className="h-8 w-8 text-muted-foreground/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Success Stories</div>
            <h2 className="text-3xl font-bold tracking-tighter">Case Studies</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              See how we've helped our clients achieve their business goals with our innovative solutions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "E-commerce Platform Redesign",
                client: "RetailPlus",
                image: "/placeholder.svg?height=400&width=600",
                description:
                  "Increased conversion rates by 40% through a complete redesign of the e-commerce platform.",
              },
              {
                title: "Mobile App Development",
                client: "HealthTrack",
                image: "/placeholder.svg?height=400&width=600",
                description:
                  "Developed a health tracking app that gained over 100,000 users within the first three months.",
              },
              {
                title: "Digital Marketing Campaign",
                client: "GrowthCo",
                image: "/placeholder.svg?height=400&width=600",
                description: "Increased lead generation by 65% through a comprehensive digital marketing strategy.",
              },
            ].map((caseStudy, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src={caseStudy.image || "/placeholder.svg"}
                    alt={caseStudy.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">Client: {caseStudy.client}</div>
                  <h3 className="text-xl font-bold mb-2">{caseStudy.title}</h3>
                  <p className="text-muted-foreground mb-4">{caseStudy.description}</p>
                  <Link href="/contact" className="inline-flex items-center text-primary hover:underline">
                    Read full case study <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Client Feedback</div>
            <h2 className="text-3xl font-bold tracking-tighter">What Our Clients Say</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Don't just take our word for it. Here's what our clients have to say about our services.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote:
                  "Working with Acme Inc was a game-changer for our business. Their team delivered a website that exceeded our expectations and helped us increase our online sales by 40%.",
                name: "Sarah Johnson",
                role: "CEO, TechStart",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                quote:
                  "The digital marketing strategy developed by Acme Inc transformed our online presence. We've seen a significant increase in leads and conversions since implementing their recommendations.",
                name: "Michael Chen",
                role: "Marketing Director, GrowthCo",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                quote:
                  "The mobile app developed by Acme Inc has received outstanding feedback from our users. Their attention to detail and focus on user experience is unmatched.",
                name: "Emily Rodriguez",
                role: "Product Manager, InnovateTech",
                image: "/placeholder.svg?height=100&width=100",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-card">
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-4">
                    <div className="relative">
                      <svg
                        className="absolute -top-6 -left-6 h-12 w-12 text-primary/20"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="relative z-10 text-muted-foreground italic">"{testimonial.quote}"</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Get Started?</h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Contact us today to discuss your project requirements and how we can help you achieve your business
                goals.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="px-8">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
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
    features: [
      "Responsive Design",
      "E-commerce Solutions",
      "Content Management Systems",
      "Progressive Web Apps",
      "API Development & Integration",
    ],
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
    features: [
      "iOS & Android Apps",
      "Cross-Platform Development",
      "UI/UX Design",
      "App Store Optimization",
      "Maintenance & Support",
    ],
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
    features: [
      "Search Engine Optimization (SEO)",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
      "Analytics & Reporting",
    ],
  },
  {
    title: "UI/UX Design",
    description: "User-centered design solutions that enhance user experience and drive engagement.",
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
        <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path>
        <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
        <path d="M12 2v2"></path>
        <path d="M12 22v-2"></path>
        <path d="m17 20.66-1-1.73"></path>
        <path d="M11 10.27 7 3.34"></path>
        <path d="m20.66 17-1.73-1"></path>
        <path d="m3.34 7 1.73 1"></path>
        <path d="M14 12h8"></path>
        <path d="M2 12h2"></path>
        <path d="m20.66 7-1.73 1"></path>
        <path d="m3.34 17 1.73-1"></path>
        <path d="m17 3.34-1 1.73"></path>
        <path d="m7 20.66 1-1.73"></path>
      </svg>
    ),
    features: ["User Research", "Wireframing & Prototyping", "Visual Design", "Usability Testing", "Design Systems"],
  },
  {
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure to power your applications and services.",
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
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
      </svg>
    ),
    features: [
      "Cloud Migration",
      "Infrastructure as a Service (IaaS)",
      "Platform as a Service (PaaS)",
      "Serverless Architecture",
      "DevOps & CI/CD",
    ],
  },
  {
    title: "IT Consulting",
    description:
      "Strategic technology consulting to help you make informed decisions and optimize your IT investments.",
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
        <path d="M15.5 2H12a10 10 0 0 0 0 20h8a2 2 0 0 0 2-2v-4.5a2 2 0 0 0-2-2h-2.3a10 10 0 0 0-4.7-8.8"></path>
        <path d="M12 11h.01"></path>
        <path d="M16 11h.01"></path>
        <path d="M20 11h.01"></path>
        <path d="M12 15h.01"></path>
        <path d="M16 15h.01"></path>
        <path d="M20 15h.01"></path>
      </svg>
    ),
    features: [
      "Technology Assessment",
      "Digital Transformation",
      "IT Strategy Development",
      "Project Management",
      "Technology Training",
    ],
  },
]
