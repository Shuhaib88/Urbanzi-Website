import React from "react";

const blogPosts = [
  {
    category: "Tool",
    categoryColor: "bg-orange-500",
    title: "Why One-Click Deployment Is a Game Changer for AI-Powered Apps",
    author: "Neethu",
    date: "June 30, 2025",
    readTime: "5 min read",
    imageSrc: "/images/cef476e6782e556d6319f7fb5f7be2319ba20292.png",
    authorImageSrc: "/images/be559352733e0ec6404067d2aeeb2bfd9546a2a8.png",
    cardBgColor: "bg-blue-200"
  },
  {
    category: "Tool",
    categoryColor: "bg-green-600",
    title: "Why One-Click Deployment Is a Game Changer for AI-Powered Apps",
    author: "Neethu",
    date: "June 30, 2025",
    readTime: "5 min read",
    imageSrc: "/images/cef476e6782e556d6319f7fb5f7be2319ba20292.png",
    authorImageSrc: "/images/be559352733e0ec6404067d2aeeb2bfd9546a2a8.png",
    cardBgColor: "bg-gray-200"
  },
  {
    category: "Tool",
    categoryColor: "bg-blue-600",
    title: "Why One-Click Deployment Is a Game Changer for AI-Powered Apps",
    author: "Neethu",
    date: "June 30, 2025",
    readTime: "5 min read",
    imageSrc: "/images/cef476e6782e556d6319f7fb5f7be2319ba20292.png",
    authorImageSrc: "/images/be559352733e0ec6404067d2aeeb2bfd9546a2a8.png",
    cardBgColor: "bg-yellow-200"
  }
];

export default function LatestBlog() {
  return (
    <div className="w-full flex flex-col items-center py-10 px-8">

      {/* Blog icon with "LATEST BLOG" text */}
      <div className="flex items-center gap-2 mb-8">
        <div className=" rounded-full p-2">
          <img src="/images/618c574f2b51ab1deea68e2a5349f0548d3ec1b4.png" className="w-8 h-8" alt="" />
        </div>
        <span className="text-white font-medium text-sm tracking-wider">LATEST BLOG</span>
      </div>

      {/* Main heading */}
      <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold text-center leading-tight mb-12">
        Creative Insights &<br />
        <span className="text-white font-serif">Innovations!</span>
      </h1>

      {/* Categories */}
      <div className="relative inline-block mt-10 rounded-lg p-[1px] bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500">
        <div className="px-4 py-4 bg-black/90 rounded-lg text-white">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0">
            <span className="text-white text-2xl font-medium px-4 py-2 hidden sm:block">Categories</span>
            
            {/* Desktop layout - single row */}
            <div className="hidden sm:flex sm:items-center">
              <button className="bg-white text-black text-sm font-medium px-4 py-2 rounded-full">
                ALL
              </button>
              <button className="text-gray-300 text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-700 transition-colors">
                Design Tips
              </button>
              <button className="text-gray-300 text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-700 transition-colors">
                UI/UX
              </button>
              <button className="text-gray-300 text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-700 transition-colors">
                Marketing
              </button>
              <button className="text-gray-300 text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-700 transition-colors">
                Development
              </button>
            </div>

            {/* Mobile layout - multiple rows */}
            <div className="flex flex-col gap-2 sm:hidden">
              {/* First row - Categories and ALL button in same row */}
              <div className="flex justify-between items-center">
                <span className="text-white text-2xl font-medium px-4 py-2 sm:hidden">Categories</span>
                <button className="bg-white text-black text-sm font-medium px-4 py-2 rounded-full">
                  ALL
                </button>
              </div>
              
              {/* Second row - Design Tips and UI/UX */}
              <div className="flex gap-2 justify-start pl-4">
                <button className="text-gray-300 text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-700 transition-colors">
                  Design Tips
                </button>
                <button className="text-gray-300 text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-700 transition-colors">
                  UI/UX
                </button>
              </div>
              
              {/* Third row - Marketing and Development */}
              <div className="flex gap-2 justify-start pl-4">
                <button className="text-gray-300 text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-700 transition-colors">
                  Marketing
                </button>
                <button className="text-gray-300 text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-700 transition-colors">
                  Development
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-30 px-5 sm:px-22 md:px-22 lg:px-22 xl:px-22">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
            <div className={`${post.cardBgColor} h-50 sm:h-60 md:h-60 lg:h-60 xl:h-70 relative p-6`}>
              <div className="absolute inset-0 p-0">
                <img src={post.imageSrc} className="w-102 xl:w-110 h-50 sm:h-60 md:h-60 lg:h-60 xl:h-70 object-cover" alt="" />
              </div>
            </div>
            <div className="p-6">
              <span className={`${post.categoryColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                {post.category}
              </span>
              <h3 className="text-white font-bold text-lg mt-4 leading-tight">
                {post.title}
              </h3>
              <div className="flex">
                <img src={post.authorImageSrc} className="w-10 h-10 rounded-full mt-4" alt="" />
                <div className="flex flex-col ml-4">
                  <h3 className="text-white text-lg mt-4 leading-tight">
                    {post.author}
                  </h3>
                  <div className="flex flex-row">
                    <h3 className="text-white text-lg leading-tight">
                      {post.date}
                    </h3>
                    <h3 className="text-white text-lg ml-5 leading-tight">
                      {post.readTime}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}