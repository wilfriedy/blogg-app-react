import { useEffect, useState } from "react";
import "./create.css";

export default function Create() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [summary, setsummary] = useState("");
  const [options, setOptions] = useState("");
  const postingData = (newdata) => {
    setOptions({
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newdata),
    });
  };

  useEffect(() => {
    const handlePostFetch = async (fetchOption) => {
      const res = fetch("http://localhost:3000/articles", { ...fetchOption });
    };
    handlePostFetch(options);
  }, [options]);
  // clear inputs field after submitting
  const clearAfterSubmit = () => {
    setAuthor("");
    setTitle("");
    setsummary("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postingData({ title, author, summary });
    clearAfterSubmit();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Title</span>
          <input
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          />
        </label>
        <label>
          <span>Author</span>
          <input
            type="text"
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
            value={author}
          />
        </label>
        <label>
          <span>summary</span>
          <textarea
            id="post-summary"
            cols="30"
            rows="10"
            onChange={(e) => {
              setsummary(e.target.value);
            }}
            value={summary}
          ></textarea>
        </label>
        <button>Post article</button>
      </form>
    </div>
  );
}
