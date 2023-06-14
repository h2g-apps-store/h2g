import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-black flex flex-col">
      <div className="p-10 sm:py-28 sm:px-24">
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-5xl font-bold">
            Want to work together?
          </h2>
          <p className="font-bold text-xl">YEAH YOU DO!</p>
          <Link href="/" className="text-3xl sm:text-6xl">
            Get in contact
          </Link>
        </div>
      </div>
      <div className="text-center bg-[#f4f4f4] py-4">
        <p>@kg.geku 🇨🇩 2023</p>
      </div>
    </footer>
  );
}
