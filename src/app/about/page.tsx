export default function page() {
  return (
    <main>
      <section className="flex h-screen bg-[#313b57] px-24 items-center">
        <div className="flex flex-col justify-start items-start gap-10 w-[60%]">
          <h1 className="text-6xl font-bold text-left text-[#d6f4e2]">
            Essentially, I make things that look nice and work well.
          </h1>
          <p className="text-3xl font-light text-[#d6f4e2]">
            It’s a bit more complicated than that I suppose, but that is the
            main aim; to present a brand's visual identity which successfully
            engages and guides a user's experience.
          </p>
        </div>
        <div className="flex justify-center items-center w-[40%]">
          <h1 className="text-6xl font-bold">h2g</h1>
        </div>
      </section>
      <section className="min-h-screen bg-[#d6f4e2] px-24 py-52 space-y-14">
        <div className="flex justify-between">
          <div className="w-[30%]">
            <h1 className="text-4xl font-bold">Expertise</h1>
          </div>
          <div className="w-[70%] space-y-5">
            <div>
              <h1 className="text-4xl font-bold mb-5">BRANDING</h1>
              <p className="font-light text-2xl">
                Whether you are starting a new business or are looking to
                refresh your current brand, I can help identify your market,
                develop and grow your brand identity. From the fundamentals of
                logo design and style guides, down to the minutiae of selecting
                the correct paper stock for your new season brochure.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-[30%]">
            <h1 className="text-4xl font-bold">Expertise</h1>
          </div>
          <div className="w-[70%] space-y-5">
            <div>
              <h1 className="text-4xl font-bold mb-5">BRANDING</h1>
              <p className="font-light text-2xl">
                Whether you are starting a new business or are looking to
                refresh your current brand, I can help identify your market,
                develop and grow your brand identity. From the fundamentals of
                logo design and style guides, down to the minutiae of selecting
                the correct paper stock for your new season brochure.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-[30%]">
            <h1 className="text-4xl font-bold">Expertise</h1>
          </div>
          <div className="w-[70%] space-y-5">
            <div>
              <h1 className="text-4xl font-bold mb-5">BRANDING</h1>
              <p className="font-light text-2xl">
                Whether you are starting a new business or are looking to
                refresh your current brand, I can help identify your market,
                develop and grow your brand identity. From the fundamentals of
                logo design and style guides, down to the minutiae of selecting
                the correct paper stock for your new season brochure.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#3a5244] min-h-screen px-24 py-20 flex justify-between gap-40">
        <div className="w-[40%] relative">
          <div className="border border-gray-200 absolute w-full bg-[url('/image.jpeg')] bg-cover h-full -top-48"></div>
        </div>
        <div className="w-[70%] space-y-5">
          <p className=" text-2xl text-justify font-light">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
            repudiandae iste fugit est optio, earum adipisci qui maxime magnam
            odit molestias quas officia minus commodi ratione aperiam fugiat,
            soluta nihil. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Assumenda repudiandae iste fugit est optio, earum adipisci qui
            maxime magnam odit molestias quas officia minus commodi ratione
            aperiam fugiat, soluta nihil.
          </p>
          <p className=" text-2xl text-justify font-light">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
            repudiandae iste fugit est optio, earum adipisci qui maxime magnam
            odit molestias quas officia minus commodi ratione aperiam fugiat,
            soluta nihil. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Assumenda repudiandae iste fugit est optio, earum adipisci qui
            maxime magnam odit molestias quas officia minus commodi ratione
            aperiam fugiat, soluta nihil.
          </p>
          <p className=" text-2xl text-justify font-light">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
            repudiandae iste fugit est optio, earum adipisci qui maxime magnam
            odit molestias quas officia minus commodi ratione aperiam fugiat,
            soluta nihil. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Assumenda repudiandae iste fugit est optio, earum adipisci qui
            maxime magnam odit molestias quas officia minus commodi ratione
            aperiam fugiat, soluta nihil.
          </p>
        </div>
      </section>
    </main>
  );
}
