"use client";
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { content } from "@/Contents/content";

const Projects = () => {
  const { Projects } = content;
  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 py-14 flex flex-col gap-5">
        <div>
          {/* <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2> */}
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
        </div>
        <div className="grid grid-cols-2 gap-10 sm:gap-20 [&>*:nth-child(odd)]:mt-10 [&>*:nth-child(even)]:mb-10">
          <a
            className="relative block w-full h-64
                      bg-gray-900 group shadow-xl"
            href="/work"
          >
            <div
              className="absolute bg-[url('/projets/p-1.png')] bg-cover bg-center inset-0
                            w-full h-64 group-hover:opacity-50"
            ></div>
            <div className="hidden sm:block relative p-10">
              <div className="mt-2">
                {/* Hidden content */}
                <div
                  className="transition-all transform
                                translate-y-8 opacity-0
                                group-hover:opacity-100
                                group-hover:translate-y-0"
                >
                  <div className="p-2">
                    <h1 className="text-4xl font-bold mb-2 dark_primary">
                      Welcome to GeeksforGeeks.
                    </h1>
                    {/* <p className="dark_primary text-xl">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsum distinctio et veritatis saepe tempora numquam
                      quibusdam.
                    </p> */}
                    {/* <button
                        className="px-4 py-2 text-sm
                                            text-white bg-green-600"
                      >
                        Learn more
                      </button> */}
                  </div>
                </div>
                {/* End of hidden content */}
              </div>
            </div>
          </a>
          <a
            className="relative block w-full h-64
                      bg-gray-900 group shadow-xl"
            href="/work"
          >
            <div
              className="absolute bg-[url('/projets/p-2.png')] bg-cover bg-center inset-0
                            w-full h-64 group-hover:opacity-50"
            ></div>
            <div className="hidden sm:block relative p-10">
              <div className="mt-2">
                {/* Hidden content */}
                <div
                  className="transition-all transform
                                translate-y-8 opacity-0
                                group-hover:opacity-100
                                group-hover:translate-y-0"
                >
                  <div className="p-2">
                    <h1 className="text-4xl font-bold mb-2 dark_primary">
                      Welcome to GeeksforGeeks.
                    </h1>
                    {/* <p className="dark_primary text-xl">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsum distinctio et veritatis saepe tempora numquam
                      quibusdam.
                    </p> */}
                    {/* <button
                        className="px-4 py-2 text-sm
                                            text-white bg-green-600"
                      >
                        Learn more
                      </button> */}
                  </div>
                </div>
                {/* End of hidden content */}
              </div>
            </div>
          </a>
          <a
            className="relative block w-full h-64
                      bg-gray-900 group shadow-xl"
            href="/work"
          >
            <div
              className="absolute bg-[url('/projets/p-3.jpeg')] bg-cover bg-center inset-0
                            w-full h-64 group-hover:opacity-50"
            ></div>
            <div className="hidden sm:block relative p-10">
              <div className="mt-2">
                {/* Hidden content */}
                <div
                  className="transition-all transform
                                translate-y-8 opacity-0
                                group-hover:opacity-100
                                group-hover:translate-y-0"
                >
                  <div className="p-2">
                    <h1 className="text-4xl font-bold mb-2 dark_primary">
                      Welcome to GeeksforGeeks.
                    </h1>
                    {/* <p className="dark_primary text-xl">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsum distinctio et veritatis saepe tempora numquam
                      quibusdam.
                    </p> */}
                    {/* <button
                        className="px-4 py-2 text-sm
                                            text-white bg-green-600"
                      >
                        Learn more
                      </button> */}
                  </div>
                </div>
                {/* End of hidden content */}
              </div>
            </div>
          </a>
          <a
            className="relative block w-full h-64
                      bg-gray-900 group shadow-xl"
            href="/work"
          >
            <div
              className="absolute bg-[url('/projets/p-4.jpeg')] bg-cover bg-center inset-0
                            w-full h-64 group-hover:opacity-50"
            ></div>
            <div className="hidden sm:block relative p-10">
              <div className="mt-2">
                {/* Hidden content */}
                <div
                  className="transition-all transform
                                translate-y-8 opacity-0
                                group-hover:opacity-100
                                group-hover:translate-y-0"
                >
                  <div className="p-2">
                    <h1 className="text-4xl font-bold mb-2 dark_primary">
                      Welcome to GeeksforGeeks.
                    </h1>
                    {/* <p className="dark_primary text-xl">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsum distinctio et veritatis saepe tempora numquam
                      quibusdam.
                    </p> */}
                    {/* <button
                        className="px-4 py-2 text-sm
                                            text-white bg-green-600"
                      >
                        Learn more
                      </button> */}
                  </div>
                </div>
                {/* End of hidden content */}
              </div>
            </div>
          </a>
          <a
            className="relative block w-full h-64
                      bg-gray-900 group shadow-xl"
            href="/work"
          >
            <div
              className="absolute bg-[url('/projets/p-5.png')] bg-cover bg-center inset-0
                            w-full h-64 group-hover:opacity-50"
            ></div>
            <div className="hidden sm:block relative p-10">
              <div className="mt-2">
                {/* Hidden content */}
                <div
                  className="transition-all transform
                                translate-y-8 opacity-0
                                group-hover:opacity-100
                                group-hover:translate-y-0"
                >
                  <div className="p-2">
                    <h1 className="text-4xl font-bold mb-2 dark_primary">
                      Welcome to GeeksforGeeks.
                    </h1>
                    {/* <p className="dark_primary text-xl">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsum distinctio et veritatis saepe tempora numquam
                      quibusdam.
                    </p> */}
                    {/* <button
                        className="px-4 py-2 text-sm
                                            text-white bg-green-600"
                      >
                        Learn more
                      </button> */}
                  </div>
                </div>
                {/* End of hidden content */}
              </div>
            </div>
          </a>
          <a
            className="relative block w-full h-64
                      bg-gray-900 group shadow-xl"
            href="/work"
          >
            <div
              className="absolute bg-[url('/projets/p-1.png')] bg-cover bg-center inset-0
                            w-full h-64 group-hover:opacity-50"
            ></div>
            <div className="hidden sm:block relative p-10">
              <div className="mt-2">
                {/* Hidden content */}
                <div
                  className="transition-all transform
                                translate-y-8 opacity-0
                                group-hover:opacity-100
                                group-hover:translate-y-0"
                >
                  <div className="p-2">
                    <h1 className="text-4xl font-bold mb-2 dark_primary">
                      Welcome to GeeksforGeeks.
                    </h1>
                    {/* <p className="dark_primary text-xl">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsum distinctio et veritatis saepe tempora numquam
                      quibusdam.
                    </p> */}
                    {/* <button
                        className="px-4 py-2 text-sm
                                            text-white bg-green-600"
                      >
                        Learn more
                      </button> */}
                  </div>
                </div>
                {/* End of hidden content */}
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
