export default function OurValues() {
  const values = [
    {
      icon: "⚙️",
      title: "Innovation",
      description: "At Vibefy, we embrace a culture of continuous innovation. Our mission is to push the boundaries, explore new frontiers, and challenge the status quo by testing our limits and thinking outside the box."
    },
    {
      icon: "🤝",
      title: "Collaboration", 
      description: "At Vibefy, we embrace a culture of continuous innovation. Our mission is to push the boundaries, explore new frontiers, and challenge the status quo by testing our limits and thinking outside the box."
    },
    {
      icon: "👤",
      title: "Customer Focus",
      description: "At Vibefy, we embrace a culture of continuous innovation. Our mission is to push the boundaries, explore new frontiers, and challenge the status quo by testing our limits and thinking outside the box."
    },
    {
      icon: "⭐",
      title: "Excellence",
      description: "At Vibefy, we embrace a culture of continuous innovation. Our mission is to push the boundaries, explore new frontiers, and challenge the status quo by testing our limits and thinking outside the box."
    },
    {
      icon: "🤝",
      title: "Respect",
      description: "At Vibefy, we embrace a culture of continuous innovation. Our mission is to push the boundaries, explore new frontiers, and challenge the status quo by testing our limits and thinking outside the box."
    }
  ];

  return (
    <div className="w-full bg-black text-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 lg:mb-0">
            Our Value
          </h2>
            <p className="text-white/90 text-[30px] max-w-md lg:text-left">
              We are committed to making money management accessible for everyone, 
              regardless of financial background.
            </p>
        </div>

        {/* Values Grid - 2 on first row, 3 on second row */}
        <div className="flex flex-col gap-6">
          {/* First Row - 2 cards */}
          <div className="flex flex-col md:flex-row justify-center gap-6 ">
            {values.slice(0, 2).map((value, index) => (
            <div key={index} className="flex-1 max-w-md p-[1px] bg-gradient-to-r from-[#FCCB90] via-[#ff99cc] to-[#D57EEB] rounded-lg hover:bg-gradient-to-r hover:from-yellow-400/80 hover:via-yellow-400/80 hover:to-yellow-400/80">
              <div className="rounded-lg bg-black h-full">
                <div className="flex items-center mb-4 p-4 sm:p-6">
                  <span className="text-2xl mr-3">{value.icon}</span>
                  <div className="relative w-full">
                    <h3 className="text-xl font-semibold relative after:content-[''] after:block after:w-full after:h-0.5 after:bg-white/30 after:mt-2">
                      {value.title}
                    </h3>
                  </div>
                </div>
                <p className="text-white/80 text-sm leading-relaxed px-4 sm:px-6 pb-4 sm:pb-6">
                  {value.description}
                </p>
              </div>
            </div>

            ))}
          </div>

          {/* Second Row - 3 cards */}
          <div className="flex flex-col md:flex-row justify-center gap-6">
            {values.slice(2, 5).map((value, index) => (
            <div key={index + 2} className="flex-1 max-w-md sm:max-w-md md:max-w-xs lg:max-w-xs xl:max-w-xs p-[1px] bg-gradient-to-r from-[#FCCB90] via-[#ff99cc] to-[#D57EEB] rounded-lg hover:bg-gradient-to-r hover:from-yellow-400/80 hover:via-yellow-400/80 hover:to-yellow-400/80">
              <div className="rounded-lg p-6 bg-black h-full">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{value.icon}</span>
                  <div className="relative w-full">
                    <h3 className="text-xl font-semibold relative after:content-[''] after:block after:w-full after:h-0.5 after:bg-white/30 after:mt-2">
                      {value.title}
                    </h3>
                  </div>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10 max-w-[350px] sm:max-w-[700px] md:max-w-[725px] lg:max-w-4xl xl:max-w-5xl mx-auto w-auto">
      <img 
        src="/images/image1.png" 
        alt="" 
        className="w-15 sm:w-20 md:w-30 lg:w-40 xl:w-50 h-10 sm:h-15 md:h-15 lg:h-15 xl:h-15"
      />
      <img 
        src="/images/image2.png" 
        alt="" 
        className="w-15 sm:w-20 md:w-30 lg:w-40 xl:w-50 h-10 sm:h-15 md:h-15 lg:h-15 xl:h-15"
      />
      <img 
        src="/images/image3.png" 
        alt="" 
        className="w-15 sm:w-20 md:w-30 lg:w-40 xl:w-50 h-10 sm:h-15 md:h-15 lg:h-15 xl:h-15"
      />
      <img 
        src="/images/image4.png" 
        alt="" 
        className="w-15 sm:w-20 md:w-30 lg:w-40 xl:w-50 h-10 sm:h-15 md:h-15 lg:h-15 xl:h-15"
      />
      <img 
        src="/images/image5.png" 
        alt="" 
        className="w-15 sm:w-20 md:w-30 lg:w-40 xl:w-50 h-10 sm:h-15 md:h-15 lg:h-15 xl:h-15"
      />
    </div>
    </div>
  );
}
