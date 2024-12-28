"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator";
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
      <Card className="relative h-[350px]"
      >
        <CardHeader className="mb-0">
          <CardTitle >{title + " " + emoji}</CardTitle>
          <p className="italic text-gray-500">{"made in " + language.join(", ")}</p>
          {link && (
            <div className="absolute top-4 right-4">
              <a target="_blank" href={link}>
                <AiOutlineLink />
              </a>
            </div>
          )}
        </CardHeader>
        <Separator className="mb-4" />
        <CardContent className="overflow-y-auto flex-1">
          <h1>{description}</h1>
        </CardContent>
      </Card>
    </>
  );
};

export default ProjectCard;
