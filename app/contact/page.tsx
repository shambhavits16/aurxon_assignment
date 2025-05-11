import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Us | Aurxon Technologies",
  description: "Get in touch with our team for inquiries and support.",
}

export default function ContactPage() {
  return <ContactPageClient />
}
