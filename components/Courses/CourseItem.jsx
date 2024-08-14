"use client";

export default function CourseItem({ course, onPurchase }) {
    return (
        <li>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p>Giá: ${course.price}</p>
            {course.isPurchased ? (
                <button>Học ngay</button>
            ) : (
                <button onClick={() => onPurchase(course.id)}>Mua ngay</button>
            )}
        </li>
    );
}
