"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function AboutClientPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  }

  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <motion.div className="flex flex-col items-center justify-center space-y-4 text-center" {...fadeIn}>
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">About Us</div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Aurxon Technologies</h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Learn more about our company, our mission, and our values.
              </p>
            </div>
          </motion.div>

          <div className="mx-auto max-w-3xl space-y-12 py-12">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold">Our Story</h2>
              <p className="text-muted-foreground">
                Founded in 2010, Aurxon Technologies started as a small team of passionate individuals with a vision to
                transform how businesses operate in the digital landscape. What began as a modest startup has now grown
                into a leading provider of innovative solutions serving clients worldwide.
              </p>
              <p className="text-muted-foreground">
                Over the years, we have expanded our services and expertise, adapting to the ever-changing technological
                landscape while maintaining our commitment to excellence and customer satisfaction.
              </p>
            </motion.div>

            <motion.div
              className="overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="Our team"
                width={800}
                height={400}
                className="w-full h-auto object-cover"
              />
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold">Our Mission</h2>
              <p className="text-muted-foreground">
                At Aurxon Technologies, our mission is to empower businesses with innovative digital solutions that
                drive growth, enhance efficiency, and create exceptional user experiences. We are committed to
                delivering high-quality services that exceed our clients' expectations and help them achieve their
                business objectives.
              </p>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold">Our Values</h2>
              <ul className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    title: "Innovation",
                    description:
                      "We constantly explore new technologies and methodologies to provide cutting-edge solutions.",
                  },
                  {
                    title: "Excellence",
                    description:
                      "We strive for excellence in everything we do, from code quality to client communication.",
                  },
                  {
                    title: "Integrity",
                    description: "We conduct our business with honesty, transparency, and ethical practices.",
                  },
                  {
                    title: "Collaboration",
                    description: "We believe in the power of teamwork and foster a collaborative environment.",
                  },
                  {
                    title: "Client-Centric",
                    description: "Our clients' success is our success, and we prioritize their needs and goals.",
                  },
                ].map((value, index) => (
                  <motion.li
                    key={value.title}
                    className="flex items-start space-x-2 rounded-lg border p-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    whileHover={{ y: -5, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                  >
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-semibold">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h2 className="text-2xl font-bold">Our Team</h2>
              <p className="text-muted-foreground">
                Our team consists of talented professionals with diverse backgrounds and expertise. From skilled
                developers and designers to experienced project managers and strategists, each member brings unique
                perspectives and skills to the table. Together, we work collaboratively to deliver exceptional results
                for our clients.
              </p>

              <div className="grid gap-6 mt-8 md:grid-cols-3">
                {[
                  { name: "John Smith", role: "CEO & Founder", image: "/placeholder.svg?height=300&width=300" },
                  { name: "Sarah Johnson", role: "CTO", image: "/placeholder.svg?height=300&width=300" },
                  { name: "Michael Chen", role: "Design Director", image: "/placeholder.svg?height=300&width=300" },
                ].map((member, index) => (
                  <motion.div
                    key={member.name}
                    className="flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="relative h-40 w-40 overflow-hidden rounded-full mb-4">
                      <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                    </div>
                    <h3 className="text-lg font-bold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
