import { content } from "@/Contents/content";
import Image from "next/image";

const Hireme = () => {
  const { Hireme } = content;

  return (
    <section className="bg-white">
      <div className="md:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down">
          {Hireme.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Hireme.subtitle}
        </h4>
        <br />
        <div className="flex items-center md:flex-row flex-col-reverse ">
          <Image
            src={Hireme.image1}
            alt={Hireme.title}
            data-aos="fade-right"
            width={400}
            height={400}
            className="max-w-sm md:block hidden"
          />
          <Image
            src={Hireme.image2}
            alt={Hireme.title}
            data-aos="fade-up"
            className="max-w-sm md:hidden"
            height={400}
            width={400}
          />
          <div
            data-aos="fade-left"
            className="border-2 border-dark_primary max-w-sm
           p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]"
          >
            <p className="leading-7">{Hireme.para}</p>
            <br />
            <button className="btn bg-dark_primary text-white">
              {Hireme.btnText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hireme;
