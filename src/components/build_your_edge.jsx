export default function BuildYourEdge() {
  return (
    <div>

      <div className="max-w-[350px] sm:max-w-[700px] md:max-w-[725px] lg:max-w-4xl xl:max-w-[1400px] mx-auto w-auto bg-[#3d3a3a]/70 py-16 px-6 rounded-4xl">

        <div className="text-center max-w-6xl mx-auto ">

            <div className="flex justify-center">
              <h2 className="text-white -mt-3 sm:mt-2 md:mt-3 lg:mt-4 xl:mt-5 mb-6 text-[14px] sm:text-[20px] md:text-4xl lg:text-4xl xl:text-6xl">
                Build Your Edge with Leading
              </h2>
              <div className="flex justify-center -mt-2 sm:mt-6 md:mt-2 lg:mt-3 xl:mt-3 ml-3 ">
                <h1 className="text-center  bg-gradient-to-r from-[#d4af81] via-[#ff99cc] to-[#D57EEB] bg-clip-text text-transparent leading-tight
                text-[14px] sm:text-[20px] md:text-4xl lg:text-4xl xl:text-6xl">
                    Software
                </h1>
              </div>
            </div>
            <div className="flex justify-center ">
              <h1 className="text-center bg-gradient-to-r from-[#d4af81] via-[#ff99cc] to-[#D57EEB] bg-clip-text text-transparent leading-tight
              text-[25px] sm:text-[20px] md:text-4xl lg:text-4xl xl:text-6xl -mt-5 sm:-mt-5 md: lg: xl:">
                  Companies in Trivandrum & Kerala
              </h1>
            </div>
          {/* </div> */}
          
          
          {/* Description Text */}
          <p className="text-white sm:text-[20px] md:text-xl lg:text-2xl xl:text-2xl mb-8 leading-relaxed max-w-full mx-auto">
            Struggling with generic, off-the-shelf software that slows you down? At Urbanzi Solutions, we hear you. 
            As Kerala’s trusted software development company, we create tailor-made solutions—from CRM to enterprise and 
            SaaS—helping you simplify processes, scale faster, and finally get tech that fits your business like a glove.
            </p>
        </div>
        <div className="flex justify-center items-center">
          <button>
            <div className="flex-1 max-w-md sm:max-w-md md:max-w-xs lg:max-w-xs xl:max-w-xs p-[1px] 
            bg-gradient-to-r from-[#FCCB90] via-[#ff99cc] to-[#D57EEB] rounded-lg hover:bg-gradient-to-r hover:from-yellow-400/80 hover:via-yellow-400/80 hover:to-yellow-400/80">
              <div className="rounded-lg px-4 py-2 bg bg-[#3d3a3a]">
                <div className="flex">
                  Start Your Project
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>

      <div className="whoweare_bg max-w-full py-16 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="flex flex-col ml-22 md:ml-10 lg:ml-10 xl:ml-25 md:flex-row items-center gap-8 max-w-[1300px] mx-auto">

          {/* Phone Images Section */}
          <div className="flex-shrink-0  z-10 md:-ml-12">
            <img 
              src="/images/749db4ba98611c832fbb0349f55daa11eb99723b.png" 
              alt="Mobile app mockups" 
              className="w-36 h-28 sm:w-44 sm:h-36 md:w-80 md:h-72 lg:w-100 lg:h-80 xl:w-150 xl:h-100 object-contain"
            />
          </div>

          {/* Content Section */}
          <div className="flex-1 max-w-2xl  z-20 ml-0 md:-ml-20">
            <h2 className="text-white text-3xl md:text-4xl lg:text-4xl xl:text-5xl mb-6 font-bold">
              Who We Are
            </h2>
            
            <p className="text-white text-lg md:text-xl mb-8 leading-relaxed">
              Urbanzi Solutions is a top software development company in Kerala, 
              trusted by ambitious organizations that need more than cookie-cutter tools. 
              With deep roots in Trivandrum and clients across India, our team listens to your unique needs, t
              hen designs, builds, and supports software that solves real challenges—making your work smoother, smarter, 
              and ready for the future.
            </p>
            
            <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-400 transition-colors duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      


    </div>
    
  );
}