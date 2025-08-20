const FEATURES = [
  {
    id: 1,
    title: "Local SEO Focus & Kerala-Wide Expertise",
    description: "We get Trivandrum and Kerala markets, and what works for your unique audience.",
    // titleColor: "text-yellow-300"
  },
  {
    id: 2,
    title: "Clear, Measurable Results",
    description: "We don’t just promise—every campaign comes with simple reports showing calls.",
    // titleColor: "text-yellow-300"
  },
  {
    id: 3,
    title: "White-Hat, Sustainable Tactic",
    description: "Only safe, Google-endorsed methods—no risky shortcuts or tricks.",
    // titleColor: "text-yellow-300"
  },
  {
    id: 4,
    title: "Transparent, Honest Support",
    description: "We explain every step and never leave you guessing.",
    // titleColor: "text-yellow-400"
  },
  {
    id: 5,
    title: "Google My Business Masters",
    description: "More reviews, top-3 map visibility, and higher local trust.",
    // titleColor: "text-yellow-400"
  },
  {
    id: 6,
    title: "Smart, Safe Link-Building",
    description: "Backlinks that last and never put your site at risk.",
    // titleColor: "text-yellow-400"
  }
];

const PROVEN_RESULTS = {
  title: "Flexible Help & Training",
  description: "We’ll train you or your team if wanted, and we’re always available for any question—big or small.",
  titleColor: "text-yellow-400"
};

export default function WhyWeAreBestInSeo() {
  return (
    <div className="bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Why We Are Best In SEO
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