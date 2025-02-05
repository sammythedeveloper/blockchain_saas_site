export const FeaturesCardsSections = () => {
  return (
    <section className=" py-24 ">
      <div className=" container ">
        <h2 className=" font-heading font-black text-4xl">
          Discover the future of blockchain with BlockForge.
        </h2>
        <div>
          <div className="relative z-0 ">
            <div className=" absolute size-16 rounded-xl bg-fuchsia-500 top-1.5 right-1.5 -z-10"></div>
            <div className=" absolute inset-0 bg-zinc-800 -z-10 rounded-2xl [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)]  "></div>
            <img src="/assets/images/pill.png" alt="Pill" />
            <h3>Revolutionary Blockchain API</h3>
            <p>
              Effortlessly integrate and manage blockchain data with cutting age
              API ,designed for seamless connectivity
            </p>
            <div className=" flex">
              <button>Learn More</button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className=" flex justify-center ">
          <div className="bg-zinc-950 inline-flex gap-4 p-2.5 rounded-full">
            {[...new Array(4)].fill(0).map((_, i) => (
              <div
                key={i}
                className=" size-2.5 bg-zinc-500 rounded-full cursor-pointer"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
