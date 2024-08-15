import { MetadataRoute } from "next";

export default function robots() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    return {
        rules: [
            {
                userAgent: "*",
                disallow: [],
                allow: ["/"],
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
