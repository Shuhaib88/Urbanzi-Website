import React from 'react';

const ClientReviews = () => {
  const reviews = Array(9).fill({
    text: "The design made our website look like it was built by a top-tier design agency. Plus, the customization options are endless. Highly recommend!",
    author: "Nicolas Puranix",
    role: "Business owner"
  });

  return (
    <div className=" min-h-screen p-6">
      {/* Header */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center gap-3">
            <div className="flex flex-col">
                {/* Three Stars */}
                <div className="flex items-center gap-1">
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                </div>

                {/* User Icon and Menu */}
                <div className="flex items-center gap-2 ml-4">
                    {/* User Icon */}
                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                    </div>
                    
                    {/* Hamburger Menu */}
                    <div className="flex flex-col gap-1">
                    <div className="w-4 h-0.5 bg-white"></div>
                    <div className="w-4 h-0.5 bg-white"></div>
                    <div className="w-4 h-0.5 bg-white"></div>s
                    </div>
                </div>
            </div>
            
          <h1 className="text-white text-2xl md:text-3xl font-bold">Our Client Reviews</h1>
          
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-black border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors">
              {/* Quote Icon */}
              <div className="mb-4">
                <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>

              {/* Review Text */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {review.text}
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                
                {/* Name and Role */}
                <div>
                  <h3 className="text-white font-medium">{review.author}</h3>
                  <p className="text-gray-400 text-sm">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientReviews;