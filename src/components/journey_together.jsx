export default function JourneyTogether() {
  return (
    <div>
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Let's Go On An Innovation
        </h1>
        <div className="flex justify-center">
        <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold mt-4 sm:mt-6 lg:mt-10 bg-gradient-to-r from-[#ffcc99] via-[#ff99cc] to-[#cc99ff] bg-clip-text text-transparent text-center leading-tight">
          Journey Together
        </h1>
      </div>

      <div className="flex justify-center">
        <h1 className="text-[10px] sm:text-2xl md:text-2xl font-bold mt-4 sm:mt-6 lg:mt-10 text-center leading-tight">
          At Vibely, we’re redefining how people manage money. <br></br>
          Our mission is to empower businesses with smart tools.
        </h1>
      </div>

      <div className="w-auto flex justify-center py-10">
        <div className="grid grid-cols-3 gap-5 ">
          {/* 1st image - tilted right */}
          <div className="relative [perspective:1000px]">
            <img
              src="/images/dc57fe8b746f56feeb9d61e107ebd69fd9fe3c07.png"
              alt="First"
              // className="w-64 h-96 object-cover rounded-xl shadow-lg transform rotate-3 transition-transform duration-300 hover:-translate-y-1"
              className="sm:w-56 md:w-60 lg:w-72 xl:w-80 lg:h-72 xl:h-96 object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-2 [transform:rotatey(20deg)]"
              // className="w-80 h-96 object-cover rounded-2xl shadow-lg transition-transform duration-300 will-change-transform transform-gpu backface-hidden [transform-style:preserve-3d] rotate-y-[-18deg] hover:-translate-y-1"
            />
            {/* Optional subtle border/glow */}
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10" />
          </div>

          {/* 2nd image - straight */}
          <div className="relative">
            <img
              src="/images/7d504615f95e4e0b7d9f2fbb753ff4fea2388810.png"
              alt="Second"
              className="sm:w-56 md:w-60 lg:w-72 xl:w-80 lg:h-72 xl:h-96 object-cover rounded-xl shadow-lg transform transition-transform duration-300 hover:-translate-y-2"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10" />
          </div>

          {/* 3rd image - tilted left */}
          <div className="relative [perspective:1000px]">
            <img
              src="/images/a9d6082a2eefbec6b11169313040edef2b10e5f8.png"
              alt="Third"
              className="sm:w-56 md:w-60 lg:w-72 xl:w-80 lg:h-72 xl:h-96 object-cover rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2 [transform:rotateY(-20deg)]"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10" />
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <h1 className="text-[10px] sm:text-2xl md:text-2xl font-bold mt-4 sm:mt-6 lg:mt-10 text-center leading-tight">
          By transforming the way people interact with their finances, <br></br>
          We aim to make a positive impact on the world.
        </h1>
      </div>

      <div className="flex justify-center sm:gap-10 md:gap-15 lg:gap-20 xl:gap-40">
        <h1 className=" font-bold mt-4 sm:mt-6 l5:mt-10 text-center leading-tight">
          <div className="text-[15px] sm:text-[25px] md:text-[35px]">100%</div>
          <div className="text-[10px] sm:text-[10px] md:text-[13px]">Customer Satisfaction</div>
        </h1>
        <h1 className=" font-bold mt-4 sm:mt-6 lg:mt-10 text-center leading-tight">
          <div className="text-[15px] sm:text-[25px] md:text-[35px]">100%</div>
          <div className="text-[10px] sm:text-[10px] md:text-[13px]">Customer Satisfaction</div>
        </h1>
        <h1 className=" font-bold mt-4 sm:mt-6 lg:mt-10 text-center leading-tight">
          <div className="text-[15px] sm:text-[25px] md:text-[35px]">100%</div>
          <div className="text-[10px] sm:text-[10px] md:text-[13px]">Customer Satisfaction</div>
        </h1>
        <h1 className=" font-bold mt-4 sm:mt-6 lg:mt-10 text-center leading-tight">
          <div className="text-[15px] sm:text-[25px] md:text-[35px]">100%</div>
          <div className="text-[10px] sm:text-[10px] md:text-[13px]">Customer Satisfaction</div>
        </h1>
      </div>
        
      </div>
    </div>
  );
}