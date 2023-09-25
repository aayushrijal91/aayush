import Link from "next/link";
import Image from "next/image";
import logo from "@/images/logo/logo.png";

function Home() {
  return (
    <main className="py-5">
      <div className="container">
        <h1 className="text-3xl">
          Hi, my name is Aayush Rijal!
        </h1>
        <p>I am a front-end developer with over 5 years of web development experience. Using JavaScript, PHP, and both relational and non-relational databases I craft robust and scalable digital solutions that offer tangible value to customers.</p>

      </div>
        <nav className="border-b">
            <div className="container py-4">
                <div className="flex justify-between items-center">
                    <div className="w-3/12">
                        <Image src={logo.src} alt="logo" width={logo.width} height={logo.height} />
                    </div>
                    <div className='w-fit'>
                        <Link href="/about">About</Link>
                    </div>
                </div>
            </div>
        </nav>
    </main>
  )
}

export default Home;
