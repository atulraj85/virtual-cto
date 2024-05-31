"use client";
import Image from "next/image";
import { useState } from "react";
import Options from "./Options";
import Link from "next/link";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="-mt-15 overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col flex-wrap lg:flex-row lg:flex-nowrap lg:items-center lg:justify-between lg:gap-4 xl:gap-25">
            <div className="md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                {/* Hire Virtual CTO Today */}
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Hire Virtual CTO{" "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                  Today
                </span>
              </h1>
              <p>
                Virtual CTO is an on-demand CTO service offering flexible,
                cost-effective solutions for any business size.
              </p>

              <div className="mt-10">
                <div className="flex flex-wrap gap-5">
                  <button
                    aria-label="get started button"
                    className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                  >
                    <Link href="tel:+91-78400-79095"> Call Us</Link>
                    <br></br>
                  </button>
                  {/* <button
                    aria-label="get started button"
                    className="flex rounded-full bg-gray-200 px-7.5 py-2.5 text-black duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                  >
                    Learn More
                  </button> */}
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 md:mt-6">
              <Options />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
