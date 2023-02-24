import Link from "next/link";

export default function Navbar() {
    return(
        <ul>
            <Link href="/"><li></li>Home</Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/heroes"><li>Heroes</li></Link>
            <Link href="/contacts"><li>Contacts</li></Link>
        </ul>
    )   
};
