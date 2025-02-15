"use client";

import React from "react";

const KeyMetricsImpact: React.FC = () => {
  const metrics = [
    {
      title: "Our Impact",
      description:
        "Our focus is on creating measurable reductions in carbon emissions by integrating AI-driven solutions that optimize energy use, streamline processes, and promote sustainable practices across industries.",
    },
    {
      title: "Neutrality",
      description:
        "By 2030, we are committed to achieving net-zero emissions across all of our operations and projects. This goal will be supported by advanced tracking, carbon offset programs, and energy-efficient technologies.",
    },
    {
      title: "Growth",
      description:
        "We will drive long-term, sustainable growth by developing cutting-edge AI tools to optimize resource management, reduce waste, and empower organizations to make data-driven decisions for a greener future.",
    },
    {
      title: "Key Metrics",
      description:
        "Our success will be measured by the amount of carbon saved, the energy efficiency improvements we achieve, and the number of companies we partner with to integrate sustainable AI solutions.",
    },
  ];

  return (
    <div className="relative bg-gray-100 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0e2342] mb-6 sm:mb-8">
          Our Vision
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-lg shadow-lg p-6 bg-white w-full"
            >
              <div className="text-2xl sm:text-3xl font-bold text-[#0e2342] text-center">
                {metric.title}
              </div>
              <div className="text-md sm:text-lg text-gray-700 mt-3 sm:mt-4 text-justify leading-relaxed max-w-md">
                {metric.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyMetricsImpact;
