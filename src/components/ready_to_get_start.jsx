export default function GetReadyToGetStart() {
  return (
    <div className="max-w-[350px] sm:max-w-[700px] md:max-w-[725px] lg:max-w-4xl xl:max-w-5xl mx-auto w-auto bg-gradient-to-r from-orange-300 via-pink-300 to-purple-400 py-16 px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-black text-4xl md:text-5xl font-bold mb-6">
          Ready to Get Started
        </h2>
        
        {/* Description Text */}
        <p className="text-black text-lg md:text-xl mb-8 leading-relaxed max-w-xl mx-auto">
          Take control of your finances today with Vibely. Whether you're a solo 
          user or part of a growing team, our platform is built to adapt to your 
          goals.
        </p>
        
        {/* Contact Us Button */}
        <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors duration-200">
          Contact Us
        </button>
      </div>
    </div>
  );
}
