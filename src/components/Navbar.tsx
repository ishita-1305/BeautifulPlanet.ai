import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleScrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);

    if (router.pathname !== "/") {
      sessionStorage.setItem("scrollToServices", "true"); // Set flag before redirecting
      router.push("/");
    } else {
      document
        .getElementById("services")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-black py-4 px-6 md:px-10 flex justify-between items-center shadow-md z-50">
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center space-x-2 hover:scale-105 transition duration-300"
      >
        <Image src="/images/ai.jpg" alt="Logo" width={40} height={40} />
        <span className="text-lg font-bold">BeautifulPlanet.ai</span>
      </Link>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6">
        <Link href="/about">
          <span className="hover:text-green-600 cursor-pointer">About us</span>
        </Link>
        <a
          href="/"
          onClick={handleScrollToServices}
          className="hover:text-green-600 cursor-pointer"
        >
          Sustainability Services
        </a>
        <Link href="/blog">
          <span className="hover:text-green-600 cursor-pointer">Blogs</span>
        </Link>
        <Link href="/contact">
          <span className="hover:text-green-600 cursor-pointer">
            Contact Us
          </span>
        </Link>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 md:hidden">
          <Link href="/about" onClick={() => setIsOpen(false)}>
            <span className="hover:text-green-600 cursor-pointer">
              About us
            </span>
          </Link>
          <a
            href="/"
            onClick={handleScrollToServices}
            className="hover:text-green-600 cursor-pointer"
          >
            Sustainability Services
          </a>
          <Link href="/blog" onClick={() => setIsOpen(false)}>
            <span className="hover:text-green-600 cursor-pointer">Blogs</span>
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <span className="hover:text-green-600 cursor-pointer">
              Contact Us
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
}
