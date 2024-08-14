import ClientOnlyComponent from "@/components/Demo/demoClient";
import Head from "next/head";

async function fetchData() {
    const res = await fetch("https://api.restful-api.dev/objects");
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

export default async function DemoPage() {
    const data = await fetchData();

    return (
        <>
            <Head>
                <title>Demo Page</title>
            </Head>
            <h1>Demo Page</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            <ClientOnlyComponent />
        </>
    );
}
