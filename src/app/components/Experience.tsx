import { promises as fs } from "fs";

import ExperienceCard from "./experiencecard";

interface Experience {
  company: string;
  title: string;
  timerange: string;
  type: string;
  achievements: string[];
}

export default async function Experience() {
  const file = await fs.readFile(
    process.cwd() + "/src/app/public/data/experiences.json",
    "utf8"
  );
  const experiences = JSON.parse(file);

  const internships: Experience[] = experiences.experiences.filter(
    (exp: Experience) => exp.type === "internship"
  );
  const jobs: Experience[] = experiences.experiences.filter(
    (exp: Experience) => exp.type === "job"
  );
  const extracurriculars: Experience[] = experiences.experiences.filter(
    (exp: Experience) => exp.type === "extracurricular"
  );

  return (
    <div id="experience">
      <h1 className="font-bold text-4xl underline mt-8 mb-2">Experience</h1>
      <div className="flex flex-col p-5 rounded-md gap-4">
        <h2 className="text-3xl font-extrabold ">Internships</h2>
        {internships.map((exp: Experience, index: number) => (
          <ExperienceCard
            key={index}
            company={exp.company}
            title={exp.title}
            timerange={exp.timerange}
            achievements={exp.achievements}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="flex flex-col p-5 rounded-md gap-4">
          <h2 className="text-3xl font-extrabold ">Extracurriculars</h2>
          {extracurriculars.map((exp: Experience, index: number) => (
            <ExperienceCard
              key={index}
              company={exp.company}
              title={exp.title}
              timerange={exp.timerange}
              achievements={exp.achievements}
            />
          ))}
        </div>
        <div className="flex flex-col p-5 rounded-md gap-4">
          <h2 className="text-3xl font-extrabold ">Jobs</h2>
          {jobs.map((exp: Experience, index: number) => (
            <ExperienceCard
              key={index}
              company={exp.company}
              title={exp.title}
              timerange={exp.timerange}
              achievements={exp.achievements}
            />
          ))}
        </div>
      </div>
    </div> 
  );
} 
