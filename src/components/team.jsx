export default function Team() {
  const members = [
    { name: "ABHIJITH", role: "Co-Founder & Project Head", img: "/images/person.png" },
    { name: "ABHIJITH", role: "Co-Founder & Project Head", img: "/images/person.png" },
    { name: "ABHIJITH", role: "Co-Founder & Project Head", img: "/images/person.png" },
    { name: "ABHIJITH", role: "Co-Founder & Project Head", img: "/images/person.png" },
    { name: "ABHIJITH", role: "Co-Founder & Project Head", img: "/images/person.png" },
  ];

  return (
    <section className="w-full bg-zinc-800 text-white py-12">
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-normal mb-12">
          Those Who Make Up Our
          <br />
          Talented Team
        </h2>

        {/* Cards grid - 3 on top, 2 on bottom */}
        <div className="flex flex-col items-center gap-8">
          {/* Top row - 3 cards */}
          <div className="flex flex-wrap justify-center gap-6">
            {members.slice(0, 3).map((m, i) => (
              <div
                key={i}
                className="w-[200px] rounded-3xl bg-gradient-to-r from-[#755530e5] via-[#714b9485] to-[#5c1552bd] p-1"
              >
                <div className="bg-gradient-to-r from-[#755530e5] via-[#714b9485] to-[#5c1552bd] rounded-3xl p-6">
                  <div className="relative mx-auto h-32 w-32 rounded-full overflow-hidden mb-6">
                    {/* Purple radial background */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#755530e5] via-[#714b9485] to-[#5c1552bd]" />
                    <img
                      src={m.img}
                      alt={m.name}
                      className="relative z-10 h-full w-full object-cover"
                    />
                    {/* LinkedIn icon */}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 z-20 flex h-6 w-6 items-center justify-center rounded-full bg-black text-white text-xs font-bold">
                      in
                    </div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-white text-sm font-bold tracking-[0.15em] mb-1">
                      {m.name}
                    </h3>
                    <p className="text-white/90 text-xs">{m.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom row - 2 cards */}
          <div className="flex flex-wrap justify-center gap-6">
            {members.slice(3, 5).map((m, i) => (
              <div
                key={i + 3}
                className="w-[200px] rounded-3xl bg-gradient-to-br from-[#755530e5] via-[#714b9485] to-[#5c1552bd] p-1"
              >
                <div className="bg-gradient-to-br from-[#755530e5] via-[#714b9485] to-[#5c1552bd] rounded-3xl p-6">
                  <div className="relative mx-auto h-32 w-32 rounded-full overflow-hidden mb-6">
                    {/* Purple radial background */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#755530e5] via-[#714b9485] to-[#5c1552bd]" />
                    <img
                      src={m.img}
                      alt={m.name}
                      className="relative z-10 h-full w-full object-cover"
                    />
                    {/* LinkedIn icon */}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 z-20 flex h-6 w-6 items-center justify-center rounded-full bg-black text-white text-xs font-bold">
                      in
                    </div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-white text-sm font-bold tracking-[0.15em] mb-1">
                      {m.name}
                    </h3>
                    <p className="text-white/90 text-xs">{m.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
