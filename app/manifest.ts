import type {MetadataRoute} from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Bejibun",
        short_name: "Bejibun",
        description: "A modern TypeScript framework powered by Bun",
        start_url: "/",
        display: "standalone",
        background_color: "#FFFFFF",
        theme_color: "#000000",
        icons: [
            {
                src: "/logo.png",
                sizes: "192x192",
                type: "image/png"
            },
            {
                src: "/logo.png",
                sizes: "512x512",
                type: "image/png"
            }
        ]
    };
}