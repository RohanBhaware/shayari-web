import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";

export default function PublicProfile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [poems, setPoems] = useState([]);
  const [following, setFollowing] = useState(false);

  useEffect(() => {
    API.get(`/users/${id}`).then((res) => {
      setUser(res.data.user);
      setPoems(res.data.poems);
    });
  }, [id]);

  const toggleFollow = async () => {
    const res = await API.post(`/users/${id}/follow`);
    setFollowing(res.data.following);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">{user?.email}</h2>

        <button
          onClick={toggleFollow}
          className={`px-4 py-1 rounded text-white ${
            following ? "bg-gray-500" : "bg-indigo-600"
          }`}
        >
          {following ? "Unfollow" : "Follow"}
        </button>
      </div>

      <div className="space-y-6">
        {poems.map((poem) => (
          <div key={poem._id} className="bg-white p-5 rounded shadow">
            {poem.content}
          </div>
        ))}
      </div>
    </div>
  );
}
