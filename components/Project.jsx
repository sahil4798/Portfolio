import Link from "next/link";
import Skill from "@/components/Skill";
import LinkIcon from "@/public/Icons/LinkIcon";

const Project = ({ title, description, link, technology }) => {
  return (
    <div className=" mt-4 border rounded-md p-4  hover:shadow-xl transition-shadow duration-300 bg-gradient-to-r from-blue-100 to-purple-100  ">
      <div className="flex gap-1 items-center">
        <div className="text-xl">{title}</div>
        <Link href={link} target="_blank">
          <LinkIcon />
        </Link>
      </div>
      <div>{description}</div>
      <div className="flex flex-wrap gap-1">
        {technology.map((tech, key) => (
          <Skill key={key} skill={tech} />
        ))}
      </div>
    </div>
  );
};

export default Project;
