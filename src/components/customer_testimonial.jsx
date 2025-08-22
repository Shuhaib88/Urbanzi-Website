export default function CustomerTestimonial() {
  const testimonials = [
    {
      id: 1,
      text: "Working with Urbanzi Solution has been a wonderful experience. They took the time to understand our needs and delivered a solution that was both effective and user-friendly. Their professionalism and personal touch made all the difference.",
      name: "Arjun",
      role: "Startup Founder",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
    },
    {
      id: 2,
      text: "The team at Urbanzi Solution genuinely cares about their clients’ success. Their work on our project has been transformative, and their continued support has built a long-term relationship we deeply value.",
      name: "Samad",
      role: "Startup Founder",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
    },
    {
      id: 3,
      text: "Urbanzi Solution didn’t just build us a website, they helped us shape our brand online. The team is approachable, creative, and highly skilled. They made us feel like partners, not just clients.",
      name: "Akshay",
      role: "Startup Founder",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
    },
    {
      id: 4,
      text: "What I appreciate most about Urbanzi Solution is their honesty and dedication. They are always available to guide us, explain things clearly, and ensure we are comfortable at every stage of the project. Truly a team you can trust.",
      name: "Jeril",
      role: "Startup Founder",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
    },
    {
      id: 5,
      text: "Urbanzi Solution blends technical expertise with a human touch. They not only delivered a top-quality application but also supported us patiently throughout the process. We felt valued and heard at every step.",
      name: "Wazim",
      role: "Startup Founder",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
    }
  ];

  return (
    <div className="mt-12 sm:mt-16 lg:mt-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#d4af81] via-[#ff99cc] to-[#D57EEB] bg-clip-text text-transparent leading-tight">
            Customer testimonials
          </h1>
        </div>

        {/* Testimonials Layout */}
        <div className="relative max-w-6xl mx-auto ">
          
          {/* Mobile & Tablet Layout (sm and md) - Single Column */}
          <div className="lg:hidden">
            <div className="flex flex-col gap-6 sm:gap-8">
              {testimonials.slice(0, 5).map((testimonial, index) => (
                <div key={testimonial.id} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 sm:p-8 backdrop-blur-sm">
                  <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center text-white font-bold text-sm sm:text-base">
                      N
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <div className="text-white font-semibold text-sm sm:text-base">{testimonial.name}</div>
                      <div className="text-gray-400 text-xs sm:text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Layout (lg and above) - Original 4 corners + center design */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-3 gap-12">
              
              {/* Top Left */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm">
                <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                  {testimonials[0].text}
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center text-white font-bold text-sm">
                    N
                  </div>
                  <div className="ml-3">
                    <div className="text-white font-semibold text-sm">{testimonials[0].name}</div>
                    <div className="text-gray-400 text-xs">{testimonials[0].role}</div>
                  </div>
                </div>
              </div>

              {/* Center - Featured testimonial */}
              <div className="row-span-2 flex flex-col justify-center">
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 backdrop-blur-sm text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center text-white font-bold text-xl">
                      N
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {testimonials[4].text}
                  </p>
                  <div>
                    <div className="text-white font-semibold">{testimonials[4].name}</div>
                    <div className="text-gray-400 text-sm">{testimonials[4].role}</div>
                  </div>
                </div>
              </div>

              {/* Top Right */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm">
                <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                  {testimonials[1].text}
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center text-white font-bold text-sm">
                    N
                  </div>
                  <div className="ml-3">
                    <div className="text-white font-semibold text-sm">{testimonials[1].name}</div>
                    <div className="text-gray-400 text-xs">{testimonials[1].role}</div>
                  </div>
                </div>
              </div>

              {/* Bottom Left */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm">
                <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                  {testimonials[2].text}
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center text-white font-bold text-sm">
                    N
                  </div>
                  <div className="ml-3">
                    <div className="text-white font-semibold text-sm">{testimonials[2].name}</div>
                    <div className="text-gray-400 text-xs">{testimonials[2].role}</div>
                  </div>
                </div>
              </div>

              {/* Bottom Right */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm">
                <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                  {testimonials[3].text}
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center text-white font-bold text-sm">
                    N
                  </div>
                  <div className="ml-3">
                    <div className="text-white font-semibold text-sm">{testimonials[3].name}</div>
                    <div className="text-gray-400 text-xs">{testimonials[3].role}</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* View More Button */}
          <div className="text-center mt-8 sm:mt-12 lg:mt-16">
            <button className="border border-gray-600 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm sm:text-base">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
