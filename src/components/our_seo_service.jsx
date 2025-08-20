import React from 'react';

const OurSeoService = () => {
  const services = [
    {
      id: 1,
      title: "Custom Software Development Services",
      description: "Appear at the top when customers search nearby. We optimize your Google My Business listing so more local customers discover, trust, and contact you.",
      gradient: "from-[#FCCB90] via-[#ff99cc] to-[#D57EEB]",
      iconBg: "bg-green-500",
      demoImage: "/images/hut.png"
    },
    {
      id: 2,
      title: "CRM Software Development Company", 
      description: "Want more phone calls, visits, and leads from your city? We make sure your business shows up in the right searches and local maps without breaking the bank.",
      gradient: "from-[#FCCB90] via-[#ff99cc] to-[#D57EEB]",
      iconBg: "bg-blue-500",
      demoImage: "/images/localseo.png"
    },
    {
      id: 3,
      title: "Enterprise Software Development Company",
      description: "We fix your text, images, speed, and all website details—so search engines love your site and people find what they need in seconds.",
      gradient: "from-[#FCCB90] via-[#ff99cc] to-[#D57EEB]",
      iconBg: "bg-cyan-500",
      demoImage: "/images/ffc624ed4569a7e5ba3645123f08e189bba92ec5.png"
    },
    {
      id: 4,
      title: "Outsourcing Software Development",
      description: "Boost your website’s authority safely. We help you earn high-quality, trustworthy links that Google values, pushing you above your rivals.",
      gradient: "from-[#FCCB90] via-[#ff99cc] to-[#D57EEB]",
      iconBg: "bg-purple-500",
      demoImage: "/images/7da2db6c5ff9a0277b051b64ddf1e9908546a794.png"
    },
    {
      id: 5,
      title: "SaaS Development Company",
      description: "Not sure why you’re not ranking? Our experts review your site, explain things simply, and show you the clearest, smartest way forward.",
      gradient: "from-[#FCCB90] via-[#ff99cc] to-[#D57EEB]",
      iconBg: "bg-blue-600",
      demoImage: "/images/d04b52c286362704699d5f3f31e966e03e746267.png"
    }
  ];

  return (
    <div className=" py-4 sm:py-6 md:py-12 lg:py-16 xl:py-12 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12">
      <div className="max-w-xs sm:max-w-md md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mx-auto mb-4 sm:mb-6 md:mb-10 lg:mb-12 xl:mb-16">
          <div className="flex flex-col sm:flex-col md:flex-row justify-center items-center">
            <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-bold mb-1 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-6 leading-tight">
              Our SEO
            </h1>
            <h1 className="md:ml-2 text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold
            md:-mt-3 lg:-mt-4 xl:-mt-5
            bg-gradient-to-r from-[#FCCB90] via-[#ff99cc] to-[#D57EEB] bg-clip-text text-transparent">
              Services
            </h1>
          </div>
          
          <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto leading-relaxed mt-2 sm:mt-3 md:mt-4 lg:mt-5">
            Everything You Need for Business-Boosting Software
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5 xl:space-y-2">
          {/* First Row - 4 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6">
            {services.slice(0, 3).map((service) => (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-2xl xl:rounded-3xl p-[1px] 
                bg-gradient-to-r from-[#FCCB90] via-[#ff99cc] to-[#D57EEB] hover:from-yellow-400/80 hover:via-yellow-400/80 hover:to-yellow-400/80 transition-all duration-300 transform hover:scale-105"
              >
                {/* Inner Card with Black Background */}
                <div className="relative h-full bg-black rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-2xl xl:rounded-3xl overflow-hidden">
                  {/* Content Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  
                  {/* Card Content */}
                  <div className="relative items-center p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 h-full flex flex-col min-h-[200px] sm:min-h-[220px] md:min-h-[280px] lg:min-h-[320px] xl:min-h-[360px]">
                    {/* Icon/Image */}
                    <div className="mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6">
                      <img
                        src={service.demoImage}
                        alt={service.title}
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 rounded-md sm:rounded-lg md:rounded-lg lg:rounded-xl xl:rounded-xl object-cover"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-center text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold sm:font-semibold md:font-bold lg:font-bold xl:font-bold mb-1 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-5 leading-tight px-1">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-[10px] sm:text-xs md:text-sm lg:text-sm xl:text-base leading-relaxed flex-1 text-center sm:text-center md:text-left lg:text-left xl:text-left px-1 sm:px-2 md:px-0">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - 3 items */}
          <div className="mt-2 sm:mt-3 md:mt-5 lg:mt-10 xl:mt-15 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 lg:max-w-3xl xl:max-w-4xl lg:mx-auto xl:mx-auto">
            {services.slice(3, 5).map((service) => (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-2xl xl:rounded-3xl p-[1px] bg-gradient-to-r from-[#FCCB90] via-[#ff99cc] to-[#D57EEB] hover:from-yellow-400/80 hover:via-yellow-400/80 hover:to-yellow-400/80 transition-all duration-300 transform hover:scale-105"
              >
                {/* Inner Card with Black Background */}
                <div className="relative h-full bg-black rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-2xl xl:rounded-3xl overflow-hidden">
                  {/* Content Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  
                  {/* Card Content */}
                  <div className="relative items-center p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 h-full flex flex-col min-h-[200px] sm:min-h-[220px] md:min-h-[280px] lg:min-h-[320px] xl:min-h-[360px]">
                    {/* Icon/Image */}
                    <div className="mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6">
                      <img
                        src={service.demoImage}
                        alt={service.title}
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 rounded-md sm:rounded-lg md:rounded-lg lg:rounded-xl xl:rounded-xl object-cover"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-center text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold sm:font-semibold md:font-bold lg:font-bold xl:font-bold mb-1 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-5 leading-tight px-1">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-[10px] sm:text-xs md:text-sm lg:text-sm xl:text-base leading-relaxed flex-1 text-center sm:text-center md:text-left lg:text-left xl:text-left px-1 sm:px-2 md:px-0">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 sm:mt-8 md:mt-10 lg:mt-15 xl:mt-15 text-center mx-auto mb-4 sm:mb-6 md:mb-10 lg:mb-12 xl:mb-16">
          <div className="flex flex-col sm:flex-col md:flex-row justify-center items-center">
            <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-bold mb-1 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-6 leading-tight">
              Our SEO
            </h1>
            <h1 className="md:ml-2 text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold
            md:-mt-3 lg:-mt-4 xl:-mt-5
            bg-gradient-to-r from-[#FCCB90] via-[#ff99cc] to-[#D57EEB] bg-clip-text text-transparent">
              Services
            </h1>
          </div>
          
          <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto leading-relaxed mt-2 sm:mt-3 md:mt-4 lg:mt-5">
            We “Speak Google”—So You Don’t Have To <br />
            From deep keyword research to technical audits and content optimization, <br /> 
            our team knows the formulas behind real, safe, and lasting SEO results. <br />
            Whether you run a shop, a clinic, or a global B2B brand, we have proven <br />
            playbooks to move you up the rankings.
          </p>
        </div>


      </div>
    </div>
  );
};

export default OurSeoService;