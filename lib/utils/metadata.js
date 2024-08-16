// /lib/metadata.js

export const defaultMetadata = {
    title: "Tên Website",
    description: "Mô tả mặc định cho website",
    openGraph: {
        images: ["/images/default-og-image.jpg"],
    },
};
/**
 *
 * @param {any} pageMetadata
 * @returns
 */
export function generateMetadata(pageMetadata) {
    return {
        ...defaultMetadata,
        ...pageMetadata,
        openGraph: {
            ...defaultMetadata.openGraph,
            ...pageMetadata.openGraph,
        },
    };
}
