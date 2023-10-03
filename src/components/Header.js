import Link from "next/link";
import Image from "next/image";
import logo from "@/images/logo/logo.png";
import { Space_Mono } from 'next/font/google'

const space = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700']
});

function Header() {
    return (
        <nav className="border-b">
            <div className="container py-4">
                <div className="flex justify-between items-center">
                    <div className="w-3/12">
                        <Image src={logo.src} alt="logo" width={logo.width} height={logo.height} />
                    </div>
                    <div className='w-fit'>
                        <Link href="/about" className={`border-solid border-2 border-indigo-600 py-2 px-4 rounded-sm ${space.className}`}>Resume</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;