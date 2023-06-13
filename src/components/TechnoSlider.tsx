import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function TechnoSlider() {
  return (
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
          <Image src="/techno/MongoDB.jpeg" width={50} height={50} alt="html" />
          <Image src="/techno/firebase.png" width={50} height={50} alt="html" />
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
          <Image src="/techno/MongoDB.jpeg" width={50} height={50} alt="html" />
          <Image src="/techno/firebase.png" width={50} height={50} alt="html" />
        </div>
      </Marquee>
    </section>
  );
}
