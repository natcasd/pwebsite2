import { promises as fs } from "fs";

import ProjectCard from "./projectcard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default async function Projects() {
  const file = await fs.readFile(
    process.cwd() + "/src/app/public/data/projects.json",
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
        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
          <ProjectCard
            title={item.title}
            language={item.language}
            description={item.description}
            link={item.link}
            emoji={item.emoji}
          />
          </div>
        </CarouselItem>
      );
    }
  );
  return (
    <div id="projects" className="scroll-mt-20">
    <h1 className="font-bold text-4xl underline mt-8 mb-2">Projects</h1>
    <Carousel
      opts={{
        align: "center",
      }}
    >
      <CarouselContent>
        {projectsArr}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  );
}