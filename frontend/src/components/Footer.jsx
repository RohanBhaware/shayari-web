export default function Footer() {
  return (
    <footer className="bg-[#000] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* BRAND */}
        <div>
          <h3 className="text-xl font-bold text-white mb-3">
            PoemVerse ✍️
          </h3>
          <p className="text-sm text-white leading-relaxed">
            A place to write, share, and feel poetry.
            Express your thoughts and connect through words.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="/explore" className="text-white transition">
                Explore
              </a>
            </li>
            <li>
              <a href="/create" className="text-white transition">
                Write a Poem
              </a>
            </li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h4 className="text-white font-semibold mb-3">Connect</h4>
          <div className="flex gap-4 text-lg">
            <a href="#" className="text-white transition">🐦</a>
            <a href="#" className="text-white transition">📘</a>
            <a href="#" className="text-white transition">📸</a>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700 text-center py-4 text-xs text-gray-400">
        © {new Date().getFullYear()} PoemVerse. All rights reserved.
      </div>
    </footer>
  );
}
