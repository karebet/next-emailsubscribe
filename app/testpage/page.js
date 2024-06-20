import Link from "next/link";

export default function page() {
    return (
        <div>
            <Link href={"/"}>Home</Link>
            <br />
            <Link href={"/api/subscribe"}>Api/Subscribe</Link>
            <h1>Hello test page us Okelah pakai v3</h1>
        </div>
    );
}

