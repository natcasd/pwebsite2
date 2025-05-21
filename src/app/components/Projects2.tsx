import { promises as fs } from "fs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default async function Projects() {
  const file = await fs.readFile(
    process.cwd() + "/public/data/projects.json",
    "utf8"
  );
  const projects = JSON.parse(file);
  
  return (
    <div id="projects" className="scroll-mt-20">
      <h1 className="font-bold text-4xl underline mt-8 mb-2">Projects</h1>
      <div>
        <Accordion type="single" collapsible className="w-full space-y-2">
          {projects.projects.map((item: {
            title: string;
            language: string[];
            description: string;
            link?: string;
            emoji: string;
          }, index: number) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg bg-background/50 backdrop-blur-sm hover:bg-muted/50 transition-colors">
              <AccordionTrigger className="text-3xl font-semibold px-4 no-underline hover:no-underline">
                <div className="flex items-center gap-2">
                  <span className="text-4xl">{item.emoji}</span>
                  <span>{item.title}</span>
                  <div className="hidden md:flex flex-wrap gap-1 ml-2">
                    {item.language.map((lang, langIndex) => (
                      <span
                        key={langIndex}
                        className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded-md text-sm"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 px-6">
                  <p className="text-muted-foreground text-lg">{item.description}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-block text-lg"
                    >
                      View Project →
                    </a>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}