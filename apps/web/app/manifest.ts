import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Gorlabs",
    short_name: "gorlabs.com",
    description: "Blockchain and AI solutions",
    start_url: "/",
    lang: "en-US",
    display: "standalone",
    background_color: "#0f3057",
    theme_color: "#0f3057",
    orientation: "portrait",
    icons: [
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
