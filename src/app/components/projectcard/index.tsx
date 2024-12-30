"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge"
import React from "react";

import { AiOutlineLink } from "react-icons/ai";


interface ProjectCardProps {
  title: string;
  language: string[];
  description: string;
  link?: string;
  emoji: string;
}

type BadgeVariant = "yellow" | "blue" | "green" | "red" | "purple" | "pink" | "violet" | "orange" | "teal" | "default";

function getColorForLanguage(language: string): BadgeVariant {
  const languageColors: { [key: string]: BadgeVariant } = {
    javaScript: "yellow",
    TypeScript: "blue",
    python: "green",
    Java: "red",
    CSharp: "purple",
    Ruby: "pink",
    PHP: "violet",
    Swift: "orange",
    Go: "teal",
    // Add more languages and their corresponding colors as needed
  };

  // Return the color for the language, or a default color if not found
  return languageColors[language] || "default";
}

const ProjectCard = (props: ProjectCardProps) => {
  const { title, language, description, link, emoji } = props;

  return (
    <>
      <Card className="relative md:h-[315px] h-[405px]"
      >
        {/* <CardHeader> */}
          <CardTitle className="text-xl mt-4 mx-6">{title + " " + emoji}</CardTitle>
          <div className="flex space-x-2 mt-2">
            <div className="mx-4 flex flex-wrap space-x-2 mt-2">
              {language.map((lang, index) => (
                <Badge key={index} variant="outline" className="mb-2">{lang}</Badge>
              ))}
            </div>
          </div>
          {link && (
            <div className="absolute top-4 right-4">
              <a target="_blank" href={link}>
                <AiOutlineLink />
              </a>
            </div>
          )}
        {/* </CardHeader> */}
    <Separator/> 
        <CardContent className="overflow-y-auto flex-1 mt-4">
          <h1>{description}</h1>
        </CardContent>
      </Card>
    </>
  );
};

export default ProjectCard;
