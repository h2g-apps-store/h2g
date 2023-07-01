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
        <div className="border border-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
          laboriosam nulla adipisci, eligendi veniam tenetur magni hic possimus
          blanditiis sint quia, dolor optio quam odit voluptas iusto
          necessitatibus molestiae distinctio!
        </div>
      </div>
    </section>
  );
};

export default Projects;
