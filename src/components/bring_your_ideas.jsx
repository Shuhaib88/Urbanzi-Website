export default function BringYourIdeas() {
  return (
    <div>

      {/* <div className="max-w-[350px] sm:max-w-[700px] md:max-w-[725px] lg:max-w-4xl xl:max-w-[1400px] mx-auto w-auto bg-[#3d3a3a] py-16 px-6"> */}
      <div className="max-w-[350px] sm:max-w-[700px] md:max-w-[725px] lg:max-w-4xl xl:max-w-[1400px] mx-auto w-auto bg-[#3d3a3a]/70 py-16 px-6 rounded-4xl">

        <div className="text-center max-w-6xl mx-auto ">
          {/* Main Heading */}
          <div className="flex justify-center ">
            <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl bg-gradient-to-r from-[#d4af81] via-[#ff99cc] to-[#D57EEB] bg-clip-text text-transparent leading-tight">
                Bring Your Ideas Online with Kerala’s
            </h1>
          </div>
          <h2 className="text-white text-4xl mt-5 md:text-5xl mb-6">
            Trusted Web Development <br></br> Company
          </h2>
          
          {/* Description Text */}
          <p className="text-white text-lg md:text-xl mb-8 leading-relaxed max-w-xl mx-auto">
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


      <div className="whoweare_bg max-w-[350px] sm:max-w-[700px] md:max-w-[1000px] lg:max-w-7xl xl:max-w-full py-16">
        <div className="ml-20 sm:ml-20 md:ml-20 lg:ml-30 xl:ml-36">
          {/* Main Heading */}
          <div className="flex">
            <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl bg-gradient-to-r from-[#d4af81] via-[#ff99cc] to-[#D57EEB] bg-clip-text text-transparent leading-tight">
            </h1>
          </div>
          <h2 className="text-white sm: md:text-4xl lg:text-4xl xl:text-5xl mt-5 mb-6">
            Who We Are ?
          </h2>
          
          {/* Description Text */}
          <p className="text-white text-lg md:text-xl mb-8 leading-relaxed max-w-xl mx-auto">
            Welcome! At Urbanzi Solutions, we believe your business deserves to be seen and celebrated online. 
            Proudly based in Trivandrum and serving all of Kerala, our team combines creativity, empathy, 
            and advanced technology to help real businesses like yours grow, connect, and succeed on the web. 
            We know that navigating the digital world can be stressful, so we walk beside you at every step—making 
            the journey simple and rewarding.
          </p>

          {/* Contact Us Button */}
          <button className=" bg-white text-black px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors duration-200">
            Contact Us
          </button>
        </div>
      </div>

    </div>
    
  );
}