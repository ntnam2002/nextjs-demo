// components/ClientOnlyComponent.jsx
"use client";
import { useEffect, useState } from "react";

function ClientOnlyComponent() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://api.restful-api.dev/objects/7");
            const json = await res.json();
            setData(json);
        };

        const timer = setTimeout(() => {
            fetchData();
        }, 10000); // 10 seconds delay

        return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }, []);

    if (!data) {
        return <div>Loading...</div>; // Placeholder while data is being fetched
    }

    return (
        <div>
            <h2>Client-Side Rendered Component</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default ClientOnlyComponent;
