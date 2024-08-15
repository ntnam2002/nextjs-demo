import { getAppRoutes } from "@/lib/utils/getRoute";
import path from "path";

export default async function sitemap() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const baseDir = path.join(__dirname, "../../");
    let routes = getAppRoutes(baseDir);

    // Filter out invalid routes
    routes = routes.filter((route) => route && route !== "_not-found");

    // Normalize the routes
    routes = routes.map((route) => route.replace(/\\/g, "/"));
    routes = routes.map((route) => (route === "." ? "/" : route));

    const sitemap = routes.map((route) => {
        return {
            url: `${baseUrl}/${route}`,
            lastModified: new Date().toISOString(),
        };
    });

    return [...sitemap];
}
