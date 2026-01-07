import { Link } from "react-router-dom";
import home from "../assets/home-6.jpg";
// import books from "../assets/books.svg"; // Optional foreground image

const Hero = () => {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${home})` }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-12 lg:px-20">
        
        {/* TEXT */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-light uppercase tracking-widest leading-tight">
            Impressive Poems
          </h1>

          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-widest leading-tight mt-2">
            That Speak
          </h2>

          <Link
            to="/create"
            className="inline-block mt-6 px-6 py-2 sm:px-8 sm:py-3 rounded-2xl border border-current
              text-white font-medium tracking-widest
              hover:bg-white hover:text-black transition-all duration-300"
          >
            WRITE IT
          </Link>
        </div>

        {/* OPTIONAL FOREGROUND IMAGE */}
        {/* Uncomment if you want the image */}
        {/* 
        <div className="mt-8 md:mt-0 md:ml-8 flex justify-center md:justify-end">
          <img
            src={books}
            alt="Poetry illustration"
            className="w-64 sm:w-80 md:w-[500px] lg:w-[600px] drop-shadow-2xl"
          />
        </div>
        */}
      </div>
    </section>
  );
};

export default Hero;
