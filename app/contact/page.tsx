import type { Metadata } from "next";
import { Heading, Text } from "../../components/pagetitle";
import ContactForm from "../../components/contactform";

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
};

export default function Page() {
  return (
    <main className="min-h-screen bg-orange-50 py-6 md:py-12 px-4 md:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <section className="text-center space-y-4 mb-8 md:mb-16">
          <Heading variant="primary" as="h1">
            Contact Us
          </Heading>
          <Text variant="muted">
            Get in touch with our financial experts. We'll help you achieve your financial goals.
          </Text>
        </section>
        <ContactForm />
      </div>
    </main>
  );
}
