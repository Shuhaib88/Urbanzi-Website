const PROCESS_STEPS = [
  {
    id: 1,
    title: "Discover",
    description: "WorTired of vendors who just sell you what they know? We start by listening—learning your business and biggest pain points."
  },
  {
    id: 2,
    title: "Plan & Design",
    description: "Together, we map out what success looks like and design workflows your team will actually love using—no technical confusion."
  },
  {
    id: 3,
    title: "Development",
    description: "Our experienced engineers build your solution, with regular feedback loops—so you’re never left guessing."
  },
  {
    id: 4,
    title: "Launch & Support",
    description: "We deliver and integrate your software, provide hands-on training, and offer ongoing support and improvements as your needs grow"
  }
];

export default function OurProcessSoftDev() {
  return (
    <div className="footer_bg min-h-screen py-16">
      <div className="max-w-full w-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Our Process
          </h2>
        </div>

        {/* Process Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line - positioned slightly left of center */}
          <div className="absolute left-1/3 top-0 bottom-0 w-0.5 bg-gray-500"></div>

          {/* Process Steps */}
          <div className="space-y-16">
            {PROCESS_STEPS.map((step) => (
              <div key={step.id} className="relative flex items-center">
                {/* Timeline Circle */}
                <div className="absolute left-1/3 transform -translate-x-1/2 w-4 h-4 bg-purple-400 rounded-full border-4 border-black z-10"></div>
                
                {/* Title on the left */}
                <div className="w-1/3 pr-8 text-center">
                  <h3 className="text-[18px] sm:text-xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-white">
                    {step.title}
                  </h3>
                </div>

                {/* Description on the right */}
                <div className="w-2/3 pl-12">
                  <p className="text-white font-bold text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="mx-auto w-auto mt-20 max-w-[350px] max-h-[350px] sm:max-w-[500px] sm:max-h-[500px] md:max-w-[700px] md:max-h-[800px] lg:max-w-[900px] lg:max-h-[1000px] xl:max-w-[1400px]  xl:max-h-[1400px]
        rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-2xl xl:rounded-3xl p-[1px] 
        bg-gradient-to-r from-[#FCCB90] via-[#ff99cc] to-[#D57EEB]"
      >
        {/* Inner Card with Black Background */}
        <div className="relative h-full bg-black rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-2xl xl:rounded-3xl overflow-hidden">
          {/* Content Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#FCCB90] via-[#ff99cc] to-[#D57EEB] opacity-5 group-hover:opacity-20 transition-opacity duration-300"></div>
          
          {/* Card Content */}
          <div className="relative items-center p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 h-full flex flex-col min-h-[200px] sm:min-h-[220px] md:min-h-[280px] lg:min-h-[320px] xl:min-h-[360px]">
            <h1>
              Back A Free Work Quote
            </h1>

          </div>
        </div>
      </div>


    </div>
  );
}