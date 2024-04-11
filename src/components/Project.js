import Image from 'next/image';
import Link from "next/link";
import { Space_Mono } from 'next/font/google'

const space = Space_Mono({
    subsets: ['latin'],
    weight: ['400', '700']
});

const Project = ({ title, link, image, projectType, tools }) => {

    return (
        <div className="hover:bg-[#f8fbff] duration-300 p-4 rounded-md">
            <div className='rounded-md drop-shadow-lg overflow-hidden h-[300px]'>
                <Image className="w-full h-full object-cover" src={image} alt="project" />
            </div>

            <p className='text-xl font-bold pt-10'>{title}</p>
            <p className="text-xs text-stone-400 font-light pt-3">{projectType}</p>
            <div className="flex flex-wrap gap-2 my-5">
                {tools.map((tool, i) => {
                    return (<p key={i} className="rounded-full text-sm text-white bg-indigo-600 px-3 py-1">{tool}</p>);
                })}
            </div>
            <Link href={link} target="_blank" className={`text-indigo-800 font-semibold ${space.className}`}>Visit Site <span className="mt-1">→</span></Link>
        </div>
    );
}

export default Project;