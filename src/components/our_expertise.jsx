import React from 'react';

// Technology stack constant array
const TECHNOLOGIES = [
  {
    id: 1,
    name: "React",
    icon: "/images/8819c3bfa43051eed6e093ee4a01bf96f253d491.png"
  },
  {
    id: 2,
    name: "Next.js",
    icon: "/images/nextjs.png"
  },
  {
    id: 3,
    name: "Python",
    icon: "/images/9d40365665c75ad4d4e0d33fc6fe50d57e73ec6b.png"
  },
  {
    id: 4,
    name: "Node.js",
    icon: "/images/33b63eda912601cd5bf83b6cd2968b90499359b1.png"
  },
  {
    id: 5,
    name: "Tailwind CSS",
    icon: "/images/Tailwind CSS.png"
  },
  {
    id: 6,
    name: "HTML",
    icon: "/images/b3b2938ada900d0b849c580e9e07005f25c7e538.png"
  },
  {
    id: 7,
    name: "JavaScript",
    icon: "/images/a8dab5c7441e15d9b4b79bae12f342c36b4d1ea8.png"
  },
  {
    id: 8,
    name: "WordPress",
    icon: "/images/436acb931ace036403e790b87118f17586d98d6b.png"
  },
  {
    id: 9,
    name: "Wix",
    icon: "/images/62a60c92032fd6da5d4a2f1a.png"
  },
  {
    id: 10,
    name: "Shopify",
    icon: "/images/baf5d0885131f7bf421e87486cf6f65ff8e079f2.png"
  }
];

export default function OurExpertise() {
  return (
    <div className="bg-black py-8 px-4">
      <div className="flex justify-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-6xl mt-4 sm:mt-6 lg:mt-10 text-white ">
          Our Expertise
        </h1>
      </div>
      
      <div className="flex justify-center mt-5 text-2xl">
        <p className="text-gray-300 text-center">
          Technology—Simplified for Your Success
        </p>
      </div>
      
      <div className="flex justify-center mt-5 text-2xl">
        <p className="text-gray-300 text-center">
          Our experts utilize the latest tools, including:
        </p>
      </div>

      {/* Technology Stack Box */}
      <div className="mt-8 max-w-[350px] sm:max-w-[700px] md:max-w-[725px] lg:max-w-4xl xl:max-w-[1200px] mx-auto w-auto">
        <div className="bg-gradient-to-r from-orange-300 via-pink-300 to-purple-400 p-1 rounded-3xl">
          <div className="rounded-3xl p-8 bg-black h-full">
            <div className="flex flex-col gap-8">
              {/* Top row - 6 items */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                {TECHNOLOGIES.slice(0, 6).map((tech) => (
                  <div key={tech.id} className="flex flex-col items-center group cursor-pointer">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 mb-3 flex items-center justify-center  rounded-2xl group-hover:bg-gray-700 transition-all duration-300 group-hover:scale-110">
                      <img 
                        src={tech.icon} 
                        alt={tech.name}
                        className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                      />
                    </div>
                    <span className="text-white text-sm sm:text-base font-medium text-center group-hover:text-purple-300 transition-colors duration-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Bottom row - 4 items */}
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 justify-center">
                {TECHNOLOGIES.slice(6, 10).map((tech) => (
                  <div key={tech.id} className="flex flex-col items-center group cursor-pointer">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 mb-3 flex items-center justify-center  rounded-2xl group-hover:bg-gray-700 transition-all duration-300 group-hover:scale-110">
                      <img 
                        src={tech.icon} 
                        alt={tech.name}
                        className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                      />
                    </div>
                    <span className="text-white text-sm sm:text-base font-medium text-center group-hover:text-purple-300 transition-colors duration-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}