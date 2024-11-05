import { TrendingUp, Shield, PiggyBank, BarChart2, Umbrella, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

const title = "Products";
const description = "Discover a range of investment and insurance products designed to secure your financial future and help you achieve your goals.";

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: "https://buildbotgh.com/products",
    type: "website",
  },
  twitter: {
    card: "summary",
    site: "@buildbotgh",
    creator: "@buildbotgh",
    title: title,
    description: description,
  },
  robots: {
    index: true,
    follow: true,
    noimageindex: true,
  }
};

interface ProductCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
  features: string[];
  primaryColor: string;
  category: "Investment" | "Insurance";
}

const ProductCard = ({ title, description, icon, features, primaryColor, category }: ProductCardProps) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 transform hover:-translate-y-2">
    <div className="flex justify-between items-center mb-6">
      <div className={`${primaryColor} w-16 h-16 rounded-lg flex items-center justify-center`}>
        <div className="text-white">{icon}</div>
      </div>
      <span
        className={`${
          category === "Investment" ? "bg-orange-100 text-orange-800" : "bg-blue-100 text-blue-800"
        } px-3 py-1 rounded-full text-sm font-medium`}
      >
        {category}
      </span>
    </div>
    <h3 className="text-2xl font-bold text-orange-900 mb-4">{title}</h3>
    <p className="text-orange-700 mb-6">{description}</p>
    <div className="border-t border-orange-100 pt-6">
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-orange-700">
            <CheckCircle className="w-5 h-5 mr-2 text-orange-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="w-full bg-orange-600 text-white py-3 rounded-md hover:bg-orange-500 transition-colors"
      >
        Learn More
      </button>
    </div>
  </div>
);

export default function Products() {
  const investmentProducts = [
    {
      title: "Balanced Growth Fund",
      description: "A diversified investment strategy balancing risk and potential returns.",
      icon: <TrendingUp className="w-8 h-8" />,
      features: ["Diversified portfolio", "Quarterly rebalancing", "Professional management", "Low to moderate risk"],
      primaryColor: "bg-orange-600",
      category: "Investment" as const,
    },
    {
      title: "Tech Innovation Portfolio",
      description: "Focused investment in cutting-edge technology and innovation sectors.",
      icon: <BarChart2 className="w-8 h-8" />,
      features: ["High-growth potential", "Technology sector focus", "Active management", "Higher risk/reward"],
      primaryColor: "bg-orange-500",
      category: "Investment" as const,
    },
    {
      title: "Retirement Wealth Builder",
      description: "Long-term investment strategy designed for retirement planning.",
      icon: <PiggyBank className="w-8 h-8" />,
      features: ["Retirement-focused", "Tax-efficient strategies", "Gradual risk reduction", "Flexible contribution"],
      primaryColor: "bg-orange-600",
      category: "Investment" as const,
    },
  ];

  const insuranceProducts = [
    {
      title: "Comprehensive Life Shield",
      description: "Full-spectrum life insurance with flexible coverage options.",
      icon: <Shield className="w-8 h-8" />,
      features: [
        "Term and whole life options",
        "Flexible coverage amounts",
        "Living benefit riders",
        "Guaranteed insurability",
      ],
      primaryColor: "bg-blue-600",
      category: "Insurance" as const,
    },
    {
      title: "Family Protection Plan",
      description: "Tailored insurance solution for comprehensive family security.",
      icon: <Umbrella className="w-8 h-8" />,
      features: [
        "Multi-person coverage",
        "Accidental death benefit",
        "Critical illness cover",
        "Education fund protection",
      ],
      primaryColor: "bg-blue-500",
      category: "Insurance" as const,
    },
  ];

  return (
    <main className="bg-orange-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Financial Products</h1>
            <p className="text-xl text-orange-100">
              Discover a range of investment and insurance products designed to secure your financial future and help
              you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Investment Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <TrendingUp className="w-8 h-8 text-orange-600" />
            </div>
            <h2 className="text-3xl font-bold text-orange-900 mb-4">Investment Products</h2>
            <p className="text-xl text-orange-700 max-w-2xl mx-auto">
              Strategically designed investment products to grow your wealth
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {investmentProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-orange-900 mb-4">Insurance Products</h2>
            <p className="text-xl text-orange-700 max-w-2xl mx-auto">
              Comprehensive protection plans for you and your loved ones
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {insuranceProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-20 bg-orange-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-orange-900 mb-6">Need Personalized Guidance?</h2>
          <p className="text-xl text-orange-700 mb-8 max-w-2xl mx-auto">
            Our financial experts are ready to help you find the perfect products that align with your unique financial
            goals and risk profile.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              type="button"
              className="bg-orange-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-orange-500 transition-colors"
            >
              Schedule Consultation
            </button>
            <button
              type="button"
              className="bg-white text-orange-600 px-8 py-4 rounded-md font-semibold border border-orange-600 hover:bg-orange-50 transition-colors"
            >
              Download Product Guide
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
