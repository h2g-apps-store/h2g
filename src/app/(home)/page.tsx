import Header from "@/components/Header";

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
      <section className="bg-[#313b57] h-screen px-24 py-20">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
          voluptatibus eum unde fuga alias mollitia, laboriosam consequatur at
          minus veniam esse ex accusantium laborum earum vero dignissimos
          repellat perferendis. Temporibus?
        </p>
      </section>
      <section className="bg-[#d8e3ff] h-screen px-24 py-20">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
          possimus accusantium vel laborum! Minus rem molestiae, aperiam
          quibusdam non reiciendis officiis et, laborum quae fuga vel neque ab
          minima eos!
        </p>
      </section>
    </main>
  );
}
