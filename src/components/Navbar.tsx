"use client";

import { content } from "@/Contents/content";
import { createElement, useState } from "react";

const Navbar = () => {
  const { nav } = content;
  const [active, setActive] = useState(0);

  return (
    <div className="w-full flex justify-center">
      <nav className="hidden fixed w-full  z-[999] lg:flex justify-center gap-10 items-center px-6  py-3 backdrop-blur-md  bg-green-400 text-dark_primary duration-300">
        {nav.map((item, i) => (
          <a
            key={item.id}
            href={item.link}
            onClick={() => setActive(i)}
            className={`text-xl p-2.5 rounded-full sm:cursor-pointer 
     ${i === active && "bg-dark_primary text-white"} `}
          >
            {createElement(item.icon)}
          </a>
        ))}
      </nav>
      <nav className="lg:hidden fixed  z-[999] flex items-center gap-5 bg-slate-200/60 px-6 py-3 backdrop-blur-md rounded-full text-dark_primary duration-300 bottom-10">
        {nav.map((item, i) => (
          <a
            key={item.id}
            href={item.link}
            onClick={() => setActive(i)}
            className={`text-xl p-2.5 rounded-full sm:cursor-pointer 
     ${i === active && "bg-dark_primary text-white"} `}
          >
            {createElement(item.icon)}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
