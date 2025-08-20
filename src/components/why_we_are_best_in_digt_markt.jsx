const FEATURES = [
  {
    id: 1,
    title: "Local & National Reach",
    description: "Kerala roots, all-India impact—our team knows how to make your message connect, wherever your market is.",
    // titleColor: "text-yellow-300"
  },
  {
    id: 2,
    title: "Tailored to Your Business",
    description: "Every strategy is built for your size, budget, and audience—never one-size-fits-all.",
    // titleColor: "text-yellow-300"
  },
  {
    id: 3,
    title: "Clear Communication, No Jargon",
    description: "We explain everything simply, so you’re always in control.",
    // titleColor: "text-yellow-300"
  },
  {
    id: 4,
    title: "Affordable for Every Stage",
    description: "We love helping startups and small businesses grow, and scale our campaigns to fit any budget.",
    // titleColor: "text-yellow-400"
  },
  {
    id: 5,
    title: "Social Marketing Mastery",
    description: "From day-to-day posts to viral campaigns, our creative team builds your brand’s real community.",
    // titleColor: "text-yellow-400"
  },
  {
    id: 6,
    title: "Results, Not Guesswork",
    description: "We track every campaign with real numbers—so you see more calls, leads, and sales.",
    // titleColor: "text-yellow-400"
  }
];

const PROVEN_RESULTS = {
  title: "Ongoing Support",
  description: "We answer your questions, optimize your results, and grow with you at every step.",
  titleColor: "text-yellow-400"
};

export default function WhyWeAreBestInDigtMarkt() {
  return (
    <div className="bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Why We Are Best In Digital Marketing
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