export default function Post({ params }) {
    const { test } = params;

    return (
        <div>
            <h1>Post Page</h1>
            <p>test: {test ? test.join("/") : "No test"}</p>
        </div>
    );
}
