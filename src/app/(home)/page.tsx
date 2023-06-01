import Header from "@/components/Header";

export default function Home() {
  return (
    <main>
      <section className="static">
        <Header />
        <div className="flex">
          <div className="bg-[#d8e3ff] w-[2500px]">
            <div className="h-[700px] p-40">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              sunt sint esse consequatur id officia maxime, sit accusantium fuga
              doloremque nam vitae doloribus error! Cumque blanditiis dolores
              rerum dignissimos repellat?
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
