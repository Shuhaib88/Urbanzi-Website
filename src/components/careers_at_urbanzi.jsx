
export default function CareersPage() {
  return (
    <div className="min-h-screen  text-white">
      {/* Hero Section */}
      <div className="px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="max-w-xl lg:max-w-md xl:max-w-xl order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-bold mb-4 sm:mb-6">
              Careers at Urbanzi Solutions
            </h1>
            <p className="text-gray-300 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
              At Urbanzi Solutions we value each of our employees' unique abilities and work together as a family to complete tasks. We are constantly looking for dedicated team members with a positive mindset. View our open vacancies and apply to fuel your passion for work.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <button className="bg-purple-600 hover:bg-purple-700 px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium text-sm sm:text-base transition-colors">
                Explore
              </button>
              <button className="bg-purple-600 hover:bg-purple-700 px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium text-sm sm:text-base transition-colors">
                Why Urban?
              </button>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex-shrink-0">
            <div className="relative">
              <img src="/images/13aa438fe499ab593154cde50a6203a972d005b6.png" className="" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* We Create Value */}
          <div className="flex flex-col items-center bg-black border border-gray-700 rounded-lg p-4 sm:p-6 hover:bg-gray-750 transition-colors">
            <div className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 flex items-center justify-center">
              <img src="/images/b7fcdda8fc126f2425c6c5d3439a7a3037b08ac3.png" className="" alt="" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">We Create Value</h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              We grow value by transforming ideas into powerful solutions, leveraging advanced technologies and innovative business strategies to maximize opportunities and accelerate your business growth.
            </p>
          </div>

          {/* We Innovate Everyday */}
          <div className="flex flex-col items-center bg-black border border-gray-700 rounded-lg p-4 sm:p-6 hover:bg-gray-750 transition-colors">
            <div className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 flex items-center justify-center">
              <img src="/images/7c89fffff978e7c029bb90e60137d838e3be0b26.png" className="" alt="" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">We Innovate Everyday</h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Every day innovation occurs we always stay ahead through exceptional problem-solving and commitment to deliver exceptional results.
            </p>
          </div>

          {/* We Love Technology */}
          <div className="flex flex-col items-center bg-black border border-gray-700 rounded-lg p-4 sm:p-6 hover:bg-gray-750 transition-colors">
            <div className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 flex items-center justify-center">
              <img src="/images/6021d706656a8ccc8aa3d840759bdc9ef6c34632.png" className="" alt="" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">We Love Technology</h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Our team is made up of three key elements humanity and technology and business expertise combined to create industry-leading services and products.
            </p>
          </div>

          {/* We Embrace You */}
          <div className="flex flex-col items-center bg-black border border-gray-700 rounded-lg p-4 sm:p-6 hover:bg-gray-750 transition-colors">
            <div className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 flex items-center justify-center">
              <img src="/images/03d8ef6e741243e4f7332815e8358d20a8bc8dfb.png" className="" alt="" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">We Embrace You</h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Leveraging the power of global insights, multichannel, collaboration and learning opportunities, we've become wherever they do business.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
          <div className="relative order-2 lg:order-1 flex-shrink-0">
            <img src="/images/c7d03cf62fa352a9a07f5051d65d0842105531ac.png" alt="" className="w-100 h-100" />
          </div>
          
          <div className="flex-1 order-1 lg:order-2 lg:text-left lg:pl-8 ml-30 mt-15">
                <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-4 sm:mb-6">
                Make your <span className="text-purple-400">dream live</span>
                </h2>
                <p className="text-gray-300 mb-2 text-sm sm:text-base">Start your Career with best team</p>
                <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">Grow your Career with best team</p>
                <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">We are looking for new talents. Join our team.</p>
                <button 
                className="bg-purple-600 hover:bg-purple-700 px-6 sm:px-8 py-2 sm:py-3 rounded-md font-medium text-sm sm:text-base transition-colors">
                Contact
                </button>
          </div>
        </div>
      </div>
    </div>
  );
}