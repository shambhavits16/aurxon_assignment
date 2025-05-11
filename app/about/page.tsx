import type { Metadata } from "next"
import AboutClientPage from "./AboutClientPage"

export const metadata: Metadata = {
  title: "About Us | Aurxon Technologies",
  description: "Learn more about our company, our mission, and our team.",
}

export default function AboutPage() {
  return <AboutClientPage />
}
