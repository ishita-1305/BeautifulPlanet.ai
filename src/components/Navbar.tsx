import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-black py-4 px-10 flex justify-between items-center shadow-md z-50">
      <Link
        href="/"
        className="flex items-center space-x-2  hover:scale-105 transition duration-300"
      >
        <Image src="/images/ai.jpg" alt="Logo" width={40} height={40} />
        <span className="text-lg font-bold">BeautifulPlanet.ai</span>
      </Link>
      <div className="space-x-6">
        <Link href="/about">
          <span className="hover:text-green-600 cursor-pointer">About us</span>
        </Link>
        <Link href="#">
          <span className="hover:text-green-600 cursor-pointer">
            Sustainability Services
          </span>
        </Link>
        {/* <Link href="#">
          <span className="hover:text-green-600 cursor-pointer">
            Our Projects
          </span>
        </Link> */}
        <Link href="#">
          <span className="hover:text-green-600 cursor-pointer">Blogs</span>
        </Link>
        <Link href="/contact">
          <span className="hover:text-green-600 cursor-pointer">
            Contact Us
          </span>
        </Link>
      </div>
    </nav>
  );
}
