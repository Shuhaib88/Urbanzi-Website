const PROCESS_STEPS = [
  {
    id: 1,
    title: "Discover",
    description: "We sit down with you—virtually or in person—to listen, understand your challenges, and learn about your audience and goals."
  },
  {
    id: 2,
    title: "Design",
    description: "Our creative team crafts stylish, easy-to-use layouts, previewing the look and feel before anything goes live."
  },
  {
    id: 3,
    title: "Development",
    description: "We bring your website to life with secure coding and the latest technology—keeping things running fast and mobile-friendly."
  },
  {
    id: 4,
    title: "Launch & Support",
    description: "Go live worry-free! We handle the details, train you on updates (if you want), and remain by your side for maintenance and new ideas."
  }
];

export default function OurProcess() {
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
                  <p className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}