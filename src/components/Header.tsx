"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className=" absolute w-full flex justify-between px-24  text-black py-10">
      <Link
        href="/"
        className={
          pathname == "/"
            ? "text-6xl font-light text-[#313b57]"
            : "text-6xl font-light text-[#aab5d0]"
        }
      >
        H2g
      </Link>
      <nav>
        <ul
          className={
            pathname == "/"
              ? "flex gap-10 text-[#313b57] text-2xl font-bold"
              : "flex gap-10 text-[#aab5d0] text-2xl font-bold"
          }
        >
          <li className="hover:underline underline-offset-8 decoration-4">
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
    </header>
  );
}
