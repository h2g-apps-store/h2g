import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-black flex flex-col">
      <div className="py-28">
        <div className="px-24 space-y-6">
          <h2 className="text-5xl font-bold">Want to work together?</h2>
          <p className="font-bold text-xl">YEAH YOU DO!</p>
          <Link href="/" className="text-6xl">
            Get in contact
          </Link>
        </div>
      </div>
      <div className="text-center bg-[#f4f4f4] py-4">
        <p>Proudly made in 🇨🇩 2023</p>
      </div>
    </footer>
  );
}
