import { Link } from "next-view-transitions";
import { Phone, Mail, MapPin, Facebook, Twitter } from "lucide-react";
import { CldImage } from "@/components/cldimage";
import Menu from "@/util/collections/menu.json";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <section>
            <div className="flex space-x-4">
              <CldImage
                src="Logos/lsgf9lciieblf3jemxy5"
                alt="buildbot logo"
                width={50}
                height={50}
                className="md:h-[70px] md:w-auto"
                loading="lazy"
              />
              <h3 className="mt-4 text-2xl font-bold tracking-tight text-white">Buildbot</h3>
            </div>
            <p className="mb-4">We cushion your way to financial freedom.</p>
            <div className="flex space-x-4">
              <Facebook />
              <Twitter />
            </div>
          </section>
          <section>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-4">
              {Menu.map((item) => (
                <Link key={item.name} href={item.url} className="hover:text-orange-500">
                  {item.name}
                </Link>
              ))}
            </div>
          </section>
          <section>
            <h3 className="font-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <Link href="tel:" className="hover:text-orange-500">
                  024 123 4567
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <Link href="mailto:" className="hover:text-orange-500">
                  hello@buildbot.com
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>1432 Tomato Street Accra, Ghana</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </footer>
  );
}
