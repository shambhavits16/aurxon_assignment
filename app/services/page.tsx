import type { Metadata } from "next"
import ServicesClientPage from "./ServicesClientPage"

export const metadata: Metadata = {
  title: "Our Services | Aurxon Technologies",
  description: "Explore our comprehensive range of services designed to meet your business needs.",
}

export default function ServicesPage() {
  return <ServicesClientPage />
}
