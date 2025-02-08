import { CutCornerButton } from "../components/CutCornerButton";
import { TextButton } from "../components/TextButton";

const listItems = [
  "Experience unparalleled security and scalability",
  "Fully benefit from scalable network effects",
  "Unlock the potential of decentralized network",
];
export const FeaturesGrid = () => {
  return (
    <section className=" py-24 ">
      <div className="container">
        <h2 className=" font-heading font-black text-4xl   ">
          Empowering the future of blockchain.
        </h2>
        <p className=" text-xl text-zinc-400 mt-8   ">
          Blockforge provides robust and infrastructure to support the next
          generation of decentralized applications.
        </p>
      </div>
      <ul className=" flex flex-col gap-8 mt-12  ">
        {listItems.map((item) => (
          <li key={item} className=" flex items-center gap-3 ">
            <div className=" inline-flex flex-shrink-0 justify-center items-center size-8 outline outline-4 -outline-offset-4 outline-fuchsia-500/10 rounded-full ">
              <div className=" size-1.5 bg-fuchsia-500 rounded-full  "></div>
            </div>
            <span className="text-xl font-bold   ">{item}</span>
          </li>
        ))}
        
      </ul>
      <div className=" flex gap-8 mt-12  ">
        <CutCornerButton>Get Started</CutCornerButton>
        <TextButton>Learn More</TextButton>
      </div>
    </section>
  );
};
