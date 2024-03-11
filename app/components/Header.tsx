import Link from "next/link";

function Header() {
    return (
        <header className= "header">
            <Link href={`/home`}>
                <h1>My Blog</h1>
            </Link>
        </header>
    );
}

export default Header;
