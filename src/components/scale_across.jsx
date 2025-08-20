import React from "react";
const services = [
  {
    title: "App Development",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
  {
    title: "Web Development",
    description:
      "Custom web solutions that drive business growth and enhance user engagement across all platforms.",
  },
  {
    title: "UI/UX Design",
    description:
      "Creating intuitive and beautiful designs that provide exceptional user experiences and drive conversions.",
  },
  {
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and migration services to modernize your business operations.",
  },
  {
    title: "Digital Marketing",
    description:
      "Comprehensive digital marketing strategies to boost your online presence and reach target audiences.",
  },
  {
    title: "Data Analytics",
    description:
      "Transform your data into actionable insights that drive informed business decisions and growth.",
  },
  {
    title: "E-commerce Solutions",
    description:
      "Complete e-commerce platforms that deliver seamless shopping experiences and drive online sales.",
  },
  {
    title: "AI & Machine Learning",
    description:
      "Cutting-edge AI solutions that automate processes and provide intelligent business insights.",
  },
  {
    title: "Cybersecurity",
    description:
      "Comprehensive security solutions to protect your digital assets and maintain business continuity.",
  },
];

const clients = new Array(14).fill("Client Logo");

const MailIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    className={className}
  >
    <defs>
      <linearGradient id="mailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FCCB90" />
        <stop offset="50%" stopColor="#ff99cc" />
        <stop offset="100%" stopColor="#D57EEB" />
      </linearGradient>
    </defs>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="url(#mailGradient)"
      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.82 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
    />
  </svg>
);

export default function ScaleAcross() {
  return (
    <div className="px-4 mt-12 sm:px-6 lg:px-8">
      {/* Main Heading */}
      <div className="flex flex-wrap justify-center font-bold gap-2 sm:gap-3">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Scale across
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-[#FCCB90] via-[#ff99cc] to-[#D57EEB] bg-clip-text text-transparent">
          Build New Apps
        </h1>
      </div>
      {/* Description */}
      <div className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-4 sm:mt-5">
        <div className="flex justify-center font-bold text-center px-4">
          Your success is our success and together we help our society to
        </div>
        <div className="flex justify-center font-bold text-center px-4">
          become a better place to live and work.
        </div>
      </div>
      {/* Services Grid Section */}
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 sm:gap-6 p-4 sm:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-[1px] bg-gradient-to-r from-[#FCCB90] via-[#ff99cc] to-[#D57EEB] rounded-lg hover:bg-gradient-to-r hover:from-yellow-400/80 hover:via-yellow-400/80 hover:to-yellow-400/80 transition-all duration-300"
            >
              <div className="rounded-lg p-4 sm:p-6 bg-black h-45">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <MailIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-white text-base sm:text-lg font-semibold text-center mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm text-center">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-4 sm:mt-6 px-4 py-2 sm:px-5 bg-gray-800 text-white text-xs sm:text-sm rounded-md border border-gray-700 hover:bg-gray-700 transition">
          See More
        </button>
      </div>
      {/* Happy Clients Section */}
      <div className="mt-10 sm:mt-12">
        <div className="flex flex-wrap justify-center font-bold gap-2 sm:gap-3 mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Some Of Our
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-[#FCCB90] via-[#ff99cc] to-[#D57EEB] bg-clip-text text-transparent">
            Happy Client
          </h1>
        </div>
        {/* Client Grid */}
        <div className="min-h-screen flex flex-col items-center gap-4 sm:gap-6 p-4 sm:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 max-w-6xl w-full">
            {clients.map((client, index) => (
              <div
                key={index}
                className="p-[1px] bg-gradient-to-r from-[#FCCB90] via-[#ff99cc] to-[#D57EEB] rounded-lg hover:bg-gradient-to-r hover:from-yellow-400/80 hover:via-yellow-400/80 hover:to-yellow-400/80 transition-all duration-300"
              >
                <div className="rounded-lg p-4 sm:p-6 bg-black min-h-[100px] flex items-center justify-center">
                  <span className="text-white text-sm">
                    {client} {index + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}