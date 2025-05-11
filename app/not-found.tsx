"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function NotFound() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="text-9xl font-bold text-primary/10">404</div>
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Page Not Found</h1>
            </motion.div>
          </motion.div>

          <motion.p
            className="max-w-[600px] text-muted-foreground md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or never existed.
          </motion.p>

          <motion.div
            className="flex flex-col gap-3 sm:flex-row sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link href="/">
              <Button size="lg" className="px-8">
                Return Home
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="px-8">
                Contact Support
              </Button>
            </Link>
          </motion.div>

          <motion.div
            className="mt-8 grid gap-4 text-center md:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div>
              <h2 className="text-lg font-semibold">Looking for our services?</h2>
              <Link href="/services" className="text-primary hover:underline">
                View our services
              </Link>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Need to contact us?</h2>
              <Link href="/contact" className="text-primary hover:underline">
                Get in touch
              </Link>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Want to learn more about us?</h2>
              <Link href="/about" className="text-primary hover:underline">
                About Aurxon Technologies
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
