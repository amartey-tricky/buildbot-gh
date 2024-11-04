export default function LoadingPartnerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section Loading */}
      <div className="relative py-20 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="h-12 w-2/3 mx-auto mb-6 bg-orange-300 animate-pulse rounded-md" />
            <div className="h-6 w-3/4 mx-auto bg-orange-300 animate-pulse rounded-md" />
          </div>
        </div>
      </div>

      {/* Benefits Section Loading */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="h-10 w-48 mx-auto mb-4 bg-gray-200 animate-pulse rounded-md" />
            <div className="h-6 w-64 mx-auto bg-gray-200 animate-pulse rounded-md" />
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-16 w-full bg-gray-200 animate-pulse rounded-md" />
            ))}
          </div>
        </div>
      </div>

      {/* IMF Formula Section Loading */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-64 w-full bg-gray-200 animate-pulse rounded-md" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
