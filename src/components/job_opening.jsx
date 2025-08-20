"use client"
import { useState } from 'react';

export default function JobOpening() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const jobOpenings = [
    {
      title: "UI/UX Designer",
      description: "We are looking for a creative UI/UX Designer to join our team and help create amazing user experiences."
    },
    {
      title: "Digital Marketing",
      description: "Join our marketing team to drive digital campaigns and grow our online presence across multiple platforms."
    },
    {
      title: "SEO Analyst",
      description: "Help improve our search engine rankings and drive organic traffic through strategic SEO initiatives."
    },
    {
      title: "Flutter Developer",
      description: "Develop cross-platform mobile applications using Flutter framework for iOS and Android platforms."
    },
    {
      title: "Content Creator",
      description: "Create engaging content across various platforms including social media, blogs, and marketing materials."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="w-full bg-[#1b1221]  flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-wide">
          Job Openings
        </h1>
        <p className="text-white/70 text-lg sm:text-xl md:text-2xl font-light">
          become a better place to live and work.
        </p>
      </div>

      {/* Job Openings Accordion */}
      <div className="w-full max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl space-y-4">
        {jobOpenings.map((job, index) => (
          <div key={index} className="border border-gray-600 rounded-lg overflow-hidden bg-black/50 backdrop-blur-sm">
            {/* Accordion Header */}
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-gray-800/50 transition-all duration-300 group"
            >
              <span className="text-white text-lg sm:text-xl md:text-2xl font-medium group-hover:text-gray-200 transition-colors">
                {job.title}
              </span>
              <div className="flex-shrink-0 ml-4">
                <svg
                  className={`w-6 h-6 sm:w-7 sm:h-7 text-white/70 transform transition-transform duration-300 ${
                    openAccordion === index ? 'rotate-45' : 'rotate-0'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
            </button>

            {/* Accordion Content */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openAccordion === index 
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                <div className="border-t border-gray-600 pt-4">
                  <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed">
                    {job.description}
                  </p>
                  <div className="mt-4 sm:mt-6">
                    <button className="bg-gradient-to-r from-[#FCCB90] via-[#ff99cc] to-[#D57EEB] text-black font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:opacity-90 transition-opacity duration-300 text-sm sm:text-base">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Still have questions section */}
      <div className="text-center mt-16 sm:mt-20">
        <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 sm:mb-8">
          Still have questions?
        </h3>
        <button className="bg-white hover:bg-gray-500 text-black font-medium px-8 sm:px-10 py-3 sm:py-4 rounded-lg transition-colors duration-300 text-base sm:text-lg">
          Contact
        </button>
      </div>
    </div>
  );
}
