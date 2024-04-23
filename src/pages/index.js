import { Space_Mono } from 'next/font/google'
import Image from 'next/image';
import Link from 'next/link';
import aiims from '../images/logo/aiims.jpg';
import yipl from '../images/logo/yipl.png';
import reactjs from '../images/logo/reactjs.png';
import nextjs from '../images/logo/nextjs.png';
import laravel from '../images/logo/laravel.png';
import wordpress from '../images/logo/wordpress.png';
import shopify from '../images/logo/shopify.png';
import strapi from '../images/logo/strapi.png';
import Project from '@/components/Project';
import { fetchQuery } from "@/util";
import { useState } from 'react';

const space = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700']
});

function Home({ projects }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        body: JSON.stringify(formData)
      });

      const responseData = await response.json();
      setResponseMessage(responseData.message);
    } catch (error) {
      setResponseMessage('Failed to send email');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main>
      <section className='h-screen flex items-center'>
        <div className="container">
          <article className={`md:w-8/12 py-16 ${space.className}`}>
            <p className='text-md md:text-xl text-orange-600'>Hi, my name is</p>
            <h1 className='text-5xl md:text-7xl font-bold py-7'>
              Aayush Rijal<span className='text-orange-600'>.</span>
            </h1>
            <p className='text-base md:text-lg'>I am a <span className='bg-orange-600 text-white px-2'>software developer</span> with over 5 years of web development experience. Using JavaScript, PHP, and both relational and non-relational databases I craft robust and scalable digital solutions that offer tangible value to customers.</p>
            <div className='flex gap-x-3 pt-7'>
              <a href="mailto:aayush.rijal99@gmail.com" className='text-sky-950 hover:text-orange-600 transition duration-150 ease-in'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-envelope-paper-heart" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1.133l.941.502A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765L2 3.133V2Zm0 2.267-.47.25A1 1 0 0 0 1 5.4v.817l1 .6v-2.55Zm1 3.15 3.75 2.25L8 8.917l1.25.75L13 7.417V2a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v5.417Zm11-.6 1-.6V5.4a1 1 0 0 0-.53-.882L14 4.267v2.55ZM8 2.982C9.664 1.309 13.825 4.236 8 8 2.175 4.236 6.336 1.31 8 2.982Zm7 4.401-4.778 2.867L15 13.117V7.383Zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734Z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/aayushrij/" target='_blank' className='text-sky-950 hover:text-orange-600 transition duration-150 ease-in'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>
              <a href="https://github.com/aayushrijal91/" target='_blank' className='text-sky-950 hover:text-orange-600 transition duration-150 ease-in'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
            </div>
          </article>
        </div>
      </section>

      <div className='-mt-20 flex justify-center'>
        <Link href="/#experience">
          <svg className="animate-bounce text-sky-950 bi bi-arrow-down-short" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4" />
          </svg>
        </Link>
      </div>

      <section className='py-16 md:py-28' id="experience">
        <div className='container'>
          <p className='text-2xl font-bold'>Experiences</p>

          <div className='w-full md:w-10/12 pt-20'>
            <div className='flex flex-wrap items-center gap-y-5'>
              <div className='w-full md:w-1/2'>
                <div className='flex items-center space-x-4'>
                  <div className='w-[100px] h-[100px]'>
                    <Image src={aiims} alt="AIIMS" className='rounded-md' />
                  </div>
                  <div className='w-fit'>
                    <p className='text-black font-bold text-lg'>Aiims Group</p>
                    <div className='bg-gray-100 mt-2 p-2 rounded-md inline-flex'>
                      <p className='text-sm text-gray-500 leading-none'>2021 — Present</p>
                    </div>
                    <p className="text-gray-500 text-sm pt-3 md:pt-1">Software Developer</p>
                  </div>
                </div>
              </div>

              <div className='w-full md:w-1/2'>
                <div className='flex flex-wrap items-center space-x-4'>
                  <div className='w-[100px] h-[100px]'>
                    <Image src={yipl} alt="YIPL" className='rounded-md' />
                  </div>
                  <div className='w-fit'>
                    <p className='text-black font-bold text-lg'>YoungInnovations Pvt. Ltd.</p>
                    <div className='bg-gray-100 mt-2 p-2 rounded-md inline-flex'>
                      <p className='text-sm text-gray-500 leading-none'>2016 — 2018</p>
                    </div>
                    <p className="text-gray-500 text-sm pt-3 md:pt-1">Software Engineer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16 md:py-28'>
        <div className='container'>
          <p className='text-2xl font-bold'>Frameworks</p>

          <div className='flex flex-wrap pt-20 items-center gap-10'>
            <div className='w-[100px] h-[100px] flex justify-center items-center'>
              <Image className="w-full" src={reactjs} alt="react" />
            </div>

            <div className='w-[100px] h-[100px] flex justify-center items-center'>
              <Image className="w-full" src={nextjs} alt="nextjs" />
            </div>

            <div className='w-[150px] h-[100px] flex justify-center items-center'>
              <Image className="w-full" src={laravel} alt="nextjs" />
            </div>

            <div className='w-[150px] h-[100px] flex justify-center items-center'>
              <Image className="w-full" src={strapi} alt="nextjs" />
            </div>

            <div className='w-[80px] h-[80px] flex justify-center items-center'>
              <Image className="w-full" src={wordpress} alt="nextjs" />
            </div>

            <div className='w-[80px] h-[80px] flex justify-center items-center'>
              <Image className="w-full" src={shopify} alt="nextjs" />
            </div>
          </div>
        </div>
      </section>

      <section className='py-16 md:py-28'>
        <div className='container'>
          <p className='text-2xl font-bold'>Websites</p>

          <div className='flex flex-wrap pt-20 gap-y-7'>
            {projects.map((project, i) => (
              <div key={i} className='md:w-1/2 lg:w-1/3'>
                <Project
                  title={project.title}
                  link={project.link}
                  image={project.image}
                  projectType={project.projectType}
                  tools={project.tools}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-16 md:py-28 bg-indigo-600' id="contact">
        <div className='container'>
          <div className='bg-white p-10'>
            <p className="rounded-full text-sm text-white inline-flex bg-orange-600 px-3 py-1">Lets Connect</p>

            {responseMessage && <p className='text-indigo-600 font-bold pt-10'>{responseMessage}</p>}

            <form
              onSubmit={handleFormSubmit}
              className='mt-10 flex flex-wrap gap-y-4 justify-end'>
              <div className='w-full px-1.5'>
                <input
                  type="text"
                  onChange={handleChange}
                  value={formData.name}
                  name="name"
                  className='border border-indigo-300 outline-none p-5 flex w-full h-[60px]'
                  placeholder='Full Name'
                  required
                />
              </div>

              <div className='w-full md:w-1/2 px-1.5'>
                <input
                  type="email"
                  onChange={handleChange}
                  value={formData.email}
                  name="email"
                  className='border border-indigo-300 outline-none p-5 flex w-full h-[60px]'
                  placeholder='Email'
                  required />
              </div>

              <div className='w-full md:w-1/2 px-1.5'>
                <input
                  type="tel"
                  onChange={handleChange}
                  value={formData.phone}
                  name="phone"
                  className='border border-indigo-300 outline-none p-5 flex w-full h-[60px]'
                  placeholder='Phone Number'
                  required
                />
              </div>

              <div className='w-full px-1.5'>
                <textarea
                  onChange={handleChange}
                  value={formData.message}
                  name="message"
                  className='border border-indigo-300 outline-none p-5 flex w-full'
                  placeholder='Message'>
                </textarea>
              </div>

              <div className='w-fit px-1.5'>
                <button disabled={isLoading} type="submit" className={`${isLoading ? 'opacity-20' : 'opacity-100'} bg-indigo-600 text-white h-[60px] px-10 rounded-full`}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className='py-4'>
        <p className='text-center'>All Rights Reserved | 2024</p>
      </footer>
    </main>
  )
}

export default Home;

export async function getServerSideProps() {
  const projects = await fetchQuery("projects");

  return {
    props: {
      projects
    }
  }
}