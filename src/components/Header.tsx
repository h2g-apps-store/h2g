"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();

  const [visible, setVisible] = useState<boolean>(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos <= 40) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };
  console.log(visible);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header className="absolute w-full flex flex-col sm:flex-row justify-between sm:items-center sm:px-24  text-black  sm:py-10">
      <Link
        href="/"
        className={
          pathname == "/"
            ? "text-3xl p-10 sm:p-0 sm:text-6xl font-light text-[#aab5d0] sm:text-[#313b57]"
            : "text-3xl p-10 sm:p-0 sm:text-6xl font-light text-[#aab5d0]"
        }
      >
        H2g
      </Link>
      <nav className="hidden sm:block">
        <ul
          className={
            pathname == "/"
              ? "flex justify-between gap-10 text-[#d8e3ff] text-2xl font-bold"
              : "flex justify-between gap-10 text-[#aab5d0] text-2xl font-bold"
          }
        >
          <li className="hover:underline underline-offset-8 decoration-4 text-xl">
            <Link href="/work">Work</Link>
          </li>
          <li className="hover:underline underline-offset-8 decoration-4">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:underline underline-offset-8 decoration-4">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="hover:underline underline-offset-8 decoration-4">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <nav
        className={
          visible === true
            ? "sm:hidden fixed  top-0 bg-gray-500 py-2 px-3 w-full"
            : "hidden"
        }
      >
        <ul
          className={
            pathname == "/"
              ? "flex justify-between gap-10 text-[#d8e3ff] text-2xl font-bold"
              : "flex justify-between gap-10 text-[#aab5d0] text-2xl font-bold"
          }
        >
          <li className="hover:underline underline-offset-8 decoration-4 text-xl">
            <Link href="/work">Work</Link>
          </li>
          <li className="hover:underline underline-offset-8 decoration-4 text-xl">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:underline underline-offset-8 decoration-4 text-xl">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="hover:underline underline-offset-8 decoration-4 text-xl">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
