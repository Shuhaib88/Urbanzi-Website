export default function StillHaveQuestions() {
  return (
    <div className="max-w-[350px] sm:max-w-[700px] md:max-w-[725px] lg:max-w-4xl xl:max-w-5xl mx-auto w-auto bg-gradient-to-r from-orange-300 via-pink-300 to-purple-400 py-12 px-6 rounded-2xl">
      <div className="max-w-2xl mx-auto text-center">
        {/* Profile Images */}
        <div className="flex justify-center mb-6">
          <div className="flex -space-x-2">
            <div className="w-12 h-12 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
              <img 
                src="/images/be559352733e0ec6404067d2aeeb2bfd9546a2a8.png" 
                alt="Team member" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-12 h-12 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
              <img 
                src="/images/person.png" 
                alt="Team member" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-12 h-12 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
              <img 
                src="/images/be559352733e0ec6404067d2aeeb2bfd9546a2a8.png" 
                alt="Team member" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Main Heading */}
        <h2 className="text-black text-2xl md:text-3xl font-semibold mb-4">
          Still have questions?
        </h2>
        
        {/* Description Text */}
        <p className="text-gray-700 text-base md:text-lg mb-8 leading-relaxed max-w-md mx-auto">
          Can't find the answer you're looking for? Please chat to our friendly team.
        </p>
        
        {/* Get in touch Button */}
        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-purple-800 transition-colors duration-200">
          Get in touch
        </button>
      </div>
    </div>
  );
}
