// app/lib/api.js

const sampleCourses = [
    {
        id: 1,
        title: "JavaScript Cơ bản",
        description: "Học nền tảng JavaScript",
        price: 49.99,
    },
    {
        id: 2,
        title: "React cho người mới bắt đầu",
        description: "Xây dựng ứng dụng web với React",
        price: 69.99,
    },
    {
        id: 3,
        title: "Node.js Advanced",
        description: "Phát triển backend với Node.js",
        price: 89.99,
    },
    {
        id: 4,
        title: "Python cho Data Science",
        description: "Phân tích dữ liệu với Python",
        price: 79.99,
    },
];

const sampleUserCourses = {
    user123: [],
    user456: [],
};

export async function getCourses() {
    // Giả lập độ trễ của mạng
    await new Promise((resolve) => setTimeout(resolve, 500));

    return sampleCourses;
}

export async function getUserCourses(userId) {
    await new Promise((resolve) => setTimeout(resolve, 500));

    const userCourseIds = sampleUserCourses[userId] || [];

    const userCourses = sampleCourses
        .filter((course) => userCourseIds.includes(course.id))
        .map((course) => ({ ...course, isPurchased: true }));

    return userCourses;
}
export async function purchaseCourse(userId, courseId) {
    await new Promise((resolve) => setTimeout(resolve, 500));

    sampleUserCourses[userId].push(courseId);

    console.log(sampleUserCourses);
    return getUserCourses(userId);
}
