import { promises as fs } from "fs";

import ProjectCard from "./projectcard";

export default async function Projects() {
  const file = await fs.readFile(
    process.cwd() + "/public/data/projects.json",
    "utf8"
  );
  const projects = JSON.parse(file);
  const projectsArr: JSX.Element[] = [];
  projects.projects.forEach(
    (
      item: {
        title: string;
        language: string[];
        description: string;
        link?: string;
        emoji: string;
      },
      index: number
    ) => {
      projectsArr.push(
        <ProjectCard
          key={index}
          title={item.title}
          language={item.language}
          description={item.description}
          link={item.link}
          emoji={item.emoji}
        ></ProjectCard>
      );
    }
  );
  return (
    <div id="projects" className="scroll-mt-12">
    <h1 className="font-bold text-4xl underline mt-8 mb-4">Projects</h1>
    <div className=" mx-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {projectsArr}
    </div>
    </div>
  );
}
