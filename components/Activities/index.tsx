"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CTOservices = [
  {
    title: "IT Infrastructure Assessment",
    description: [
      "Evaluate current IT infrastructure and align with business goals.",
      "Determine necessary software and manage resource utilization.",
    ],
  },
  {
    title: "Technological Development Planning",
    description: [
      "Develop a short-term and long-term tech development plan.",
      "Advise on global trends and strategic decisions for large companies.",
    ],
  },
  {
    title: "Trend Identification and Impact",
    description: [
      "Identify trends that enhance organizational efficiency.",
      "Organize IT department to support business growth and development.",
    ],
  },
  {
    title: "Team Management and Communication",
    description: [
      "Manage IT teams and facilitate communication between departments.",
      "Ensure smooth collaboration across different teams.",
    ],
  },
  {
    title: "Technical Vision and Client Communication",
    description: [
      "Act as the technical face of the company.",
      "Communicate project progress and goals to clients.",
    ],
  },
  {
    title: "Policy and Procedure Development",
    description: [
      "Develop policies to improve products and services.",
      "Identify necessary hires and tools to address business challenges.",
    ],
  },
  {
    title: "Balancing Business and Technology Strategies",
    description: [
      "Maintain and update the technology stack.",
      "Align technology decisions with business strategy and resource management.",
    ],
  },
  {
    title: "Technology’s Impact on Performance",
    description: [
      "Assess how technology affects employee performance.",
      "Make strategic decisions to optimize overall technological impact.",
    ],
  },
  {
    title: "CTO Advisory Services",
    description: [
      "Provide consulting on technology strategy and governance.",
      "Develop IT budget, monitor performance, and recommend KPIs.",
    ],
  },
  {
    title: "IT Project Delivery and Management",
    description: [
      "Lead technology projects from development to integration.",
      "Access on-demand resources for project execution.",
    ],
  },
  {
    title: "Neutral Software Analysis",
    description: [
      "Conduct requirement analysis and tool selection.",
      "Establish an optimized IT ecosystem for future readiness.",
    ],
  },
  {
    title: "Technology Integration",
    description: [
      "Integrate technology seamlessly into the company’s IT framework.",
      "Ensure zero-downtime and smooth information flow.",
    ],
  },
  {
    title: "Technology Analysis and Selection",
    description: [
      "Perform IT audits and create technology roadmaps.",
      "Evaluate and select technologies to enhance resilience and reduce risks.",
    ],
  },
  {
    title: "Solution Determination",
    description: [
      "Choose cost-effective solutions considering the latest standards and compliance.",
      "Tailor solutions for startups, small, mid-size, and large businesses.",
    ],
  },
  {
    title: "Technology Roadmap Development",
    description: [
      "Plan and track technology deployments and project lifecycles.",
      "Define KPIs and performance checks to maximize ROI.",
    ],
  },
  {
    title: "Cloud Strategy Formulation",
    description: [
      "Develop strategies for cloud selection and migration.",
      "Ensure rapid, low-risk adoption of cloud infrastructure.",
    ],
  },
  {
    title: "Business Continuity Planning",
    description: [
      "Formulate disaster recovery and security plans.",
      "Create BCP and contingency plans for various business sizes.",
    ],
  },
];

const Activities: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-8 md:flex-nowrap md:items-center md:justify-center md:gap-0 ">
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            x: 20,
          },
          visible: {
            opacity: 1,
            x: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
        className="animate_top"
      >
        <div className="container mx-auto  max-w-c-1390 p-4">
          <h3 className="py-6 text-center text-4xl font-bold text-gray-800">
            Activities of a Virtual CTO
          </h3>
          <div className="mt-2 gap-6 p-4 sm:p-1 md:columns-2 lg:columns-3">
            {CTOservices.map((service) => (
              <div className="animate-in zoom-in duration-200">
                <div className="relative z-0 mb-6 flex transform break-inside-avoid flex-col space-y-2 rounded-lg bg-white p-4 ring-1 ring-gray-300 duration-200 hover:shadow-md hover:ring-2 hover:ring-primary">
                  <div className="container mx-auto max-w-6xl p-4">
                    <div className="py-6 text-center text-2xl font-bold text-gray-800">
                      {service.title}
                    </div>
                    <ul className="mt-8 space-y-3 font-medium">
                      {service.description.map((item, index) => (
                        <li className="flex items-start lg:col-span-1">
                          <div className="flex-shrink-0">
                            <svg
                              className="h-5 w-5 text-primary"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </div>
                          <p className="ml-3 text-lg leading-5 text-gray-600">
                            {item}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Activities;
