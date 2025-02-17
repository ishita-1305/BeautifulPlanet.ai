import React from "react";
import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0e2342] text-white py-8 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center sm:text-left">
        {/* Company Info */}
        <div>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>TEL: +91-1111111111</p>
        </div>

        {/* Registered Address */}
        <div>
          <h3 className="font-semibold">REGISTERED ADDRESS</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            eos!
          </p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <p>Lorem, ipsum dolor.</p>
        </div>

        {/* Explore More */}
        <div>
          <h3 className="font-semibold">EXPLORE MORE</h3>
          <ul className="space-y-1">
            <li>
              <Link href="#">About us</Link>
            </li>
            <li>
              <Link href="#">Careers</Link>
            </li>
            <li>
              <Link href="#">Our Tech</Link>
            </li>
            <li>
              <Link href="/terms">Terms of use</Link>
            </li>
            <li>
              <Link href="#">Disclaimer</Link>
            </li>
          </ul>
          <p className="mt-2">
            <Link href="" className="underline">
              careers@beautifulplanet.
            </Link>
          </p>
        </div>
      </div>

      {/* Data Grievance & Copyright */}
      <div className="mt-8 text-center border-t border-white/20 pt-4">
        <p>Devesh Dubey @BeautifulPlanet.ai</p>
      </div>

      {/* Social Icons */}
      <div className="mt-4 flex justify-center gap-4">
        <Link
          href="https://www.instagram.com/beautifulplanet.ai/?hl=en"
          className="text-xl"
        >
          <FaInstagram />
        </Link>
        <Link
          href="https://www.linkedin.com/company/beautiful-planet-ai/posts/?feedView=all"
          className="text-xl"
        >
          <FaLinkedin />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
