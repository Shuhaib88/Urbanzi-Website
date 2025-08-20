export default function TurnYourApp() {
  return (
    <div>

      <div className="max-w-[350px] sm:max-w-[700px] md:max-w-[725px] lg:max-w-4xl xl:max-w-[1400px] mx-auto w-auto bg-[#3d3a3a]/70 py-16 px-6 rounded-4xl">

        <div className="text-center max-w-6xl mx-auto ">

          {/* <div className="text-[25px] sm:text-3xl md:text-4xl lg:text-4xl xl:text-6xl"> */}
            <h2 className="text-white mt-5 mb-6 text-[18px] sm:text-[20px] md:text-4xl lg:text-4xl xl:text-6xl">
              Turn Your App Idea into Reality with
            </h2>
            <div className="flex justify-center">
              <h2 className="text-white -mt-3 sm:mt-2 md:mt-3 lg:mt-4 xl:mt-5 mb-6 text-[14px] sm:text-[20px] md:text-4xl lg:text-4xl xl:text-6xl">
                Kerala’s Trusted Mobile
              </h2>
              <div className="flex justify-center -mt-2 sm:mt-6 md:mt-2 lg:mt-3 xl:mt-3 ml-3 ">
                <h1 className="text-center  bg-gradient-to-r from-[#d4af81] via-[#ff99cc] to-[#D57EEB] bg-clip-text text-transparent leading-tight
                text-[14px] sm:text-[20px] md:text-4xl lg:text-4xl xl:text-6xl">
                    App Development
                </h1>
              </div>
            </div>
            <div className="flex justify-center ">
              <h1 className="text-center bg-gradient-to-r from-[#d4af81] via-[#ff99cc] to-[#D57EEB] bg-clip-text text-transparent leading-tight
              text-[25px] sm:text-[20px] md:text-4xl lg:text-4xl xl:text-6xl -mt-5 sm:-mt-5 md: lg: xl:">
                  Company
              </h1>
            </div>
          {/* </div> */}
          
          
          {/* Description Text */}
          <p className="text-white sm:text-[20px] md:text-xl lg:text-2xl xl:text-2xl mb-8 leading-relaxed max-w-full mx-auto">
            Struggling to turn your business vision into a website that truly works? 
            Based in Trivandrum, Urbanzi Solutions understands the frustration of feeling invisible online, outdated, 
            or held back by tech headaches. We listen to your challenges, then craft SEO-friendly, stunning websites that break barriers, 
            attract real customers, and finally give your brand the spotlight it deserves.
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
              src="/images/7414952039825e6718860f5d12a9f425bb515730.png" 
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
              You&apos;re not just another project to us—your goals matter. 
              Urbanzi Solutions is a mobile app development company in 
              Kerala dedicated to helping business owners like you go from 
              uncertainty to real results. We know how stressful it can be 
              to bring your app to life, so we guide you step-by-step, 
              making everything simpler and genuinely caring about your 
              success.
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