import { Book, Folder, Home } from "lucide-react";
import { TemplateString } from "next/dist/lib/metadata/types/metadata-types";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";
import { SiGithub, SiInstagram, SiLinkedin, SiSpotify } from "react-icons/si";

enum Status {
  finished = "Finished",
  onprogress = "On Progress",
  discontinued = "Discontinued",
}

export const baseURL =
  process.env.NODE_ENV === "production"
    ? process.env.BASE_URL!
    : "localhost:3000";

export const dataProject = [
  {
    image: "/images/wallpaper.jpg",
    title: "Protoype E-Commerce Web",
    description:
      "A Protoype E-Commerce web with a minimalist design using Vanilla Tech.",
    code: "https://github.com/kautsarhasby/wanbay-shop",
    link: "https://kautsarhasby.github.io/wanbay-shop/",
    status: Status.finished,
    tech: [{ name: "Javascript" }, { name: "HTML" }, { name: "CSS" }],
  },
  {
    image: "/images/wallpaper.jpg",
    title: "Posterer",
    description: "A CRUD News Portal or Post by User .",
    code: "https://github.com/kautsarhasby/Posterer",
    link: "",
    status: Status.finished,
    tech: [
      { name: "Laravel ( BackEnd )" },
      { name: "React ( FrontEnd )" },
      { name: "Inertia.JS ( Server-Driven )" },
      { name: "MySQL ( Database )" },
    ],
  },
  {
    image: "/images/wallpaper.jpg",
    title: "E-Library",
    description: "A Fullstack E-Library .",
    code: "https://github.com/kautsarhasby/e-library",
    link: "",
    status: Status.discontinued,
    tech: [
      { name: "React ( FrontEnd )" },
      { name: "Express ( BackEnd )" },
      { name: "Node.JS ( RunTime Environment)" },
      { name: "MongoDB ( Database )" },
    ],
  },
];

export const dataSocial = [
  {
    logo: SiInstagram,
    url: "https://instagram.com/kautsarhy/",
  },

  {
    logo: SiGithub,
    url: "https://github.com/kautsarhasby",
  },
  {
    logo: SiLinkedin,
    url: "https://www.linkedin.com/in/kautsarhasby/",
  },
  {
    logo: SiSpotify,
    url: "https://open.spotify.com/user/n1abfk5rkds3zop2f72vja854?si=800de4859a0c4d36",
  },
];

export const copyRightYear = new Date().getFullYear();

export const experienceData = [
  {
    name: "Hypermart",
    icon: "/images/hypermart.png",
    startYear: "July 2021",
    endYear: "September 2022",
    position: "Staff",
    softSkills: ["Problem Solving", "Team Work", "Excellent Operation"],
    hardSkills: ["Microsoft Office", "Cashier"],
  },
  {
    name: "LePKom Gunadarma",
    icon: "/images/lepkom.png",
    startYear: "September 2024",
    endYear: "now",
    position: "Course Assistant",
    softSkills: ["Problem Solving", "Team Work", "Speaking"],
    hardSkills: ["SQL Server", "Databases", "Oracle", "Java"],
  },
];

export const NavbarLink = [
  {
    icon: Home,
    title: "Home",
    url: "/",
  },
  {
    icon: Folder,
    title: "Project",
    url: "/project",
  },
  {
    icon: Book,
    title: "Articles",
    url: "/articles",
  },
];

const title: TemplateString = {
  default: "Hasby - Home",
  template: "Hasby - %s",
};

const openGraph: OpenGraph = {
  type: "website",
  title: title,
  siteName: baseURL,
};

export const DefaultMetadata = { openGraph, title };
