import { CutCornerButton } from "../components/CutCornerButton";
import { TextButton } from "../components/TextButton";

const listItems = [
  "Experience unparalleled security and scalability",
  "Fully benefit from scalable network effects",
  "Unlock the potential of decentralized network",
];
export const FeaturesGrid = () => {
  return (
    <section className=" py-24 overflow-clip ">
      <div className="container">
        <div className=" flex flex-col gap-56 md:gap-48 lg:gap-80 ">
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className=" col-span-2">
              <h2 className=" font-heading font-black text-4xl md:text-5xl lg:text-6xl ">
                Empowering the future of blockchain.
              </h2>
              <p className=" text-xl text-zinc-400 mt-8">
                Blockforge provides robust and infrastructure to support the
                next generation of decentralized applications.
              </p>
              <ul className=" flex flex-col gap-8 mt-12  ">
                {listItems.map((item) => (
                  <li key={item} className=" flex items-center gap-3 ">
                    <div className=" inline-flex flex-shrink-0 justify-center items-center size-8 outline outline-4 -outline-offset-4 outline-fuchsia-500/10 rounded-full ">
                      <div className=" size-1.5 bg-fuchsia-500 rounded-full  "></div>
                    </div>
                    <span className="text-xl font-bold ">{item}</span>
                  </li>
                ))}
              </ul>
              <div className=" flex gap-8 mt-12  ">
                <CutCornerButton>Get Started</CutCornerButton>
                <TextButton>Learn More</TextButton>
              </div>
            </div>
            <div className=" hidden md:block" >
              <div className=" relative inline-flex z-0 ">
                <img
                  src="/assets/images/torus-knot.png"
                  alt="Torus Knot 3D image"
                  className=" size-96 max-w-none"
                />
                <img
                  src="/assets/images/hemisphere.png"
                  alt="Hemisphere 3d shape"
                  className=" absolute size-96 top-3/4 -z-10 scale-x-[-1]"
                />
              </div>
            </div>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 ">
            <div className=" hidden md:block relative ">
              <div className="absolute right-0  ">
                <img
                  src="/assets/images/cone.png"
                  alt="Cone 3D"
                  className=" size-96 max-w-none z-0 rotate-12  "
                />
                <img
                  src="/assets/images/hemisphere.png"
                  alt="Hemisphere 3D"
                  className=" absolute top-3/4 -z-10 left-0 "
                />
              </div>
            </div>
            <div className=" col-span-2 ">
              <h2 className="font-heading font-black text-4xl md:text-5xl ">
                Blockforge leads the way.
              </h2>
              <div className=" flex flex-col text-xl lg:text-2xl text-zinc-400 mt-6 gap-6">
                <p>
                  Blockforge is dedicated to supporting the evolution of the
                  web3 applications by delivering the necessary infrastructre
                  and security for web3.
                </p>
                <p>
                  Blockforge champions web3 for everyone. As a decentralized
                  blockchain scaling platform, Blockforge enables developers to
                  create scalable ,user-friendly apps with low transaction
                  costs, all wjile ensuring robust security.
                </p>
              </div>
              <div className=" flex gap-8 mt-12 ">
                <CutCornerButton>Get Started</CutCornerButton>
                <TextButton>Learn More</TextButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
