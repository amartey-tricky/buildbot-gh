import Image from "next/image";
import Link from "next/link";
import Hero from "../components/hero";
import { ArrowRight, ShieldCheck, TrendingUp, Users, BarChart, PiggyBank, Briefcase } from "lucide-react";

const partners = [
  { name: "Prudential Life Insurance", logo: "/placeholder.svg?height=80&width=200" },
  { name: "Dalex Finance", logo: "/placeholder.svg?height=80&width=200" },
  { name: "Premier Health", logo: "/placeholder.svg?height=80&width=200" },
  { name: "Enterprise", logo: "/placeholder.svg?height=80&width=200" },
  { name: "Absa Bank", logo: "/placeholder.svg?height=80&width=200" },
];

const reasons = [
  {
    icon: <Users className="h-6 w-6 text-orange-600" />,
    title: "Expert Team",
    description: "Our seasoned professionals bring years of industry experience to every client interaction.",
  },
  {
    icon: <BarChart className="h-6 w-6 text-orange-600" />,
    title: "Data-Driven Insights",
    description: "We leverage cutting-edge analytics to inform our investment strategies and decisions.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-orange-600" />,
    title: "Comprehensive Protection",

    description: "Our insurance solutions offer robust coverage to safeguard your assets and future.",
  },
];

const services = [
  {
    icon: <PiggyBank className="h-6 w-6 text-orange-600" />,
    title: "Personal Savings",
    description: "Maximize your savings with our high-yield accounts and personalized financial planning.",
  },
  {
    icon: <Briefcase className="h-6 w-6 text-orange-600" />,
    title: "Investment Management",
    description: "Our expert team manages your portfolio to align with your financial goals and risk tolerance.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-orange-600" />,
    title: "Insurance Solutions",
    description: "Protect your assets and loved ones with our comprehensive insurance offerings.",
  },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="bg-orange-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Trusted Partners</h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {partners.map((partner) => (
              <div key={partner.name} className="col-span-1 flex justify-between items-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={200}
                  height={80}
                  className="max-h-12 w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {reasons.map((reason) => (
              <div key={reason.title} className="flex flex-col items-center text-center">
                <div className="rounded-full bg-orange-100 p-3 mb-4">{reason.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-orange-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Featured Services</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-lg shadow-lg p-6">
                <div className="rounded-full bg-orange-100 p-3 mb-4 inline-block">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href={`/services/${service.title.toLowerCase().replace(" ", "-")}`}
                  className="text-orange-600 font-medium hover:text-orange-700"
                >
                  Learn More <ArrowRight className="inline-block ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
