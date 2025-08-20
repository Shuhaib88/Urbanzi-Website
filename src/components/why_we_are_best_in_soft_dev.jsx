const FEATURES = [
  {
    id: 1,
    title: "Deep Local & Industry Experience",
    description: "Trusted by SMEs and enterprises from Trivandrum to all India, with proven results in complex domains.",
    // titleColor: "text-yellow-300"
  },
  {
    id: 2,
    title: "Fully Custom Solutions",
    description: "Every project is built around your unique processes, not forced into a template.",
    // titleColor: "text-yellow-300"
  },
  {
    id: 3,
    title: "User-Friendly Design",
    description: "We focus on intuitive interfaces, so everyone on your team feels confident.",
    // titleColor: "text-yellow-300"
  },
  {
    id: 4,
    title: "Full-Stack Strength",
    description: "From web and mobile to cloud and integration, our engineers are experts in every layer.",
    // titleColor: "text-yellow-400"
  },
  {
    id: 5,
    title: "Secure & Scalable",
    description: "We follow best practices for security, privacy (GDPR, HIPAA), and future growth.",
    // titleColor: "text-yellow-400"
  },
  {
    id: 6,
    title: "Transparent Communication",
    description: "You get clear updates, timelines, and access to your project at all times.",
    // titleColor: "text-yellow-400"
  }
];

const PROVEN_RESULTS = {
  title: "Real Business Results",
  description: "Our software streamlines work, reduces costs, and earns glowing client feedback.",
  titleColor: "text-yellow-400"
};

export default function WhyWeAreBestInSoftDev() {
  return (
    <div className="bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Why We Are Best In Software Development
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
              <p className="text-gray-300 text-base text-center sm:text-lg leading-relaxed">
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