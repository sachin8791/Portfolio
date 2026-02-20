import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Sachin Kumar",
  initials: "SK",
  url: "https://sach.one",
  location: "New Delhi, India",
  locationLink: "https://www.google.com/maps/place/delhi",
  description:
    "Software Engineer with a passion for building scalable and efficient systems.",
  summary:
    "I am a software engineer with a passion for building scalable and efficient systems.",
  avatarUrl: "/me.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Postgres", icon: Postgresql },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "sachinkumar879162@gmail.com",
    tel: "+91 8791621035",
    social: {
      X: {
        name: "X",
        url: "https://x.com/SachinKuma17253",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [],
  education: [
    {
      school: "Shri Venakaeshwara University",
      href: "https://svu.edu.in/",
      degree: "Bachelor of Computer Applications(BCA)",
      logoUrl: "/svuniversity.png",
      start: "2024",
      end: "Present",
    },
  ],
  projects: [
    {
      title: "Full Instagram Clone",
      href: "https://insta-clone-six-alpha.vercel.app/login",
      dates: "Dec 2024 - Jan 2025",
      active: false,
      description:
        "I built a full Instagram clone using Next.js, TailwindCSS, and Shadcn UI. It includes features like login, signup, post creation, post viewing, and post deletion.",
      technologies: [
        "React",
        "Javascript",
        "TailwindCSS",
        "Shadcn UI",
        "Supabase",
      ],
      links: [
        {
          type: "Website",
          href: "https://insta-clone-six-alpha.vercel.app/login",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sachin8791/insta-clone",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "./ig.png",
      video: ""
    },
    {
      title: "Frontend Practice",
      href: "https://fronted-web-two.vercel.app/",
      dates: "March 2025 - Present",
      active: true,
      description:
        `Frontend practce platform for beginners to practice their skills.`,
      technologies: [
        "Next.js",
        "Typescript",
        "MongoDB",
        "TailwindCSS",
        "Shadcn UI",
        "Express.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://fronted-web-two.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sachin8791/frontend-practice",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "./frontend.png",
      video: ""
    },
    {
      title: "AI Chatbot Landing Page",
      href: "https://ai-project-one-alpha.vercel.app/",
      dates: "Jan 2026 - Feb 2026",
      active: false,
      description:
        "Developed an AI Chatbot Landing Page using Next.js, TailwindCSS, Framer Motion, and Shadcn UI.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://ai-project-one-alpha.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sachin8791/Ai-project",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "ai.png",
      video: ""
    },
  ],
  hackathons: [
    
  ],
} as const;
