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
      <header className="relative bg-[url('/images/background1.jpeg')] bg-cover bg-center h-screen flex items-center justify-center text-white">
        <div className="bg-black bg-opacity-50 p-6 sm:p-10 rounded-lg text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Welcome to Beautiful Planet.AI
          </h1>
          <p className="mt-4 text-base sm:text-lg">
            Leading the way in sustainable and AI-driven innovation.
          </p>
        </div>
      </header>

      {/* About Us Section */}
      <section
        id="about"
        className="py-16 px-4 md:px-8 bg-[#0e2342] text-white"
      >
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold">About Us</h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed">
              At Beautiful Planet, we believe that every action counts in
              building a sustainable future. Founded on the principles of
              environmental stewardship, innovation, and transparency, our
              company is dedicated to transforming the way organizations and
              communities address climate change. We specialize in a
              comprehensive suite of services—including carbon footprint, carbon
              emission analysis, and carbon neutrality strategies—that empower
              businesses to understand, manage, and reduce their environmental
              impact.
            </p>
            <button className="mt-6 bg-green-500 hover:bg-green-600 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-full text-base sm:text-lg font-semibold">
              Learn More
            </button>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/images/about.jpeg"
              alt="About Us"
              className="w-full max-w-xs sm:max-w-md h-auto rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0e2342]">
            Our Team
          </h2>
          {/* Team Grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
