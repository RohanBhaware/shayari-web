import { useEffect, useState } from "react";
import API from "../services/api";
import PoemCard from "../components/PoemCard";
import Footer from "../components/Footer";
import Hero from "./HeroSection";

export default function Home() {
  const [poems, setPoems] = useState([]);

  const fetchPoems = async () => {
    const res = await API.get("/poems");
    setPoems(res.data);
  };

  useEffect(() => {
    fetchPoems();
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <Hero />

      {/* POEMS SECTION */}
      <section className="bg-[#fff] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 text-center">
            Latest Poems
          </h2>

          {/* 3 COLUMN VERTICAL GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
            {poems.map((poem) => (
              <PoemCard
                key={poem._id}
                poem={poem}
                onRefresh={fetchPoems}
              />
            ))}
          </div>
        </div>

      </section>
      <Footer/>
    </>
  );
}
