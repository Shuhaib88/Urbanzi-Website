export default function JoinTheTeam() {
  return (
    <div>
        <div className="w-full bg-gradient-to-r from-orange-300 via-pink-300 to-purple-400 py-16 px-6">
            <div className="max-w-2xl mx-15">
                {/* Main Heading */}
                <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
                Join The Team And<br></br>
                Make A Difference
                </h2>
                
                {/* Description Text */}
                <p className="text-black text-lg md:text-xl mb-8 leading-relaxed ">
                At Vibely, we’re redefining how people manage money. <br></br>
                Our mission is to empower businesses with smart tools.
                </p>

                {/* Contact Us Button */}
                <div className="flex space-x-6">
                    <button className="bg-white text-black px-8 py-3 rounded-xl text-lg font-medium hover:bg-gray-800 hover:text-white transition-colors duration-200">
                    Open Position
                    </button>
                    <button className="bg-white text-black px-8 py-3 rounded-xl text-lg font-medium hover:bg-gray-800 hover:text-white transition-colors duration-200">
                    Learn More
                    </button>
                </div>
            </div>
        </div>

        {/* Perks & Values */}
        <div className="w-full bg-[#1b1221] flex flex-col items-center py-16 px-8">
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-4 text-center">
                Perks & Values
            </h2>
            <p className="text-white/70 text-lg mb-12 text-center">
                become a better place to live and work.
            </p>

            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
                
                {/* Innovation and Creativity - Top Left */}
                <div className="flex-1 p-[1px] bg-gradient-to-r from-[#FCCB90] via-[#ff99cc] to-[#D57EEB] rounded-lg hover:bg-gradient-to-r hover:from-yellow-400/80 hover:via-yellow-400/80 hover:to-yellow-400/80 transition-all duration-300">
                    <div className="rounded-lg p-6 bg-black h-full flex flex-col">
                        <div className="flex items-start mb-4">
                        <span className="text-3xl mr-4 mt-1">💡</span>
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold text-white mb-3">
                            Innovation and Creativity
                            </h3>
                            <p className="text-white/80 text-sm leading-relaxed">
                            become a better place to live and work.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>

                {/* Innovation and Creativity - Top Center (with image) */}
                <div className="flex-1 p-[1px] bg-gradient-to-r from-[#FCCB90] via-[#ff99cc] to-[#D57EEB] rounded-lg hover:bg-gradient-to-r hover:from-yellow-400/80 hover:via-yellow-400/80 hover:to-yellow-400/80 transition-all duration-300">
                    <div className="rounded-lg p-6 bg-black h-full flex flex-col">
                        <div className="mb-4">
                        <h3 className="text-xl font-semibold text-white mb-3">
                            Innovation and Creativity
                        </h3>
                        <p className="text-white/80 text-sm leading-relaxed mb-4">
                            become a better place to live and work.
                        </p>
                        <div className="w-full h-32 bg-gray-800 rounded-lg overflow-hidden">
                            <img 
                            src="/api/placeholder/300/128" 
                            alt="Team working together" 
                            className="w-full h-full object-cover"
                            />
                        </div>
                        </div>
                    </div>
                </div>

                {/* Diversity and Inclusion - Top Right */}
                <div className="flex-1 p-[1px] bg-gradient-to-r from-[#FCCB90] via-[#ff99cc] to-[#D57EEB] rounded-lg hover:bg-gradient-to-r hover:from-yellow-400/80 hover:via-yellow-400/80 hover:to-yellow-400/80 transition-all duration-300">
                    <div className="rounded-lg p-6 bg-black h-full flex flex-col">
                        <div className="flex items-start mb-4">
                        <span className="text-3xl mr-4 mt-1">👥</span>
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold text-white mb-3">
                            Diversity and Inclusion
                            </h3>
                            <p className="text-white/80 text-sm leading-relaxed">
                            become a better place to live and work.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>

                {/* Innovation/Competition and Creativity - Bottom Left */}
                <div className="flex-1 p-[1px] bg-gradient-to-r from-[#FCCB90] via-[#ff99cc] to-[#D57EEB] rounded-lg hover:bg-gradient-to-r hover:from-yellow-400/80 hover:via-yellow-400/80 hover:to-yellow-400/80 transition-all duration-300">
                    <div className="rounded-lg p-6 bg-black h-full flex flex-col">
                        <div className="w-full h-32 bg-gray-800 rounded-lg overflow-hidden mb-4">
                        <img 
                            src="/api/placeholder/300/128" 
                            alt="Money and success" 
                            className="w-full h-full object-cover"
                        />
                        </div>
                        <div className="flex items-start">
                        <span className="text-3xl mr-4 mt-1">💡</span>
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold text-white mb-3">
                            Innovation/Competition and Creativity
                            </h3>
                            <p className="text-white/80 text-sm leading-relaxed">
                            become a better place to live and work.
                            </p>
                        </div>
                        </div>
                    </div>                                                                                  
                </div>

                {/* Health and Wellness - Bottom Center */}
                <div className="flex-1 p-[1px] bg-gradient-to-r from-[#FCCB90] via-[#ff99cc] to-[#D57EEB] rounded-lg hover:bg-gradient-to-r hover:from-yellow-400/80 hover:via-yellow-400/80 hover:to-yellow-400/80 transition-all duration-300">
                    <div className="rounded-lg p-6 bg-black h-full flex flex-col">
                        <div className="flex items-start mb-4">
                        <span className="text-3xl mr-4 mt-1">❤️</span>
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold text-white mb-3">
                            Health and Wellness
                            </h3>
                            <p className="text-white/80 text-sm leading-relaxed">
                            become a better place to live and work.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>

                {/* Vibrant Company Culture - Bottom Right */}
                <div className="flex-1 p-[1px] bg-gradient-to-r from-[#FCCB90] via-[#ff99cc] to-[#D57EEB] rounded-lg hover:bg-gradient-to-r hover:from-yellow-400/80 hover:via-yellow-400/80 hover:to-yellow-400/80 transition-all duration-300">
                    <div className="rounded-lg p-6 bg-black h-full flex flex-col">
                        <div className="mb-4">
                        <h3 className="text-xl font-semibold text-white mb-3">
                            Vibrant Company Culture
                        </h3>
                        <p className="text-white/80 text-sm leading-relaxed mb-4">
                            become a better place to live and work.
                        </p>
                        <div className="w-full h-32 bg-gray-800 rounded-lg overflow-hidden">
                            <img 
                            src="/api/placeholder/300/128" 
                            alt="Team collaboration" 
                            className="w-full h-full object-cover"
                            />
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>



        



    {/* start and ending Div */}
    </div>
    
  );
}