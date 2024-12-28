import Image from "next/image";
import profile from "../public/images/profile.png"; // Adjust the path as needed

export default function About() {
  return (
    <>
    <h1 className="font-bold text-4xl underline mt-8 mb-2">About</h1>
    <div className="flex flex-col justify-center h-full w-full text-left">

        <p className="text-sm sm:text-base md:text-lg border-black rounded-lg mb-4">
          I am a graduate student at <a href="https://www.brown.edu/" className="text-gray-500 underline underline-offset-2 hover:text-black hover:underline">Brown University</a> pursuing an Sc.M. in Computer Science.
        </p>
        <p className="text-sm sm:text-base md:text-lg border-black rounded-lg mb-4">
          In my past, I have worked at <a href="https://inmtel.com/" className="text-gray-500 underline underline-offset-2 hover:text-black hover:underline">INMTEL</a> as a data engineering intern,&nbsp;
          <a href="https://www.1010data.com" className="text-gray-500 underline underline-offset-2 hover:text-black hover:underline">1010data</a> as a data quality intern, and at a proprietary trading firm as an analyst.
        </p>
        <p className="text-sm sm:text-base md:text-lg border-black rounded-lg mb-4">
          Through these experiences and my coursework I have realized my love of working with data, especially in the realm of artificial intelligence. 
          I am excited about the endless applications it has to make the world more efficient.
        </p>
        <p className="text-sm sm:text-base md:text-lg border-black rounded-lg mb-4">
          I also have a lot of fun playing around with frontend work.
        </p>
        <p className="text-sm sm:text-base md:text-lg border-black rounded-lg mb-4">
          In my free time, I love to research food and <a href="https://nathanzblog.vercel.app/" className="text-gray-500 underline underline-offset-2 hover:text-black hover:underline">write</a> about it, as well as play tennis and soccer (recreationally).
        </p>
        <p className="text-sm sm:text-base md:text-lg border-black rounded-lg mb-4">
          I am currently looking for full-time opportunities as a data analyst or software engineer.
        </p>

      </div>
      </>
    
  );
}
  