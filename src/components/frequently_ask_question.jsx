"use client"
import React, { useState } from 'react';

const FAQ_DATA = [
  {
    id: 1,
    question: "I don't know anything about websites. Can you guide me?",
    answer: "Definitely! We love helping beginners—and we manage all the technical stuff so you can focus on your business.",
    isOpen: true
  },
  {
    id: 2,
    question: "Can you update my old website?",
    answer: "Yes! We can redesign and modernize your existing website with fresh design, better functionality, and improved performance to meet current standards.",
    isOpen: false
  },
  {
    id: 3,
    question: "Will my website work on mobile phones and tablets?",
    answer: "Absolutely! All our websites are fully responsive and optimized for mobile devices, tablets, and desktops to ensure a great user experience across all platforms.",
    isOpen: false
  },
  {
    id: 4,
    question: "How long does it take to build a website?",
    answer: "Typically 2-6 weeks depending on the complexity and features required. We'll provide a detailed timeline during our initial consultation based on your specific needs.",
    isOpen: false
  },
  {
    id: 5,
    question: "Is there ongoing support?",
    answer: "Yes! We provide ongoing support including regular updates, security monitoring, backups, and technical assistance to keep your website running smoothly.",
    isOpen: false
  }
];

export default function FrequentlyAskQuestion() {
  const [faqs, setFaqs] = useState(FAQ_DATA);

  const toggleFaq = (id) => {
    setFaqs(faqs.map(faq => 
      faq.id === id ? { ...faq, isOpen: !faq.isOpen } : faq
    ));
  };

  return (
    <div className="bg-black py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section with Dotted Border */}
        <div className="mb-8">
          <div className="text-center">
            <div className="text-center ">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#d4af81] via-[#ff99cc] to-[#D57EEB] bg-clip-text text-transparent leading-tight">
                    Frequently Asked Questions (FAQ)
                </h1>
            </div>
            <p className="text-gray-400 text-lg">
              Everything you need to know about the product and billing.
            </p>
          </div>
        </div>

        {/* FAQ Section with Dotted Border */}
        <div className="p-6">
          <div className="space-y-1">
            {faqs.map((faq, index) => (
              <div key={faq.id}>
                <div 
                  className="flex items-center justify-between py-4 cursor-pointer hover:bg-gray-900/30 px-2 rounded"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <h3 className="text-white text-lg font-medium flex-1">
                    {faq.question}
                  </h3>
                  <div className="ml-4">
                    <div className={`w-8 h-8 rounded-full border-2 border-purple-400 flex items-center justify-center transition-transform duration-200 ${faq.isOpen ? 'rotate-45' : ''}`}>
                      <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {faq.isOpen && (
                  <div className="px-2 pb-4">
                    <p className="text-gray-300 text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
                
                {index < faqs.length - 1 && (
                  <div className="border-b border-gray-700"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}