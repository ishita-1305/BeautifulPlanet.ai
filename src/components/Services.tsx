"use client";
import { useState } from "react";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Web Development",
    shortDescription: "We build fast and scalable web applications.",
    longDescription:
      "Our web development services include modern, scalable, and fully responsive applications. We use the latest technologies such as React, Next.js, and TypeScript to ensure a seamless user experience. Whether it's an e-commerce platform, portfolio site, or business application, we deliver high-quality solutions tailored to your needs.",
    image: "/images/background1.jpeg",
  },
  {
    id: 2,
    title: "UI/UX Design",
    shortDescription: "Crafting intuitive and visually appealing designs.",
    longDescription:
      "We focus on creating user-friendly and visually stunning designs that enhance user experience. Our UI/UX design process includes wireframing, prototyping, and testing to ensure an optimal experience for your users. We specialize in Figma, Adobe XD, and other modern design tools.",
    image: "/images/background2.jpg",
  },
  {
    id: 3,
    title: "SEO Optimization",
    shortDescription: "Improve your website ranking on search engines.",
    longDescription:
      "Our SEO optimization services help improve your website’s visibility on search engines. We conduct keyword research, on-page SEO, and backlink building to boost organic traffic. Our strategies align with Google’s latest algorithm updates to ensure long-term success.",
    image: "/images/background3.jpeg",
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<{
    id: number;
    title: string;
    shortDescription: string;
    longDescription: string;
    image: string;
  } | null>(null);

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-4xl font-bold text-center mb-10 text-[#0e2342] ">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setSelectedService(service)}
            >
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={250}
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mt-2">{service.shortDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-2xl text-center relative">
            <button
              className="absolute top-3 right-3 text-gray-600 text-2xl font-bold hover:text-gray-900"
              onClick={() => setSelectedService(null)}
            >
              ×
            </button>
            <Image
              src={selectedService.image}
              alt={selectedService.title}
              width={500}
              height={300}
              className="w-full h-60 object-cover rounded-md"
            />
            <h3 className="text-3xl font-bold text-gray-900 mt-4">
              {selectedService.title}
            </h3>
            <p className="text-gray-700 mt-3 text-left px-4">
              {selectedService.longDescription}
            </p>
            <button
              className="mt-5 bg-[#0e2342] text-white px-5 py-2 rounded-md hover:bg-[#0e2342]"
              onClick={() => setSelectedService(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
