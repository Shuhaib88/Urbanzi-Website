export default function BeingEnglandsTop() {
  return (
    <div className="px-4 md:px-8 lg:px-20 pt-8 md:pt-16 lg:pt-20 max-w-[1500px] w-full mx-auto">
      {/* Header Section */}
      <div className="flex flex-wrap items-center gap-2 font-bold text-2xl sm:text-3xl lg:text-4xl">
        <div>
          Being England's top 
        </div>
        <div className="bg-gradient-to-r from-[#FCCB90] via-[#ff99cc] to-[#D57EEB] bg-clip-text text-transparent">
          IT employer
        </div>
      </div>

      {/* Content Section */}
      <div className="relative mt-8 lg:mt-12">
        {/* Text Content */}
        <div className="absolute text-[15px] sm:text-xl lg:text-2xl mb-8 lg:mb-0 lg:mt-5 z-10">
          <p className="leading-relaxed mt-20">
            At Urbanzi, we help businesses grow with innovative and <br/>
            tailored digital solutions. From web development to branding, <br/>
            we create seamless experiences that elevate your brand. <br/>
            Let's bring your vision to life with creativity and technology. <br/>
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-end lg:justify-end">
          <img
            src="/images/4a91b0479b81094502c393664665adf2e5a3fd7d.png"
            alt="Logo"
            className="w-full max-w-75 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain opacity-90"
          />
        </div>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-wrap mt-20 sm:-mt-15 md:-mt-15 lg:-mt-15 xl:-mt-30 gap-8 lg:gap-8 ">
        <button className="bg-white text-black px-6 py-3 lg:px-8 rounded-sm text-xs font-semibold uppercase hover:bg-gray-300 transition-colors">
          Let's Start
        </button>
        <button className="bg-indigo-600 text-white px-6 py-3 lg:px-8 rounded-sm text-xs font-semibold uppercase hover:bg-indigo-700 transition-colors">
          Our Solutions
        </button>
      </div>

      {/* Large Text Section */}
      <div className="mt-16 lg:mt-20 overflow-hidden">
        <div className="flex justify-center">
          <h1 className="opacity-25 text-4xl sm:text-6xl md:text-8xl lg:text-[170px] xl:text-[240px] font-extrabold bg-[linear-gradient(to_bottom,#D57EEB_50%,#FCCB90_50%)] bg-clip-text text-transparent leading-none text-center">
            URBANZI
          </h1>
        </div>

        <div className="flex justify-center -mt-2 lg:-mt-8">
          <h1 className="opacity-25 text-4xl sm:text-6xl md:text-8xl lg:text-[132px] xl:text-[200px] font-extrabold bg-[linear-gradient(to_bottom,#b18ac1_50%,#b56d43_50%)] bg-clip-text text-transparent leading-none text-center">
            SOLUTIONS
          </h1>
        </div>
      </div>
    </div>
  );
}
