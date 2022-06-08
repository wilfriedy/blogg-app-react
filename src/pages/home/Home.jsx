import { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/FetchHook";
import "./Home.css";

export default function Home() {
  const [posts, setPosts] = useState("http://localhost:3000/articles");
  const { data: articles } = useFetch(posts);
  return (
    <div className="postsbox">
      {articles &&
        articles.map((article) => (
          <div key={article.title} className="card">
            <h3>{article.title}</h3>
            <p>
              Author : <i>{article.author}</i>
            </p>
            <p>{article.summary.substring(0, 80)}...</p>
            <Link to={`/articles/${article.id}`}>Read more</Link>
          </div>
        ))}
    </div>
  );
}
