// app/lib/api.js

// Dữ liệu mẫu cho các khoá học
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

// Dữ liệu mẫu cho các khoá học đã mua của người dùng
const sampleUserCourses = {
    user123: [], // user123 đã mua khoá học có id 1 và 3
    user456: [], // user456 đã mua khoá học có id 2 và 4
};

export async function getCourses() {
    // Giả lập độ trễ của mạng
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Trả về dữ liệu mẫu
    return sampleCourses;
}

export async function getUserCourses(userId) {
    // Giả lập độ trễ của mạng
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Lấy danh sách id khoá học của người dùng
    const userCourseIds = sampleUserCourses[userId] || [];

    // Lọc và trả về các khoá học mà người dùng đã mua
    const userCourses = sampleCourses
        .filter((course) => userCourseIds.includes(course.id))
        .map((course) => ({ ...course, isPurchased: true }));

    return userCourses;
}
export async function purchaseCourse(userId, courseId) {
    // Giả lập độ trễ của mạng
    await new Promise((resolve) => setTimeout(resolve, 500));
    // Thêm khoá học vào danh sách đã mua của người dùng
    sampleUserCourses[userId].push(courseId);
    // Trả về danh sách khoá học đã mua của người dùng
    console.log(sampleUserCourses);
    return getUserCourses(userId);
}
