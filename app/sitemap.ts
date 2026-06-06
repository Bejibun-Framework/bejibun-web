import type {MetadataRoute} from "next";

export const dynamic = "force-static";

const SITE_URL = "https://bejibun.com";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: SITE_URL,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
            images: [`${SITE_URL}/logo.png`]
        }
    ];
}