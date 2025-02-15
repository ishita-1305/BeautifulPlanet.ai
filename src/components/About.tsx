import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section className="py-20 px-20 bg-[#0e2342] text-white">
      <div className="container mx-auto flex items-center justify-between space-x-12">
        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold">About Us</h2>
          <p className="mt-4 text-lg">
            At Beautiful Planet, we believe that every action counts in building
            a sustainable future. Founded on the principles of environmental
            stewardship, innovation, and transparency, our company is dedicated
            to transforming the way organizations and communities address
            climate change. We specialize in a comprehensive suite of
            services—including carbon footprint, carbon emission analysis, and
            carbon neutrality strategies—that empower businesses to understand,
            manage, and reduce their environmental impact.
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
            className="w-full h-auto rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
