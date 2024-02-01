import { Space_Mono } from 'next/font/google'
import { useState } from 'react';

const space = Space_Mono({
    subsets: ['latin'],
    weight: ['400', '700']
});

function CreateBlog() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    function handleFormSubmit(e) {
        e.preventDefault();
        console.log(title, content);
    }

    return (
        <section className="main py-32">
            <div className="container">
                <form onSubmit={handleFormSubmit}>
                    <div className='py-2'>
                        <input
                            type="text"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            placeholder="Title"
                            className='w-full border border-gray-500 rounded px-7 py-3 shadow-none outline-none'
                        />
                    </div>
                    <div className='py-2'>
                        <textarea
                            placeholder="Content"
                            value={content}
                            onChange={e => setContent(e.target.value)}
                            className="w-full border border-gray-500 min-h-[500px] rounded p-7 shadow-none outline-none"></textarea>
                    </div>
                    <button type="submit" className={`border-solid border-2 border-orange-600 font-bold py-2 px-4 rounded-sm transition duration-200 ease-in-out hover:bg-orange-600 hover:text-white ${space.className}`}>Submit</button>
                </form>
            </div>
        </section>
    )
}

export default CreateBlog;