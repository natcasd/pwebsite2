import { RxLinkedinLogo } from "react-icons/rx";
import { IoLogoGithub } from "react-icons/io";

export default async function Footer() {
  let commitTimestamp = null;
  const sha = process.env.VERCEL_GIT_COMMIT_SHA || "ex";
  const apiUrl = `https://api.github.com/repos/natcasd/pwebsite2/commits/${sha}`;

  try {
    const response = await fetch(apiUrl);
    if (response.ok) {
      const commitData = await response.json();
      commitTimestamp = commitData.commit.author.date || null;
    }
  } catch (error) {
    console.error("Failed to fetch commit details:", error);
  }

return (<>
<div className="flex flex-col items-center space-y-2">
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
<div>Last updated with commit @<a className="text-gray-500 underline underline-offset-2 hover:text-black hover:underline" href={`https://github.com/natcasd/pwebsite2/tree/${sha}`}>{sha.slice(0,7)}</a> on <time>{commitTimestamp ? new Date(commitTimestamp).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'unknown date'}</time>.</div>
      </div>
      {/* <h1 className="font-mono text-center text-xs mt-2">
        Check out my{" "}
        <a
          target="_blank"
          className="underline text-blue-500"
          href="https://nathanzblog.vercel.app/"
        >
          blog
        </a>
      </h1> */}
      </>
);}