import Link from "next/link";
import { ArrowRight, ShieldCheck, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-orange-50 to-white h-[calc(100vh-118px)]">
      <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center justify-center">
          <div className="flex flex-col justify-center space-y-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Build a Strong Financial House, <span className="text-orange-600">Secure Your Future Today</span>
            </h1>
            <p className="max-w-3xl text-xl text-gray-600">
              Our Business is Aggregating services or products from various providers to offer a one-stop solution.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-md bg-orange-600 px-5 py-3 text-base font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-orange-100 px-5 py-3 text-base font-medium text-orange-700 hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-8 lg:items-end">
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-orange-100 p-3">
                  <TrendingUp className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Expert Investment Advice</h3>
                  <p className="text-gray-600">Tailored strategies for optimal returns</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-orange-100 p-3">
                  <ShieldCheck className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Comprehensive Insurance</h3>
                  <p className="text-gray-600">Protect what matters most to you</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
