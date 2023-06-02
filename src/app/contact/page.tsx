export default function page() {
  return (
    <main className="h-screen bg-[#313b57] px-24 py-40">
      <section className="w-full flex justify-between items-center gap-10 space-y-5">
        <div className="w-[60%] space-y-7 py-20">
          <h1 className="text-6xl font-bold">Let's Talk</h1>
          <p className="text-3xl w-[90%]">
            Drop me an email, or give me a call to discuss potentially working
            together.
          </p>
        </div>
        <div className="w-[40%] space-y-10">
          <div>
            <h1 className="text-2xl font-bold">Email</h1>
            <ul className="px-5">
              <li className="font-light text-3xl">kg.geku@gmail.com</li>
              <li className="font-light text-3xl">kg.geku@gmail.com</li>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Phone</h1>
            <ul className="px-5">
              <li className="font-light text-3xl">+243 817 877 472</li>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Medias Sociaux</h1>
            <ul className="px-5">
              <li className="font-light text-3xl">Twitter</li>
              <li className="font-light text-3xl">Linkdin</li>
              <li className="font-light text-3xl">Facebook</li>
              <li className="font-light text-3xl">Instagram</li>
            </ul>
          </div>

          <div>
            <h1 className="text-2xl font-bold">Authors</h1>
            <ul className="px-5">
              <li className="font-light text-3xl">Github</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
