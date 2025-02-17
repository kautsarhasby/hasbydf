import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hasby",
    short_name: "Hasby",
    description:
      "Self Taught Informatics Student and Fullstack Dev Enthusiast, Hasby is my nickname and my fullname is Kautsar Hasby Dastien Fredil",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    orientation: "portrait",
  };
}
