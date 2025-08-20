const FEATURES = [
  {
    id: 1,
    title: "Real Multi-Platform Know-How",
    description: "We help you reach both Android and iOS users, so no opportunity is missed.",
    // titleColor: "text-yellow-300"
  },
  {
    id: 2,
    title: "Truly Custom Solutions",
    description: "Every app is uniquely shaped around your business—not copied from someone else’s",
    // titleColor: "text-yellow-300"
  },
  {
    id: 3,
    title: "User-Focused Results",
    description: "We create apps that people actually want to use—reducing frustration, boosting engagement, and earning loyal fans",
    // titleColor: "text-yellow-300"
  },
  {
    id: 4,
    title: "Strong App Store & SEO Support",
    description: "Not just development. We optimize your listings so people actually find and download your app.",
    // titleColor: "text-yellow-400"
  },
  {
    id: 5,
    title: "Constant Communication",
    description: "No silence, no worry—you always know what’s happening and why.",
    // titleColor: "text-yellow-400"
  },
  {
    id: 6,
    title: "Full-Circle Partner",
    description: "From that first idea to every update down the road—you get the same caring team.",
    // titleColor: "text-yellow-400"
  }
];

const PROVEN_RESULTS = {
  title: "Proven Results",
  description: "Businesses across India trust us to build apps that delight users and deliver value.",
  titleColor: "text-yellow-400"
};

export default function WhyWeAreBestInMobApp() {
  return (
    <div className="bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Why We Are Best In Mobile Development
          </h1>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {FEATURES.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-black border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition-colors duration-300"
            >
              <h3 className="text-xl text-center sm:text-2xl font-bold mb-4 text-yellow-200">
                {/* <h3 className={`text-xl sm:text-2xl font-bold mb-4 ${feature.titleColor}`}></h3> */}
                {feature.title}
              </h3>
              <p className="text-gray-300 text-center text-base sm:text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Proven Results - Full Width Card */}
        <div className=" border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition-colors duration-300">
            <h3 className="text-center text-xl sm:text-2xl font-bold mb-4 text-yellow-200">
          {/* <h3 className={`text-xl sm:text-2xl font-bold mb-4 text-center ${PROVEN_RESULTS.titleColor}`}> */}
            {PROVEN_RESULTS.title}
          </h3>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-center max-w-4xl mx-auto">
            {PROVEN_RESULTS.description}
          </p>
        </div>
      </div>
    </div>
  );
}