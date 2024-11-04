import { Users, Target, Send, Video, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface IMFStep {
  title: string;
  description: string;
  points: string[];
}

const steps: Step[] = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "List Your Network",
    description: "Start by listing people you know who might be interested in financial growth opportunities.",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Identify Prospects",
    description: "Focus on individuals with similar goals and entrepreneurial mindset.",
  },
  {
    icon: <Send className="w-8 h-8" />,
    title: "Extend Invitations",
    description: "Invite them to join using your unique referral code.",
  },
];

const imfSteps: IMFStep[] = [
  {
    title: "INVITE",
    description: "Create your prospect list and reach out to potential partners",
    points: [
      "Build a comprehensive list of contacts",
      "Identify those with entrepreneurial spirit",
      "Share the opportunity personally",
    ],
  },
  {
    title: "MEET",
    description: "Connect and present the opportunity digitally",
    points: [
      "Schedule virtual meetings via Zoom/WhatsApp/FaceTime",
      "Present the business opportunity",
      "Provide guidance and support",
    ],
  },
  {
    title: "FOLLOW UP",
    description: "Maintain consistent communication",
    points: [
      "Regular check-ins with team members",
      "Encourage and support new partners",
      "Persist with interested prospects",
    ],
  },
];

const benefits: string[] = [
  "Earn from premium-paying appointments",
  "Receive rewards from direct referrals' efforts",
  "Build unlimited network through uni-level structure",
  "Access to digital marketing tools",
  "Comprehensive training and support",
];

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Become a Buildbot Partner</h1>
            <p className="text-xl text-orange-100 mb-8">
              Join our network of successful partners and build a sustainable income through referrals
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent rounded-md text-lg font-medium text-orange-600 bg-white hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
            >
              Sign Up Now
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-900 mb-4">Partner Benefits</h2>
            <p className="text-xl text-orange-700">Unlock your earning potential with our partnership program</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle2 className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0" />
                <span className="text-orange-800">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMF Formula Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-900 mb-4">The IMF Formula for Success</h2>
            <p className="text-xl text-orange-700">Follow our proven three-step formula to build your business</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {imfSteps.map((step, index) => (
              <div key={index} className="bg-orange-50 rounded-lg overflow-hidden shadow-sm">
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-orange-800 mb-4">{step.title}</h3>
                  <p className="text-orange-700 mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.points.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <ArrowRight className="w-5 h-5 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-orange-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-900 mb-4">Getting Started</h2>
            <p className="text-xl text-orange-700">Begin your journey as a Buildbot partner in three simple steps</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-orange-600">{step.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-orange-900 mb-2">{step.title}</h3>
                <p className="text-orange-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-orange-900 mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-orange-700 mb-8 max-w-2xl mx-auto">
            Join Buildbot today and start building your network of success
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent rounded-md font-semibold text-white bg-orange-600 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
            >
              Sign Up Now
            </Link>
            <Link
              href="/presentation"
              className="inline-flex items-center justify-center px-8 py-4 border border-orange-600 rounded-md font-semibold text-orange-600 bg-white hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
            >
              <Video className="w-5 h-5 mr-2" />
              Watch Presentation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
