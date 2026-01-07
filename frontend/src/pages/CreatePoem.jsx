import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

export default function CreatePoem() {
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const submitPoem = async () => {
    if (!content.trim()) return;
    await API.post("/poems", { content });
    navigate("/");
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4 pt-10">
      <div className="w-full max-w-2xl bg-[#FFF1CB] rounded-2xl shadow-lg p-8">

        {/* TITLE */}
        <h1 className="text-2xl md:text-3xl font-light tracking-widest text-gray-800 text-center mb-6">
          Write Your Poem
        </h1>

        {/* TEXTAREA */}
        <textarea
          className="w-full min-h-[140px] p-5 border border-gray-300 rounded-xl
                     text-gray-800 text-sm leading-relaxed
                     focus:outline-none focus:ring-2 focus:ring-indigo-500
                     resize-none"
          placeholder="Let your thoughts flow..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        {/* ACTIONS */}
        <div className="flex items-center justify-between mt-6">
          <p className="text-xs text-gray-400">
            Write from the heart ✨
          </p>

          <button
            onClick={submitPoem}
            className="bg-indigo-600 text-white px-8 py-2 rounded-full
                       font-medium tracking-wide
                       hover:bg-indigo-500
                       transition-all duration-300"
          >
            Publish
          </button>
        </div>
      </div>
    </section>
  );
}
