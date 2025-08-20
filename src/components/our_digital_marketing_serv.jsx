import React from 'react';

const OurDigitalMarketingService = () => {
  const services = [
    {
      id: 1,
      title: "Digital Marketing Strategy & Consulting",
      description: "Tired of missing out on Android's huge market? We offer smooth, reliable apps that get you seen—and make life easier for you and your users.",
      gradient: "from-[#FCCB90] via-[#ff99cc] to-[#D57EEB]",
      iconBg: "bg-green-500",
      demoImage: "/images/Frame.png"
    },
    {
      id: 2,
      title: "Social Media Marketing", 
      description: "Want to impress your Apple-loving customers? Our iPhone app development company crafts intuitive, elegant iOS apps your audience will rave about.",
      gradient: "from-[#FCCB90] via-[#ff99cc] to-[#D57EEB]",
      iconBg: "bg-blue-500",
      demoImage: "/images/Frame (2).png"
    },
    {
      id: 3,
      title: "Digital Marketing Services for Small Business",
      description: "Worried about high costs and long waits? With our flutter app development company in India, you get one app for both Android and iOS—without sacrificing quality or breaking the bank.",
      gradient: "from-[#FCCB90] via-[#ff99cc] to-[#D57EEB]",
      iconBg: "bg-cyan-500",
      demoImage: "/images/Frame (3).png"
    },
    {
      id: 4,
      title: "Google Ads & Online Advertising",
      description: "Is flexibility your top concern? As leading react native development companies, we give you adaptable, future-proof apps that grow with your business.",
      gradient: "from-[#FCCB90] via-[#ff99cc] to-[#D57EEB]",
      iconBg: "bg-purple-500",
      demoImage: "/images/Frame (1).png"
    },
    {
      id: 5,
      title: "Content Marketing & SEO",
      description: "Need something truly unique? We don't do cookie-cutter. Our custom iOS solutions tackle your specific challenges, making you stand out from competitors.",
      gradient: "from-[#FCCB90] via-[#ff99cc] to-[#D57EEB]",
      iconBg: "bg-blue-600",
      demoImage: "/images/Frame (2).png"
    },
    {
      id: 6,
      title: "Social Media Marketing Company",
      description: "Sick of apps that frustrate users or get bad reviews? Our designers put themselves in your customers' shoes—building clear, beautiful experiences that keep people coming back.",
      gradient: "from-[#FCCB90] via-[#ff99cc] to-[#D57EEB]",
      iconBg: "bg-pink-500",
      demoImage: "/images/image 44.png"
    },
    {
      id: 7,
      title: "Digital Marketing Consulting Services",
      description: "Dreading hidden bugs or post-launch headaches? We test everything and support you long-term, so your app always works as promised.",
      gradient: "from-[#FCCB90] via-[#ff99cc] to-[#D57EEB]",
      iconBg: "bg-gray-500",
      demoImage: "/images/image 45.png"
    },
    {
      id: 8,
      title: "Analytics & Reporting",
      description: "Unsure how your app fits into your bigger business? We connect every part—websites, CRMs, payment gateways—no confusion, just results.",
      gradient: "from-[#FCCB90] via-[#ff99cc] to-[#D57EEB]",
      iconBg: "bg-orange-500",
      demoImage: "/images/image 46.png"
    }
  ];

  return (
    <div className="min-h-screen py-4 sm:py-6 md:py-12 lg:py-16 xl:py-20 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12">
      <div className="max-w-xs sm:max-w-md md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mx-auto mb-4 sm:mb-6 md:mb-10 lg:mb-12 xl:mb-16">
          <div className="flex flex-col sm:flex-col md:flex-row justify-center items-center">
            <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-bold mb-1 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-6 leading-tight">
              Our
            </h1>
            <h1 className="md:ml-2 text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold 
            md:-mt-3 lg:-mt-4 xl:-mt-5
            bg-gradient-to-r from-[#FCCB90] via-[#ff99cc] to-[#D57EEB] bg-clip-text text-transparent">
              Digital Marketing
            </h1>
          </div>
          
          <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto leading-relaxed mt-2 sm:mt-3 md:mt-4 lg:mt-5">
            Everything You Need for Business-Boosting Software
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6">
          {services.map((service) => (
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
  );
};

export default OurDigitalMarketingService;