import Link from "next/link";

export default function Header() {
  return (
    <header className=" absolute w-full flex justify-between px-5  text-black py-6">
      <Link href="/">H2g</Link>
      <nav>
        <ul className="flex gap-10">
          <li>
            <Link href="/work">Work</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
