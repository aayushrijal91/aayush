import Link from "next/link";
import { Space_Mono } from 'next/font/google'

const space = Space_Mono({
    subsets: ['latin'],
    weight: ['400', '700']
});

function Blogs() {
    const blogPosts = Array.from({ length: 5 }, (_, i) => (
        <article key={i} className="post-preview py-10 border-b ">
            <p className="text-2xl font-medium">How to use environment variables in Next.js (includes a working example app)</p>
            <p className="text-xs text-stone-400 font-light pt-3">29-Jun-2023 . 13 min read</p>
            <div className="flex flex-wrap space-x-2 mt-5">
                <p className="rounded-full text-sm text-white bg-indigo-600 px-3 py-1">web development</p>
                <p className="rounded-full text-sm text-white bg-indigo-600 px-3 py-1">javascript</p>
            </div>
            <p className="py-6 leading-loose text-base">
                Next.js is a React framework that makes building fast, user-friendly websites easy. It uses server-side rendering to pre-render pages on the server, which makes them load faster for users. Environment variables are a way to store sensitive information, such as passwords or API keys, outside of your code. This makes it more secure; it is one of the tenants of the 12-factor app. In this post, you will learn how to properly use environment variables on both the server and client side of Next.js. Let’s get started!
            </p>
            <Link href="" className={`text-indigo-800 font-semibold ${space.className}`}>Read post <span className="mt-1">→</span></Link>
        </article>
    ));

    return (
        <section className="main py-32">
            <div className="container">
                <h1 className="text-5xl text-sky-950 font-bold">Blog Posts</h1>
                <article className="w-1/3">
                    <p className="pt-4 text-stone-500 leading-loose">
                        I write about software engineering technical articles around programming, best practises and trending tech stacks. <Link href="./" className="text-indigo-600 underline">Subscribe to my newsletter</Link> to make sure you don’t miss anything.
                    </p>
                </article>

                <div className="w-2/3 pt-16">
                    {blogPosts}
                </div>
            </div>
        </section>
    );
}

export default Blogs;
