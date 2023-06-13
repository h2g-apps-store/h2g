import { technoList } from "@/lib/technoBase";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function TechnoSlider() {
  return (
    <section className="bg-[#d8e3ff]  py-10">
      <Marquee direction="left">
        <div className="flex gap-5 space-x-5 items-center">
          {technoList &&
            technoList.map((item) => {
              return (
                <Image
                  key={item.id}
                  src={item?.imgUrl}
                  className="ml-10 cursor-pointer"
                  width={50}
                  height={50}
                  alt={item.name}
                  title={item.label}
                />
              );
            })}
        </div>
      </Marquee>
      <Marquee direction="right">
        <div className="flex gap-5 space-x-5 items-center">
          {technoList &&
            technoList.map((item) => {
              return (
                <Image
                  key={item.id}
                  src={item?.imgUrl}
                  className="ml-10 cursor-pointer"
                  width={50}
                  height={50}
                  alt={item.name}
                  title={item.label}
                />
              );
            })}
        </div>
      </Marquee>
    </section>
  );
}
