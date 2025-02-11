import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Image from "next/image";

const teamMembers = [
  {
    name: "Devesh Dubey",
    role: "Co-founder and CEO",
    image: "/images/devesh.jpg",
    linkedin: "#",
  },
  {
    name: "Devesh Dubey",
    role: "Co-founder and COO",
    image: "/images/devesh.jpg",
    linkedin: "#",
  },
  {
    name: "Devesh Dubey",
    role: "Co-founder and CTO",
    image: "/images/devesh.jpg",
    linkedin: "#",
  },
];

export default function AboutUs() {
  return (
    <div>
      <Navbar />
      {/* Banner */}
      <header className="relative bg-[url('/images/background1.jpeg')] bg-cover bg-center h-[100vh] flex items-center justify-center text-white ">
        <div className="bg-black bg-opacity-50 p-10 rounded-lg">
          <h1 className="text-5xl font-bold">Welcome to Beautiful Planet.AI</h1>
          <p className="mt-4 text-lg">
            Leading the way in sustainable and AI-driven innovation.
          </p>
        </div>
      </header>

      {/* About Us Section */}
      <section id="about" className="py-20 px-20 bg-[#0e2342] text-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-x-12">
          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold">About Us</h2>
            <p className="mt-4 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              illo quas iste eligendi odit aperiam corporis voluptate cupiditate
              ducimus rerum dignissimos ullam necessitatibus exercitationem
              voluptatibus dolore.
            </p>
            <button className="mt-6 bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-full text-lg font-semibold">
              Learn More
            </button>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/images/about.jpeg"
              alt="About Us"
              className="w-half h-auto rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16 ">
        <div className="container mx-auto px-8">
          <div className="px-6 md:px-16">
            <h2 className="text-4xl font-bold text-[#0e2342]">Our Team</h2>
          </div>

          {/* Team Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-16">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-[#a5bdc1] rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="p-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="rounded-xl w-full h-auto"
                  />
                </div>
                <div className="bg-[#0e2342] text-white text-center py-4 px-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-sm mt-1">{member.role}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/images/linkedin.png"
                      alt="LinkedIn"
                      className="w-6 h-6 mx-auto mt-3"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
