"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const data = [
  {
    number: "01",
    title: "Manager of Project Teams",
    description:
      "Responsible for overseeing project teams, ensuring timely delivery, and managing resources effectively. In charge of employee growth and development, providing mentorship and guidance to enhance their skills and knowledge.",
  },
  {
    number: "02",
    title: "Chief Technology Officer",
    description:
      "Directs the organization's technology strategy and ensures it aligns with business goals. Brings creative and innovative ideas, driving technological advancements. Oversees the technical team and ensures successful technology implementations.",
  },
];

const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/about-light-01.png"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/about-dark-01.png"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
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
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <span className="font-medium uppercase text-black dark:text-white"></span>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                What is the role of Virtual CTO?{" "}
              </h2>

              {data.map((item, index) => (
                <div key={index} className="mt-7.5 flex items-center gap-5">
                  <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                    <p className="text-metatitle2 font-semibold text-black dark:text-white">
                      {item.number}
                    </p>
                  </div>
                  <div className="w-3/4">
                    <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                      {item.title}
                    </h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}

      {/* <!-- ===== About Two Start ===== --> */}
      <section>
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
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
              className="animate_left md:w-1/2"
            >
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                What Is CTO Responsible for? {"   "}
              </h2>
              <p>
                The responsibilities of a CTO remote can vary greatly depending
                on the size and type of company. It is important to know if you
                want to hire CTO that this specialist is an executive top
                manager whose position involves the strategic solution of
                technical issues in the organization and does not imply
                participation in the development of specific tasks and projects.
              </p>
              <div>
                <a
                  href="#"
                  className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                >
                  <span className="duration-300 group-hover:pr-2">
                    Know More
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                  >
                    <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                  </svg>
                </a>
              </div>
            </motion.div>
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
              className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="./images/about/about-light-02.svg"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="./images/about/about-dark-02.svg"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}
    </>
  );
};

export default About;
