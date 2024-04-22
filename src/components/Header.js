import Link from "next/link";
import { Space_Mono } from 'next/font/google'

const space = Space_Mono({
    subsets: ['latin'],
    weight: ['400', '700']
});

function Header() {
    return (
        <nav className="border-b fixed w-full bg-white/50 backdrop-blur-lg z-[100000000]">
            <div className="container py-4">
                <div className="flex justify-between items-center">
                    <div className="w-3/12">
                        <Link href="./" className={`text-5xl font-bold text-sky-950 ${space.className}`}>AR<span className="text-orange-600">.</span></Link>
                    </div>
                    <div className='w-fit'>
                        <ul className="flex flex-row space-x-10">
                            <li>
                                <Link href="/work">Work</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;