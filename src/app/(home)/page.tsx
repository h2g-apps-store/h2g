import Header from "@/components/Header";

export default function Home() {
  return (
    <main>
      <section className="static">
        <Header />
        <div className="flex">
          <div className="bg-[#d8e3ff] w-[2500px]">
            <div className="h-[700px] py-40 px-32 space-y-5">
              <h1 className="font-bold text-6xl">UI/UX & Brand Designer</h1>
              <h6 className="text-2xl">Brighton, UK</h6>
              <div>
                <p className="text-justify text-3xl">
                  I'm Greg, a freelance graphic and web designer who specialises
                  in branding, user interface and user experience design. I help
                  businesses develop their on and offline identities.
                </p>
              </div>
            </div>
            <div className="bg-[#313b57] h-40"></div>
          </div>
          <div className="bg-blue-600 py-20 bg-[url('/img.jpeg')] object-cover p-80"></div>
        </div>
      </section>
      <section className="bg-[#313b57] h-screen"></section>
      <section className="bg-[#d8e3ff] h-screen"></section>
    </main>
  );
}
