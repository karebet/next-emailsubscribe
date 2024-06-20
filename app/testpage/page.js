import Link from "next/link";

export default function page() {
    return (
        <div>
            <Link href={"/"}>Home</Link>
            <br />
            <Link href={"/api/subscribe"}>Api/Subscribe</Link>
            <h1>Hello test page update v6</h1>
        </div>
    );
}

