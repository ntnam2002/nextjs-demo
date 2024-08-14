import { getCourses } from "@/lib/api/api";
import CourseList from "../../../components/Courses/CourseList";
import Head from "next/head";
import { generateMetadata } from "@/lib/utils/metadata";
export const metadata = generateMetadata({
    title: "Bán khóa học lập trình bảo đảm lương 1000$",
    description: "Làm chủ lập trình, tăng lương 1000$ chỉ trong 3 tháng",
    openGraph: {
        images: ["/images/home-og-image.jpg"],
    },
    canonical: "https://example.com",
});
export default async function CoursesPage() {
    const courses = await getCourses();

    return (
        <div>
            <h1>Danh sách khoá học siêu rẻ</h1>
            <CourseList initialCourses={courses} />
        </div>
    );
}
