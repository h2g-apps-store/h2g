import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <main>
      <section className="static">
        <Header />
        <div className="flex">
          <div className="bg-[#d8e3ff] w-[2500px]">
            <div className="h-[700px] py-48 px-24 space-y-5">
              <h1 className="font-bold text-6xl text-[#313b57]">
                UI/UX & Brand Designer
              </h1>
              <h6 className="text-2xl text-[#313b57]">Brighton, UK</h6>
              <div>
                <p className="text-justify text-3xl font-light">
                  I'm Greg, a freelance graphic and web designer who specialises
                  in branding, user interface and user experience design. I help
                  businesses develop their on and offline identities.
                </p>
              </div>
            </div>
            <div className="bg-[#313b57] h-40"></div>
          </div>
          <div className="bg-blue-600 py-20 bg-[url('/image.jpeg')] object-cover p-80"></div>
        </div>
      </section>
      <section className="bg-[#313b57] h-screen pr-24 py-20">
        <div className="flex gap-32">
          <div className="bg-white max-h-[590px] h-[590px] w-[3000px] bg-[url('/fromscratch/5.jpg')] bg-cover bg-center rounded-tr-3xl rounded-br-3xl p-20 shadow-2xl shadow-gray-900"></div>
          <div className="flex flex-col items-left gap-4 justify-center">
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
      <section className="bg-[#d8e3ff]  py-10">
        <Marquee direction="left">
          <div className="flex gap-5 space-x-5 items-center">
            <Image
              src="/techno/html.png"
              className="ml-10"
              width={50}
              height={50}
              alt="html"
            />
            <Image src="/techno/css.png" width={50} height={50} alt="html" />
            <Image src="/techno/js.png" width={50} height={50} alt="html" />
            <Image src="/techno/ts.svg" width={50} height={50} alt="html" />
            <Image src="/techno/git.png" width={50} height={50} alt="html" />
            <Image src="/techno/github.svg" width={50} height={50} alt="html" />
            <Image src="/techno/prisma.png" width={50} height={50} alt="html" />
            <Image src="/techno/mysql.png" width={50} height={50} alt="html" />
            <Image src="/techno/vscode.png" width={50} height={50} alt="html" />
            <Image src="/techno/npm.png" width={50} height={50} alt="html" />
            <Image src="/techno/yarn.png" width={50} height={50} alt="html" />
            <Image src="/techno/pnpm.svg" width={50} height={50} alt="html" />
            <Image src="/techno/react.png" width={50} height={50} alt="html" />
            <Image src="/techno/redux.png" width={50} height={50} alt="html" />
            <Image src="/techno/rquery.png" width={50} height={50} alt="html" />
            <Image
              src="/techno/tailwind.jpeg"
              width={50}
              height={50}
              alt="html"
            />
            <Image src="/techno/vite.png" width={50} height={50} alt="html" />
            <Image src="/techno/next.png" width={50} height={50} alt="html" />
            <Image
              src="/techno/MongoDB.jpeg"
              width={50}
              height={50}
              alt="html"
            />
            <Image
              src="/techno/firebase.png"
              width={50}
              height={50}
              alt="html"
            />
          </div>
        </Marquee>
        <Marquee direction="right">
          <div className="flex gap-5 space-x-5 items-center">
            <Image
              src="/techno/html.png"
              className="ml-10"
              width={50}
              height={50}
              alt="html"
            />
            <Image src="/techno/css.png" width={50} height={50} alt="html" />
            <Image src="/techno/js.png" width={50} height={50} alt="html" />
            <Image src="/techno/ts.svg" width={50} height={50} alt="html" />
            <Image src="/techno/git.png" width={50} height={50} alt="html" />
            <Image src="/techno/github.svg" width={50} height={50} alt="html" />
            <Image src="/techno/prisma.png" width={50} height={50} alt="html" />
            <Image src="/techno/mysql.png" width={50} height={50} alt="html" />
            <Image src="/techno/vscode.png" width={50} height={50} alt="html" />
            <Image src="/techno/npm.png" width={50} height={50} alt="html" />
            <Image src="/techno/yarn.png" width={50} height={50} alt="html" />
            <Image src="/techno/pnpm.svg" width={50} height={50} alt="html" />
            <Image src="/techno/react.png" width={50} height={50} alt="html" />
            <Image src="/techno/redux.png" width={50} height={50} alt="html" />
            <Image src="/techno/rquery.png" width={50} height={50} alt="html" />
            <Image
              src="/techno/tailwind.jpeg"
              width={50}
              height={50}
              alt="html"
            />
            <Image src="/techno/vite.png" width={50} height={50} alt="html" />
            <Image src="/techno/next.png" width={50} height={50} alt="html" />
            <Image
              src="/techno/MongoDB.jpeg"
              width={50}
              height={50}
              alt="html"
            />
            <Image
              src="/techno/firebase.png"
              width={50}
              height={50}
              alt="html"
            />
          </div>
        </Marquee>
        {/* <Marquee direction="left">
          <div className="flex gap-5 space-x-5 items-center">
            <Image
              src="/techno/html.png"
              className="ml-10"
              width={50}
              height={50}
              alt="html"
            />
            <Image src="/techno/css.png" width={50} height={50} alt="html" />
            <Image src="/techno/js.png" width={50} height={50} alt="html" />
            <Image src="/techno/ts.svg" width={50} height={50} alt="html" />
            <Image src="/techno/git.png" width={50} height={50} alt="html" />
            <Image src="/techno/github.svg" width={50} height={50} alt="html" />
            <Image src="/techno/prisma.png" width={50} height={50} alt="html" />
            <Image src="/techno/mysql.png" width={50} height={50} alt="html" />
            <Image src="/techno/vscode.png" width={50} height={50} alt="html" />
            <Image src="/techno/npm.png" width={50} height={50} alt="html" />
            <Image src="/techno/yarn.png" width={50} height={50} alt="html" />
            <Image src="/techno/pnpm.svg" width={50} height={50} alt="html" />
            <Image src="/techno/react.png" width={50} height={50} alt="html" />
            <Image src="/techno/redux.png" width={50} height={50} alt="html" />
            <Image src="/techno/rquery.png" width={50} height={50} alt="html" />
            <Image
              src="/techno/tailwind.jpeg"
              width={50}
              height={50}
              alt="html"
            />
            <Image src="/techno/vite.png" width={50} height={50} alt="html" />
            <Image src="/techno/next.png" width={50} height={50} alt="html" />
            <Image
              src="/techno/MongoDB.jpeg"
              width={50}
              height={50}
              alt="html"
            />
            <Image
              src="/techno/firebase.png"
              width={50}
              height={50}
              alt="html"
            />
          </div>
        </Marquee> */}
      </section>
    </main>
  );
}
