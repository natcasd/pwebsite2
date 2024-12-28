import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Separator } from "@/components/ui/separator";


interface ExperienceCardProps {
  company: string;
  title: string;
  timerange: string;
  achievements: string[];
}

const ExperienceCard = (props: ExperienceCardProps) => {
  const { company, title, timerange, achievements } = props;
  return (
    <>
      <Card className="transition-shadow duration-200 ease-in-out hover:shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg">{company}</CardTitle>
          <CardTitle className="text-sm">{title}</CardTitle>
          <i>{timerange}</i>
        </CardHeader>
        <Separator />
        <CardContent>
          <ul className="list-disc pl-5">
            {achievements.map((item, index) => (
              <li key={index}>
                {item}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </>
  );
};

export default ExperienceCard;
