import { useState } from "react";
import API from "../services/api";

export default function PoemCard({ poem, onRefresh }) {
  const userId = localStorage.getItem("userId");
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(poem.content);
  const [commentText, setCommentText] = useState("");

  const likePoem = async () => {
    await API.post(`/poems/${poem._id}/like`);
    onRefresh();
  };

  const addComment = async (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    await API.post(`/poems/${poem._id}/comment`, { text: commentText });
    setCommentText("");
    onRefresh();
  };

  const updatePoem = async () => {
    await API.put(`/poems/${poem._id}`, { content });
    setIsEditing(false);
    onRefresh();
  };

  const deletePoem = async () => {
    if (confirm("Delete this poem?")) {
      await API.delete(`/poems/${poem._id}`);
      onRefresh();
    }
  };

  return (
    <div className="bg-[#FFF1CB] w-[280px] min-h-[350px] rounded-3xl shadow-xl border flex flex-col">

      {/* HEADER */}
      <div className="flex items-center gap-3 px-4 py-3 border-b">
        <div className="w-9 h-9 rounded-full bg-[#FFA239] text-white flex items-center justify-center font-bold">
          {poem.author?.email?.[0]?.toUpperCase() || "A"}
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold truncate">
            {poem.author?.email || "Anonymous"}
          </p>
        </div>

        {poem.author?._id === userId && !isEditing && (
          <div className="text-xs flex gap-2">
            <button onClick={() => setIsEditing(true)} className="text-blue-500">
              Edit
            </button>
            <button onClick={deletePoem} className="text-red-500">
              Del
            </button>
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="flex-1 px-4 py-3 overflow-y-auto text-sm text-gray-700">
        {isEditing ? (
          <>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full h-40 border rounded-xl p-2 text-sm"
            />
            <div className="flex gap-3 mt-3">
              <button
                onClick={updatePoem}
                className="bg-[#FFD8DF] text-white px-3 py-1 rounded-lg"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="text-gray-500"
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          <p className="whitespace-pre-line leading-relaxed">
            {poem.content}
          </p>
        )}
      </div>
        
      {/* ACTIONS */}
      <div className="flex justify-between">
      <div className="px-4 py-2 flex items-center">
        <button
          onClick={likePoem}
          className="text-lg hover:scale-110 transition"
        >
          ❤️
        </button>
        <span className="text-xs text-gray-500">
          {poem.likes?.length || 0} likes
        </span>
      </div>

      {/* COMMENTS */}
      <div className="px-4 text-xs text-gray-600">
        {poem.comments?.slice(0, 2).map((c, i) => (
          <p key={i}>
            <span className="font-semibold">
              {c.user?.email || "User"}:
            </span>{" "}
            {c.text}
          </p>
        ))}
      </div>
      </div>

      {/* ADD COMMENT */}
      <form onSubmit={addComment} className="border-t px-4 py-2 flex gap-2">
        <input
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Comment…"
          className="flex-1 text-xs outline-none"
        />
        <button type="submit" className="text-indigo-600 text-xs font-semibold">
          Post
        </button>
      </form>
    </div>
  );
}
