import Image from "next/image";
import profileImage from "@/public/image/profile.jpg";
import Project from "@/components/Project";
import Skill from "@/components/Skill";
import Link from "next/link";

import GmailIcon from "@/public/Icons/GmailIcon";
import LinkdenIcon from "@/public/Icons/LinkdenIcon";
import GithubIcon from "@/public/Icons/GithubIcon";
import InstagramIcon from "@/public/Icons/InstagramIcon";

export default function Home() {
  return (
    <div className="flex h-full justify-center">
      <div className="flex flex-col gap-4 max-w-[60%] bg-gradient-to-r from-blue-100 to-purple-100 text-[#333333] px-10 py-5 pt-20 ">
        <div className="flex gap-1 ">
          <div>
            <div className="text-4xl">Sahil Verma</div>
            <div>
              Passionate software developer with expertise in C++,
              JavaScript,and web development. Excel in data structures and
              algorithms and am seeking opportunities to create innovative and
              efficient solutions. Aspire to improve the quality of my work and
              contribute to the growth of a progressive organization.
            </div>
          </div>
          <div className="">
            <Image
              className="rounded-full shadow-lg"
              src={profileImage}
              alt="myprogile"
              height={200}
              width={350}
            />
          </div>
        </div>
        <div className="border p-4 shadow-sm bg-gradient-to-r from-blue-50 to-purple-50 rounded-md">
          <div className="text-2xl">Experience</div>
          <div>
            Strong proficiency in programming, Expertise in C++, with a solid
            foundation in data structures and algorithms, delivering optimized
            and efficient solutions for complex problems.
          </div>
          <div>
            Full-Stack Web Development Expertise: Designed and implemented
            scalable applications using Node.js, Express.js, and React.js,
            leveraging Next.js for server-side rendering and optimization
          </div>
          <div>
            Database & Cloud Integration: Architected secure and optimized
            database solutions using PostgreSQL and MongoDB, with deployment on
            AWS, Render and Vercel, ensuring high availability & performance.
          </div>
        </div>
        <div className="border p-4 shadow-sm  bg-gradient-to-r from-blue-50 to-purple-50 rounded-md">
          <div className="text-2xl mb-3">Skills</div>
          <div className="flex flex-wrap gap-2 ">
            {skills.map((skill, key) => (
              <Skill key={key} skill={skill} />
            ))}
          </div>
        </div>
        <div className="border p-4 shadow-sm bg-gradient-to-r from-blue-50 to-purple-50 rounded-md">
          <div className="text-2xl mb-3">Projects</div>
          <div>
            {projects.map((project, key) => (
              <Project
                key={key}
                title={project.title}
                description={project.description}
                link={project.link}
                technology={project.technology}
              />
            ))}
          </div>
        </div>
        <div className="border p-4 shadow-sm bg-gradient-to-r from-blue-50 to-purple-50 rounded-md">
          <div className="text-2xl mb-3">Contact Info</div>
          <div className="flex gap-8">
            <Link href="mailto:sahilverma6353@gmail.com" target="_blank">
              <GmailIcon />
            </Link>
            <Link
              href="https://www.linkedin.com/in/-sahil-verma/"
              target="_blank"
            >
              <LinkdenIcon />
            </Link>
            <Link href="https://github.com/sahil4798" target="_blank">
              <GithubIcon />
            </Link>
            <Link href="https://www.instagram.com/aahil.to/" target="_blank">
              <InstagramIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const skills: string[] = [
  "C++",
  "DSA",
  "JavaScript",
  "NodeJs",
  "ExpressJs",
  "ReactJs",
  "NextJs",
  "Postgres",
  "Mongoose",
  "Prisma",
  "AWS",
  "Cloudflare",
  "Docker",
  "TypeScript",
];

const projects: skillsType = [
  {
    title: "Medium",
    technology: [
      "NodeJs",
      "HonoJs",
      "Cloudflare",
      "Postgres",
      "Prisma",
      "ReactJs",
      "Vercel",
    ],
    description:
      "Medium is an online publishing platform that allows users to read, write, and share articles, stories, and ideas on a wide range of topics",
    link: "https://medium.aahil.online/",
  },
  {
    title: "YelpCamp",
    technology: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB", "Render"],
    description:
      "Successfully completing the project expanded technical skills and understanding of full-stack web development and deployment practices, laying a strong foundation for future projects and encouraging the adoption of new technologies",
    link: "https://yelpcamp.aahil.online/",
  },
];

type skillsType = {
  title: string;
  technology: string[];
  description: string;
  link: string;
}[];
