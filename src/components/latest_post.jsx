export default function LatestPost() {

  return (
    <div className="mt-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#FCCB90] via-[#ff99cc] to-[#D57EEB] bg-clip-text text-transparent">
              Latest Post and Insights
            </span>
          </h1>
          <p className="text-slate-200 font-bold text-lg">
            Don't take our word for it, Testimonials!
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Post 1 */}
          <div className="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
            <div className="bg-blue-200 h-77 relative p-6">
              {/* Computer illustration */}
              <div className="absolute inset-0 p-0">
               <img src="/images/cef476e6782e556d6319f7fb5f7be2319ba20292.png" className="w-102 h-80 object-cover" alt="" />

              </div>
            </div>
            <div className="p-6">
              <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Tool
              </span>
              <h3 className="text-white font-bold text-lg mt-4 leading-tight">
                Why One-Click Deployment Is a Game Changer for AI-Powered Apps
              </h3>
            </div>
          </div>

          {/* Post 2 */}
          <div className="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
            <div className="bg-gray-200 h-77 relative p-6">
              {/* Code illustration */}
              <div className="absolute inset-0 p-0">
                <img src="/images/b2bd51144086abe141c8023b39e49a75bbb92caf.png" className="w-102 h-80 object-cover" alt="" />
              </div>
            </div>
            <div className="p-6">
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Ideas
              </span>
              <h3 className="text-white font-bold text-lg mt-4 leading-tight">
                Collaborative Coding at Scale: Supporting Developers in Real-Time
              </h3>
            </div>
          </div>

          {/* Post 3 */}
          <div className="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
            <div className="bg-yellow-200 h-77 relative p-6">
              {/* Monitor illustration */}
              <div className="absolute inset-0 p-0">
                <img src="/images/1552602948fc39f161717b5ad244951ad65be70b.png" className="w-102 h-80 object-cover" alt="" />
              </div>
            </div>
            <div className="p-6">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Business
              </span>
              <h3 className="text-white font-bold text-lg mt-4 leading-tight">
                Seamless Integrations: Connecting Your SaaS to the Modern Stack
              </h3>
            </div>
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button className="border border-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium">
            View More
          </button>
        </div>
      </div>
    </div>
  );
}