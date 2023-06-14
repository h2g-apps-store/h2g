export default function page() {
  return (
    <main className="h-screen">
      <section className="bg-[#313b57] px-10 py-28 sm:px-24 sm:py-40 w-full flex flex-col sm:flex-row justify-between items-center gap-10 space-y-5">
        <div className="sm:w-[60%] space-y-7 sm:py-20">
          <h1 className="text-3xl sm:text-6xl font-bold">Let's Talk</h1>
          <p className="text-xl text-justify sm:text-3xl w-[90%]">
            Drop me an email, or give me a call to discuss potentially working
            together.
          </p>
        </div>
        <div className="sm:w-[40%] space-y-10">
          <div>
            <h1 className="text-2xl font-bold">Email</h1>
            <ul className="px-5">
              <li className="font-light text-xl sm:text-3xl">
                kg.geku@gmail.com
              </li>
              <li className="font-light text-xl sm:text-3xl">
                kg.geku@gmail.com
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Phone</h1>
            <ul className="px-5">
              <li className="font-light text-xl sm:text-3xl">
                +243 817 877 472
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Medias Sociaux</h1>
            <ul className="px-5">
              <li className="font-light text-xl sm:text-3xl">Twitter</li>
              <li className="font-light text-xl sm:text-3xl">Linkdin</li>
              <li className="font-light text-xl sm:text-3xl">Facebook</li>
              <li className="font-light text-xl sm:text-3xl">Instagram</li>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Authors</h1>
            <ul className="px-5">
              <li className="font-light text-xl sm:text-3xl">Github</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
