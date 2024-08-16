import Image from "next/image";
import { generateMetadata } from "@/lib/utils/metadata";

export const metadata = generateMetadata({
    title: "Trang chủ | Tên Website",
    description: "Mô tả cho trang chủ",
    openGraph: {
        images: ["/images/home-og-image.jpg"],
    },
});
export default function Home() {
    return (
        <main>
            <h1>Hello World Parallel Page 1</h1>
        </main>
    );
}
