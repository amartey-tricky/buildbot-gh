import type { Metadata } from "next";
import ContactForm from "../../components/contactform";
import Link from "next/link";
import { Briefcase, Mail, Phone, ArrowRight } from "lucide-react";

const title = "Contact Us";
const description = "Get in touch with our financial experts for personalized solutions.";

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: "https://buildbotgh.com/contact",
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

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header Section */}
      <section className="relative py-20 bg-gradient-to-b from-orange-600 to-orange-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-xl text-orange-100 mb-8">
              Get in touch with our financial experts for personalized solutions.
            </p>
          </div>
        </div>
      </section>
      {/* Contact Information Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-orange-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                  <Briefcase className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-orange-800">Office Address</h3>
                    <p className="text-orange-700">123 Financial Street, Accra, Ghana</p>
                  </div>
                </div>
                <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                  <Phone className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-orange-800">Phone</h3>
                    <p className="text-orange-700">+233 (0)24 780 2711</p>
                  </div>
                </div>
                <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                  <Mail className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-orange-800">Email</h3>
                    <p className="text-orange-700">buildbotgh@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <h2 className="text-3xl font-bold text-orange-900 mb-6">Business Hours</h2>
                <ul className="space-y-2 text-orange-700">
                  <li className="flex items-center">
                    <ArrowRight className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0" />
                    Monday - Friday: 9:00 AM - 5:00 PM
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0" />
                    Saturday: 10:00 AM - 2:00 PM
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0" />
                    Sunday: Closed
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-orange-900 mb-6">Get in Touch</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-orange-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-orange-800 mb-4">What services do you offer?</h3>
              <p className="text-orange-700">
                We offer a wide range of financial services including financial planning, investment management,
                retirement planning, estate planning, debt management, insurance solutions, and educational planning.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-orange-800 mb-4">How can I schedule a consultation?</h3>
              <p className="text-orange-700">
                You can schedule a consultation by filling out our contact form, calling our office, or sending us an
                email. One of our representatives will get back to you to arrange a suitable time.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-orange-800 mb-4">Do you offer virtual consultations?</h3>
              <p className="text-orange-700">
                Yes, we offer virtual consultations for your convenience. You can choose between in-person meetings at
                our office or online video consultations when you schedule your appointment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-orange-800 mb-4">What makes Financial House unique?</h3>
              <p className="text-orange-700">
                Financial House stands out with our personalized approach, expert team, and commitment to helping
                clients build a strong financial future. We tailor our solutions to your specific needs and goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-orange-900 mb-6">Ready to Secure Your Financial Future?</h2>
          <p className="text-xl text-orange-700 mb-8 max-w-2xl mx-auto">
            Take the first step towards financial success. Contact us today for expert advice and personalized
            solutions.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent rounded-md font-semibold text-white bg-orange-600 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
