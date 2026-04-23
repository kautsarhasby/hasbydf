enum Status {
  finished = "Finished",
  onprogress = "On Progress",
  discontinued = "Discontinued",
}

export interface ITag {
  name: string;
}

export interface IProject {
  image: string;
  title: string;
  description: string;
  code: string;
  link: string;
  status: Status;
  tags: ITag[];
  date?: string;
}

export const projects: IProject[] = [
  {
    image: "/images/projects/mandarin-app.jpeg",
    title: "Mandarin Learning App",
    description:
      "Backend-focused PWA for efficient Mandarin vocabulary search using Trie-based indexing and optimized data retrieval.",
    code: "",
    link: "",
    status: Status.onprogress,
    tags: [
      { name: "Vue" },
      { name: "Go" },
      { name: "PostgreSQL" },
      { name: "JWT Auth" },
      { name: "Caching" },
    ],
  },
  {
    image: "/images/projects/realest.png",
    title: "Realest - Realtime Web Chat",
    description:
      "Real-time chat application using WebSocket with event-based communication, supporting messaging, rooms, and scheduling features.",
    code: "",
    link: "",
    status: Status.finished,
    tags: [
      { name: "React" },
      { name: "Laravel" },
      { name: "MySQL" },
      { name: "WebSocket" },
      { name: "Laravel Reverb" },
    ],
  },
  {
    image: "/images/projects/mandarin-feedback.png",
    title: "Mandarin Student Feedback System",
    description:
      "Feedback management system with structured data handling, featuring REST APIs, filtering, and aggregation for dashboard insights. Used by many user, this project for mandarin teacher after teaching classes",
    code: "",
    link: "",
    status: Status.finished,
    tags: [
      { name: "Next.js" },
      { name: "NestJS" },
      { name: "PostgreSQL" },
      { name: "Vercel" },
      { name: "Supabase" },
    ],
  },
  {
    image: "/images/projects/manga_ocr.png",
    title: "Manga OCR Translation System",
    description:
      "Built an OCR-based pipeline to extract Japanese text from raw manga images and PDFs, then translate it into another language using machine learning models. Implemented text detection, recognition, and automated translation workflow for end-to-end processing.",
    code: "",
    link: "",
    status: Status.onprogress,
    tags: [
      { name: "Python" },
      { name: "OCR" },
      { name: "YOLO" },
      { name: "MangaOCR" },
      { name: "Machine Translation" },
      { name: "Pillow" },
    ],
  },
];
