export default function OurMission() {
  return (
    
    <div className="bg-black">
      <div className="bg-black h-10 sm:h-12 md:h-15 lg:h-20 xl:h-22"></div>
      <div className="ml-5 sm:10 md:ml-20 lg:ml-40 xl:ml-60 sm:max-w-2xl md:max-w-2xl lg:max-w-3xl xl:max-w-6xl w-auto">
      <div className="text-4xl font-bold">
        <h1 className="">Our Mission</h1>
      </div>

      <div className="mt-5 flex flex-col items-end gap-10">
        {/* Second h1 aligned to the right */}
        <div className="mt-10 text-[14px] sm:text-[20px] md:text-[20px] lg:text-xl xl:text-xl font-semibold">
          <h1 className="">
            At Vibely, our mission is to revolutionize the way <br />
            individuals and businesses manage their finances by <br />
            combining intelligent design, cutting-edge technology, <br />
            and a user-first mindset. We believe that financial <br />
            management should not be overwhelming or complicated—it <br />
            should be empowering, seamless, and secure. <br />
          </h1>
        </div>

        <div className="mt-5">
          {/* Use Tailwind classes for size */}
          <img
            src="/images/4e91f9dca0eb1cf3ccddfa23af4d0f9edcb2c2f6.png"
            alt=""
            className="w-115 h-50 sm:w-150 sm:h-100 md:w-150 md:h-100 lg:w-100 xl:w-150 object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
    </div>
    
  );
}
