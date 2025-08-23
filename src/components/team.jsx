'use client'
import { useState, useEffect, useRef } from 'react';

export default function Team() {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  const members = [
    { name: "GOVARDHAN", role: "Co-Founder \n Project Head \n \n \n", img: "/images/govardhan.webp", linkedin: "http://linkedin.com/in/govardhan-m-r-275b68260" },
    { name: "ABHIJITH", role: "Co-Founder \n Project Manager (Operations Lead) \n \n", img: "/images/person.png", linkedin: "http://linkedin.com/in/abhijith-j-d-b774b4264" },
    { name: "ABHISHEK", role: "Co-Founder \n Design Head \n \n \n", img: "/images/abhishek.jpg", linkedin: "http://linkedin.com/in/abhishek-vs-394833279" },
    { name: "SHUHAIB", role: "Founding Member \n Project Development Head \n \n \n", img: "/images/person.png", linkedin: "https://www.linkedin.com/in/muhammed-shuhaib-63b709227/" },
    { name: "ANOOP", role: "Co-Founder \n Partner \n \n \n", img: "/images/annop.webp", linkedin: "" },
    { name: "SAJIN", role: "Co-Founder \n Partner \n \n \n", img: "/images/sajin.webp", linkedin: "http://linkedin.com/in/sajin-sanilkumar-268333213" },
    { name: "ABHIRAM", role: "Founding Member \n Designer \n \n \n", img: "/images/person.png", linkedin: "http://linkedin.com/in/abhiram-sidhu-816aab223" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            
            // Add staggered delay for each card
            setTimeout(() => {
              setVisibleCards(prev => new Set([...prev, index]));
            }, index * 150); // 150ms delay between each card
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    // Observe all card elements
    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const renderCard = (member, index) => (
    <div
      key={index}
      ref={el => cardRefs.current[index] = el}
      data-index={index}
      className={`w-[200px] rounded-3xl bg-gradient-to-r from-[#755530e5] via-[#714b9485] to-[#5c1552bd] p-1 transform transition-all duration-700 ease-out ${
        visibleCards.has(index) 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-8 scale-95'
      }`}
      style={{
        transitionDelay: visibleCards.has(index) ? '0ms' : '0ms'
      }}
    >
      <div className="bg-gradient-to-r from-[#755530e5] via-[#714b9485] to-[#5c1552bd] rounded-3xl p-6">
        <div 
          className="relative mx-auto h-32 w-32 rounded-full overflow-hidden mb-6 cursor-pointer hover:scale-105 transition-transform duration-200 group"
          onClick={() => window.open(member.linkedin, '_blank', 'noopener,noreferrer')}
        >
          {/* Purple radial background */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#755530e5] via-[#714b9485] to-[#5c1552bd]" />
          <img
            src={member.img}
            alt={member.name}
            className="relative z-10 h-full w-full object-cover group-hover:brightness-110 transition-all duration-200"
          />
          {/* LinkedIn icon */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 z-20 flex h-6 w-6 items-center justify-center rounded-full bg-black text-white text-xs font-bold group-hover:bg-blue-600 transition-colors duration-200">
            in
          </div>
          {/* Hover overlay */}
          <div className="absolute inset-0 rounded-full bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center">
            <span className="text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-semibold">
              View Profile
            </span>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-white text-sm font-bold tracking-[0.15em] mb-1">
            {member.name}
          </h3>
          <p className="text-white/90 text-xs" style={{ whiteSpace: "pre-line" }}>
            {member.role}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} className="w-full bg-zinc-800 text-white py-12">
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-normal mb-12">
          Those Who Make Up Our
          <br />
          Talented Team
        </h2>

        {/* Cards grid - 4 on top, 3 on bottom */}
        <div className="flex flex-col items-center gap-8">
          {/* Top row - 4 cards */}
          <div className="flex flex-wrap justify-center gap-6">
            {members.slice(0, 4).map((member, index) => renderCard(member, index))}
          </div>

          {/* Bottom row - 3 cards */}
          <div className="flex flex-wrap justify-center gap-6">
            {members.slice(4, 7).map((member, index) => renderCard(member, index + 4))}
          </div>
        </div>
      </div>
    </section>
  );
}