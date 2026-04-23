import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandSpotify,
  IconMail,
} from "@tabler/icons-react";
import { TemplateString } from "next/dist/lib/metadata/types/metadata-types";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";

export const baseURL =
  process.env.NODE_ENV === "production"
    ? process.env.BASE_URL!
    : "localhost:3000";

export const profileData = [
  {
    key: "role",
    value: "full-stack developer",
  },
  {
    key: "status",
    value: "computer science student",
  },
  {
    key: "interest",
    value: "system design, backend architecture, and APIs",
  },
  {
    key: "current_focus",
    value: "building scalable backend systems",
  },
  {
    key: "tech_mindset",
    value: "clean code, maintainability, and performance",
  },
  {
    key: "goal",
    value:
      "becoming a reliable backend engineer with strong system design skills",
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/kautsarhasby",
    icon: IconBrandGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/kautsarhasby",
    icon: IconBrandLinkedin,
  },
  {
    name: "Email",
    href: "mailto:kautsarhasby@gmail.com",
    icon: IconMail,
  },
];

export const footerSocialLinks = [
  ...socialLinks,
  {
    name: "Instagram",
    href: "https://instagram.com/kautsarhy/",
    icon: IconBrandInstagram,
  },
  {
    name: "Spotify",
    href: "https://open.spotify.com/user/n1abfk5rkds3zop2f72vja854?si=800de4859a0c4d36",
    icon: IconBrandSpotify,
  },
];

export const copyRightYear = new Date().getFullYear();

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
