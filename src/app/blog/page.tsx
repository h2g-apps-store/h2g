import Link from "next/link";

export default function page() {
  return (
    <main>
      <section className="w-full h-screen bg-[#313b57]  flex justify-center items-center">
        <h1 className="text-6xl font-bold">Blog</h1>
      </section>
      <section className="bg-[#d6f4e2] p-10 sm:p-20">
        <div className="grid grid-col gap-10">
          <Link
            href="/blog"
            className="bg-white flex flex-col sm:flex-row shadow-xl rounded-lg "
          >
            <div className="bg-[url('/image.jpeg')] bg-cover  h-60 sm:h-full w-80 sm:w-[1000px]"></div>
            <div className="p-10 space-y-2">
              <h1 className="text-xl sm:text-4xl font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
              <h5 className="text-gray-400 ">Lundi 20-06-2024 | Herman Geku</h5>
              <p className="hidden sm:block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus enim aperiam dicta doloremque molestias, dolorem
                placeat dignissimos aliquid repellat aspernatur aliquam dolor,
                quisquam rem, voluptatum veritatis? Excepturi aperiam molestias
                porro.
              </p>
            </div>
          </Link>
          <Link
            href="/blog"
            className="bg-white flex flex-col sm:flex-row shadow-xl rounded-lg "
          >
            <div className="bg-[url('/techno/vite.png')] bg-cover  h-60 sm:h-full w-80 sm:w-[1000px]"></div>
            <div className="p-10 space-y-2">
              <h1 className="text-xl sm:text-4xl font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
              <h5 className="text-gray-400 ">Lundi 20-06-2024 | Herman Geku</h5>
              <p className="hidden sm:block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus enim aperiam dicta doloremque molestias, dolorem
                placeat dignissimos aliquid repellat aspernatur aliquam dolor,
                quisquam rem, voluptatum veritatis? Excepturi aperiam molestias
                porro.
              </p>
            </div>
          </Link>
          <Link
            href="/blog"
            className="bg-white flex flex-col sm:flex-row shadow-xl rounded-lg "
          >
            <div className="bg-[url('/techno/react.png')] bg-cover  h-60 sm:h-full w-80 sm:w-[1000px]"></div>
            <div className="p-10 space-y-2">
              <h1 className="text-xl sm:text-4xl font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
              <h5 className="text-gray-400 ">Lundi 20-06-2024 | Herman Geku</h5>
              <p className="hidden sm:block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus enim aperiam dicta doloremque molestias, dolorem
                placeat dignissimos aliquid repellat aspernatur aliquam dolor,
                quisquam rem, voluptatum veritatis? Excepturi aperiam molestias
                porro.
              </p>
            </div>
          </Link>
        </div>
        <div className="pt-8 flex items-center justify-center gap-3">
          <div className="p-3 bg-[#a1d9b9] hover:bg-[#aad7bd] rounded text-white font-bold cursor-pointer">
            {"<"}
          </div>
          <div className="flex gap-1">
            <div className="p-3 bg-[#313b57] text-white rounded cursor-pointer">
              15
            </div>
            <div className="p-3 bg-[#313b57] text-white rounded cursor-pointer">
              10
            </div>
          </div>
          <div className="p-3 bg-[#a1d9b9] hover:bg-[#aad7bd] text-white rounded font-bold cursor-pointer">
            {">"}
          </div>
        </div>
      </section>
    </main>
  );
}
