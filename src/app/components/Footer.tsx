import { RxLinkedinLogo } from "react-icons/rx";
import { IoLogoGithub } from "react-icons/io";

export default function Footer() {
return (<>
<div className="flex flex-col items-center justify-center mt-2">
        <div className="flex items-center">
          <a target="_blank" href="https://www.linkedin.com/in/nathandepiero/">
            <RxLinkedinLogo size={30} />
          </a>
          <a
            target="_blank"
            href="https://www.github.com/natcasd"
            className="ml-2"
          >
            <IoLogoGithub size={30} />
          </a>
        </div>
      </div>
      <h1 className="font-mono text-center text-xs mt-2">
        Check out my{" "}
        <a
          target="_blank"
          className="underline text-blue-500"
          href="https://nathanzblog.vercel.app/"
        >
          blog
        </a>
      </h1>
      </>
);}