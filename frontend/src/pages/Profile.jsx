import { useEffect, useState } from "react";
import API from "../services/api";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [poems, setPoems] = useState([]);

  useEffect(() => {
    API.get("/users/me").then((res) => {
      setUser(res.data.user);
      setPoems(res.data.poems);
    });
  }, []);

  return (
    <div className="max-w-3xl mx-auto pt-25">
      {/* USER INFO */}
      <div className="bg-[#e8c364] p-6 rounded-xl shadow mb-8">
        <h2 className="text-2xl font-bold">Profile</h2>
        <p className="text-gray-600 mt-2">
          {user?.email}
        </p>
      </div>

      {/* USER POEMS */}
      <h3 className="text-xl font-semibold mb-4">
        Your Poems
      </h3>

      {poems.length === 0 && (
        <p className="text-gray-500">You haven’t written any poems yet.</p>
      )}

      <div className="space-y-6 ">
        {poems.map((poem) => (
          <div 
            key={poem._id}
            className="bg-[#FFF1CB] p-6 rounded-xl shadow"
          >
            <p className="whitespace-pre-line text-gray-800">
              {poem.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
