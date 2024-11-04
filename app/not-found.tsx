import Link from "next/link";
import { Home, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[calc(100vh-118px)] bg-orange-50 flex flex-col justify-center items-center px-4">
      <section className="text-center">
        <AlertCircle className="text-red-600 mx-auto h-16 w-16 p-4 lg:w-28 lg:h-28" />
        <h1 className="text-2xl font-bold text-center md:text-4xl p-2 md:p-8">404</h1>
        <h2 className="text-xl text-gray-500 md:text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-300 text-sm text-justify mb-8">The page you are looking for does not exist.</p>
        <Link
          href="/"
          prefetch={false}
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
        >
          <Home className="mr-2 h-5 w-5" />
          Back to Home
        </Link>
      </section>
    </main>
  );
}
