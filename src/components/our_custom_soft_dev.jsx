import React from 'react';

const OurCostomSoftDev = () => {
  const services = [
    {
      id: 1,
      title: "Custom Software Development Services",
      description: "Stop wasting time on software that only half-works for you. We create user-friendly custom platforms—CRM, ERP, logistics, portals, and more—designed for your workflows, with simple interfaces and powerful functionality.",
      gradient: "from-[#FCCB90] via-[#ff99cc] to-[#D57EEB]",
      iconBg: "bg-green-500",
      demoImage: "/images/b1a35e8be8214929005ed1d40b5a9640e96163cb.png"
    },
    {
      id: 2,
      title: "CRM Software Development Company", 
      description: "Tired of spreadsheets and silos? We build CRM solutions that organize your contacts, sales, and support in one easy place—so your team can focus on relationships, not paperwork.",
      gradient: "from-[#FCCB90] via-[#ff99cc] to-[#D57EEB]",
      iconBg: "bg-blue-500",
      demoImage: "/images/f8132bc2cedbda0a2fe214e11bd8316e8aaabfb6.png"
    },
    {
      id: 3,
      title: "Enterprise Software Development Company",
      description: "Need to connect your departments or automate complex processes? Our enterprise software streamlines everything—from HR to inventory—giving leaders better control and faster decision-making.",
      gradient: "from-[#FCCB90] via-[#ff99cc] to-[#D57EEB]",
      iconBg: "bg-cyan-500",
      demoImage: "/images/f530451c6d2f20339dbbd8270057858b2e58c8fb.png"
    },
    {
      id: 4,
      title: "Outsourcing Software Development",
      description: "Worried about cost or in-house expertise? Outsource your project to us. You get a reliable team that acts as your tech partner, updating you every step and delivering on time and budget.",
      gradient: "from-[#FCCB90] via-[#ff99cc] to-[#D57EEB]",
      iconBg: "bg-purple-500",
      demoImage: "/images/bcdd5ab902a482abc6e8b8ee8f768d270cf972da.png"
    },
    {
      id: 5,
      title: "SaaS Development Company",
      description: "Want to launch your own online software business? We handle everything for scalable, secure SaaS platforms—user management, billing, cloud hosting—so you can focus on growth, not tech headaches.",
      gradient: "from-[#FCCB90] via-[#ff99cc] to-[#D57EEB]",
      iconBg: "bg-blue-600",
      demoImage: "/images/Frame (2).png"
    },
    {
      id: 6,
      title: "Healthcare Software Development Companies",
      description: "Healthcare shouldn't be complicated. We build HIPAA-compliant apps, patient portals, and management tools that make care delivery smoother and more secure.",
      gradient: "from-[#FCCB90] via-[#ff99cc] to-[#D57EEB]",
      iconBg: "bg-pink-500",
      demoImage: "/images/image 44.png"
    },
    {
      id: 7,
      title: "Logistics Software Development Company",
      description: "Move more, manage less! Our custom logistics platforms track shipments, optimize routes, and automate billing—helping you get goods out faster with less manual effort.",
      gradient: "from-[#FCCB90] via-[#ff99cc] to-[#D57EEB]",
      iconBg: "bg-gray-500",
      demoImage: "/images/image 45.png"
    }
  ];

  return (
    <div className="min-h-screen py-4 sm:py-6 md:py-12 lg:py-16 xl:py-20 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12">
      <div className="max-w-xs sm:max-w-md md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mx-auto mb-4 sm:mb-6 md:mb-10 lg:mb-12 xl:mb-16">
          <div className="flex flex-col sm:flex-col md:flex-row justify-center items-center">
            <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-bold mb-1 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-6 leading-tight">
              Our Mobile App
            </h1>
            <h1 className="md:ml-2 text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold
            md:-mt-3 lg:-mt-4 xl:-mt-5
            bg-gradient-to-r from-[#FCCB90] via-[#ff99cc] to-[#D57EEB] bg-clip-text text-transparent">
              Development Services
            </h1>
          </div>
          
          <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto leading-relaxed mt-2 sm:mt-3 md:mt-4 lg:mt-5">
            Everything You Need for Business-Boosting Software:
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5 xl:space-y-6">
          {/* First Row - 4 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6">
            {services.slice(0, 4).map((service) => (
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

          {/* Second Row - 3 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 lg:max-w-3xl xl:max-w-4xl lg:mx-auto xl:mx-auto">
            {services.slice(4, 7).map((service) => (
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
      </div>
    </div>
  );
};

export default OurCostomSoftDev;