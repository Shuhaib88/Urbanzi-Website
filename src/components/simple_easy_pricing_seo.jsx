import React from 'react';

const PricingComponent = () => {
  const plans = [
    {
      id: 1,
      name: "Personal",
      price: 19,
      description: "All the basic features to boost your freelance career",
      features: [
        "Full Access to Landingfolio",
        "100 GB Free Storage", 
        "Unlimited Visitors",
        "10 Agents",
        "Live Chat Support"
      ],
      buttonText: "Get 14 Days Free Trial",
      buttonStyle: "border-2 border-gray-600 text-white hover:bg-gradient-to-r hover:from-orange-400 hover:to-pink-500 hover:border-transparent",
      popular: false
    },
    {
      id: 2,
      name: "Professional", 
      price: 49,
      description: "All the basic features to boost your freelance career",
      features: [
        "Full Access to Landingfolio",
        "100 GB Free Storage",
        "Unlimited Visitors", 
        "10 Agents",
        "Live Chat Support"
      ],
      buttonText: "Get 14 Days Free Trial",
      buttonStyle: "border-2 border-gray-600 text-white hover:bg-gradient-to-r hover:from-orange-400 hover:to-pink-500 hover:border-transparent",
      popular: true
    },
    {
      id: 3,
      name: "Business",
      price: 99, 
      description: "All the basic features to boost your freelance career",
      features: [
        "Full Access to Landingfolio",
        "100 GB Free Storage",
        "Unlimited Visitors",
        "10 Agents", 
        "Live Chat Support"
      ],
      buttonText: "Get 14 Days Free Trial",
      buttonStyle: "border-2 border-gray-600 text-white hover:bg-gradient-to-r hover:from-orange-400 hover:to-pink-500 hover:border-transparent",
      popular: false
    }
  ];

  return (
    <div className=" bg-black py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Simple, easy pricing
          </h1>
          <p className="text-sm sm:text-base text-gray-400">
            price details
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* First two cards */}
          {plans.slice(0, 2).map((plan) => (
            <div
              key={plan.id}
              className="relative group transition-all duration-300 hover:scale-105 bg-transparent hover:bg-gradient-to-r hover:from-orange-400 hover:to-pink-500 rounded-xl sm:rounded-2xl p-[2px]"
            >
              {/* Card content with black background */}
              <div className="bg-[#262425] rounded-xl sm:rounded-2xl p-6 sm:p-8">
                {/* Plan Name */}
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-base sm:text-lg font-medium text-gray-300">
                    {plan.name}
                  </h3>
                </div>

                {/* Price */}
                <div className="mb-4 sm:mb-6">
                  <div className="flex items-baseline">
                    <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                      ${plan.price}
                    </span>
                    <span className="text-sm sm:text-base text-gray-400 ml-2">
                      /month
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-400 mb-6 sm:mb-8 leading-relaxed">
                  {plan.description}
                </p>

                {/* Features */}
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full mr-3 flex-shrink-0 flex items-center justify-center">
                          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white rounded-full transform rotate-45"></div>
                        </div>
                        <span className="text-xs sm:text-sm text-gray-300">
                          {feature}
                        </span>
                      </div>
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">i</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-medium text-sm sm:text-base transition-all duration-300 transform hover:scale-105 ${plan.buttonStyle}`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
          
          {/* Third card - centered on md screens */}
          <div className="md:col-span-2 lg:col-span-1 flex justify-center">
            <div className="w-full md:max-w-sm lg:max-w-none">
              {plans.slice(2, 3).map((plan) => (
                <div
                  key={plan.id}
                  className="relative group transition-all duration-300 hover:scale-105 bg-transparent hover:bg-gradient-to-r hover:from-orange-400 hover:to-pink-500 rounded-xl sm:rounded-2xl p-[2px]"
                >
                  {/* Card content with black background */}
                  <div className="bg-[#262425] rounded-xl sm:rounded-2xl p-6 sm:p-8">
                    {/* Plan Name */}
                    <div className="mb-4 sm:mb-6">
                      <h3 className="text-base sm:text-lg font-medium text-gray-300">
                        {plan.name}
                      </h3>
                    </div>

                    {/* Price */}
                    <div className="mb-4 sm:mb-6">
                      <div className="flex items-baseline">
                        <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                          ${plan.price}
                        </span>
                        <span className="text-sm sm:text-base text-gray-400 ml-2">
                          /month
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-gray-400 mb-6 sm:mb-8 leading-relaxed">
                      {plan.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full mr-3 flex-shrink-0 flex items-center justify-center">
                              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white rounded-full transform rotate-45"></div>
                            </div>
                            <span className="text-xs sm:text-sm text-gray-300">
                              {feature}
                            </span>
                          </div>
                          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-xs font-bold">i</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button
                      className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-medium text-sm sm:text-base transition-all duration-300 transform hover:scale-105 ${plan.buttonStyle}`}
                    >
                      {plan.buttonText}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;