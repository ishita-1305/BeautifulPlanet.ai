import React from "react";
import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0e2342] text-white py-8 px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
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

        {/* Projects */}
        {/* <div>
          <h3 className="font-semibold">PROJECTS</h3>
          <ul className="space-y-1">
            <li>Regen Ag Indo-Gangetic Plains</li>
            <li>Regen Ag Gujarat, India</li>
            <li>Afforestation, Nepal</li>
            <li>Afforestation, South India</li>
            <li>Afforestation, Bangladesh</li>
            <li>Biochar Artisan, India</li>
            <li>Biochar High-Tech, India</li>
            <li>ERW India</li>
          </ul>
        </div> */}

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
// import Link from "next/link";
// import {
//   FaGithub,
//   FaLinkedin,
//   FaTwitter,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaPhone,
// } from "react-icons/fa";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-gray-800 text-white py-12 px-4 md:px-8 lg:px-12">
//       <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
//         {" "}
//         {/* items-start for better alignment */}
//         <div className="md:w-1/3 mb-6 md:mb-0">
//           {" "}
//           {/* Company Info */}
//           <p className="text-lg font-semibold">
//             &copy; {currentYear} Beautiful Planet.AI
//           </p>
//           <p className="text-sm mt-2">
//             Crafted with ❤️ in Next.js & TypeScript
//           </p>
//           <p className="mt-4">X.Y.Z {/* Example address */}</p>
//           <p className="mt-2 flex items-center">
//             <FaEnvelope className="mr-2" /> info@example.com{" "}
//             {/* Example email */}
//           </p>
//           <p className="mt-2 flex items-center">
//             <FaPhone className="mr-2" /> +1 (555) 123-4567 {/* Example phone */}
//           </p>
//         </div>
//         <div className="md:w-1/3 mb-6 md:mb-0">
//           {" "}
//           {/* Useful Links */}
//           <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
//           <ul className="space-y-2">
//             <li>
//               <Link
//                 href="/about"
//                 className="hover:text-gray-300 transition duration-300"
//               >
//                 About Us
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/services"
//                 className="hover:text-gray-300 transition duration-300"
//               >
//                 Our Services
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/blog"
//                 className="hover:text-gray-300 transition duration-300"
//               >
//                 Blog
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/contact"
//                 className="hover:text-gray-300 transition duration-300"
//               >
//                 Contact Us
//               </Link>
//             </li>
//           </ul>
//         </div>
//         <div className="md:w-1/3">
//           {" "}
//           {/* Social & Contact */}
//           <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
//           <div className="flex space-x-6 mb-4">
//             <Link
//               href="https://github.com/yourusername"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaGithub className="text-2xl hover:text-gray-300 transition duration-300" />
//             </Link>
//             <Link
//               href="https://www.linkedin.com/in/yourprofile"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaLinkedin className="text-2xl hover:text-gray-300 transition duration-300" />
//             </Link>
//             <Link
//               href="https://twitter.com/yourusername"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaTwitter className="text-2xl hover:text-gray-300 transition duration-300" />
//             </Link>
//           </div>
//           {/* Newsletter Signup (Optional) */}
//           <div>
//             <h5 className="text-md font-semibold mb-2">
//               Subscribe to our Newsletter
//             </h5>
//             <p className="text-sm mb-2">
//               Stay updated with our latest news and offers.
//             </p>
//             <div className="flex">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="bg-gray-700 text-white px-3 py-2 rounded-l"
//               />
//               <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r">
//                 Subscribe
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
