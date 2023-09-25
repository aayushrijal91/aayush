import Link from "next/link";
import Image from "next/image";
import logo from "@/images/logo/logo.png";

function Header() {
    return (
        <nav className="border-b">
            <div className="container py-4">
                <div className="flex justify-between items-center">
                    <div className="w-3/12">
                        <Image src={logo.src} alt="logo" width={logo.width} height={logo.height} />
                    </div>
                    <div className='w-fit'>
                        <Link href="/about">sAbout</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;