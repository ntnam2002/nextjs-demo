const fs = require("fs");
const path = require("path");

const getRoutes = (dir, basePath = "") => {
    const files = fs.readdirSync(dir);
    let routes = [];

    files.forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            routes = routes.concat(
                getRoutes(filePath, path.join(basePath, file)),
            );
        } else if (
            file === "page.js" ||
            file === "page.jsx" ||
            file === "page.ts" ||
            file === "page.tsx"
        ) {
            const route = path.join(
                basePath,
                file.replace(/page\.(js|jsx|ts|tsx)$/, ""),
            );
            routes.push(route === "/index" ? "/" : route);
        }
    });

    return routes;
};

const getAppRoutes = (baseDir) => {
    return getRoutes(path.join(baseDir, "app"));
};

// Example usage
const baseDir = path.join(__dirname, "../../");
let routes = getAppRoutes(baseDir);

// Format the routes as requested
routes = routes.map((route) => route.replace(/\\/g, "/"));
routes = routes.map((route) => (route === "." ? "/" : route));
console.log(routes);

module.exports = { getAppRoutes };
