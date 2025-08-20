"use client"
import React, { useState } from 'react';

const CaseStudySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const caseStudies = [
    {
      title: "Arrow cabs",
      subtitle: "Best car rental in Trivandrum",
      work: "Website / seo",
      leads: "5000+",
      traffic: "50%",
      seoScore: "90+",
      leadsLabel: "Leads devliverd",
      trafficLabel: "Organic Traffic Increase",
      seoLabel: "SEO Score"
    },
    {
      title: "Digital Marketing Pro",
      subtitle: "Leading marketing agency",
      work: "Branding / Marketing",
      leads: "3000+",
      traffic: "75%",
      seoScore: "95+",
      leadsLabel: "Campaigns Delivered",
      trafficLabel: "Conversion Rate",
      seoLabel: "Client Satisfaction"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === caseStudies.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? caseStudies.length - 1 : prevIndex - 1
    );
  };

  const currentStudy = caseStudies[currentIndex];

  return (
    <div className="mt-0 md:-mt-10 lg:-mt-30 xl:-mt-70 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center w-full">
        {/* Increased gradient box padding for responsive screens */}
        <div className="p-[4px] sm:p-[5px] md:p-[6px] lg:p-[4px] xl:p-[3px] mt-6 sm:mt-8 lg:mt-10 bg-gradient-to-r from-[#FCCB90] via-[#ff99cc] to-[#D57EEB] max-w-6xl w-full rounded-xl sm:rounded-2xl hover:bg-gradient-to-r">
          {/* Increased inner padding and ensured proper centering */}
          <div className="rounded-lg sm:rounded-xl p-6 sm:p-8 md:p-10 lg:p-8 xl:p-8 bg-black w-full">
            
            {/* Headline - Centered properly */}
            <div className="text-center mb-4 sm:mb-6 w-full">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mx-auto">
                <span className="bg-gradient-to-r from-[#FCCB90] via-[#ff99cc] to-[#D57EEB] bg-clip-text text-transparent">
                  Our Case Studies
                </span>
              </h1>
              <p className="text-slate-200 font-bold mt-3 sm:mt-4 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg px-2 text-center">
                We continue to assist organizations in overcoming their most pressing business challenges.
                <br className="hidden sm:block" />
                Read how we supported our clients to improve their performance.
              </p>
            </div>

            {/* Case Study Card - Fixed centering and alignment */}
            <div className="relative gradient_bg_l rounded-lg p-6 sm:p-8 md:p-10 lg:p-8 w-full mx-auto">
              
              {/* Case Study Header - Properly centered */}
              <div className="text-center mb-6 sm:mb-8 w-full">
                <div className="mx-auto max-w-4xl">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight text-center">
                    {currentStudy.title}
                  </h2>
                  <p className="text-white/80 text-base sm:text-lg mb-3 sm:mb-4 text-center">
                    {currentStudy.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-white/70 text-sm sm:text-base">
                    <span className="font-medium">Work:</span>
                    <span>{currentStudy.work}</span>
                  </div>
                </div>
              </div>

              {/* Metrics - Properly centered grid */}
              <div className="w-full max-w-5xl mx-auto mb-6 sm:mb-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                  <div className="text-center p-3 sm:p-4 flex flex-col items-center justify-center">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-200 mb-2">
                      {currentStudy.leads}
                    </div>
                    <div className="text-white/80 text-xs sm:text-sm leading-tight text-center">
                      {currentStudy.leadsLabel}
                    </div>
                  </div>
                  <div className="text-center p-3 sm:p-4 flex flex-col items-center justify-center">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-200 mb-2">
                      {currentStudy.traffic}
                    </div>
                    <div className="text-white/80 text-xs sm:text-sm leading-tight text-center">
                      {currentStudy.trafficLabel}
                    </div>
                  </div>
                  <div className="text-center p-3 sm:p-4 flex flex-col items-center justify-center">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-200 mb-2">
                      {currentStudy.seoScore}
                    </div>
                    <div className="text-white/80 text-xs sm:text-sm leading-tight text-center">
                      {currentStudy.seoLabel}
                    </div>
                  </div>
                </div>
              </div>

              {/* Visit Site Button - Centered */}
              <div className="text-center mb-4 sm:mb-6 w-full">
                <button className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base mx-auto">
                  <svg width="16" height="16" className="sm:w-[18px] sm:h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Visit site
                </button>
              </div>

              {/* Navigation Arrows - Centered */}
              <div className="flex justify-center items-center gap-3 sm:gap-4 w-full">
                <button 
                  onClick={prevSlide}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                  aria-label="Previous case study"
                >
                  <svg width="16" height="16" className="sm:w-[20px] sm:h-[20px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={nextSlide}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                  aria-label="Next case study"
                >
                  <svg width="16" height="16" className="sm:w-[20px] sm:h-[20px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Slide Indicators - Centered */}
              <div className="flex justify-center items-center gap-2 mt-4 sm:mt-6 w-full">
                {caseStudies.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                      index === currentIndex 
                        ? 'bg-white' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to case study ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudySection;
