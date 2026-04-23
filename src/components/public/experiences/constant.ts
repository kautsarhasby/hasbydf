export type BaseExperience = {
  company: string;
  logo: string;
  startDate: string;
  endDate: string;
};

export type Role = {
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
  softSkills: string[];
};

export type MultiRoleExperience = BaseExperience & {
  type: "multi";
  roles: Role[];
};

export type SingleRoleExperience = BaseExperience & {
  type: "single";
  title: string;
  description: string;
  technologies: string[];
  softSkills: string[];
};

export type Experience = MultiRoleExperience | SingleRoleExperience;

export const experiences: Experience[] = [
  {
    type: "single",
    company: "PT. Pejuang Indonesia Cerdas",
    logo: "/images/experiences/posn.jpg",
    startDate: "Dec 2025",
    endDate: "Apr 2026",
    title: "Frontend Developer",
    description:
      "Developed responsive web interfaces using Next.js and collaborated with backend engineers to integrate REST APIs, manage data fetching, handle API responses, and ensure smooth data flow and consistency across the application.",
    technologies: ["Next.js", "React", "Redux", "TypeScript", "Tailwind CSS"],
    softSkills: [
      "Team Work",
      "Problem Solving",
      "Communication",
      "Attention to Detail",
    ],
  },
  {
    type: "multi",
    company: "Lembaga Pengembangan Komputerisasi Gunadarma",
    logo: "/images/experiences/lepkom.png",

    // AKUMULASI
    startDate: "Aug 2024",
    endDate: "Present",

    roles: [
      {
        title: "Course Manager",
        startDate: "Oct 2025",
        endDate: "Present",
        description:
          "Oversaw course operations, schedules, instructors,learning materials and ensuring smooth execution of hands-on activities and class operations.",
        technologies: ["Spreadsheet", "Excel"],
        softSkills: ["Leadership", "Time Management", "Responsibility"],
      },
      {
        title: "Course Instructor",
        startDate: "Apr 2025",
        endDate: "Present",
        description:
          "Delivered hands-on instruction and mentoring for computer and software-related courses.",
        technologies: ["SQL Server", "Oracle Database"],
        softSkills: ["Public Speaking", "Tutoring"],
      },

      {
        title: "Course Assistant",
        startDate: "Aug 2024",
        endDate: "Present",
        description:
          "Supported instructors during practical sessions by assisting students in resolving errors in exercises and guiding problem-solving approaches",
        technologies: ["GO", "C#", "Java", "SQL Server", "Oracle Database"],
        softSkills: ["Teamwork", "Adaptability", "Problem Solving"],
      },
    ],
  },

  {
    type: "single",
    company: "PT. Winnicode Garuda Indonesia",
    logo: "/images/experiences/winnicode.png",
    startDate: "Mar 2025",
    endDate: "Jul 2025",
    title: "Fullstack Developer Intern",
    description: "Developed a full-stack employee recruitment web application.",
    technologies: [
      "Typescript",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Supabase",
    ],
    softSkills: ["Time Management", "Problem Solving"],
  },

  {
    type: "single",
    company: "PT. Matahari Putra Prima Tbk",
    logo: "/images/experiences/hypermart.png",
    startDate: "Jul 2021",
    endDate: "Sep 2022",
    title: "E-Commerce Staff",
    description:
      "Handled daily e-commerce operations and customer order fulfillment.",
    technologies: ["Microsoft Office"],
    softSkills: [
      "Team Work",
      "Operational Excellence",
      "Time Management",
      "Customer Service",
    ],
  },
];
