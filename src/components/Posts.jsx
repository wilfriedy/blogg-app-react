import { Link } from "react-router-dom";
import "./Posts.css";
export default function Posts({ articles }) {
  return (
    <div>
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
    </div>
  );
}
