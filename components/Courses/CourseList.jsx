"use client";

import { useState, useEffect } from "react";
import { getUserCourses, purchaseCourse, getCourses } from "@/lib/api/api";
import CourseItem from "./CourseItem";

export default function CourseList() {
    const [courses, setCourses] = useState([]);
    const userId = "user123";

    useEffect(() => {
        async function fetchCourses() {
            try {
                const allCourses = await getCourses();
                setCourses(allCourses);
            } catch (error) {
                console.error("Error fetching courses:", error);
            }
        }

        fetchCourses();
    }, []);

    const handlePurchase = async (courseId) => {
        try {
            await purchaseCourse(userId, courseId);
            setCourses((prevCourses) =>
                prevCourses.map((course) =>
                    course.id === courseId
                        ? { ...course, isPurchased: true }
                        : course,
                ),
            );
            console.log(`Purchased course ${courseId}`);
        } catch (error) {
            console.error("Error purchasing course:", error);
        }
    };

    return (
        <ul>
            {courses.map((course) => (
                <CourseItem
                    key={course.id}
                    course={course}
                    onPurchase={handlePurchase}
                />
            ))}
        </ul>
    );
}
