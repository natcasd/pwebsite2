"use client";
import {
  Card,
  CardContent,
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
