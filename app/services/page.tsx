import { ArrowRight, Shield, TrendingUp, Briefcase, Building, Users, Home, Car, Heart } from "lucide-react";

interface ServiceCardProps {
  id: number;
  title: string;
  description: string;
  features: string[];
  icon: JSX.Element;
  primaryColor: string;
}

const ServiceCard = ({ id, title, description, features, icon, primaryColor }: ServiceCardProps) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
    <div className={`${primaryColor} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
      <div className="text-white">{icon}</div>
    </div>
    <h3 className="text-2xl font-bold text-orange-900 mb-4">{title}</h3>
    <p className="text-orange-700 mb-6">{description}</p>
    <ul className="space-y-3">
      {features.map((feature) => (
        <li key={id} className="flex items-center text-orange-600">
          <ArrowRight className="w-5 h-5 mr-2 flex-shrink-0" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default function Page() {
  const investmentServices = [
    {
      id: 1,
      title: "Portfolio Management",
      description: "Expert management of your investment portfolio tailored to your goals and risk tolerance.",
      icon: <TrendingUp className="w-8 h-8" />,
      primaryColor: "bg-orange-600",
      features: [
        "Personalized investment strategy",
        "Regular portfolio rebalancing",
        "Risk management",
        "Performance monitoring",
      ],
    },
    {
      id: 2,
      title: "Corporate Investment",
      description: "Comprehensive investment solutions for businesses and corporations.",
      icon: <Briefcase className="w-8 h-8" />,
      primaryColor: "bg-orange-500",
      features: [
        "Business expansion capital",
        "Merger & acquisition support",
        "Corporate restructuring",
        "Treasury management",
      ],
    },
    {
      id: 3,
      title: "Real Estate Investment",
      description: "Strategic real estate investment opportunities for portfolio diversification.",
      icon: <Building className="w-8 h-8" />,
      primaryColor: "bg-orange-600",
      features: [
        "Commercial properties",
        "Residential developments",
        "REITs management",
        "Property portfolio analysis",
      ],
    },
  ];

  const insuranceServices = [
    {
      id: 4,
      title: "Life Insurance",
      description: "Protect your loved ones' financial future with comprehensive life insurance solutions.",
      icon: <Users className="w-8 h-8" />,
      primaryColor: "bg-orange-500",
      features: ["Term life insurance", "Whole life insurance", "Universal life insurance", "Group life insurance"],
    },
    {
      id: 5,
      title: "Property Insurance",
      description: "Safeguard your properties with tailored insurance coverage.",
      icon: <Home className="w-8 h-8" />,
      primaryColor: "bg-orange-600",
      features: [
        "Homeowners insurance",
        "Commercial property insurance",
        "Natural disaster coverage",
        "Content protection",
      ],
    },
    {
      id: 6,
      title: "Health & Auto Insurance",
      description: "Comprehensive coverage for your health and vehicles.",
      icon: <Heart className="w-8 h-8" />,
      primaryColor: "bg-orange-500",
      features: [
        "Health insurance plans",
        "Auto insurance coverage",
        "Accident protection",
        "Medical expense coverage",
      ],
    },
  ];

  return (
    <main className="bg-orange-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-orange-100">
              Comprehensive financial solutions tailored to your needs. From strategic investments to reliable insurance
              coverage, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Investment Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <TrendingUp className="w-8 h-8 text-orange-600" />
            </div>
            <h2 className="text-3xl font-bold text-orange-900 mb-4">Investment Services</h2>
            <p className="text-xl text-orange-700 max-w-2xl mx-auto">
              Strategic investment solutions to help you grow and protect your wealth
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {investmentServices.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-orange-600" />
            </div>
            <h2 className="text-3xl font-bold text-orange-900 mb-4">Insurance Services</h2>
            <p className="text-xl text-orange-700 max-w-2xl mx-auto">
              Comprehensive insurance solutions to protect what matters most
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insuranceServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-orange-900 mb-6">Need Help Choosing the Right Service?</h2>
          <p className="text-xl text-orange-700 mb-8 max-w-2xl mx-auto">
            Our financial advisors are here to help you select the perfect combination of services tailored to your
            unique needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button type="button" className="bg-orange-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-orange-500 transition-colors">
              Schedule a Consultation
            </button>
            <button type="button" className="bg-white text-orange-600 px-8 py-4 rounded-md font-semibold hover:bg-orange-50 transition-colors">
              Download Service Brochure
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
