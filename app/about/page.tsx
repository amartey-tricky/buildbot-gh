import Image from "next/image";
import type { Metadata } from "next";

const title: string = "About - Buildbot GH";
const description: string = "Learn more about Buildbot GH";

export const metadata: Metadata = {
  title: title,
  description: description,
  robots: {
    index: true,
    follow: true,
    noimageindex: true,
  }
}

export default function Page() {
  const stats = [
    { label: "Years of Experience", value: "25+" },
    { label: "Satisfied Clients", value: "10K+" },
    { label: "Assets Managed", value: "$2B+" },
    { label: "Financial Advisors", value: "50+" },
  ];

  const values = [
    {
      title: "Trust",
      description: "Building long-term relationships based on transparency and integrity.",
      icon: "🤝",
    },
    {
      title: "Excellence",
      description: "Delivering superior financial solutions through expertise and innovation.",
      icon: "⭐",
    },
    {
      title: "Security",
      description: "Protecting and growing your wealth with proven risk management strategies.",
      icon: "🛡️",
    },
  ];

  return (
    <main className="bg-orange-50">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-orange-900 mb-6">Our Story</h1>
            <p className="text-xl text-orange-700 max-w-3xl mx-auto">
              For over two decades, we've been helping individuals and businesses achieve their financial goals through
              smart investments and comprehensive insurance solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Our Mission</h2>
            <div className="relative">
              <div className="absolute -left-4 -top-4 text-6xl text-orange-200 opacity-50">"</div>
              <p className="text-2xl font-light text-white leading-relaxed italic relative z-10">
                To empower individuals and businesses with innovative financial solutions that secure their present and
                build their future. We strive to be the trusted partner in our clients' journey to financial success,
                delivering excellence through personalized service, expert guidance, and unwavering commitment to their
                goals.
              </p>
              <div className="absolute -right-4 bottom-0 text-6xl text-orange-200 opacity-50">"</div>
            </div>
            <div className="mt-12 space-y-4">
              <h3 className="text-xl font-semibold text-white">Our Vision</h3>
              <p className="text-lg text-orange-100">
                To be the leading force in transforming financial services through innovation, integrity, and
                exceptional client care, creating lasting prosperity for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">{stat.value}</div>
                <div className="text-sm text-orange-900">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-900 text-center mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-orange-900 mb-4">{value.title}</h3>
                <p className="text-orange-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-900 text-center mb-16">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[1, 2, 3].map((member) => (
              <div key={member} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <Image
                    src={`/team-member-${member}.jpg`}
                    alt={`Team member ${member}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-orange-900 mb-2">{`Executive Name ${member}`}</h3>
                <p className="text-orange-700 mb-4">{`Position ${member}`}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-orange-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-orange-900 mb-6">Ready to Secure Your Financial Future?</h2>
          <p className="text-xl text-orange-700 mb-8 max-w-2xl mx-auto">
            Our team of expert financial advisors is here to help you achieve your financial goals. Let's start the
            conversation today.
          </p>
          <button
            type="button"
            className="bg-orange-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-orange-500 transition-colors"
          >
            Schedule a Consultation
          </button>
        </div>
      </section>
    </main>
  );
}
