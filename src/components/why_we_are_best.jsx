const FEATURES = [
  {
    id: 1,
    title: "Expertise Across Platforms",
    description: "We have deep experience building websites on WordPress, Shopify, React, Next.js, and more—so you get the ideal solution, every time.",
    // titleColor: "text-yellow-300"
  },
  {
    id: 2,
    title: "Tailored to Your Needs",
    description: "Every project is uniquely designed to reflect your brand and meet your specific business goals, never a cookie-cutter approach.",
    // titleColor: "text-yellow-300"
  },
  {
    id: 3,
    title: "User-Centered Design",
    description: "We focus on intuitive navigation, engaging experiences, and visually appealing layouts that turn visitors into loyal customers.",
    // titleColor: "text-yellow-300"
  },
  {
    id: 4,
    title: "SEO-Driven From Day One",
    description: "Our sites are built with the latest SEO best practices, ensuring your business gets found on Google and reaches more potential customers.",
    // titleColor: "text-yellow-400"
  },
  {
    id: 5,
    title: "Reliable, End-to-End Support",
    description: "From discovery to launch and ongoing maintenance, you always have a dedicated team beside you.",
    // titleColor: "text-yellow-400"
  },
  {
    id: 6,
    title: "Transparent Communication",
    description: "We keep you in the loop at every step, providing clear updates, honest advice, and a stress-free experience.",
    // titleColor: "text-yellow-400"
  }
];

const PROVEN_RESULTS = {
  title: "Proven Results",
  description: "Our portfolio speaks for itself—businesses across India trust Urbanzi Solutions for websites that drive growth and deliver real value.",
  titleColor: "text-yellow-400"
};

export default function WhyWeAreBest() {
  return (
    <div className="bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Why We Are Best in Website Development and Design
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
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
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