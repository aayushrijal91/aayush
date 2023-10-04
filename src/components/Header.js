import Link from "next/link";
import { Space_Mono } from 'next/font/google'

const space = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700']
});

function Header() {
    return (
        <nav className="border-b fixed w-full bg-white">
            <div className="container py-4">
                <div className="flex justify-between items-center">
                    <div className="w-3/12">
                        <h2 className={`text-5xl font-bold text-sky-950 ${space.className}`}>AR<span className="text-orange-600">.</span></h2>
                    </div>
                    <div className='w-fit'>
                        <Link href="./Aayush-Rijal-Resume.pdf" target="_blank" rel="noopener noreferrer" className={`border-solid border-2 border-orange-600 font-bold py-2 px-4 rounded-sm transition duration-200 ease-in-out hover:bg-orange-600 hover:text-white ${space.className}`}>Resume</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;