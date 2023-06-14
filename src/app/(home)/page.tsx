import Header from "@/components/Header";
import TechnoSlider from "@/components/TechnoSlider";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="static">
        <Header />
        <div className="flex flex-col sm:flex-row">
          <div className="bg-[#d8e3ff] sm:w-[2500px]">
            <div className="sm:h-[700px] p-10 sm:py-48 sm:px-24 space-y-5">
              <h1 className="font-bold text-6xl text-[#313b57]">
                Web Deloper, Frontend
                {/* UI/UX & Brand Designer */}
              </h1>
              <h6 className="text-2xl text-[#313b57]">Kinshasa, DRC</h6>
              <div>
                <p className="text-justify text-3xl font-light">
                  Hi, I'm <span className="font-bold">Herman GEKU</span>, a
                  freelance{" "}
                  <span className="italic">frontend web developer</span>. I
                  specialize in branding, user interface (UI) and user
                  experience (UX) design. I help companies develop their online
                  and offline identity by creating visually appealing and
                  user-friendly websites and web applications.
                </p>
              </div>
            </div>
            <div className="hidden sm:block bg-[#313b57] h-40 "></div>
          </div>
          <div className="bg-blue-600 h-96 sm:h-auto py-20 bg-[url('/me/quatre.png')] bg-cover sm:p-80 order-first sm:order-last"></div>
        </div>
      </section>
      <section className="bg-[#313b57] h-screen sm:pr-24 py-20">
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-32 mt-9">
          <div className="bg-white sm:max-h-[590px] sm:h-[590px] w-80 sm:w-[3000px] bg-[url('/fromscratch/5.jpg')] bg-cover bg-center rounded-tr-3xl rounded-br-3xl p-20 shadow-2xl shadow-gray-900"></div>
          <div className="flex flex-col px-10 items-left gap-4 justify-center">
            <h1 className="text-5xl font-bold">Consul Assure</h1>
            <p className="text-justify text-xl">
              Find out how I branded a newly formed data migration company and
              created their web presence using a neon colour palette and
              illustrated animations.
            </p>
            <Link
              href="/work"
              className="bg-gray-200 text-3xl text-center font-bold p-3 rounded-lg shadow-lg border-4 border-[#313b57] hover:border-4 hover:border-gray-200 hover:bg-[#313b57] hover:text-gray-200"
            >
              View project
            </Link>
          </div>
        </div>
      </section>
      <section className="p-10 sm:p-20">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        iusto dignissimos praesentium illo ipsam minima, ut quaerat harum
        delectus vel fugit eaque magni recusandae sunt ipsa. Voluptas nostrum
        voluptatibus veritatis?
      </section>
      <TechnoSlider />
    </main>
  );
}
