"use client"
import React, { useState } from 'react';

const PROJECTS = [
  {
    id: 1,
    title: "Arrow cabs",
    subtitle: "Best car rental in Trivandrum",
    work: "Website / seo",
    leads: "5000+",
    traffic: "50%",
    seoScore: "90+",
    images: [
      "/images/2c5ef8b8852ee787ae93d809a76edce3a78aed88.png",
      "/images/08447b9f43921092326e739ce4341d4624ebfb4d.png"
    ]
  },
  {
    id: 2,
    title: "TechFlow Solutions",
    subtitle: "Modern SaaS Platform",
    work: "Full Stack Development",
    leads: "3200+",
    traffic: "75%",
    seoScore: "95+",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop&crop=center"
    ]
  },
  {
    id: 3,
    title: "Green Garden Restaurant",
    subtitle: "Farm to table dining experience",
    work: "E-commerce / Branding",
    leads: "4500+",
    traffic: "65%",
    seoScore: "88+",
    images: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&crop=center"
    ]
  }
];

export default function ProjectAndCaseStudy() {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % PROJECTS.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };

  const project = PROJECTS[currentProject];

  return (
    <div className="bg-black py-16 px-4">
      <div className="">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl font-bold text-white mb-12">
          Projects & Case Studies
        </h1>
      </div>
      
      <div className="mt-10 h-[650px] sm:h-[600px] md:h-[600px] lg:h-[600px] xl:h-[600px] max-w-[800px] sm:max-w-[700px] md:max-w-[725px] lg:max-w-4xl xl:max-w-[1200px] mx-auto w-auto 
      bg-[#3d3a3a] py-1 px-1 bg-gradient-to-r from-[#FCCB90] via-[#ff99cc] to-[#D57EEB] rounded-3xl hover:bg-gradient-to-r">
        <div className="rounded-3xl p-6 bg-black h-full relative">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="text-center mb-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold 
                bg-gradient-to-r from-[#d4af81] via-[#ff99cc] to-[#D57EEB] bg-clip-text text-transparent leading-tight">
                    Our Work in Action
                </h1>
            </div>
            <p className="text-white font-bold text-[20px] md:text-base">
              See how Urbanzi Solutions helped companies boost efficiency, eliminate manual <br></br>
              headaches, and grow with bespoke software.
            </p>
          </div>

          {/* Main Content */}
          <div className="flex h-[280px] relative">
            {/* Gradient Line - positioned slightly left */}
            <div className="absolute left-[35%] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FCCB90] via-[#ff99cc] to-[#D57EEB]"></div>
            
            {/* Left Side - Images */}
            <div className="w-[35%] pr-4 flex flex-col sm:flex-row gap-2">
              <div className="flex-1 relative rounded-lg overflow-hidden">
                <img 
                  src={project.images[0]} 
                  alt="Project screenshot 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 relative rounded-lg overflow-hidden">
                <img 
                  src={project.images[1]} 
                  alt="Project screenshot 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Project Details */}
            <div className="w-[65%] pl-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{project.title}</h3>
              <p className="text-gray-300 text-base md:text-lg mb-3">{project.subtitle}</p>
              
              <div className="mb-6">
                <span className="text-gray-400">Work :</span>
                <span className="text-white ml-2 font-medium">{project.work}</span>
              </div>

              {/* Stats */}
              <div className="flex gap-2 sm:gap-10 md:gap-10 lg:gap-20 xl:gap-36 items-end">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">{project.leads}</div>
                  <div className="text-gray-400 text-sm">Leads delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">{project.traffic}</div>
                  <div className="text-gray-400 text-sm">Organic Traffic Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">{project.seoScore}</div>
                  <div className="text-gray-400 text-sm">SEO Score</div>
                </div>
              </div>

              {/* Visit Site Button */}
              <div className="mt-6">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Visit Site
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                <button 
                onClick={prevProject}
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition-colors duration-200"
                >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                </button>
                <button 
                onClick={nextProject}
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition-colors duration-200"
                >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                </button>
          </div>
        </div>
      </div>
    </div>
  );
}