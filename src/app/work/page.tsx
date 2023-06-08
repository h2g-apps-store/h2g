export default function page() {
  return (
    <main>
      <section className="w-full bg-[#313b57] px-24 py-36 flex flex-col justify-center items-center space-y-5">
        <h1 className="text-6xl font-bold">Work</h1>
      </section>
      <section className="bg-[#d6f4e2] p-20">
        {/* [&>*:nth-child(odd)]:bg-red-500 [&>*:nth-child(even)]:bg-blue-500 */}
        <div className="grid grid-cols-2 gap-10 [&>*:nth-child(odd)]:mt-10 [&>*:nth-child(even)]:mb-10">
          <div className="border border-black bg-[url('/image.jpeg')]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            labore optio explicabo eos repudiandae ratione a tempora nisi quis
            odio quas qui eveniet nostrum, sequi quod, mollitia, voluptate
            minus. Hic.
          </div>
          <div className="border border-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            labore optio explicabo eos repudiandae ratione a tempora nisi quis
            odio quas qui eveniet nostrum, sequi quod, mollitia, voluptate
            minus. Hic.
          </div>
          <div className="border border-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            labore optio explicabo eos repudiandae ratione a tempora nisi quis
            odio quas qui eveniet nostrum, sequi quod, mollitia, voluptate
            minus. Hic.
          </div>
          <div className="border border-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            labore optio explicabo eos repudiandae ratione a tempora nisi quis
            odio quas qui eveniet nostrum, sequi quod, mollitia, voluptate
            minus. Hic.
          </div>
          <div className="border border-black bg-[url('/image.jpeg')]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            labore optio explicabo eos repudiandae ratione a tempora nisi quis
            odio quas qui eveniet nostrum, sequi quod, mollitia, voluptate
            minus. Hic.
          </div>
          <div className="border border-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            labore optio explicabo eos repudiandae ratione a tempora nisi quis
            odio quas qui eveniet nostrum, sequi quod, mollitia, voluptate
            minus. Hic.
          </div>
          <div className="border border-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            labore optio explicabo eos repudiandae ratione a tempora nisi quis
            odio quas qui eveniet nostrum, sequi quod, mollitia, voluptate
            minus. Hic.
          </div>
          <div className="border border-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            labore optio explicabo eos repudiandae ratione a tempora nisi quis
            odio quas qui eveniet nostrum, sequi quod, mollitia, voluptate
            minus. Hic.
          </div>
        </div>
      </section>
    </main>
  );
}
