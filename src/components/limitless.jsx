export default function Limitless() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 lg:py-12 max-w-[1500px] w-full mx-auto">
      {/* Main Heading */}
      <div className="flex justify-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mt-4 sm:mt-6 lg:mt-10 bg-gradient-to-r from-[#ffcc99] via-[#ff99cc] to-[#cc99ff] bg-clip-text text-transparent text-center leading-tight">
          LIMITLESS
        </h1>
      </div>

      {/* Description */}
      <div className="mt-4 sm:mt-6 lg:mt-8 max-w-4xl mx-auto">
        <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold leading-relaxed px-4">
          Immersive digital experiences by blending cutting-edge technology 
          with innovative storytelling.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex sm:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-8 xl:gap-12 mt-6 sm:mt-8 lg:mt-10">
        <button className="sm:w-auto md:w-auto lg:w-auto bg-white text-black px-6 py-3 sm:px-8 lg:px-10 rounded-sm text-xs sm:text-sm font-semibold uppercase hover:bg-gray-300 transition-colors duration-300">
          Let's Start
        </button>
        <button className="sm:w-auto md:w-auto lg:w-auto bg-white text-black px-6 py-3 sm:px-8 lg:px-10 rounded-sm text-xs sm:text-sm font-semibold uppercase hover:bg-gray-300 transition-colors duration-300">
          Learn More
        </button>
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-12 sm:mt-10 lg:mt-45 xl:mt-30 space-y-2 sm:space-y-3 lg:space-y-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
          Urbanzi Delivers
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
          B2B Virtual
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
          Characters Solutions
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-[#ffff66] via-[#ff99cc] to-[#cc99ff] bg-clip-text text-transparent leading-tight">
          Customized For
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-[#ffff66] via-[#ff99cc] to-[#cc99ff] bg-clip-text text-transparent leading-tight">
          Businesses
        </h1>
      </div>
    </div>
  );
}
