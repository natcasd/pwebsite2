import Image from "next/image";
import profile from "../public/images/profile.png"; // Adjust the path as needed
import { getGreeting } from "../utils/getGreeting";

export default function Hero() {
  const greeting = getGreeting()
  return (
      <div id="about" className="scroll-mt-20 flex justify-center items-center h-full w-full space-x-3">

        <Image
          src={profile}
          alt="profile pic"
          className="w-1/3 h-1/3 md:w-1/4 md:h-1/4 object-cover object-center rounded-lg"
        />
        <div className="flex flex-col leading-none">
          <h1 className="text-[6vw] sm:text-[4vw] italic">{greeting}!</h1>
          <h1 className="text-[10vw] lg:text-[7vw] sm:text-[7vw] xs:text-[5vw] font-bold">
            I'm <span className="underline">Nathan</span>.
          </h1>
        </div>
      </div>
  );
}