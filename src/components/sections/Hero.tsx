// import content
import { content } from "@/Contents/content";
import Image from "next/image";
import Link from "next/link";
import { HiDownload } from "react-icons/hi";

const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center gap-60">
        <div
          data-aos="slide-left"
          data-aos-delay="1000"
          className="absolute h-full w-6/12 top-0 right-0 bg-[#065064] bottom-0 -z-10"
        >
          <h1 className="hidden rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA]">
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>

        {/* first col */}
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <h2 className="mb-3">
            Salut 👋🏾, Je suis <br /> Herman Geku.
          </h2>
          {/* 
          <br /> */}
          {/* <div className="hidden lg:flex justify-end">
            <button className="btn">{hero.btnText}</button>
          </div> */}
          <div className="flex flex-col gap-10  mb-28 bg-white p-5 sm:p-0 sm:bg-none">
            <div
              data-aos="fade-down"
              data-aos-delay="300"
              className="flex items-center w-80 gap-5"
            >
              {/* <h3>H</h3> */}
              <p className="text-xl text-left tracking-wide leading-loose text-dark_primary">
                Je suis{" "}
                <span className="font-bold">Développeur full stack</span>{" "}
                passionné et créatif. Je donne vie aux idées à travers le code
                en créant des <span className="italic">Site Web👨🏾‍💻</span>
                <span className="italic">Application Mobile📱</span> attrayants
                et fonctionnels.
                <Link
                  href="#0"
                  className="w-full mt-3 px-5 flex items-center justify-between border-2 font-bold border-gray-200 rounded-full hover:bg-gray-200 border-gray-200"
                >
                  <span> Telecharger mon Cv</span>
                  <span>
                    <HiDownload />
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* sec col */}
        <div className="md:h-[37rem] h-96">
          <Image
            src={hero.image}
            data-aos="slide-up"
            alt="img-cover"
            width={430}
            height={430}
            className="lg:h-full  object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
