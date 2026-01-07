import { Link } from "react-router-dom";
import home from "../assets/home-6.jpg";
// import books from "../assets/books.svg"; // <-- foreground image

const Hero = () => {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${home})`}}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-20">

        {/* TEXT */}
        <div className="max-w-xl">
          <h1 className="text-black md:text-6xl font-light uppercase tracking-widest leading-tight">
            Impressive Poems
          </h1>

          <h5 className="text-black md:text-5xl font-light uppercase tracking-widest leading-tight mt-2">
            That Speak
          </h5>

          <Link
            to="/create"
            className="inline-flex items-center justify-center mt-6
              px-5 py-1 rounded-2xl border border-current]
              text-black font-medium tracking-widest
              hover:bg-black hover:text-white
              transition-all duration-300"
          >
            WRITE IT
          </Link>
        </div>

        {/* FOREGROUND IMAGE */}
        {/* <div className="p-90 pb-125 z-10">
          <img
            src={books}
            alt="Poetry illustration"
            className="w-[642px] lg:w-[850px] drop-shadow-2xl"
          />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
